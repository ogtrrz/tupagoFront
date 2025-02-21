"use server";

import { cookies } from "next/headers";

export async function requestEstatusQR(idc) {
  console.log("idc", JSON.stringify({ idc }));

  try {
    const cookieStore = await cookies();
    const authToken = cookieStore.get("auth_token")?.value;

    if (!authToken) {
      throw new Error("No existe token autenticado.");
    }
    console.log(
      "`${process.env.JSONPATH}payments/estatusmsjqrusuario`",
      `${process.env.JSONPATH}payments/estatusmsjqrusuario`
    );

    const response = await fetch(
      `${process.env.JSONPATH}payments/estatusmsjqrusuario`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authToken}`,
        },
        body: JSON.stringify({ idc: "318988a825" }), //JSON.stringify({ idc }), //TODO modificar pruebas estatus
      }
    );

    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(`Error al solicitar estatus: ${errorMessage}`);
    }

    const responseData = await response.json(); // ✅ API response as an array
    console.log("responseData", responseData);
    

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
    console.log("validCRData", validCRData);

    return validCRData; // Return the filtered array
  } catch (error) {
    return { error: error.message };
  }
}
//[ "2024120940995d63912d17c6505a4f", "2024120940995a3b7c167e5a706367" ]
