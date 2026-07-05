import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Header from "./components/Header";
import Index from "./pages/Index";
import Rewards from "./pages/Rewards";
import Accounts from "./pages/Accounts";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";
import MusicPlayer from "./components/MusicPlayer";
import { LanguageProvider } from "./i18n";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <LanguageProvider>
          <div className="dark app-root">
            <Header />
            <Routes>
              {/* PT (default) */}
              <Route path="/" element={<Index />} />
              <Route path="/recompensas" element={<Rewards />} />
              <Route path="/accounts" element={<Accounts />} />
              <Route path="/accounts/:accountId" element={<Accounts />} />
              <Route path="/admin" element={<Admin />} />
              {/* EN mirror */}
              <Route path="/en" element={<Index />} />
              <Route path="/en/recompensas" element={<Rewards />} />
              <Route path="/en/accounts" element={<Accounts />} />
              <Route path="/en/accounts/:accountId" element={<Accounts />} />
              <Route path="/en/admin" element={<Admin />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <MusicPlayer />
          </div>
        </LanguageProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
