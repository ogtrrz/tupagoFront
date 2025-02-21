"use server";

import { cookies } from "next/headers";

export async function authenticateUser(username, password) {
  try {
    const response = await fetch(`${process.env.JSONPATH}authenticate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accept: "*/*",
      },
      body: JSON.stringify({ username, password, rememberMe: true }),
    });

    if (!response.ok) {
      throw new Error("Credenciales invalidas");
    }

    const cookieStore = await cookies();
    const data = await response.json();
    cookieStore.set("auth_token", data.id_token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24 * 30, // 30 days
    });

    return { success: true };
  } catch (err) {
    return { error: err.message };
  }
}
