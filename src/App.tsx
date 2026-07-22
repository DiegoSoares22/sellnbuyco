import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Header from "./components/Header";
import Rewards from "./pages/Rewards";
import Accounts from "./pages/Accounts";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";
import MusicPlayer from "./components/MusicPlayer";
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
            <div className="app-root bg-background text-foreground min-h-screen">
              <Header />
              <Routes>
                {/* PT — /accounts é agora a raiz */}
                <Route path="/" element={<Accounts />} />
                <Route path="/accounts" element={<Navigate to="/" replace />} />
                <Route path="/accounts/:accountId" element={<Accounts />} />
                <Route path="/recompensas" element={<Rewards />} />
                <Route path="/admin" element={<Admin />} />
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
                <Route path="/en/shopping-mall" element={<Navigate to="/en" replace />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
              <MusicPlayer />
            </div>
          </LanguageProvider>
        </AccountStoreProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
