import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const TO_EMAIL = "serviclima@serviclim.com.ar";
const FROM_EMAIL = "formulario@serviclim.ar";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { nombre, cargo, empresa, email, telefono, tipo, mensaje } = body;

  if (!nombre || !email || !telefono) {
    return NextResponse.json({ error: "Faltan campos requeridos" }, { status: 400 });
  }

  const html = `
    <h2>Nueva consulta desde serviclim.ar</h2>
    <table cellpadding="8" style="border-collapse:collapse;width:100%;font-family:sans-serif;font-size:14px">
      <tr><td><strong>Nombre</strong></td><td>${nombre}</td></tr>
      ${cargo ? `<tr><td><strong>Cargo</strong></td><td>${cargo}</td></tr>` : ""}
      ${empresa ? `<tr><td><strong>Empresa</strong></td><td>${empresa}</td></tr>` : ""}
      <tr><td><strong>Email</strong></td><td><a href="mailto:${email}">${email}</a></td></tr>
      <tr><td><strong>Teléfono</strong></td><td><a href="tel:${telefono}">${telefono}</a></td></tr>
      ${tipo ? `<tr><td><strong>Tipo de servicio</strong></td><td>${tipo}</td></tr>` : ""}
      ${mensaje ? `<tr><td><strong>Descripción</strong></td><td>${mensaje}</td></tr>` : ""}
    </table>
  `;

  const { error } = await resend.emails.send({
    from: FROM_EMAIL,
    to: TO_EMAIL,
    replyTo: email,
    subject: `Nueva consulta${empresa ? ` de ${empresa}` : ""} — serviclim.ar`,
    html,
  });

  if (error) {
    return NextResponse.json({ error: "Error al enviar" }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
