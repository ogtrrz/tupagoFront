"use client"; // ✅ Important to keep this

import { createContext, useContext, useState, useEffect } from "react";
import { getUsername, logout } from "@/app/actions/checkAuth";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [authenticated, setAuthenticated] = useState(false);
  const [username, setUsername] = useState("Invitado");
  const [loading, setLoading] = useState(true);

  async function fetchAuthStatus() {
    const auth = await getUsername();
    setLoading(false);
    if (auth.authenticated && auth.username) {
      setAuthenticated(true);
      setUsername(auth.username);
    } else {
      setAuthenticated(false);
      setUsername("Invitado");
    }
  }

  useEffect(() => {
    fetchAuthStatus();
  }, []);

  const handleLogout = async () => {
    await logout();
    await fetchAuthStatus();
  };

  return (
    <AuthContext.Provider value={{ authenticated, username, loading, fetchAuthStatus, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
