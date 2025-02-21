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
import { authenticateUser } from "@/app/actions/auth"; // ✅ Import authentication function
import { useAuth } from "@/app/context/AuthContext";

export default function LoginForm() {
  const { fetchAuthStatus } = useAuth(); // ✅ useAuth() now works correctly in a Client Component

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const router = useRouter();

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prev) => ({ ...prev, [name]: value }));
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const result = await authenticateUser(formData.username, formData.password);

    if (result.error) {
      setError(result.error);
      setLoading(false);
      return;
    }

    // ✅ Ensure authentication state updates immediately after login\
    await fetchAuthStatus(); // ✅ Explicitly fetch authentication status before refreshing
    // router.refresh(); // ✅ Force Next.js to reload and update authentication state
    router.push("/mensajes"); // ✅ Redirect to /mensajes after login
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
          <form onSubmit={handleSubmit}>
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
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
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
