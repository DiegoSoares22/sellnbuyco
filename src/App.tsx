import { lazy, Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { MotionConfig } from "framer-motion";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Header from "./components/Header";
import Rewards from "./pages/Rewards";
import Accounts from "./pages/Accounts";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";
import MusicPlayer from "./components/MusicPlayer";
import CookieConsent from "./components/CookieConsent";

// Páginas legais em chunks próprios: quem só olha o catálogo não baixa esses textos
const PrivacyPolicy = lazy(() => import("./pages/legal/PrivacyPolicy"));
const TermsOfUse = lazy(() => import("./pages/legal/TermsOfUse"));
const CookiePolicy = lazy(() => import("./pages/legal/CookiePolicy"));
import { LanguageProvider } from "./i18n";
import { AccountStoreProvider } from "./hooks/useAccountStore";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AccountStoreProvider>
          <LanguageProvider>
            <MotionConfig reducedMotion="user">
            <div className="app-root bg-background text-foreground min-h-screen">
              {/* Primeiro no DOM: quem navega por teclado ou leitor de tela encontra o aviso antes do resto */}
              <CookieConsent />
              <Header />
              {/* Alvo do link "Pular para o conteúdo" do Header */}
              <main id="conteudo" tabIndex={-1} className="outline-none">
              <Suspense fallback={<div className="min-h-screen" />}>
              <Routes>
                {/* PT — /accounts é agora a raiz */}
                <Route path="/" element={<Accounts />} />
                <Route path="/accounts" element={<Navigate to="/" replace />} />
                <Route path="/accounts/:accountId" element={<Accounts />} />
                <Route path="/recompensas" element={<Rewards />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/privacidade" element={<PrivacyPolicy />} />
                <Route path="/termos" element={<TermsOfUse />} />
                <Route path="/cookies" element={<CookiePolicy />} />
                {/* Legacy redirects */}
                <Route path="/shopping-mall" element={<Navigate to="/" replace />} />
                <Route path="/home" element={<Navigate to="/" replace />} />
                <Route path="/index" element={<Navigate to="/" replace />} />
                {/* EN mirror */}
                <Route path="/en" element={<Accounts />} />
                <Route path="/en/accounts" element={<Navigate to="/en" replace />} />
                <Route path="/en/accounts/:accountId" element={<Accounts />} />
                <Route path="/en/recompensas" element={<Rewards />} />
                <Route path="/en/admin" element={<Admin />} />
                <Route path="/en/privacidade" element={<PrivacyPolicy />} />
                <Route path="/en/termos" element={<TermsOfUse />} />
                <Route path="/en/cookies" element={<CookiePolicy />} />
                <Route path="/en/shopping-mall" element={<Navigate to="/en" replace />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
              </Suspense>
              </main>
              <MusicPlayer />
            </div>
            </MotionConfig>
          </LanguageProvider>
        </AccountStoreProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
