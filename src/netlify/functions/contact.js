// netlify/functions/contact.js
export async function handler(event) {
    try {
        const data = JSON.parse(event.body || "{}");
        const { name, contact, message } = data;

        const r = await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                from: "Contacto Web <onboarding@resend.dev>", // luego lo cambias a tu dominio
                to: ["cesardel@gmail.com"],
                subject: `Nuevo contacto: ${name}`,
                html: `
            <h2>Nuevo mensaje desde la web</h2>
            <p><b>Nombre:</b> ${name}</p>
            <p><b>Tel/Correo:</b> ${contact}</p>
            <p><b>Mensaje:</b><br/>${String(message).replace(/\n/g, "<br/>")}</p>
          `,
            }),
        });

        if (!r.ok) {
            const txt = await r.text();
            return { statusCode: 500, body: txt };
        }

        return { statusCode: 200, body: JSON.stringify({ ok: true }) };
    } catch (e) {
        return { statusCode: 400, body: JSON.stringify({ ok: false, error: String(e) }) };
    }
}