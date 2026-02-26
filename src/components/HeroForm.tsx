import { useState } from "react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

const HeroForm = () => {
  const [form, setForm] = useState({ nome: "", email: "", telefone: "", empresa: "", uf: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { error } = await supabase.functions.invoke("send-contact-email", {
        body: { formType: "hero", data: form },
      });
      if (error) throw error;
      toast.success("Solicitação enviada! Entraremos em contato em breve.");
      setForm({ nome: "", email: "", telefone: "", empresa: "", uf: "" });
    } catch (err) {
      console.error(err);
      toast.error("Erro ao enviar. Tente novamente ou entre em contato pelo WhatsApp.");
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full px-4 py-2.5 rounded-lg bg-background border border-input text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring text-sm";

  return (
    <div className="bg-card rounded-2xl shadow-card p-6 space-y-4">
      <h3 className="text-lg font-bold text-card-foreground">Solicite um orçamento rápido</h3>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input className={inputClass} placeholder="Seu nome" required value={form.nome} onChange={(e) => setForm({ ...form, nome: e.target.value })} />
        <input className={inputClass} placeholder="E-mail" type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
        <input className={inputClass} placeholder="Telefone / WhatsApp" required value={form.telefone} onChange={(e) => setForm({ ...form, telefone: e.target.value })} />
        <input className={inputClass} placeholder="Empresa" required value={form.empresa} onChange={(e) => setForm({ ...form, empresa: e.target.value })} />
        <input className={inputClass} placeholder="UF" maxLength={2} value={form.uf} onChange={(e) => setForm({ ...form, uf: e.target.value.toUpperCase() })} />
        <button type="submit" disabled={loading} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 rounded-lg transition-colors disabled:opacity-50">
          {loading ? "Enviando..." : "Enviar solicitação"}
        </button>
      </form>
    </div>
  );
};

export default HeroForm;
