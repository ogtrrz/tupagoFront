"use server";

import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route"; // Import NextAuth config


export async function sendMensajePagoTelefonico(formData) {
  try {
    // ✅ Get authentication session
    const session = await getServerSession(authOptions);
    if (!session || !session.accessToken) {
      throw new Error("No existe sesión autenticada.");
    }

    // console.log("🔹 Using Access Token:", session.accessToken);

    // ✅ Send request to backend
    const res = await fetch(`${process.env.JSONPATH }payments/msjpagotelefonicousuario`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${session.accessToken}`,
      },
      body: JSON.stringify(formData),
    });

    if (!res.ok) {
      const errorMessage = await res.text();
      throw new Error(`Error al enviar pago: ${errorMessage}`);
    }

    return { success: true, message: "✅ Pago enviado con éxito!" };
  } catch (error) {
    console.error("❌ Error en sendMensajePagoTelefonico:", error.message);
    return { success: false, error: error.message };
  }
}
