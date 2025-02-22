"use client"; // ✅ Must be a Client Component

import { SessionProvider } from "next-auth/react";

export default function SessionProviderWrapper({ children }) {
  return <SessionProvider>{children}</SessionProvider>;
}
