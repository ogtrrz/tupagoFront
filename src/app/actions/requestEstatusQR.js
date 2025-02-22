"use server";

import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route"; // ✅ Import NextAuth config

export async function requestEstatusQR(idc) {
  try {
    // ✅ Retrieve session using NextAuth
    const session = await getServerSession(authOptions);
    if (!session || !session.accessToken) {
      throw new Error("No existe sesión autenticada.");
    }

    console.log("🔹 Using Access Token:", session.accessToken);

    // ✅ Make request using NextAuth token
    const response = await fetch(
      `${process.env.JSONPATH}payments/estatusmsjqrusuario`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session.accessToken}`,
        },
        body: JSON.stringify({ idc: "318988a825" }), //JSON.stringify({ idc }), //TODO modificar pruebas estatus
      }
    );

    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(`Error al solicitar estatus: ${errorMessage}`);
    }

    const responseData = await response.json(); // ✅ Parse JSON response

    // ✅ Process valid `cr` data
    const validCRData = responseData
      .filter((item) => item.cr !== null) // Remove entries where `cr` is null
      .map((item) => ({
        id: item.id, // ✅ Extract ID
        cr: item.cr, // ✅ Extract Clave de Rastreo (cr)
        c: {
          nc: item.c?.nc || "N/A", // ✅ Extract nc (numero de cuenta) safely
          nb: item.c?.nb || "N/A", // ✅ Extract nb (nombre del banco) safely
        },
      }));

    console.log("✅ Valid CR Data:", validCRData);
    return validCRData; // ✅ Return filtered array
  } catch (error) {
    console.error("❌ Error in requestEstatusQR:", error.message);
    return { error: error.message };
  }
}
