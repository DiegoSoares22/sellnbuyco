import { Link } from "react-router-dom";
import { MessageCircle, SlidersHorizontal } from "lucide-react";
import { useI18n } from "@/i18n";
import { LegalPage, LegalTable, OperatorField, Pending, type LegalSection } from "@/components/legal/LegalPage";
import { OPERATOR } from "@/lib/legal";
import { buildWa } from "@/lib/whatsapp";
import { openCookiePreferences } from "@/lib/consent";

/** Pedidos de titular (LGPD, art. 18): a mensagem não leva dado pessoal; quem pede completa na conversa. */
const REQUESTS = [
  { label: "Ver quais dados vocês têm sobre mim", topic: "confirmação e acesso aos meus dados" },
  { label: "Corrigir meus dados", topic: "correção de dados incompletos, inexatos ou desatualizados" },
  { label: "Apagar meus dados", topic: "eliminação ou anonimização dos meus dados" },
  { label: "Saber com quem foram compartilhados", topic: "informação sobre com quem meus dados foram compartilhados" },
  { label: "Receber meus dados (portabilidade)", topic: "portabilidade dos meus dados" },
  { label: "Me opor a um uso dos meus dados", topic: "oposição a um tratamento dos meus dados" },
];

const waRequest = (topic: string) =>
  buildWa(`Olá! Quero fazer um pedido sobre meus dados pessoais (LGPD): ${topic}. ID da minha conta no jogo: `);

export default function PrivacyPolicy() {
  const { withLang } = useI18n();

  const sections: LegalSection[] = [
    {
      id: "resumo",
      title: "Resumo",
      body: (
        <ul>
          <li>O site não tem cadastro, login nem senha. Você navega sem se identificar.</li>
          <li>
            Não usamos Google Analytics, pixels de anúncio, remarketing nem mapas de calor. Não vendemos dados.
          </li>
          <li>
            Só tratamos dados que identificam você em dois momentos: quando você consulta{" "}
            <Link to={withLang("/recompensas")} className="link-light">
              Recompensas
            </Link>{" "}
            (ID da conta no jogo e nome) e quando fala com a gente pelo WhatsApp.
          </li>
          <li>A música de fundo vem do YouTube e só toca se você permitir.</li>
          <li>Você pode pedir acesso, correção ou exclusão dos seus dados pelo canal da seção 10.</li>
        </ul>
      ),
    },
    {
      id: "responsavel",
      title: "Quem é o responsável",
      body: (
        <>
          <p>
            O controlador dos dados (LGPD, art. 5º, VI) é quem opera o SellNBuyCO:{" "}
            <strong>
              <OperatorField value={OPERATOR.legalName} missing="nome completo ou razão social" />
            </strong>
            , CPF/CNPJ <OperatorField value={OPERATOR.taxId} missing="CPF ou CNPJ" />, com endereço em{" "}
            <OperatorField value={OPERATOR.address} missing="endereço para correspondência" />.
          </p>
          <p>
            Canal de privacidade: WhatsApp <strong>{OPERATOR.whatsapp}</strong> e e-mail{" "}
            <OperatorField value={OPERATOR.email} missing="e-mail de contato" />.
          </p>
          <p>
            Encarregado pelo tratamento de dados (art. 41):{" "}
            <Pending>
              nome do encarregado, ou a dispensa como agente de tratamento de pequeno porte (Resolução CD/ANPD nº
              2/2022, art. 11)
            </Pending>
            . Pedidos de privacidade vão pelo canal acima.
          </p>
        </>
      ),
    },
    {
      id: "dados",
      title: "Quais dados tratamos e por quê",
      body: (
        <>
          <LegalTable
            caption="Dados tratados, finalidade e base legal"
            head={["Quando", "Quais dados", "Para quê", "Base legal (LGPD)"]}
            rows={[
              [
                "Ao abrir qualquer página",
                "Endereço IP, navegador e sistema, página pedida, data e hora, registrados pelo servidor de hospedagem",
                "Entregar o site, manter a segurança e investigar abuso ou ataque",
                "Legítimo interesse (art. 7º, IX)",
              ],
              [
                "Ao carregar a fonte do site",
                "Endereço IP e navegador, enviados ao Google Fonts",
                "Mostrar a tipografia do site",
                "Legítimo interesse (art. 7º, IX)",
              ],
              [
                "Ao consultar Recompensas",
                "ID da conta no jogo, nome e sobrenome que você digita. No nosso registro: ID, nome, valores comprados em CPs, forma de pagamento (Pix ou cartão), mês da compra e recompensas recebidas",
                "Confirmar que quem consulta é o cliente e mostrar o histórico de compras e recompensas",
                "Execução de contrato (art. 7º, V)",
              ],
              [
                "Ao negociar ou comprar pelo WhatsApp",
                "Telefone, nome do perfil, mensagens, comprovantes de pagamento e o que for preciso para a entrega (ID da conta no jogo e, na venda de uma conta, os dados de acesso dela)",
                "Atender, negociar, receber o pagamento, entregar e dar suporte depois da venda",
                "Procedimentos preliminares e execução de contrato (art. 7º, V); obrigação legal (art. 7º, II) para o que a lei manda guardar",
              ],
              [
                "Se você tocar a música (opcional)",
                "Endereço IP, navegador e identificadores gravados pelo YouTube",
                "Tocar a música pelo player do YouTube",
                "Consentimento (art. 7º, I), que você pode retirar quando quiser",
              ],
            ]}
          />
          <h3>O que não fazemos</h3>
          <ul>
            <li>Não pedimos dados sensíveis (art. 5º, II), como saúde, religião ou biometria.</li>
            <li>O site não recebe número de cartão nem dados bancários: o pagamento é feito no seu banco ou meio de pagamento.</li>
            <li>Não tomamos decisões automatizadas sobre você (art. 20).</li>
            <li>Não montamos perfil de navegação nem compartilhamos dados para publicidade.</li>
          </ul>
          <p>
            Quando você clica em "Tenho interesse" ou "Fazer uma oferta", o site só abre o WhatsApp com uma mensagem
            pronta, com o nome da conta, que você vê antes de enviar. Nada é enviado sem você apertar enviar.
          </p>
        </>
      ),
    },
    {
      id: "navegador",
      title: "O que fica no seu navegador",
      body: (
        <>
          <p>
            Guardamos no seu navegador a sua escolha sobre cookies e a sua lista de interesses (o coração nas
            contas). Essas informações não saem do seu aparelho e não chegam até nós. O YouTube só grava algo se você
            permitir a música.
          </p>
          <p>
            A lista completa, com nomes e prazos, está na{" "}
            <Link to={withLang("/cookies")} className="link-light">
              Política de Cookies
            </Link>
            .
          </p>
        </>
      ),
    },
    {
      id: "compartilhamento",
      title: "Com quem compartilhamos",
      body: (
        <>
          <p>Usamos estes fornecedores para o site funcionar. Eles recebem só o necessário para o serviço deles:</p>
          <ul>
            <li>
              <strong>Vercel Inc.</strong> (EUA): hospedagem do site. Recebe os registros de acesso de toda visita.
            </li>
            <li>
              <strong>Supabase Inc.</strong>: banco de dados das recompensas. Região do servidor:{" "}
              <Pending>região do projeto no painel do Supabase</Pending>.
            </li>
            <li>
              <strong>Google LLC</strong> (EUA): Google Fonts, em toda visita; YouTube, só se você permitir a música.
            </li>
            <li>
              <strong>WhatsApp / Meta</strong>: quando você escolhe conversar com a gente. O WhatsApp trata os dados da
              conversa conforme a política de privacidade dele.
            </li>
          </ul>
          <p>
            Também podemos compartilhar dados com autoridades quando a lei ou uma ordem judicial exigir, e para
            defender direitos em processo (art. 7º, VI).
          </p>
        </>
      ),
    },
    {
      id: "internacional",
      title: "Transferência para outros países",
      body: (
        <p>
          Parte dos fornecedores acima guarda dados fora do Brasil, principalmente nos EUA. Essas transferências seguem
          o art. 33 da LGPD. Mecanismo usado por cada fornecedor:{" "}
          <Pending>confirmar com Vercel, Supabase e Google (Resolução CD/ANPD nº 19/2024)</Pending>.
        </p>
      ),
    },
    {
      id: "prazos",
      title: "Por quanto tempo guardamos",
      body: (
        <>
          <LegalTable
            caption="Prazos de guarda dos dados"
            head={["Dado", "Prazo", "Por quê"]}
            rows={[
              ["Registros de acesso da hospedagem", "O prazo de retenção da Vercel", "Segurança e investigação de abuso"],
              [
                "Registro de compras e recompensas",
                "Enquanto houver o programa de recompensas e até 5 anos depois da sua última compra",
                "Mostrar seu histórico e comprovar a venda em caso de reclamação (CDC, art. 27)",
              ],
              [
                "Conversas e comprovantes de uma venda",
                "Até 5 anos depois da venda",
                "Comprovar o negócio em caso de reclamação (CDC, art. 27)",
              ],
              ["Conversas que não viraram venda", "Até 6 meses depois do último contato", "Retomar o atendimento"],
              [
                "Dados de acesso de uma conta negociada",
                "Só durante a transferência",
                "Entregar a conta; depois da entrega, quem recebe deve trocar senha e e-mail",
              ],
              ["O que fica no seu navegador", "Até você apagar (a escolha de cookies vence em 12 meses)", "Lembrar suas escolhas"],
            ]}
          />
          <p>
            Passado o prazo, apagamos os dados ou os anonimizamos, isto é, tiramos o que liga o dado a você (art. 16).
          </p>
        </>
      ),
    },
    {
      id: "seguranca",
      title: "Como protegemos os dados",
      body: (
        <>
          <ul>
            <li>Todo acesso ao site é por conexão criptografada (HTTPS).</li>
            <li>
              O registro de compras e recompensas não pode ser lido direto pelo site. A consulta só devolve dados quando o
              ID e o nome conferem, e dá a mesma resposta para ID inexistente e nome errado, para ninguém descobrir quem é
              cliente.
            </li>
            <li>O site não tem área de login e não guarda senhas.</li>
            <li>O acesso administrativo ao banco de dados é restrito ao responsável.</li>
          </ul>
          <p>
            Nenhum sistema é totalmente imune a falhas. Se acontecer um incidente de segurança que possa causar risco ou
            dano relevante, avisamos a ANPD e as pessoas afetadas, como manda o art. 48 da LGPD e a Resolução CD/ANPD nº
            15/2024.
          </p>
        </>
      ),
    },
    {
      id: "direitos",
      title: "Seus direitos",
      body: (
        <>
          <p>Pela LGPD (art. 18), você pode pedir:</p>
          <ul>
            <li>confirmação de que tratamos dados seus e acesso a eles;</li>
            <li>correção de dados incompletos, errados ou desatualizados;</li>
            <li>anonimização, bloqueio ou eliminação de dados desnecessários, excessivos ou tratados fora da lei;</li>
            <li>portabilidade dos dados para outro fornecedor;</li>
            <li>eliminação dos dados tratados com o seu consentimento;</li>
            <li>informação sobre com quem compartilhamos seus dados;</li>
            <li>informação sobre a possibilidade de não dar consentimento e o que acontece nesse caso;</li>
            <li>revogação do consentimento;</li>
            <li>oposição a um tratamento feito sem consentimento que não cumpra a lei (art. 18, § 2º).</li>
          </ul>
          <p>
            Você também pode reclamar na Autoridade Nacional de Proteção de Dados (
            <a href="https://www.gov.br/anpd" target="_blank" rel="noopener noreferrer" className="link-light">
              gov.br/anpd
            </a>
            ).
          </p>
        </>
      ),
    },
    {
      id: "pedidos",
      title: "Como fazer um pedido",
      body: (
        <>
          <p>
            Escolha o pedido abaixo. Abrimos o WhatsApp com a mensagem pronta; você só completa com o ID da sua conta no
            jogo. Para proteger seus dados, confirmamos que o pedido é seu com o ID e o nome usados nas compras, do mesmo
            jeito da página Recompensas.
          </p>
          <ul className="!list-none !space-y-0 !pl-0 flex flex-wrap gap-xs">
            {REQUESTS.map((r) => (
              <li key={r.topic}>
                <a
                  href={waRequest(r.topic)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-md btn-secondary-light h-auto min-h-10 whitespace-normal py-xs text-left"
                >
                  <MessageCircle size={16} aria-hidden="true" />
                  {r.label}
                </a>
              </li>
            ))}
            <li>
              <button type="button" onClick={openCookiePreferences} className="btn btn-md btn-secondary-light">
                <SlidersHorizontal size={16} aria-hidden="true" />
                Retirar consentimento de cookies
              </button>
            </li>
          </ul>
          <p>
            Prazos (art. 19): a confirmação e o acesso em formato simplificado saem na hora, na conversa; a declaração
            completa, em até 15 dias. Se você já tem a lista de compras, a página Recompensas exporta o histórico em PDF e
            Excel.
          </p>
          <p>
            Alguns dados não podem ser apagados na hora: os que a lei manda guardar ou que servem para defender direitos
            numa reclamação ficam guardados pelo prazo da seção 7 (art. 16). Nesse caso, explicamos o motivo.
          </p>
        </>
      ),
    },
    {
      id: "menores",
      title: "Menores de idade",
      body: (
        <p>
          O site não é feito para menores de 18 anos, e as compras devem ser feitas por maiores de idade ou com o
          responsável legal. Se soubermos que tratamos dados de uma criança ou adolescente sem a autorização do
          responsável, apagamos esses dados (art. 14).
        </p>
      ),
    },
    {
      id: "mudancas",
      title: "Mudanças nesta política",
      body: (
        <p>
          Quando esta política mudar, atualizamos a data no topo. Se a mudança envolver um novo uso que dependa de
          consentimento, perguntamos de novo antes.
        </p>
      ),
    },
  ];

  return (
    <LegalPage
      title="Política de Privacidade"
      titleEn="Privacy Policy"
      intro={
        <p>
          Como o SellNBuyCO trata dados pessoais, com base na Lei Geral de Proteção de Dados (Lei nº 13.709/2018). Em
          linguagem direta: o que coletamos, por quê, com quem compartilhamos e como você pede o que é seu.
        </p>
      }
      summaryEn={[
        "No sign-up, login or passwords on the site. No analytics, ad pixels or remarketing. We don't sell data.",
        "We only handle identifying data when you check Rewards (game account ID and name) or talk to us on WhatsApp.",
        "The background music comes from YouTube and only plays if you allow it.",
        "To access, correct or delete your data, use the WhatsApp requests in section 10.",
      ]}
      sections={sections}
    />
  );
}
