"use client";

import { useState, useEffect, useRef } from "react";
import { Box, Card, CardContent, Typography, CircularProgress, Button } from "@mui/material";
import { QRCodeCanvas } from "qrcode.react";
import html2canvas from "html2canvas";
import "@fontsource/roboto-condensed";

export default function DynamicQR({
  qrData = "https://tupago.click", // ✅ Default QR data
  qrSizeMobile = 248, // ✅ Default mobile size
  qrSizeDesktop = 248, // ✅ Default desktop size
  commerceName = "NOMBRE DEL COMERCIO", // ✅ Customizable Commerce Name
  paymentConcept = "CONCEPTO DE PAGO $400 BANCO", // ✅ Customizable Payment Concept
  footerText = "SOPORTADO POR CODI®", // ✅ Customizable Footer
  fileName = "qr_code", // ✅ Default filename for download
}) {
  const [qrSize, setQrSize] = useState(qrSizeDesktop); // Default size
  const [loading, setLoading] = useState(true);
  const qrRef = useRef(null); // ✅ Ref for the QR container

  // Adjust QR code size based on screen width
  useEffect(() => {
    const handleResize = () => {
      setQrSize(window.innerWidth < 600 ? qrSizeMobile : qrSizeDesktop);
    };

    handleResize(); // Set initial size
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [qrSizeMobile, qrSizeDesktop]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000); // Simulate loading
  }, []);

  // ✅ Function to capture & download QR Box as an image
  const handleDownload = async () => {
    if (!qrRef.current) return;

    const canvas = await html2canvas(qrRef.current, { backgroundColor: "#fff" });
    const image = canvas.toDataURL("image/png");

    // Create a download link
    const link = document.createElement("a");
    link.href = image;
    link.download = `${fileName}.png`;
    link.click();
  };

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
        <CircularProgress size={50} />
      </Box>
    );
  }

  return (
    <Box display="flex" flexDirection="column" alignItems="center" minHeight="10vh">
      <Card sx={{ width: 400, p: 3, boxShadow: 0 }} ref={qrRef}>
        <CardContent>
          <Typography variant="body2" align="center" sx={{ fontFamily: "Roboto Condensed, sans-serif", fontWeight: 700 }}>
            {commerceName}
          </Typography>
          <Typography variant="body2" align="center" sx={{ fontFamily: "Roboto Condensed, sans-serif", fontWeight: 700 }}>
            {paymentConcept}
          </Typography>

          {/* QR Code Container */}
          <Box display="flex" justifyContent="center" mt={1} position="relative">
            <QRCodeCanvas value={qrData} size={qrSize} level="L" style={{ position: "relative" }} />
          </Box>

          <Typography variant="body2" align="center" mt={1} sx={{ fontFamily: "Roboto Condensed, sans-serif", fontWeight: 700 }}>
            {footerText}
          </Typography>
          <Typography variant="body2" align="center" mt={1} >
            Generado por https://TuPago.click
          </Typography>
        </CardContent>
      </Card>

      {/* ✅ Download Button */}
      <Button variant="contained" color="primary" sx={{ mt: 2 }} onClick={handleDownload}>
        Descargar como Imagen
      </Button>
    </Box>
  );
}
