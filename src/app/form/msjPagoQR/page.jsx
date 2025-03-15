"use client";

import { useState, useEffect } from "react";
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
import DynamicQR from "@/components/DynamicQR";
import { sendMensajePagoQR } from "@/app/actions/sendMensajePagoQR"; // Import server action
import { useRouter } from "next/navigation"; // ✅ Import useRouter for navigation
import { mailMensajePagoQR } from "@/app/actions/mailMensajePagoQR"; // ✅ Updated import

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

  // ✅ Ensure component is client-only to prevent hydration errors
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // ✅ Ensures this runs only in the browser
  }, []);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (emailError) return;
  
    setLoading(true);
    setError(null);
  
    try {
      // ✅ STEP 1: Send the payment data to create the QR
      const qrResponse = await sendMensajePagoQR(formData);
  
      console.log("✅ QR Response:", qrResponse); // Debugging
  
      if (qrResponse.error) {
        throw new Error(qrResponse.error);
      }
  
      // ✅ STEP 2: Ensure `qrResponse` has the expected structure
      const qrDataFormatted = {
        mensaje: qrResponse.mensaje || "", // Ensure it exists
        emisor: qrResponse.emisor || "Desconocido",
        banco: qrResponse.banco || "Desconocido",
      };
  
      // ✅ STEP 3: Update State and Open Modal
      setQrData(qrDataFormatted); // Ensure it’s correctly formatted
      setDialogOpen(true);
  
      // ✅ STEP 4: Send Email with the QR Data
      const emailResponse = await mailMensajePagoQR({
        ...formData,
        qrData: qrResponse, // Pass the QR response to the email function
      });
  
      console.log("✅ Email Response:", emailResponse); // Debugging
  
      if (emailResponse.error) {
        throw new Error(emailResponse.error);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
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

  // ✅ Prevent SSR rendering issues by checking if the component is mounted
  if (!isClient) {
    return null; // Avoid hydration mismatch
  }

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
              label="Correo Electrónico"
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
          {/* ✅ Ensure QR Code only renders on the client to prevent hydration issues */}
          {qrData && (
            //<QRCodeCanvas value={qrData || ""} size={248} level="L" />
            <DynamicQR
              qrData={JSON.stringify(qrData?.mensaje, null, 2 ) || ""}
              qrSizeMobile={180}
              qrSizeDesktop={300}
              commerceName={qrData?.emisor || "No disponible"}
              paymentConcept={`${
                formData?.concepto || "Concepto desconocido"
              } $${(formData?.monto || 0).toLocaleString("en-US", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })} ${qrData?.banco || "No disponible"}`}
              footerText="Soportado por CoDi®"
            />
          )}
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
