import { ShieldCheck, FileSearch, ClipboardCheck, Headphones } from "lucide-react";

const items = [
  { icon: ShieldCheck, text: "Especialistas em enquadramento correto no CTF/APP e preenchimento do RAPP." },
  { icon: FileSearch, text: "Conferência de dados, documentos e evidências antes do envio." },
  { icon: ClipboardCheck, text: "Preenchimento completo no sistema do Ibama, com protocolo e comprovante." },
  { icon: Headphones, text: "Atendimento consultivo para evitar erros que podem gerar autuações e retrabalho." },
];

const WhyApia = () => (
  <section className="py-20">
    <div className="container mx-auto px-4 max-w-4xl space-y-8">
      <h2 className="text-3xl font-bold text-foreground text-center">Por que escolher a Ápia para o seu RAPP</h2>

      <p className="text-center text-muted-foreground max-w-2xl mx-auto">
        A Ápia Ambiental é uma consultoria de serviços ambientais e engenharia, com foco em ecoeficiência,
        desempenho econômico e social de seus clientes.
      </p>

      <div className="grid sm:grid-cols-2 gap-5">
        {items.map((item) => (
          <div
            key={item.text}
            className="flex items-start gap-4 bg-card rounded-xl p-5 shadow-card hover:shadow-card-hover transition-shadow"
          >
            <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center shrink-0">
              <item.icon className="w-5 h-5 text-accent-foreground" />
            </div>
            <p className="text-sm text-card-foreground leading-relaxed">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyApia;
