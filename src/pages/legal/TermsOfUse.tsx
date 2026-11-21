import { Link } from "react-router-dom";
import { useI18n } from "@/i18n";
import { LegalPage, OperatorField, Pending, type LegalSection } from "@/components/legal/LegalPage";
import { OPERATOR } from "@/lib/legal";

export default function TermsOfUse() {
  const { withLang } = useI18n();

  const sections: LegalSection[] = [
    {
      id: "aceitacao",
      title: "Aceitação e quem somos",
      body: (
        <>
          <p>
            Estes termos valem para quem usa o site SellNBuyCO e para quem negocia com a gente. Ao usar o site ou fechar
            uma compra, você concorda com eles. Se não concordar, não use o site.
          </p>
          <p>
            O SellNBuyCO é operado por{" "}
            <strong>
              <OperatorField value={OPERATOR.legalName} missing="nome completo ou razão social" />
            </strong>
            , CPF/CNPJ <OperatorField value={OPERATOR.taxId} missing="CPF ou CNPJ" />, endereço{" "}
            <OperatorField value={OPERATOR.address} missing="endereço para correspondência" />, e-mail{" "}
            <OperatorField value={OPERATOR.email} missing="e-mail de contato" /> e WhatsApp{" "}
            <strong>{OPERATOR.whatsapp}</strong>.
          </p>
        </>
      ),
    },
    {
      id: "servico",
      title: "O que é o SellNBuyCO",
      body: (
        <>
          <p>
            O SellNBuyCO é uma vitrine de contas de Conquer Online. Cada anúncio mostra prints da própria conta e os
            atributos dela. Também negociamos moedas do jogo (como CPs e Silver) e itens pelo WhatsApp.
          </p>
          <ul>
            <li>O site não tem cadastro nem login.</li>
            <li>Não há pagamento dentro do site: preço, pagamento e entrega são combinados pelo WhatsApp.</li>
            <li>Visitantes não publicam anúncios. Todos os anúncios são publicados pelo SellNBuyCO.</li>
          </ul>
          <p>
            Origem das contas anunciadas:{" "}
            <Pending>
              informar se as contas são do próprio SellNBuyCO ou de terceiros que pediram a intermediação, e, nesse
              caso, como o vendedor original participa e quem responde por quê
            </Pending>
            .
          </p>
        </>
      ),
    },
    {
      id: "independencia",
      title: "Independência e marcas do jogo",
      body: (
        <>
          <p>
            O SellNBuyCO é independente. Não é afiliado, patrocinado, autorizado nem endossado pela desenvolvedora ou pela
            publicadora de Conquer Online (TQ Digital Entertainment, do grupo NetDragon).
          </p>
          <p>
            "Conquer Online", nomes, personagens, imagens e demais elementos do jogo pertencem aos seus titulares. Os
            prints servem só para mostrar a conta que está à venda.
          </p>
        </>
      ),
    },
    {
      id: "riscos",
      title: "Riscos ligados ao jogo",
      body: (
        <>
          <p>Leia isto antes de comprar:</p>
          <ul>
            <li>
              Os termos oficiais do jogo podem proibir ou restringir a venda e a transferência de contas, moedas e itens
              fora do jogo. Leia os termos da desenvolvedora antes de negociar.
            </li>
            <li>
              A desenvolvedora pode suspender ou banir uma conta, inclusive uma conta negociada. Não controlamos as
              decisões dela.
            </li>
            <li>
              O histórico de punições que conhecemos (por exemplo, "0 Jail") aparece no anúncio. Se souber de algo que
              não está no anúncio, a gente conta antes da venda.
            </li>
          </ul>
          <p>
            Informar esses riscos não tira os seus direitos de consumidor: se a conta não for o que foi anunciado, a
            seção 6 explica o que fazer.
          </p>
        </>
      ),
    },
    {
      id: "compra",
      title: "Anúncios, preços e como funciona a compra",
      body: (
        <>
          <p>
            O preço anunciado, em CPs ou "A combinar", vale para a negociação (CDC, art. 30). Cada conta é única, então a
            disponibilidade é confirmada na conversa antes do pagamento. Se encontrarmos um erro evidente no anúncio,
            avisamos antes de você pagar.
          </p>
          <ol>
            <li>Você escolhe a conta e chama a gente pelo WhatsApp oficial.</li>
            <li>Confirmamos a disponibilidade, o preço e a forma de pagamento.</li>
            <li>
              Você paga por Pix ou cartão, como combinado na conversa. Os pagamentos são recebidos só em nome de{" "}
              <Pending>titular da conta que recebe os pagamentos</Pending>. Não pague para outro nome.
            </li>
            <li>
              Entregamos os dados de acesso da conta (ou as moedas e itens no ID informado) em até{" "}
              <Pending>prazo de entrega</Pending>.
            </li>
            <li>
              Ao receber uma conta, troque na hora a senha, o e-mail vinculado e as perguntas de segurança, e ative toda
              proteção extra que o jogo oferecer.
            </li>
          </ol>
        </>
      ),
    },
    {
      id: "garantia",
      title: "Arrependimento, garantia e problemas na entrega",
      body: (
        <>
          <p>
            <strong>Arrependimento:</strong> como a compra é feita a distância, você pode desistir em até 7 dias a
            partir da compra ou da entrega (CDC, art. 49), pelo mesmo WhatsApp. Se a conta já tiver sido entregue, a
            desistência inclui devolver o acesso a ela no estado em que foi recebida. O reembolso é feito pelo mesmo meio
            de pagamento.
          </p>
          <p>
            <strong>Problema com a conta:</strong> se ela não corresponder ao anúncio ou for recuperada pelo dono
            anterior, avise a gente. Isso é tratado como problema do produto, com os direitos e prazos do Código de
            Defesa do Consumidor (arts. 18 e 26).
          </p>
          <p>
            <strong>Garantia oferecida:</strong>{" "}
            <Pending>
              descrever o que a "Transferência garantida" da página da conta cobre, por quanto tempo e como acionar
            </Pending>
            .
          </p>
        </>
      ),
    },
    {
      id: "golpes",
      title: "Canal oficial e golpes",
      body: (
        <ul>
          <li>
            O único WhatsApp do SellNBuyCO é <strong>{OPERATOR.whatsapp}</strong>. Desconfie de qualquer outro número,
            perfil ou link que use o nosso nome.
          </li>
          <li>Nunca pedimos pagamento por outro número, nem para um nome diferente do informado na seção 5.</li>
          <li>Para entregar moedas ou itens, só precisamos do ID da sua conta no jogo. Nunca pedimos a sua senha.</li>
          <li>Se alguém se passar pelo SellNBuyCO, avise a gente pelo WhatsApp oficial.</li>
        </ul>
      ),
    },
    {
      id: "condutas",
      title: "O que não é permitido",
      body: (
        <>
          <p>Ao usar o site ou negociar com a gente, não é permitido:</p>
          <ul>
            <li>mandar comprovante falso, usar pagamento de terceiros sem autorização ou contestar uma compra recebida (chargeback) de má-fé;</li>
            <li>oferecer ou pedir a venda de contas roubadas, obtidas por fraude ou de outra pessoa sem autorização;</li>
            <li>se passar pelo SellNBuyCO ou por outra pessoa;</li>
            <li>usar a negociação para lavagem de dinheiro ou qualquer outro crime;</li>
            <li>tentar invadir o site ou o banco de dados, explorar falhas, sobrecarregar o serviço ou copiar o catálogo em massa com robôs;</li>
            <li>ofender, ameaçar ou assediar quem atende.</li>
          </ul>
          <p>
            Em caso de fraude ou tentativa de fraude, podemos recusar ou cancelar a negociação, explicando o motivo, e
            levar o caso às autoridades.
          </p>
          <p>
            Encontrou uma falha de segurança? Conte pelo WhatsApp oficial sem explorá-la nem acessar dados de outras
            pessoas. Relatos de boa-fé são bem-vindos.
          </p>
        </>
      ),
    },
    {
      id: "denuncias",
      title: "Denúncias sobre anúncios",
      body: (
        <p>
          Se você acha que um anúncio tem informação errada, mostra uma conta que é sua ou viola direitos de alguém, fale
          com a gente pelo WhatsApp oficial com o link do anúncio. Analisamos o caso, respondemos e, quando for o caso,
          tiramos o anúncio do ar.
        </p>
      ),
    },
    {
      id: "propriedade",
      title: "Propriedade intelectual",
      body: (
        <>
          <p>
            O nome SellNBuyCO, o logotipo, os textos e o layout do site são do SellNBuyCO. Não copie nem reutilize sem
            autorização. As marcas e imagens do jogo pertencem aos seus titulares (seção 3).
          </p>
          <p>
            A música de fundo é tocada pelo player do YouTube e pertence aos titulares dos direitos. Se você é titular de
            algum conteúdo do site e quer pedir a retirada, fale com a gente pelo WhatsApp oficial.
          </p>
        </>
      ),
    },
    {
      id: "responsabilidade",
      title: "Responsabilidade",
      body: (
        <>
          <p>
            Respondemos pelas informações dos anúncios e pela entrega do que foi vendido. Nada nestes termos limita
            direitos que a lei garante ao consumidor.
          </p>
          <p>
            O site pode ficar fora do ar por manutenção ou falha de fornecedores. O WhatsApp e o YouTube são serviços de
            terceiros e seguem os termos deles.
          </p>
        </>
      ),
    },
    {
      id: "privacidade",
      title: "Privacidade",
      body: (
        <p>
          Como tratamos dados pessoais está na{" "}
          <Link to={withLang("/privacidade")} className="link-light">
            Política de Privacidade
          </Link>{" "}
          e na{" "}
          <Link to={withLang("/cookies")} className="link-light">
            Política de Cookies
          </Link>
          .
        </p>
      ),
    },
    {
      id: "mudancas",
      title: "Mudanças nestes termos",
      body: (
        <p>
          Quando estes termos mudarem, atualizamos a data no topo. Uma compra já fechada segue os termos que valiam no dia
          dela.
        </p>
      ),
    },
    {
      id: "foro",
      title: "Lei aplicável e foro",
      body: (
        <p>
          Estes termos seguem a lei brasileira. Você pode entrar com ação no foro do seu domicílio (CDC, art. 101, I) e
          também reclamar no Procon ou em{" "}
          <a href="https://www.consumidor.gov.br" target="_blank" rel="noopener noreferrer" className="link-light">
            consumidor.gov.br
          </a>
          . Antes disso, fale com a gente: a maioria dos problemas se resolve na conversa.
        </p>
      ),
    },
  ];

  return (
    <LegalPage
      title="Termos de Uso"
      titleEn="Terms of Use"
      intro={
        <p>
          As regras para usar o site e negociar com o SellNBuyCO: como funciona a compra, os riscos ligados ao jogo, o que
          não é permitido e os seus direitos de consumidor.
        </p>
      }
      summaryEn={[
        "SellNBuyCO is an independent Conquer Online account catalog, not affiliated with the game's developer or publisher.",
        "There is no sign-up or on-site payment: price, payment and delivery are agreed on our official WhatsApp only.",
        "The game's own terms may restrict trading accounts, currency and items, and the developer may suspend accounts.",
        "Brazilian consumer law applies, including the 7-day withdrawal right for distance purchases.",
      ]}
      sections={sections}
    />
  );
}
