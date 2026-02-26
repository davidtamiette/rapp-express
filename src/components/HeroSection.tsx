import logo from "@/assets/logo-apiaambiental.png";
import heroBg from "@/assets/hero-bg.jpg";
import Countdown from "./Countdown";
import HeroForm from "./HeroForm";
import { MessageCircle } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/5531982782918?text=Ol%C3%A1%2C%20vim%20pelo%20an%C3%BAncio%20e%20preciso%20de%20ajuda%20com%20o%20RAPP";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* BG image */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="Natureza preservada" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      <div className="relative z-10 w-full">
        {/* Header */}
        <header className="absolute top-0 left-0 right-0 py-5 px-4 md:px-8">
          <img src={logo} alt="Ápia Ambiental" className="h-12 md:h-16 object-contain" />
        </header>

        <div className="container mx-auto px-4 pt-28 pb-16 grid lg:grid-cols-5 gap-10 items-center">
          {/* Left content – 3 cols */}
          <div className="lg:col-span-3 space-y-6">
            {/* Urgency badge */}
            <div className="inline-block bg-urgent/90 text-urgent-foreground text-sm font-semibold px-4 py-2 rounded-full animate-pulse-urgent">
              ⚠️ Prazo do RAPP: 1º de fevereiro a 31 de março
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-primary-foreground">
              Seu RAPP entregue no prazo,{" "}
              <span className="text-accent">sem multas e sem dor de cabeça</span>
            </h1>

            <p className="text-primary-foreground/80 text-lg max-w-xl leading-relaxed">
              A Ápia Ambiental cuida de toda a elaboração e envio do RAPP Ibama, garantindo enquadramento correto,
              conformidade legal e tranquilidade para a sua empresa.
            </p>

            <ul className="space-y-2 text-primary-foreground/90">
              {[
                "Reduza o risco de multas e notificações do Ibama.",
                "Equipe especializada em engenharia ambiental e legislação.",
                "Atendimento personalizado para empresas de todos os portes.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 w-2 h-2 rounded-full bg-accent shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="#formulario"
                className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                Quero um orçamento para meu RAPP
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-whatsapp hover:bg-whatsapp/90 text-whatsapp-foreground font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                Falar com especialista
              </a>
            </div>

            <div className="pt-4">
              <Countdown />
            </div>
          </div>

          {/* Right – quick form – 2 cols */}
          <div className="lg:col-span-2 hidden lg:block">
            <HeroForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
