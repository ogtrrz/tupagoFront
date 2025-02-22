"use server";

import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route"; // Import NextAuth config

const PAGE_SIZE = 20; // Use correct page size

export async function fetchMensajes(page = 0) {
  try {
    // Get authentication session
    const session = await getServerSession(authOptions);
    if (!session || !session.accessToken) {
      throw new Error("No authentication session found.");
    }

    const requestUrl = `${process.env.JSONPATH}mensajesadd?page=${page}&size=${PAGE_SIZE}&eagerload=true`;

    console.log("🔹 Fetching Mensajes:", requestUrl);

    // Fetch paginated messages
    const res = await fetch(requestUrl, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${session.accessToken}`, // ✅ Use NextAuth JWT token
      },
      cache: "no-store", // ✅ Always fetch fresh data
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch messages: ${res.status} ${res.statusText}`);
    }

    // ✅ Log ALL response headers
    // console.log("🔹 Response Headers:", [...res.headers.entries()]);

    // ✅ Retrieve total messages correctly
    const totalMessages =
      parseInt(res.headers.get("X-Total-Count") || res.headers.get("x-total-count")) || 0;

    // console.log("✅ Total Messages from Headers:", totalMessages);

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
    return { error: error.message };
  }
}
