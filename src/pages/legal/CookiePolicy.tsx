import { Link } from "react-router-dom";
import { SlidersHorizontal } from "lucide-react";
import { useI18n } from "@/i18n";
import { LegalPage, LegalTable, type LegalSection } from "@/components/legal/LegalPage";
import { CONSENT_STORAGE_KEY, openCookiePreferences } from "@/lib/consent";

export default function CookiePolicy() {
  const { withLang } = useI18n();

  const preferencesButton = (
    <button type="button" onClick={openCookiePreferences} className="btn btn-md btn-primary">
      <SlidersHorizontal size={16} aria-hidden="true" />
      Preferências de cookies
    </button>
  );

  const sections: LegalSection[] = [
    {
      id: "o-que-sao",
      title: "O que são cookies",
      body: (
        <p>
          Cookies são pequenos arquivos que um site grava no seu navegador. Existem tecnologias parecidas, como o
          armazenamento local (localStorage), que guardam informações do mesmo jeito. Esta política fala de todas elas.
        </p>
      ),
    },
    {
      id: "lista",
      title: "O que o site grava",
      body: (
        <>
          <LegalTable
            caption="Cookies e armazenamento usados pelo site"
            head={["Nome", "Categoria", "Quem grava", "Para quê", "Duração"]}
            rows={[
              [
                <code key="c">{CONSENT_STORAGE_KEY}</code>,
                "Essencial",
                "SellNBuyCO (armazenamento local)",
                "Guardar a sua escolha sobre cookies",
                "12 meses",
              ],
              [
                <code key="f">sellnbuy_favs</code>,
                "Essencial",
                "SellNBuyCO (armazenamento local)",
                "Guardar a lista de interesses que você monta ao tocar no coração de uma conta",
                "Até você tirar as contas da lista ou limpar o navegador",
              ],
              [
                "Cookies e armazenamento do YouTube (por exemplo, yt-remote-device-id)",
                "Marketing e conteúdo de terceiros",
                "Google, pelo domínio youtube-nocookie.com",
                "Tocar a música de fundo. O Google também usa esses dados para estatísticas e publicidade",
                "Definida pelo Google; só começa se você permitir e tocar a música",
              ],
            ]}
          />
          <p>
            Nenhum desses dados é enviado para nós. A escolha de cookies e a lista de interesses ficam só no seu
            aparelho.
          </p>
        </>
      ),
    },
    {
      id: "categorias",
      title: "Categorias",
      body: (
        <>
          <p>
            <strong>Essenciais.</strong> Fazem o site funcionar e guardam o que você mesmo pediu para guardar. Não
            dependem de consentimento e não podem ser desligados pelo painel, mas você pode apagá-los no navegador.
          </p>
          <p>
            <strong>Preferências.</strong> Não usamos. O idioma vai no endereço da página (/en para inglês), então nada é
            gravado.
          </p>
          <p>
            <strong>Analíticos.</strong> Não usamos. O site não tem Google Analytics, Vercel Analytics, mapas de calor
            nem ferramenta parecida.
          </p>
          <p>
            <strong>Marketing e conteúdo de terceiros.</strong> Só o player do YouTube da música de fundo. Fica
            desligado até você permitir, no aviso de cookies ou no próprio botão da música.
          </p>
        </>
      ),
    },
    {
      id: "terceiros",
      title: "Terceiros que recebem dados sem gravar cookies",
      body: (
        <ul>
          <li>
            <strong>Google Fonts:</strong> a fonte do site é carregada dos servidores do Google, que recebem o seu
            endereço IP e o tipo de navegador. Não grava cookies.
          </li>
          <li>
            <strong>Vercel:</strong> a hospedagem registra os acessos (IP, página e horário) para entregar o site e manter
            a segurança. Não grava cookies.
          </li>
          <li>
            <strong>Supabase:</strong> recebe o ID e o nome digitados na consulta de Recompensas. Como o site não tem
            login, não grava cookie de sessão.
          </li>
        </ul>
      ),
    },
    {
      id: "mudar",
      title: "Como mudar sua escolha",
      body: (
        <>
          <p>Você pode mudar a qualquer momento, aqui ou pelo link "Preferências de cookies" no rodapé:</p>
          <div>{preferencesButton}</div>
          <p>
            Ao retirar a permissão, a música para e o player do YouTube sai da página. O que o YouTube já tiver gravado
            continua no navegador até você apagar os dados dos sites youtube-nocookie.com e youtube.com nas
            configurações do navegador.
          </p>
        </>
      ),
    },
    {
      id: "nova-pergunta",
      title: "Quando perguntamos de novo",
      body: (
        <p>
          Sua escolha vale por 12 meses. Perguntamos de novo antes disso se passarmos a usar uma ferramenta nova numa
          categoria opcional. Mais detalhes sobre dados pessoais na{" "}
          <Link to={withLang("/privacidade")} className="link-light">
            Política de Privacidade
          </Link>
          .
        </p>
      ),
    },
  ];

  return (
    <LegalPage
      title="Política de Cookies"
      titleEn="Cookie Policy"
      intro={
        <p>
          O que o SellNBuyCO grava no seu navegador, para quê e como mudar a sua escolha. Resumo: só o essencial, e a
          música do YouTube se você permitir.
        </p>
      }
      summaryEn={[
        "Essential storage only: your cookie choice and your saved interests list, both kept in your browser.",
        "No analytics, preference or advertising cookies of our own.",
        "The YouTube music player is the only optional item and stays off until you allow it.",
        "Change your choice anytime with the Cookie Preferences link in the footer.",
      ]}
      sections={sections}
    />
  );
}
