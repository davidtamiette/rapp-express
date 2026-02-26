import { AlertTriangle, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

const FloatingDeadlineBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Adiciona sombra e menor padding quando o usuário começa a rolar a página
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "shadow-md py-2" : "py-3"
      } bg-urgent text-urgent-foreground flex items-center justify-center cursor-pointer`}
      onClick={() => document.getElementById("formulario")?.scrollIntoView({ behavior: "smooth" })}
    >
      <div className="container px-4 flex items-center justify-center gap-2 sm:gap-4 flex-wrap">
        <div className="flex items-center gap-2 font-semibold text-sm sm:text-base">
          <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 animate-pulse" />
          <span>Prazo do RAPP: 1º de fevereiro a 31 de março</span>
        </div>
        <div className="flex items-center text-xs sm:text-sm font-bold bg-white/20 px-3 py-1 rounded-full hover:bg-white/30 transition-colors">
          Regularize agora <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1" />
        </div>
      </div>
    </div>
  );
};

export default FloatingDeadlineBanner;
