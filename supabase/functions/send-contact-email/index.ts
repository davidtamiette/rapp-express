import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { formType, data } = await req.json();

    let subject: string;
    let htmlBody: string;

    if (formType === "hero") {
      subject = `[RAPP] Novo lead rápido – ${data.nome}`;
      htmlBody = `
        <h2>Novo lead via formulário rápido (Hero)</h2>
        <table style="border-collapse:collapse;width:100%">
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Nome</td><td style="padding:8px;border:1px solid #ddd">${data.nome}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">E-mail</td><td style="padding:8px;border:1px solid #ddd">${data.email}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Telefone</td><td style="padding:8px;border:1px solid #ddd">${data.telefone}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Empresa</td><td style="padding:8px;border:1px solid #ddd">${data.empresa}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">UF</td><td style="padding:8px;border:1px solid #ddd">${data.uf}</td></tr>
        </table>
      `;
    } else {
      subject = `[RAPP] Nova solicitação completa – ${data.nome}`;
      htmlBody = `
        <h2>Nova solicitação via formulário completo</h2>
        <table style="border-collapse:collapse;width:100%">
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Nome</td><td style="padding:8px;border:1px solid #ddd">${data.nome}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">E-mail</td><td style="padding:8px;border:1px solid #ddd">${data.email}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Telefone</td><td style="padding:8px;border:1px solid #ddd">${data.telefone}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Empresa</td><td style="padding:8px;border:1px solid #ddd">${data.empresa}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">CNPJ</td><td style="padding:8px;border:1px solid #ddd">${data.cnpj || "—"}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">UF</td><td style="padding:8px;border:1px solid #ddd">${data.uf}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Segmento</td><td style="padding:8px;border:1px solid #ddd">${data.segmento || "—"}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Possui CTF/APP?</td><td style="padding:8px;border:1px solid #ddd">${data.ctf || "—"}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Já entregou RAPP?</td><td style="padding:8px;border:1px solid #ddd">${data.rappAnterior || "—"}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Mensagem</td><td style="padding:8px;border:1px solid #ddd">${data.mensagem || "—"}</td></tr>
        </table>
      `;
    }

    if (!RESEND_API_KEY) {
      console.error("RESEND_API_KEY not configured");
      return new Response(
        JSON.stringify({ error: "Email service not configured" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "RAPP Ápia <onboarding@resend.dev>",
        to: ["atendimento@apiaambiental.com.br"],
        subject,
        html: htmlBody,
      }),
    });

    const result = await res.text();

    if (!res.ok) {
      console.error("Resend error:", result);
      return new Response(
        JSON.stringify({ error: "Failed to send email", details: result }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    return new Response(JSON.stringify({ success: true }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
