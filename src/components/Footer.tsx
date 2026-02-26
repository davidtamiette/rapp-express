import logo from "@/assets/logo-apiaambiental.png";
import { Mail, Phone } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground py-12">
    <div className="container mx-auto px-4 space-y-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="bg-card rounded-lg px-4 py-2 inline-block">
          <img src={logo} alt="Ápia Ambiental" className="h-10 object-contain" />
        </div>
        <div className="flex flex-wrap items-center gap-6 text-sm text-muted">
          <a href="mailto:atendimento@apiaambiental.com.br" className="flex items-center gap-2 hover:text-accent transition-colors">
            <Mail className="w-4 h-4" /> atendimento@apiaambiental.com.br
          </a>
          <a href="tel:+5531982782918" className="flex items-center gap-2 hover:text-accent transition-colors">
            <Phone className="w-4 h-4" /> (31) 98278-2918
          </a>
        </div>
      </div>
      <div className="border-t border-muted-foreground/20 pt-6 text-center text-xs text-muted-foreground/60 space-y-2">
        <p>© {new Date().getFullYear()} Ápia Ambiental Engenharia e Consultoria. Contagem – MG. Todos os direitos reservados.</p>
        <p>Esta página está preparada para receber Pixel da Meta e Google Tag para monitoramento de conversões.</p>
      </div>
    </div>
    {/* INSERIR AQUI O CÓDIGO DO PIXEL DA META (FACEBOOK/INSTAGRAM) */}
  </footer>
);

export default Footer;
