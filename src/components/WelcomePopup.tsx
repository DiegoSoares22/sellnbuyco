import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import popupImage from "@/assets/popup-2.jpg";
import { useI18n } from "@/i18n";

const STORAGE_KEY = "sb_welcome_shown";

export default function WelcomePopup() {
  const [show, setShow] = useState(false);
  const { t } = useI18n();

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) {
        const to = setTimeout(() => setShow(true), 800);
        return () => clearTimeout(to);
      }
    } catch {
      // localStorage unavailable
    }
  }, []);

  const handleClose = () => {
    setShow(false);
    try { localStorage.setItem(STORAGE_KEY, "1"); } catch {}
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          onClick={handleClose}
        >
          <div className="absolute inset-0 bg-background/60 glass-panel" />

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 25 }}
            className="relative z-10 max-w-lg w-full rounded-2xl overflow-hidden bg-card border border-border shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="h-[340px] sm:h-[400px] overflow-hidden">
              <img
                src={popupImage}
                alt="Welcome"
                className="w-full h-full object-cover object-top"
              />
            </div>

            <button
              onClick={handleClose}
              className="absolute top-3 right-3 w-8 h-8 rounded-full bg-background/80 flex items-center justify-center text-foreground hover:bg-background transition-colors"
            >
              <X size={16} />
            </button>

            <div className="p-5 sm:p-6 space-y-3">
              <h2 className="text-lg font-bold text-card-foreground">
                {t("welcome.hello")}
              </h2>
              <p className="text-sm text-card-foreground leading-relaxed">
                {t("welcome.subtitle")}
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {t("welcome.p1")}
              </p>
              <ul className="text-sm text-muted-foreground space-y-1.5">
                <li>{t("welcome.b1")}</li>
                <li>{t("welcome.b2")}</li>
              </ul>
              <p className="text-sm text-muted-foreground">
                {t("welcome.p2")}
              </p>
              <button
                onClick={handleClose}
                className="w-full mt-2 py-2.5 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity"
              >
                {t("welcome.cta")}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
