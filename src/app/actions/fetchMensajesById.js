"use server";

import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route"; // Import NextAuth config

export async function fetchMensajeById(id) {
  try {
    // Get authentication session
    const session = await getServerSession(authOptions);
    if (!session || !session.accessToken) {
      throw new Error("AUTH_REQUIRED");
    }

    // Make the API request
    const res = await fetch(`${process.env.JSONPATH}mensajesadd/${id}`, {
      method: "GET",
      headers: {
        Accept: "*/*",
        Authorization: `Bearer ${session.accessToken}`, // Use NextAuth JWT token
      },
      cache: "no-store", // Always fetch fresh data
    });

    if (res.status === 401) {
      console.warn("🔴 Unauthorized (401).");
      throw new Error("AUTH_REQUIRED");
    }

    if (!res.ok) {
      throw new Error(`Intentelo mas tarde: ${res.statusText}`);
    }

    const data = await res.json();
    console.log("data", data);

    return data; // Return the fetched message
  } catch (error) {
    console.error("❌ Error fetching mensaje:", error);
    return { error: error.message };
  }
}
