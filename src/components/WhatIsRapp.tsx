import { AlertTriangle } from "lucide-react";

const WhatIsRapp = () => (
  <section className="py-20 bg-gradient-section">
    <div className="container mx-auto px-4 max-w-3xl space-y-6">
      <h2 className="text-3xl font-bold text-foreground text-center">
        O que é o RAPP Ibama e por que você não pode perder o prazo
      </h2>

      <div className="space-y-4 text-muted-foreground leading-relaxed">
        <p>
          O <strong className="text-foreground">RAPP</strong> é o Relatório Anual de Atividades Potencialmente
          Poluidoras e Utilizadoras de Recursos Ambientais, obrigatório para todas as empresas inscritas no CTF/APP
          (Cadastro Técnico Federal de Atividades Potencialmente Poluidoras).
        </p>
        <p>
          O prazo de entrega vai de <strong className="text-foreground">1º de fevereiro a 31 de março</strong>,
          referente ao ano-base anterior. A não entrega ou a entrega fora do prazo pode gerar{" "}
          <strong className="text-foreground">multas e problemas com o Ibama</strong> e com as licenças ambientais
          da empresa.
        </p>
      </div>

      <div className="flex items-start gap-3 bg-urgent/10 border border-urgent/30 rounded-xl p-5">
        <AlertTriangle className="w-6 h-6 text-urgent shrink-0 mt-0.5" />
        <p className="text-sm text-foreground font-medium">
          Não deixe para a última hora: o sistema pode ficar instável e você corre o risco de ficar irregular junto
          ao Ibama.
        </p>
      </div>
    </div>
  </section>
);

export default WhatIsRapp;
