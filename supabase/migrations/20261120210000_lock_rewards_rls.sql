-- Segurança/LGPD: fecha a leitura pública das tabelas que guardam dados de clientes.
--
-- Antes: as políticas "Anyone can read ..." permitiam que qualquer pessoa com a chave
-- pública (que vai no bundle do site) baixasse TODOS os nomes, IDs de conta, valores
-- de transação e recompensas via REST, sem saber ID nenhum.
--
-- Depois: nenhuma leitura direta pelo papel anon. A consulta da página /recompensas passa
-- pela função get_rewards_summary, que só devolve dados quando ID + nome conferem, e
-- devolve a mesma resposta (null) para "ID inexistente" e "nome errado" (sem enumeração).
--
-- ORDEM DE DEPLOY: aplique esta migration ANTES de publicar o frontend novo.
-- Se o frontend novo for ao ar antes, a página de recompensas fica sem resposta até a migration rodar.

DROP POLICY IF EXISTS "Anyone can read users_rewards" ON public.users_rewards;
DROP POLICY IF EXISTS "Anyone can read transactions" ON public.transactions;
DROP POLICY IF EXISTS "Anyone can read rewards" ON public.rewards;

-- RLS continua ligado e sem política para anon/authenticated = acesso negado por padrão.
ALTER TABLE public.users_rewards ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.transactions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.rewards ENABLE ROW LEVEL SECURITY;

CREATE OR REPLACE FUNCTION public.get_rewards_summary(p_account_id TEXT, p_name TEXT)
RETURNS JSON
LANGUAGE plpgsql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_match BOOLEAN;
BEGIN
  IF p_account_id IS NULL OR p_name IS NULL
     OR length(p_account_id) > 50 OR length(p_name) > 101 THEN
    RETURN NULL;
  END IF;

  SELECT EXISTS (
    SELECT 1
    FROM public.users_rewards u
    WHERE u.account_id = trim(p_account_id)
      AND regexp_replace(lower(trim(u.name)), '\s+', ' ', 'g')
        = regexp_replace(lower(trim(p_name)), '\s+', ' ', 'g')
  ) INTO v_match;

  IF NOT v_match THEN
    RETURN NULL;
  END IF;

  RETURN json_build_object(
    'transactions', COALESCE((
      SELECT json_agg(json_build_object(
        'id', t.id, 'created_at', t.created_at, 'amount_cps', t.amount_cps,
        'method', t.method, 'month', t.month
      ) ORDER BY t.created_at DESC)
      FROM public.transactions t WHERE t.account_id = trim(p_account_id)
    ), '[]'::json),
    'rewards', COALESCE((
      SELECT json_agg(json_build_object(
        'id', r.id, 'created_at', r.created_at, 'reward_type', r.reward_type, 'value', r.value
      ) ORDER BY r.created_at DESC)
      FROM public.rewards r WHERE r.account_id = trim(p_account_id)
    ), '[]'::json)
  );
END;
$$;

REVOKE ALL ON FUNCTION public.get_rewards_summary(TEXT, TEXT) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.get_rewards_summary(TEXT, TEXT) TO anon, authenticated;
