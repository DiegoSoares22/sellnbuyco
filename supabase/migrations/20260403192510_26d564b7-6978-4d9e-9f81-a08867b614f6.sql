
-- Users rewards
CREATE TABLE public.users_rewards (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  account_id TEXT NOT NULL,
  name TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.users_rewards ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read users_rewards" ON public.users_rewards FOR SELECT USING (true);

-- Transactions
CREATE TABLE public.transactions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  account_id TEXT NOT NULL,
  amount_cps NUMERIC NOT NULL,
  method TEXT NOT NULL DEFAULT 'Pix',
  month TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.transactions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read transactions" ON public.transactions FOR SELECT USING (true);

-- Rewards
CREATE TABLE public.rewards (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  account_id TEXT NOT NULL,
  reward_type TEXT NOT NULL,
  value TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.rewards ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read rewards" ON public.rewards FOR SELECT USING (true);

-- Accounts marketplace
CREATE TABLE public.accounts_marketplace (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  titulo TEXT NOT NULL,
  descricao TEXT,
  imagem_url TEXT,
  preco_1 TEXT,
  preco_2 TEXT,
  destaque BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.accounts_marketplace ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read marketplace" ON public.accounts_marketplace FOR SELECT USING (true);
