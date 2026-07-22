import React, { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Progress } from "@/components/ui/progress";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Sparkles, Swords, Shield, Droplet, Crosshair, Anchor, Circle, Flame, Zap, Star, Compass, HelpCircle } from "lucide-react";
import { CLASS_OPTIONS, getClassCounts, ACCOUNTS } from "@/data/accounts";
import { useI18n } from "@/i18n";

interface AccountAssistantModalProps {
  open: boolean;
  onClose: () => void;
  onApply: (budgetK: number | null, className: string | null, minLevel: number | null) => void;
  initialBudget?: number | null;
  initialClass?: string | null;
}

const CLASS_ICONS: Record<string, any> = {
  Ninja: Swords,
  Warrior: Shield,
  Taoist: Droplet,
  Archer: Crosshair,
  Pirata: Anchor,
  Monk: Circle,
  DragonWarrior: Flame,
  "Thunder Strike": Zap,
  Trojan: Star,
  "Dune Wanderer": Compass,
};

export default function AccountAssistantModal({
  open,
  onClose,
  onApply,
  initialBudget,
  initialClass,
}: AccountAssistantModalProps) {
  const { lang } = useI18n();
  const [step, setStep] = useState(1);
  const [budget, setBudget] = useState<string>(initialBudget ? String(initialBudget) : "");
  const [selectedClass, setSelectedClass] = useState<string | null>(initialClass ?? null);
  const [minLevel, setMinLevel] = useState<string>("any");

  const counts = getClassCounts(ACCOUNTS);

  useEffect(() => {
    if (open) {
      setStep(1);
      setBudget(initialBudget ? String(initialBudget) : "");
      setSelectedClass(initialClass ?? null);
      setMinLevel("any");
    }
  }, [open, initialBudget, initialClass]);

  const handleNext = () => {
    setStep((prev) => Math.min(prev + 1, 3));
  };

  const handlePrev = () => {
    setStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSearch = () => {
    const budgetNum = budget.trim() ? parseInt(budget, 10) : null;
    const lvlNum = minLevel === "130" ? 130 : minLevel === "140" ? 140 : null;

    onApply(
      Number.isFinite(budgetNum) ? budgetNum : null,
      selectedClass,
      lvlNum
    );
    onClose();
  };

  const handleSkip = () => {
    onApply(null, null, null);
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={(isOpen) => !isOpen && onClose()}>
      <DialogContent className="w-full sm:max-w-md bg-[#12121a] border-zinc-800 text-slate-100 rounded-2xl shadow-xl shadow-black/50 p-6">
        <DialogHeader className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-500 border border-amber-500/20">
              <Sparkles className="h-5 w-5 text-amber-500 animate-pulse" />
            </div>
            <div>
              <DialogTitle className="text-slate-100 text-base font-bold">
                {lang === "pt" ? "Encontre sua account ideal" : "Find your ideal account"}
              </DialogTitle>
              <DialogDescription className="text-slate-400 text-xs mt-0.5">
                {lang === "pt" ? `Passo ${step} de 3` : `Step ${step} of 3`}
              </DialogDescription>
            </div>
          </div>
          <Progress value={(step / 3) * 100} className="h-1 bg-zinc-800" />
        </DialogHeader>

        {/* Passo 1: Orçamento */}
        {step === 1 && (
          <div className="space-y-4 py-4">
            <Label className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              {lang === "pt" ? "Qual seu orçamento? (em mil CPs)" : "What is your budget? (in thousand CPs)"}
            </Label>
            <div className="relative">
              <Input
                type="number"
                placeholder="Ex: 120"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                className="bg-zinc-900 border-zinc-800 text-slate-100 text-sm h-11 rounded-xl pl-4 pr-16 focus:ring-amber-500"
              />
              <span className="absolute right-4 top-3 text-xs text-slate-500 font-bold">k CPs</span>
            </div>
            <p className="text-[11px] text-slate-500 leading-relaxed">
              {lang === "pt"
                ? "Digitar 120 equivale a 120k CPs. Deixe vazio para ignorar e ver qualquer valor."
                : "Typing 120 is equal to 120k CPs. Leave it empty to ignore and see any value."}
            </p>
          </div>
        )}

        {/* Passo 2: Classe Preferida */}
        {step === 2 && (
          <div className="space-y-4 py-4">
            <Label className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              {lang === "pt" ? "Classe preferida" : "Preferred class"}
            </Label>
            <div className="grid grid-cols-2 gap-2.5">
              {CLASS_OPTIONS.map((c) => {
                const count = counts[c] || 0;
                const Icon = CLASS_ICONS[c] || HelpCircle;
                const active = selectedClass === c;

                return (
                  <button
                    key={c}
                    onClick={() => setSelectedClass(active ? null : c)}
                    className={`flex items-center justify-between px-3 py-2.5 rounded-xl border text-xs font-semibold transition-all duration-200 ${
                      active
                        ? "bg-amber-500/10 border-amber-500/50 text-amber-400"
                        : "bg-zinc-900/50 border-zinc-800 text-slate-300 hover:border-zinc-700 hover:text-slate-100"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <Icon size={13} className={active ? "text-amber-400" : "text-slate-400"} />
                      <span>{c}</span>
                    </div>
                    <span className="text-[10px] text-slate-500">({count})</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Passo 3: Level Desejado */}
        {step === 3 && (
          <div className="space-y-4 py-4">
            <Label className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              {lang === "pt" ? "Level mínimo desejado" : "Minimum level desired"}
            </Label>
            <RadioGroup value={minLevel} onValueChange={setMinLevel} className="grid grid-cols-3 gap-2.5">
              <div className="flex flex-col items-center justify-center p-3 rounded-xl border border-zinc-800 bg-zinc-900/30 hover:bg-zinc-900/50 transition-colors">
                <RadioGroupItem value="any" id="level-any" className="mb-2" />
                <Label htmlFor="level-any" className="text-xs font-semibold text-slate-300 cursor-pointer">
                  {lang === "pt" ? "Qualquer" : "Any"}
                </Label>
              </div>

              <div className="flex flex-col items-center justify-center p-3 rounded-xl border border-zinc-800 bg-zinc-900/30 hover:bg-zinc-900/50 transition-colors">
                <RadioGroupItem value="130" id="level-130" className="mb-2" />
                <Label htmlFor="level-130" className="text-xs font-semibold text-slate-300 cursor-pointer">
                  130+
                </Label>
              </div>

              <div className="flex flex-col items-center justify-center p-3 rounded-xl border border-zinc-800 bg-zinc-900/30 hover:bg-zinc-900/50 transition-colors">
                <RadioGroupItem value="140" id="level-140" className="mb-2" />
                <Label htmlFor="level-140" className="text-xs font-semibold text-slate-300 cursor-pointer">
                  140+
                </Label>
              </div>
            </RadioGroup>
          </div>
        )}

        {/* Footer do Dialog */}
        <DialogFooter className="flex flex-col sm:flex-row gap-2.5 pt-2 border-t border-zinc-800/80">
          <div className="flex items-center gap-2 w-full">
            {step > 1 && (
              <Button
                variant="outline"
                onClick={handlePrev}
                className="flex-1 rounded-xl border-zinc-800 hover:bg-zinc-900 text-slate-300 text-xs"
              >
                {lang === "pt" ? "Voltar" : "Back"}
              </Button>
            )}

            {step < 3 ? (
              <Button
                onClick={handleNext}
                className="flex-1 rounded-xl bg-amber-500 hover:bg-amber-600 text-black font-bold text-xs"
              >
                {lang === "pt" ? "Continuar" : "Continue"}
              </Button>
            ) : (
              <Button
                onClick={handleSearch}
                className="flex-1 rounded-xl bg-amber-500 hover:bg-amber-600 text-black font-bold text-xs"
              >
                {lang === "pt" ? "Buscar accounts" : "Search accounts"}
              </Button>
            )}
          </div>

          <Button
            variant="ghost"
            onClick={handleSkip}
            className="w-full text-slate-500 hover:text-slate-300 text-xs mt-2 sm:mt-0"
          >
            {lang === "pt" ? "Seguir para ver as accounts" : "Continue to see all accounts"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
