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

export default function MensajePagoTelefonicoForm() {
  const [formData, setFormData] = useState({
    key: "",
    monto: "",
    concepto: "",
    referenciaNumerica: "",
    numeroCelular: "",
    vigencia: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch(`${process.env.JSONPATH}payments/msjpagotelefonico`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${process.env.NEXT_PUBLIC_AUTH_TOKEN}`,
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit payment");
      }

      alert("Payment submitted successfully!");
      setFormData({
        key: "",
        monto: "",
        concepto: "",
        referenciaNumerica: "",
        numeroCelular: "",
        vigencia: "",
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
      <Card sx={{ width: 400, p: 3, boxShadow: 3 }}>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Mensaje Pago Telefónico
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField fullWidth margin="normal" label="Key" name="key" value={formData.key} onChange={handleChange} required />
            <TextField fullWidth margin="normal" label="Monto" name="monto" type="number" value={formData.monto} onChange={handleChange} required />
            <TextField fullWidth margin="normal" label="Concepto" name="concepto" value={formData.concepto} onChange={handleChange} required />
            <TextField fullWidth margin="normal" label="Referencia Numérica" name="referenciaNumerica" type="number" value={formData.referenciaNumerica} onChange={handleChange} required />
            <TextField fullWidth margin="normal" label="Número Celular" name="numeroCelular" type="number" value={formData.numeroCelular} onChange={handleChange} required />
            <TextField fullWidth margin="normal" label="Vigencia" name="vigencia" type="number" value={formData.vigencia} onChange={handleChange} required />
            {error && <Typography color="error">{error}</Typography>}
            <Button type="submit" variant="contained" color="primary" fullWidth disabled={loading} sx={{ mt: 2 }}>
              {loading ? <CircularProgress size={24} /> : "Enviar Pago"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
}
