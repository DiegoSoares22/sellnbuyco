import { useState } from "react";
import { motion } from "framer-motion";
import { Lock, AlertCircle } from "lucide-react";

export default function Admin() {
  const [password, setPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const [error, setError] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder: real auth should use server-side validation
    setError(true);
  };

  if (!authenticated) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-sm w-full bg-card border border-border rounded-xl p-6 space-y-4"
        >
          <div className="flex items-center gap-2 text-card-foreground">
            <Lock size={20} />
            <h1 className="text-lg font-bold">Acesso Restrito</h1>
          </div>

          <form onSubmit={handleLogin} className="space-y-3">
            <input
              type="password"
              value={password}
              onChange={(e) => { setPassword(e.target.value); setError(false); }}
              placeholder="Senha de administrador"
              className="w-full px-3 py-2 rounded-lg bg-muted border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
              required
            />
            {error && (
              <div className="flex items-center gap-2 text-destructive text-sm">
                <AlertCircle size={14} />
                Acesso negado.
              </div>
            )}
            <button
              type="submit"
              className="w-full py-2.5 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity"
            >
              Entrar
            </button>
          </form>
        </motion.div>
      </div>
    );
  }

  return null;
}
