"use server";

import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route"; // ✅ Import NextAuth config


export async function requestEstatusCobroTelefonico(idMsjdeCobro) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || !session.accessToken) {
      throw new Error("No existe sesión autenticada.");
    }

    const response = await fetch(
      `${process.env.JSONPATH}payments/estatusmsjcobrotelefonicousuario`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session.accessToken}`, // ✅ Use NextAuth JWT token
        },
        body: JSON.stringify({ idc }), //TODO modificar pruebas estatus
        body: JSON.stringify({ idMsjdeCobro }),
      }
    );

    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(`Error al solicitar estatus: ${errorMessage}`);
    }

    return await response.json(); // ✅ Return the response data
  } catch (error) {
    console.error("❌ Error in requestEstatusCobroTelefonico:", error);
    return { error: error.message };
  }
}
