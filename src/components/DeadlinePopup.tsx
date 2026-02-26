import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Clock } from "lucide-react";

const DeadlinePopup = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Verifica se o usuário já viu o popup na sessão/visita atual
    const hasSeenPopup = localStorage.getItem("rappPopupSeen");
    
    if (!hasSeenPopup) {
      // Pequeno delay para não ser tão agressivo assim que a página carrega
      const timer = setTimeout(() => setOpen(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setOpen(false);
    localStorage.setItem("rappPopupSeen", "true");
  };

  return (
    <Dialog open={open} onOpenChange={(isOpen) => !isOpen && handleClose()}>
      <DialogContent className="sm:max-w-md border-urgent">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-urgent font-bold text-xl">
            <AlertTriangle className="w-6 h-6" />
            Atenção: Prazo do RAPP Ibama
          </DialogTitle>
          <DialogDescription className="text-base pt-3 text-foreground/90">
            A entrega do <strong>Relatório Anual de Atividades Potencialmente Poluidoras (RAPP)</strong> é obrigatória e deve ser feita o quanto antes para evitar multas processuais.
          </DialogDescription>
        </DialogHeader>
        
        <div className="bg-urgent/10 p-4 rounded-lg my-2 flex items-start gap-3">
          <Clock className="w-5 h-5 text-urgent mt-0.5 shrink-0" />
          <p className="text-sm font-medium text-foreground">
            O período legal de entrega é de <strong>1º de fevereiro a 31 de março</strong>. <br/>Não deixe para a última hora!
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3 sm:justify-end mt-4">
          <Button type="button" variant="outline" onClick={handleClose}>
            Entendi
          </Button>
          <Button 
            type="button" 
            className="bg-primary hover:bg-primary/90 text-white" 
            onClick={() => {
              handleClose();
              document.getElementById("formulario")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Fazer orçamento gora
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DeadlinePopup;
