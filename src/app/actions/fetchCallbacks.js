"use server";

import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route"; // Import NextAuth config

export async function fetchCallbacks(idsString) {
  // console.log("idsString", idsString);

  try {
    // Handle null, empty, or undefined input
    if (!idsString || idsString.trim() === "") {
      throw new Error("IDs parameter is required and cannot be empty");
    }

    const session = await getServerSession(authOptions);
    if (!session || !session.accessToken) {
      throw new Error("No authentication session found.");
    }

    const requestUrl = `${
      process.env.JSONPATH
    }callbacksadd?ids=${encodeURIComponent(idsString)}`;
    // console.log("🔹 Fetching Mensajes:", requestUrl);

    // Make the API request
    const response = await fetch(requestUrl, {
      method: "GET",
      headers: {
        Accept: "*/*",
        Authorization: `Bearer ${session.accessToken}`, // Use NextAuth JWT token
      },
      cache: "no-store", // Always fetch fresh data
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }

    const extra6 = await response.json();
    // console.log("extra6", extra6);
    return extra6;
  } catch (error) {
    console.error("❌ Error fetching callbacks:", error);
    return { error: error.message };
  }
}
