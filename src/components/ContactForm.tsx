import { useState } from "react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

const ContactForm = () => {
  const [form, setForm] = useState({
    nome: "", email: "", telefone: "", empresa: "", cnpj: "", uf: "",
    segmento: "", ctf: "", rappAnterior: "", mensagem: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { error } = await supabase.functions.invoke("send-contact-email", {
        body: { formType: "contact", data: form },
      });
      if (error) throw error;
      toast.success("Formulário enviado com sucesso! Um especialista entrará em contato em breve.");
      setForm({ nome: "", email: "", telefone: "", empresa: "", cnpj: "", uf: "", segmento: "", ctf: "", rappAnterior: "", mensagem: "" });
    } catch (err) {
      console.error(err);
      toast.error("Erro ao enviar. Tente novamente ou entre em contato pelo WhatsApp.");
    } finally {
      setLoading(false);
    }
  };

  const set = (key: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm({ ...form, [key]: e.target.value });

  const inputClass =
    "w-full px-4 py-2.5 rounded-lg bg-background border border-input text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring text-sm";
  const labelClass = "block text-sm font-medium text-foreground mb-1";

  return (
    <section id="formulario" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4 max-w-2xl space-y-6">
        <h2 className="text-3xl font-bold text-foreground text-center">Solicite sua proposta</h2>
        <p className="text-center text-muted-foreground text-sm max-w-lg mx-auto">
          Preencha os dados e um especialista da Ápia Ambiental entrará em contato rapidamente para avaliar o
          enquadramento da sua empresa e enviar uma proposta personalizada para o seu RAPP Ibama.
        </p>

        <form onSubmit={handleSubmit} className="bg-card rounded-2xl shadow-card p-6 md:p-8 space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>Nome completo</label>
              <input className={inputClass} required value={form.nome} onChange={set("nome")} />
            </div>
            <div>
              <label className={labelClass}>E-mail corporativo</label>
              <input className={inputClass} type="email" required value={form.email} onChange={set("email")} />
            </div>
            <div>
              <label className={labelClass}>Telefone / WhatsApp</label>
              <input className={inputClass} required value={form.telefone} onChange={set("telefone")} />
            </div>
            <div>
              <label className={labelClass}>Empresa</label>
              <input className={inputClass} required value={form.empresa} onChange={set("empresa")} />
            </div>
            <div>
              <label className={labelClass}>CNPJ</label>
              <input className={inputClass} value={form.cnpj} onChange={set("cnpj")} />
            </div>
            <div>
              <label className={labelClass}>Estado (UF)</label>
              <input className={inputClass} maxLength={2} value={form.uf} onChange={(e) => setForm({ ...form, uf: e.target.value.toUpperCase() })} />
            </div>
          </div>

          <div>
            <label className={labelClass}>Segmento de atuação</label>
            <input className={inputClass} value={form.segmento} onChange={set("segmento")} />
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>Já possui CTF/APP?</label>
              <select className={inputClass} value={form.ctf} onChange={set("ctf")}>
                <option value="">Selecione</option>
                <option value="sim">Sim</option>
                <option value="nao">Não</option>
                <option value="nao_sei">Não sei</option>
              </select>
            </div>
            <div>
              <label className={labelClass}>Já entregou RAPP antes?</label>
              <select className={inputClass} value={form.rappAnterior} onChange={set("rappAnterior")}>
                <option value="">Selecione</option>
                <option value="sim">Sim</option>
                <option value="nao">Não</option>
              </select>
            </div>
          </div>

          <div>
            <label className={labelClass}>Mensagem</label>
            <textarea className={`${inputClass} min-h-[100px] resize-y`} value={form.mensagem} onChange={set("mensagem")} />
          </div>

          <button type="submit" disabled={loading} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3.5 rounded-lg transition-colors text-base disabled:opacity-50">
            {loading ? "Enviando..." : "Enviar solicitação"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
