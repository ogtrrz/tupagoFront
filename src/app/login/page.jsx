"use client";

import { useState } from "react";
import {
  TextField,
  Button,
  Box,
  Card,
  CardContent,
  Typography,
  CircularProgress,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

// import { authenticateUser } from "@/app/actions/auth"; // ✅ Import authentication function
// import { useAuth } from "@/app/context/AuthContext";

export default function LoginForm() {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const result = await signIn("credentials", {
      redirect: false,
      username: formData.username,
      password: formData.password,
    });

    if (result.error) {
      setError("Usuario o Contraseña invalidos");
      setLoading(false);
      return;
    }
    console.log("redirecting /mensajes");
    setLoading(false);
    router.push("/mensajes"); // Redirect after successful login
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <Card sx={{ width: 400, p: 3, boxShadow: 3 }}>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Iniciar Sesión
          </Typography>
          <form onSubmit={handleLogin}>
            <TextField
              fullWidth
              margin="normal"
              label="Usuario"
              name="username"
              value={formData.username}
              onChange={(e) =>
                setFormData({ ...formData, username: e.target.value })
              }
              required
            />
            <TextField
              fullWidth
              margin="normal"
              label="Contraseña"
              name="password"
              type="password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              required
            />
            {error && <Typography color="error">{error}</Typography>}
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              disabled={loading}
              sx={{ mt: 2 }}
            >
              {loading ? <CircularProgress size={24} /> : "Autenticado"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
}
