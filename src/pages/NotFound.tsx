import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useI18n } from "@/i18n";
import { Footer } from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();
  const { lang, withLang } = useI18n();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div>
      <section className="band-dark">
        <div className="page-container flex min-h-[calc(100svh-theme(spacing.nav-height))] flex-col items-start justify-center py-section-mobile md:py-section-tablet lg:py-section">
          <p className="tabular text-caption-md text-mute-dark">404</p>
          <h1 className="mt-xs max-w-[18ch] text-display-xl text-on-dark">
            {lang === "pt" ? "Esta página não existe" : "This Page Doesn't Exist"}
          </h1>
          <p className="mt-md max-w-[46ch] text-body-md text-body-dark">
            {lang === "pt"
              ? "O endereço pode estar incompleto ou a página saiu do ar. As contas à venda continuam na página inicial."
              : "The address may be incomplete or the page was removed. The accounts for sale are still on the home page."}
          </p>
          <Link to={withLang("/")} className="btn btn-primary mt-xl">
            {lang === "pt" ? "Ver contas à venda" : "See Accounts for Sale"}
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default NotFound;
