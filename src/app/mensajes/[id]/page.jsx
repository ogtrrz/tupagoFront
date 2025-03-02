"use client";

import { useState, useEffect, use } from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  Stack,
  Button,
  Snackbar,
  Alert,
  CircularProgress,
} from "@mui/material";
import { QRCodeCanvas } from "qrcode.react";
import { requestEstatusQR } from "@/app/actions/requestEstatusQR"; // ✅ Import the server action
import { requestEstatusCobroTelefonico } from "@/app/actions/requestEstatusCobroTelefonico";
import { fetchMensajeById } from "@/app/actions/fetchMensajesById"; // ✅ Import the server action

export default function MensajePage({ params }) {
  const resolvedParams = use(params); // ✅ Use `use()` to unwrap the Promise
  const { id } = resolvedParams;

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [estatusResponse, setEstatusResponse] = useState(null);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [loading, setLoading] = useState(false); // ✅ Loading state

  useEffect(() => {
    async function loadData() {
      const responseData = await fetchMensajeById(id);
      if (responseData?.error) {
        setError(responseData.error);
      } else {
        setData(responseData);
      }
    }

    loadData();
  }, [id]);

    // ✅ Show loading indicator while fetching data
    if (!data) {
      return (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="100vh"
        >
          <CircularProgress size={50} />
        </Box>
      );
    }
  
    if (error) {
      return <Typography color="error">Error: {error}</Typography>;
    }

  const hasCelular = data.numeroCelular && data.numeroCelular.trim() !== "";

  const handleSolicitarEstatus = async () => {
    setLoading(true); // ✅ Start loading
    try {
      let response;
      // console.log("data", data);

      if (data?.idMensajeCobro?.length < 11) {
        // ✅ Use existing QR request action
        response = await requestEstatusQR(data.idMensajeCobro);
      } else {
        // ✅ Use new telefonic payment request action
        response = await requestEstatusCobroTelefonico(data.idMensajeCobro);
      }
      // console.log("response", response);

      setEstatusResponse(response);
    } catch (err) {
      console.log("err", err);

      setEstatusResponse({ error: "Error al solicitar el estatus" });
    } finally {
      setLoading(false); // ✅ Stop loading
      setOpenSnackbar(true);
    }
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
            Detalle del Mensaje
          </Typography>
          <Stack spacing={2}>
            {!hasCelular && (
              <Typography variant="body1">
                <b>Cliente:</b> {data.nombreCliente}
              </Typography>
            )}
            {hasCelular && (
              <Typography variant="body1">
                <b>Celular:</b> {data.numeroCelular}
              </Typography>
            )}
            <Typography variant="body1">
              <b>Referencia:</b> {data.referencia}
            </Typography>
            <Typography variant="body1">
              <b>Concepto:</b> {data.concepto}
            </Typography>
            <Typography variant="body1">
              <b>Monto:</b> $
              {data.monto.toLocaleString("en-US", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </Typography>
            <Typography variant="body1">
              <b>Fecha Solicitud:</b>{" "}
              {new Date(data.timestampSolicitud).toLocaleString("es-ES")}
            </Typography>
            <Typography variant="body1">
              <b>Fecha Límite:</b>{" "}
              {new Date(data.timestampLimite).toLocaleString("es-ES")}
            </Typography>
            <Typography variant="body1">
              <b>ID Mensaje:</b> {data.idMensajeCobro}
            </Typography>
            <Typography variant="body1">
              <b>Estatus:</b> {data.edoPet}
            </Typography>

            {!hasCelular && (
              <Box display="flex" justifyContent="center" mt={2}>
                <QRCodeCanvas value={data.extra3 || ""} size={248} level="L" />
              </Box>
            )}

            {/* ✅ Button with Loading Indicator */}
            <Button
              variant="contained"
              color="primary"
              onClick={handleSolicitarEstatus}
              disabled={loading} // ✅ Disable while loading
              startIcon={loading ? <CircularProgress size={20} /> : null} // ✅ Show loader
            >
              {loading ? "Solicitando..." : "Solicitar Estatus"}
            </Button>

            {/* ✅ Display Estatus Response */}
            {estatusResponse && (
              <Box mt={2}>
                {Array.isArray(estatusResponse) ? (
                  // ✅ Handle the array response (Second Response)
                  <>
                    <Typography variant="body1">
                      <b>Estatus:</b> {estatusResponse.length}
                    </Typography>
                    {estatusResponse.map((item, index) => (
                      <Box
                        key={index}
                        sx={{
                          mb: 1,
                          p: 1,
                          border: "1px solid #ccc",
                          borderRadius: 2,
                        }}
                      >
                        <Typography variant="body2">
                          <b>Identificador:</b> {item.id}
                        </Typography>
                        <Typography variant="body2">
                          <b>Rastreo:</b> {item.cr}
                        </Typography>
                        <Typography variant="body2">
                          <b>Cuenta:</b> {item.c.nc}
                        </Typography>
                        <Typography variant="body2">
                          <b>Cliente:</b> {item.c.nb}
                        </Typography>
                      </Box>
                    ))}
                  </>
                ) : (
                  // ✅ Handle the single object response (First Response)
                  <>
                    <Typography variant="body1">
                      <b>Identificador:</b>{" "}
                      {estatusResponse?.detalleResultado?.id}
                    </Typography>
                    <Typography variant="body2">
                      <b>Rastreo:</b> {estatusResponse?.detalleResultado?.cr}
                    </Typography>
                    <Typography variant="body2">
                      <b>Cuenta:</b> {estatusResponse?.detalleResultado?.c?.nc}
                    </Typography>
                    <Typography variant="body2">
                      <b>Cliente:</b> {estatusResponse?.detalleResultado?.c?.nb}
                    </Typography>
                  </>
                )}
              </Box>
            )}
          </Stack>
        </CardContent>
      </Card>

      {/* ✅ Snackbar Notification */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={5000}
        onClose={() => setOpenSnackbar(false)}
      >
        <Alert
          onClose={() => setOpenSnackbar(false)}
          severity={estatusResponse?.error ? "error" : "success"}
          variant="filled"
        >
          {estatusResponse?.error || "Estatus solicitado correctamente."}
        </Alert>
      </Snackbar>
    </Box>
  );
}
