import { MapPin, Star } from "lucide-react";

const SocialProof = () => (
  <section className="py-20">
    <div className="container mx-auto px-4 max-w-4xl space-y-8">
      <h2 className="text-3xl font-bold text-foreground text-center">
        Consultoria ambiental de confiança em Contagem–MG
      </h2>
      <p className="text-center text-muted-foreground max-w-2xl mx-auto">
        Com experiência em soluções ambientais completas, a Ápia Ambiental atende empresas de diversos segmentos,
        oferecendo suporte técnico especializado e compromisso com a conformidade legal.
      </p>

      {/* Testimonial placeholders */}
      <div className="grid md:grid-cols-3 gap-5">
        {[
          { name: "Carlos M.", role: "Diretor Industrial", quote: "A Ápia tornou o processo do RAPP simples e sem estresse. Altamente recomendados." },
          { name: "Fernanda S.", role: "Gerente de Meio Ambiente", quote: "Equipe atenciosa e muito competente. Entregaram tudo dentro do prazo." },
          { name: "Roberto L.", role: "Proprietário", quote: "Já são 3 anos contando com a Ápia para o RAPP. Confiança total." },
        ].map((t) => (
          <div key={t.name} className="bg-card rounded-xl p-5 shadow-card space-y-3">
            <div className="flex gap-0.5">
              {Array(5).fill(0).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-urgent text-urgent" />
              ))}
            </div>
            <p className="text-sm text-muted-foreground italic">"{t.quote}"</p>
            <div>
              <p className="text-sm font-semibold text-card-foreground">{t.name}</p>
              <p className="text-xs text-muted-foreground">{t.role}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center gap-2 text-muted-foreground text-sm">
        <MapPin className="w-4 h-4" />
        Contagem – MG
      </div>
    </div>
  </section>
);

export default SocialProof;
