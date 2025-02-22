"use server";

import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route"; // ✅ Import NextAuth config

export async function sendMensajePagoQR(formData) {
  try {
    // ✅ Retrieve session using NextAuth
    const session = await getServerSession(authOptions);
    if (!session || !session.accessToken) {
      throw new Error("No existe sesión autenticada.");
    }

    console.log("🔹 Using Access Token:", session.accessToken);

    // ✅ Send the API request with the NextAuth token
    const response = await fetch(
      `${process.env.JSONPATH}payments/msjpagoqrusuario`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session.accessToken}`, // ✅ Use NextAuth JWT token
        },
        body: JSON.stringify(formData),
      }
    );

    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(`Error al enviar pago: ${errorMessage}`);
    }

    // ✅ Return the actual API response
    const responseData = await response.json();
    console.log("✅ Payment Response:", responseData);
    return responseData;
  } catch (error) {
    console.error("❌ Error in sendMensajePagoQR:", error.message);
    return { error: error.message };
  }
}
