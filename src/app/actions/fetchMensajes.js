"use server";

import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route"; // Import NextAuth config

const PAGE_SIZE = 20; // Use correct page size

export async function fetchMensajes(page = 0) {
  try {
    // Get authentication session
    const session = await getServerSession(authOptions);
    if (!session || !session.accessToken) {
      console.error("🔴 No authentication session found");
      throw new Error("AUTH_REQUIRED"); // ✅ Throw an error instead of redirecting
    }

    const requestUrl = `${process.env.JSONPATH}mensajesadd?page=${page}&size=${PAGE_SIZE}&eagerload=true`;

    // Fetch paginated messages
    const res = await fetch(requestUrl, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${session.accessToken}`, // ✅ Use NextAuth JWT token
      },
      cache: "no-store", // ✅ Always fetch fresh data
    });

    if (res.status === 401) {
      console.warn("🔴 Unauthorized (401)");
      throw new Error("AUTH_REQUIRED"); 
    }

    if (!res.ok) {
      throw new Error(`Intentelo más tarde: ${res.status} ${res.statusText}`);
    }

    // ✅ Retrieve total messages correctly
    const totalMessages =
      parseInt(
        res.headers.get("X-Total-Count") || res.headers.get("x-total-count")
      ) || 0;

    const totalPages = Math.ceil(totalMessages / PAGE_SIZE);
    const data = await res.json();
    console.log("size", data.length);

    return {
      mensajes: data,
      totalMessages,
      totalPages,
    };
  } catch (error) {
    console.error("❌ Error fetching mensajes:", error);

    // ✅ Return error message to the client
    return { error: error.message };
  }
}
