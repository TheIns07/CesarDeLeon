export async function handler(event) {
    if (event.httpMethod === "OPTIONS") {
        return {
            statusCode: 200,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "Content-Type",
                "Access-Control-Allow-Methods": "POST, OPTIONS",
            },
            body: "",
        };
    }

    if (event.httpMethod !== "POST") {
        return {
            statusCode: 405,
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({
                ok: false,
                error: "Method Not Allowed",
            }),
        };
    }

    try {
        if (!process.env.RESEND_API_KEY) {
            return {
                statusCode: 500,
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*",
                },
                body: JSON.stringify({
                    ok: false,
                    error: "RESEND_API_KEY no está configurada en Netlify",
                }),
            };
        }

        const data = JSON.parse(event.body || "{}");
        const { name, contact, message } = data;

        if (!name || !contact || !message) {
            return {
                statusCode: 400,
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*",
                },
                body: JSON.stringify({
                    ok: false,
                    error: "Faltan campos requeridos",
                }),
            };
        }

        const resendResponse = await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                // Mientras uses onboarding, normalmente solo podrás enviar
                // a tu propia dirección de Resend/cuenta.
                from: "Interes en obra <onboarding@resend.dev>",
                to: ["cesardel@gmail.com"],
                subject: `Nueva solicitud: ${name}`,
                reply_to: contact,
                html: `
            <h2>Nuevo mensaje desde la web</h2>
            <p><strong>Nombre:</strong> ${escapeHtml(name)}</p>
            <p><strong>Tel/Correo:</strong> ${escapeHtml(contact)}</p>
            <p><strong>Mensaje:</strong><br>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
          `,
            }),
        });

        const resendText = await resendResponse.text();

        if (!resendResponse.ok) {
            console.error("Resend error:", resendText);

            return {
                statusCode: resendResponse.status,
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*",
                },
                body: JSON.stringify({
                    ok: false,
                    error: "Resend rechazó el envío",
                    details: resendText,
                }),
            };
        }

        return {
            statusCode: 200,
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({
                ok: true,
                data: JSON.parse(resendText),
            }),
        };
    } catch (error) {
        console.error("Function error:", error);

        return {
            statusCode: 500,
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({
                ok: false,
                error: String(error),
            }),
        };
    }
}

function escapeHtml(str = "") {
    return String(str)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}