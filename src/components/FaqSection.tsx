import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Até quando posso entregar o RAPP deste ano?",
    a: "O prazo vai de 1º de fevereiro a 31 de março de cada ano, salvo eventual prorrogação oficial do Ibama.",
  },
  {
    q: "O que acontece se eu não entregar o RAPP?",
    a: "A empresa fica irregular perante o Ibama, podendo sofrer multas, notificações e problemas com licenciamento ambiental.",
  },
  {
    q: "A Ápia também ajuda com CTF/APP e outras obrigações ambientais?",
    a: "Sim. Além do RAPP, a Ápia presta consultoria em CTF/APP, licenciamento ambiental, gestão de resíduos e diversas outras obrigações ambientais.",
  },
  {
    q: "Qual o custo do serviço de elaboração do RAPP?",
    a: "O valor depende da complexidade da atividade e do volume de dados. Entre em contato para receber um orçamento personalizado e sem compromisso.",
  },
  {
    q: "Vocês atendem empresas de fora de Minas Gerais?",
    a: "Sim. O RAPP é preenchido e enviado de forma digital, então atendemos empresas de todo o Brasil.",
  },
];

const FaqSection = () => (
  <section className="py-20 bg-gradient-section">
    <div className="container mx-auto px-4 max-w-3xl space-y-8">
      <h2 className="text-3xl font-bold text-foreground text-center">Perguntas frequentes sobre o RAPP</h2>

      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((faq, i) => (
          <AccordionItem key={i} value={`faq-${i}`} className="bg-card rounded-xl border-none shadow-card px-5">
            <AccordionTrigger className="text-left text-sm font-semibold text-card-foreground hover:no-underline">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="text-sm text-muted-foreground">{faq.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FaqSection;
