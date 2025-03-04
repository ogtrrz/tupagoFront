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
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { sendMensajePagoTelefonico } from "@/app/actions/sendMensajePagoTelefonico"; // ✅ Import server action
import { useRouter } from "next/navigation"; // ✅ Import for navigation

export default function MensajePagoTelefonicoForm() {
  const [formData, setFormData] = useState({
    monto: "",
    concepto: "",
    referenciaNumerica: "",
    numeroCelular: "",
    vigencia: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const router = useRouter(); // ✅ Router for redirection

  // ✅ Handle Form Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // ✅ Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const result = await sendMensajePagoTelefonico(formData);

    if (result.success) {
      setDialogOpen(true); // ✅ Open success dialog
      setFormData({
        monto: "",
        concepto: "",
        referenciaNumerica: "",
        numeroCelular: "",
        vigencia: "",
      });
    } else {
      setError(result.error);
    }

    setLoading(false);
  };

  // ✅ Reset form & close dialog
  const handleNewMessage = () => {
    setDialogOpen(false);
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
            Mensaje Pago Telefónico
          </Typography>

          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              margin="normal"
              label="Monto"
              name="monto"
              type="number"
              value={formData.monto}
              onChange={handleChange}
              required
            />
            <TextField
              fullWidth
              margin="normal"
              label="Concepto"
              name="concepto"
              value={formData.concepto}
              onChange={handleChange}
              required
            />
            <TextField
              fullWidth
              margin="normal"
              label="Referencia Numérica"
              name="referenciaNumerica"
              type="number"
              value={formData.referenciaNumerica}
              onChange={handleChange}
              required
            />
            <TextField
              fullWidth
              margin="normal"
              label="Número Celular"
              name="numeroCelular"
              type="number"
              value={formData.numeroCelular}
              onChange={handleChange}
              required
            />
            <TextField
              fullWidth
              margin="normal"
              label="Vigencia"
              name="vigencia"
              type="number"
              value={formData.vigencia}
              onChange={handleChange}
              required
            />

            {error && (
              <Typography color="error" sx={{ mt: 2 }}>
                {error}
              </Typography>
            )}

            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              disabled={loading}
              sx={{ mt: 2 }}
            >
              {loading ? <CircularProgress size={24} /> : "Enviar Pago"}
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* ✅ Success Dialog */}
      <Dialog
        open={dialogOpen}
        onClose={handleNewMessage}
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle>Pago Telefónico Enviado</DialogTitle>
        <DialogContent>
          <Typography variant="body1">
            Tu pago telefónico ha sido generado correctamente.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              gap: 2,
            }}
          >
            <Button onClick={handleNewMessage} variant="contained" color="primary">
              Nuevo Pago Telefónico
            </Button>
            <Button onClick={() => router.push("/mensajes")} variant="outlined" color="primary">
              Cerrar
            </Button>
          </Box>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
