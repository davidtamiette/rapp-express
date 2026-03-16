import { MessageCircle } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/5531982782918?text=Ol%C3%A1%2C%20vim%20pelo%20an%C3%BAncio%20e%20preciso%20de%20ajuda%20com%20o%20RAPP";

const WhatsAppFloat = () => {
  const handleWhatsAppClick = () => {
    if (typeof (window as any).gtag !== "undefined") {
      (window as any).gtag("event", "conversion", { "send_to": "AW-17854102222/ALnuCLuL-_8bEM71v8FC", "value": 1.0, "currency": "BRL" });
    }
  };

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleWhatsAppClick}
      title="Falar com a Ápia pelo WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-whatsapp hover:bg-whatsapp/90 text-whatsapp-foreground rounded-full flex items-center justify-center shadow-whatsapp animate-float transition-colors"
    >
      <MessageCircle className="w-7 h-7" />
    </a>
  );
};

export default WhatsAppFloat;
