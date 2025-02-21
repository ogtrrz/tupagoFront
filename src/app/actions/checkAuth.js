"use server";

import { cookies } from "next/headers";

// ✅ Get username from API
export async function getUsername() {
  const cookieStore = await cookies();
  const authToken = cookieStore.get("auth_token")?.value;

  if (!authToken) {
    return { authenticated: false, username: null };
  }

  try {
    const response = await fetch(`${process.env.JSONPATH}authenticate`, {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${authToken}`,
        "Accept": "text/plain",
      },
    });

    if (!response.ok) {
      return { authenticated: false, username: null };
    }

    const username = await response.text();
    return { authenticated: true, username };
  } catch (error) {
    console.error("Error fetching username:", error);
    return { authenticated: false, username: null };
  }
}

// ✅ Logout function (removes auth cookie)
export async function logout() {
  const cookieStore = await cookies();
  cookieStore.delete("auth_token"); // ✅ Clear token
  return { success: true };
}
