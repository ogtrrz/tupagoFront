"use server";

import { cookies } from "next/headers";

export async function sendMensajePagoQR(formData) {
  try {
    const cookieStore = await cookies();
    const authToken = cookieStore.get("auth_token")?.value;

    if (!authToken) {
      throw new Error("No authentication token found.");
    }

    // Send the API request with the token
    const response = await fetch(
      `${process.env.JSONPATH}payments/msjpagoqrusuario`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authToken}`,
        },
        body: JSON.stringify(formData),
      }
    );

    // console.log("authToken", authToken);

    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(`Error al enviar pago: ${errorMessage}`);
    }

    // ✅ Return the actual API response instead of a hardcoded message
    const responseData = await response.json();
    return responseData; // Return service response directly
  } catch (error) {
    return { error: error.message };
  }
}
