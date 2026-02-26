import { Search, FolderOpen, FileText, Send, Lightbulb } from "lucide-react";

const steps = [
  { icon: Search, title: "Diagnóstico e enquadramento", desc: "Análise se sua empresa é obrigada a declarar e conferência do CTF/APP." },
  { icon: FolderOpen, title: "Coleta de informações", desc: "Produção, insumos, consumo de recursos, resíduos, emissões e documentos." },
  { icon: FileText, title: "Elaboração técnica", desc: "Preenchimento dos formulários específicos conforme a atividade da empresa." },
  { icon: Send, title: "Envio ao Ibama", desc: "Protocolo dentro do prazo, com comprovante de entrega." },
  { icon: Lightbulb, title: "Orientações futuras", desc: "Plano para evitar correria nos próximos ciclos do RAPP." },
];

const ProcessSteps = () => (
  <section className="py-20 bg-gradient-section">
    <div className="container mx-auto px-4 max-w-4xl space-y-10">
      <h2 className="text-3xl font-bold text-foreground text-center">Como funciona o passo a passo com a Ápia</h2>

      <div className="space-y-0">
        {steps.map((step, i) => (
          <div key={step.title} className="flex gap-5">
            {/* timeline */}
            <div className="flex flex-col items-center">
              <div className="w-11 h-11 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm shrink-0">
                {i + 1}
              </div>
              {i < steps.length - 1 && <div className="w-0.5 flex-1 bg-border" />}
            </div>
            <div className="pb-10">
              <div className="flex items-center gap-2 mb-1">
                <step.icon className="w-4 h-4 text-primary" />
                <h3 className="font-semibold text-foreground">{step.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSteps;
