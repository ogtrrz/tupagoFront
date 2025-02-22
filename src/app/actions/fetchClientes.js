"use server";

// import axios from "axios";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route"; // Import NextAuth config

export async function fetchClientes() {
  try {
    // Get the session (which includes the token)
    const session = await getServerSession(authOptions);

    if (!session || !session.accessToken) {
      throw new Error("No authentication session found.");
    }

    const res = await fetch(`${process.env.JSONPATH}clientesadd`, {
      method: "GET",
      headers: {
        "Accept": "application/json",
        "Authorization": `Bearer ${session.accessToken}`, // Use NextAuth JWT token
      },
      cache: "no-store", // Always fetch fresh data
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch data: ${res.statusText}`);
    }

    const dataArray = await res.json();
    return Array.isArray(dataArray) && dataArray.length > 0 ? dataArray[0] : null;
  } catch (error) {
    console.error("Error fetching clientes:", error);
    return { error: error.message };
  }
}
