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
  Alert,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { QRCodeCanvas } from "qrcode.react";
import { sendMensajePagoQR } from "@/app/actions/sendMensajePagoQR"; // Import server action
import { useRouter } from "next/navigation"; // ✅ Import useRouter for navigation

export default function MensajePagoQRForm() {
  const [formData, setFormData] = useState({
    monto: "",
    concepto: "",
    referenciaNumerica: "",
    nombreCliente: "",
    email: "",
    vigencia: "",
  });
  const [emailError, setEmailError] = useState(""); // ✅ Email error state
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [qrData, setQrData] = useState(""); // Store response for QR
  const [dialogOpen, setDialogOpen] = useState(false); // Dialog state
  const router = useRouter(); // ✅ Router for redirection

  // ✅ Email validation regex pattern
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Handle Form Input Change with Email Validation
  const handleChange = (e) => {
    const { name, value } = e.target;

    // ✅ Validate email when user types
    if (name === "email") {
      if (!emailRegex.test(value)) {
        setEmailError("Correo electrónico no válido.");
      } else {
        setEmailError(""); // Clear error if valid
      }
    }

    setFormData({ ...formData, [name]: value });
  };

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ Prevent form submission if email is invalid
    if (emailError) return;

    setLoading(true);
    setError(null);

    const result = await sendMensajePagoQR(formData);

    if (result.error) {
      setError(result.error);
    } else {
      setQrData(JSON.stringify(result, null, 2)); // Save response data
      setDialogOpen(true); // Open QR Dialog

      setFormData({
        monto: "",
        concepto: "",
        referenciaNumerica: "",
        nombreCliente: "",
        email: "",
        vigencia: "",
      });
    }

    setLoading(false);
  };

  const handleNewMessage = () => {
    setFormData({
      monto: "",
      concepto: "",
      referenciaNumerica: "",
      nombreCliente: "",
      email: "",
      vigencia: "",
    });
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
            Mensaje Pago QR
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
              label="Nombre Cliente"
              name="nombreCliente"
              value={formData.nombreCliente}
              onChange={handleChange}
              required
            />
            <TextField
              fullWidth
              margin="normal"
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              error={!!emailError} // ✅ Show error state
              helperText={emailError} // ✅ Show error message
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
              <Alert variant="filled" severity="error" sx={{ mt: 2 }}>
                {error}
              </Alert>
            )}

            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              disabled={loading || !!emailError} // ✅ Prevent submit if email is invalid
              sx={{ mt: 2 }}
            >
              {loading ? <CircularProgress size={24} /> : "Enviar Pago"}
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* ✅ Dialog with QR Code & Response Data */}
      <Dialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle>Pago QR Generado</DialogTitle>
        <DialogContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <QRCodeCanvas value={qrData || ""} size={248} level="L" />
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
            <Button
              onClick={handleNewMessage}
              variant="contained"
              color="primary"
            >
              Nuevo Pago QR
            </Button>
            <Button
              onClick={() => router.push("/mensajes")}
              variant="outlined"
              color="primary"
            >
              Cerrar
            </Button>
          </Box>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
