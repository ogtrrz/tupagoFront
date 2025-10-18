"use server"; // ✅ Ensures this runs on the server

import nodemailer from "nodemailer";
import QRCode from "qrcode"; // ✅ Correct QR library for server-side
import { sendEmail } from "@/app/actions/sendEmail"; // ✅ Import the email function

export async function mailMensajePagoQR(formData) {
  try {
    // ✅ 1. Extract form data
    const {
      monto,
      concepto,
      referenciaNumerica,
      nombreCliente,
      email, // ✅ Recipient email
      vigencia,
      qrData,
    } = formData;

    // ✅ 2. Ensure QR Data is a valid string (Avoid "Invalid data" error)
    const qrContent = qrData
      ? JSON.stringify(qrData) // ✅ Convert JSON to string if provided
      : JSON.stringify({
          monto,
          concepto,
          referenciaNumerica,
          nombreCliente,
          vigencia,
        });

    // console.log("🔹 QR Content for Encoding:", qrContent); // ✅ Debugging step

    // ✅ 3. Generate a Base64 QR code using `qrcode`
    const qrImageBuffer = await QRCode.toBuffer(qrContent); // ✅ Get as Buffer

    // ✅ 4. Define email content and attach the QR code as a CID image
    const emailHtml = `
      <html>
        <body style="font-family: Arial, sans-serif; color: #333;">
          <h2>Detalles del Pago QR</h2>
          <p><strong>Cliente:</strong> ${nombreCliente}</p>
          <p><strong>Monto:</strong> $${monto}</p>
          <p><strong>Concepto:</strong> ${concepto}</p>
          <p><strong>Referencia Numérica:</strong> ${referenciaNumerica}</p>
          <p><strong>Vigencia:</strong> ${vigencia} días</p>
          <p><strong>QR Code para Pago:</strong></p>
          <img src="cid:qrimage" alt="QR Code" width="200" height="200" />
          <p>Escanea este código para realizar tu pago.</p>
          <br>
          <p>Saludos,<br><em>El equipo de TuPago</em></p>
        </body>
      </html>
    `;

    // ✅ 5. Set up the SMTP transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT || 587,
      secure: false, // `true` for SSL (465), `false` for TLS (587)
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // ✅ 6. Send the email with the attached QR code
    const mailOptions = {
      from: `"KashBit.bond" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "Confirmación de Pago QR",
      html: emailHtml, // ✅ Email content
      attachments: [
        {
          filename: "qrcode.png",
          content: qrImageBuffer, // ✅ Attach QR image as Buffer
          cid: "qrimage", // ✅ Content-ID for embedding in email
        },
      ],
    };

    const info = await transporter.sendMail(mailOptions);

    return { success: true, message: "Email sent successfully", messageId: info.messageId };
  } catch (error) {
    console.error("❌ Error sending email:", error);
    return { error: "Failed to send email. Please try again." };
  }
}
