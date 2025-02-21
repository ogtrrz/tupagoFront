"use server";

import { cookies } from "next/headers";

export async function fetchClientes() {
  try {
    // Get auth token from cookies
    const cookieStore = await cookies();
    const authToken = cookieStore.get("auth_token")?.value;

    if (!authToken) {
      throw new Error("No authentication token found.");
    }

    const res = await fetch(`${process.env.JSONPATH}clientesadd`, {
      method: "GET",
      headers: {
        "Accept": "application/json",
        "Authorization": `Bearer ${authToken}`,
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
