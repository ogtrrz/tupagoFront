"use client";

import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  Stack,
  CircularProgress,
} from "@mui/material";
import { fetchClientes } from "@/app/actions/fetchClientes";

export default function ClientePage() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getData() {
      const result = await fetchClientes();
      if (result?.error) {
        setError(result.error);
      } else {
        setData(result);
      }
    }
    getData();
  }, []);

  if (error) return <Typography color="error">{error}</Typography>;
  if (!data)
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <CircularProgress />
      </Box>
    );

  // Function to clean keys and remove headers/footers
  const cleanKey = (key) => {
    if (!key) return "N/A";
    return (
      key
        .replace(/-----.*?-----/g, "")
        .trim()
        .slice(0, 10) +
      "..." +
      key
        .replace(/-----.*?-----/g, "")
        .trim()
        .slice(-10)
    );
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <Card sx={{ width: 500, p: 3, boxShadow: 3 }}>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Detalle del Cliente
          </Typography>
          <Stack spacing={2}>
            <Typography variant="body1">
              <b>Key:</b> {data.cliente.key}
            </Typography>
            <Typography variant="body1">
              <b>Nombre:</b> {data.cliente.nombre}
            </Typography>
            <Typography variant="body1">
              <b>Cuenta Bancaria:</b> {data.cliente.cuentaBancaria}
            </Typography>
            <Typography variant="body1">
              <b>Clave Institución:</b> {data.cliente.claveInstitucion} {" - "}{" "}
              {data.catalogoInstitucion.nombreCorto}
            </Typography>
            <Typography variant="body1">
              <b>Tipo de Cuenta:</b> {data.cliente.tipoCuenta}
            </Typography>
            <Typography variant="body1">
              <b>Número Certificado:</b> {data.cliente.numeroCertificado}
            </Typography>
            <Typography variant="body1">
              <b>Alias Certificado:</b> {data.cliente.aliasCertificado}
            </Typography>
            <Typography variant="body1">
              <b>Dígito Verificador:</b> {data.cliente.digitoVerificador}
            </Typography>
            <Typography variant="body1">
              <b>Pago Comisión:</b> {data.cliente.pagoComision}
            </Typography>
            <Typography variant="body1">
              <b>Tipo de Pago:</b> {data.cliente.tipoPago}
            </Typography>
            <Typography variant="body1">
              <b>Key Source:</b> {cleanKey(data.cliente.keySource)}
            </Typography>
            <Typography variant="body1">
              <b>Key Pem:</b> {cleanKey(data.cliente.keyPem)}
            </Typography>
            <Typography variant="body1">
              <b>Certificado Pem:</b> {cleanKey(data.cliente.certificadoPem)}
            </Typography>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
}
