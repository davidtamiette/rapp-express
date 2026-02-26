import { MessageCircle } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/5531982782918?text=Ol%C3%A1%2C%20vim%20pelo%20an%C3%BAncio%20e%20preciso%20de%20ajuda%20com%20o%20RAPP";

const FinalCta = () => (
  <section className="py-20">
    <div className="container mx-auto px-4 max-w-3xl text-center space-y-6">
      <h2 className="text-3xl font-bold text-foreground">
        Não arrisque multas: antecipe o seu RAPP com a Ápia
      </h2>
      <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
        O período de entrega do RAPP é curto e o volume de informações é grande. Quanto antes você iniciar com a
        Ápia, menores as chances de erro e de ficar irregular junto ao Ibama.
      </p>
      <div className="flex flex-wrap justify-center gap-3 pt-2">
        <a
          href="#formulario"
          className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-3.5 rounded-lg transition-colors"
        >
          Solicitar proposta agora
        </a>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-whatsapp hover:bg-whatsapp/90 text-whatsapp-foreground font-semibold px-8 py-3.5 rounded-lg transition-colors"
        >
          <MessageCircle className="w-5 h-5" />
          Falar no WhatsApp
        </a>
      </div>
    </div>
  </section>
);

export default FinalCta;
