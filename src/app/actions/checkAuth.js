"use server";

import { cookies } from "next/headers";

export async function checkAuth() {
  const cookieStore = await cookies();
  const authToken = cookieStore.get("auth_token")?.value;

  return { authenticated: !!authToken };
}
