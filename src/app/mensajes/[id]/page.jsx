"use client";

import { useState, useEffect, use } from "react";
import { useRouter } from "next/navigation";
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
  Tooltip,
} from "@mui/material";
import PriceCheckSharpIcon from "@mui/icons-material/PriceCheckSharp";
import DoNotDisturbAltSharpIcon from "@mui/icons-material/DoNotDisturbAltSharp";
import WatchLaterSharpIcon from "@mui/icons-material/WatchLaterSharp";
import CoffeeSharpIcon from "@mui/icons-material/CoffeeSharp";
import DynamicQR from "@/components/DynamicQR";
import { requestEstatusQR } from "@/app/actions/requestEstatusQR";
import { requestEstatusCobroTelefonico } from "@/app/actions/requestEstatusCobroTelefonico";
import { fetchMensajeById } from "@/app/actions/fetchMensajesById";
import CallbacksList from "@/components/CallbacksList";

export default function MensajePage({ params }) {
  const resolvedParams = use(params);
  const { id } = resolvedParams;
  const router = useRouter();
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [estatusResponse, setEstatusResponse] = useState(null);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadData() {
      const responseData = await fetchMensajeById(id);
      if (responseData?.error === "AUTH_REQUIRED") {
        // console.error("🔴 User is not authenticated. Redirecting to login...");
        router.push("/login"); // ✅ Redirect to login on 401
      } else if (responseData?.error) {
        setError(responseData.error);
      } else {
        setData(responseData);
      }
    }

    loadData();
  }, [id]);

  if (!data) {
    return (
      <Box
        display="flex"
        justifyContent="center" // Centers horizontally
        alignItems="flex-start" // Aligns to the top
        minHeight="100vh"
        paddingTop={4} // Optional: Adds some space from the top
      >
        <CircularProgress size={50} />
      </Box>
    );
  }

  if (error) {
    return <Typography color="error">Error: {error}</Typography>;
  }
  console.log("mensaje", data);
  const hasCelular = data.numeroCelular && data.numeroCelular.trim() !== "";
  const hasExtra6Data = data.extra6 && data.extra6.trim() !== "";

  const handleSolicitarEstatus = async () => {
    setLoading(true);
    try {
      let response;

      if (data?.idMensajeCobro?.length < 11) {
        response = await requestEstatusQR(data.idMensajeCobro);
      } else {
        response = await requestEstatusCobroTelefonico(data.idMensajeCobro);
      }
      // console.log("Estatus", response);
      setEstatusResponse(response);
    } catch (err) {
      setEstatusResponse({ error: "Error al solicitar el estatus" });
    } finally {
      setLoading(false);
      setOpenSnackbar(true);
    }
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="flex-start"
      minHeight="100vh"
      paddingTop={4}
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
              <DynamicQR
                qrData={data.extra3 || ""}
                qrSizeMobile={180}
                qrSizeDesktop={300}
                commerceName={data?.cliente?.nombre}
                paymentConcept={`${data?.concepto} $${data.monto.toLocaleString(
                  "en-US",
                  {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  }
                )} ${data?.cliente?.extra1}`}
                footerText="Soportado por CoDi®"
              />
            )}

            {/* ✅ CallbacksList is only shown if extra6 has data */}
            {hasExtra6Data && (
              <Box mt={2}>
                <CallbacksList idsString={data.extra6} />
              </Box>
            )}

            {/* ✅ Button with Loading Indicator */}
            <Button
              variant="outlined"
              color="primary"
              onClick={handleSolicitarEstatus}
              disabled={loading}
              startIcon={loading ? <CircularProgress size={20} /> : null}
            >
              {loading ? "Solicitando..." : "Solicitar Estatus"}
            </Button>

            {/* ✅ Display Estatus Response */}
            {estatusResponse && (
              <Box mt={2}>
                {Array.isArray(estatusResponse) ? (
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
                          <b>Cliente:</b> {item.c.nb}
                        </Typography>
                        <Typography variant="body2">
                          <b>Identificador:</b> {item.id}
                        </Typography>
                        <Typography variant="body2">
                          <b>Rastreo:</b> {item.cr}
                        </Typography>
                        <Typography variant="body2">
                          <b>Cuenta:</b> {item.c.cb}
                        </Typography>
                        <Typography
                          variant="body2"
                          display="flex"
                          alignItems="center"
                        >
                          <b>Pago:</b>&nbsp;
                          {item.e == "1" ? (
                            <Tooltip title="Pagado" placement="top">
                              <PriceCheckSharpIcon
                                sx={{ color: "#00B389", mr: 1 }}
                              />
                            </Tooltip>
                          ) : item.e == "2" ? (
                            <Tooltip title="Denegado" placement="top">
                              <DoNotDisturbAltSharpIcon
                                sx={{ color: "#FF0000", mr: 1 }}
                              />
                            </Tooltip>
                          ) : item.e == "4" ? (
                            <Tooltip title="Pospuesto" placement="top">
                              <WatchLaterSharpIcon
                                sx={{ color: "orange", mr: 1 }}
                              />
                            </Tooltip>
                          ) : (
                            <Tooltip title="No visto" placement="top">
                              <CoffeeSharpIcon
                                sx={{ color: "#568BFF", mr: 1 }}
                              />
                            </Tooltip>
                          )}
                          {item.e == "1"
                            ? "Pagado"
                            : item.e == "2"
                            ? "Denegado"
                            : item.e == "4"
                            ? "Pospuesto"
                            : "No visto"}
                        </Typography>
                      </Box>
                    ))}
                  </>
                ) : (
                  <>
                    <Typography variant="body2">
                      <b>Cliente:</b> {estatusResponse?.detalleResultado?.c?.nb}
                    </Typography>
                    <Typography variant="body1">
                      <b>Identificador:</b>{" "}
                      {estatusResponse?.detalleResultado?.id}
                    </Typography>
                    <Typography variant="body2">
                      <b>Rastreo:</b> {estatusResponse?.detalleResultado?.cr}
                    </Typography>
                    <Typography variant="body2">
                      <b>Cuenta:</b> {estatusResponse?.detalleResultado?.c?.cb}
                    </Typography>
                    <Typography
                      variant="body2"
                      display="flex"
                      alignItems="center"
                    >
                      <b>Pago:</b>
                      {estatusResponse?.detalleResultado?.e == "1" ? (
                        <Tooltip title="Pagado" placement="top">
                          <PriceCheckSharpIcon
                            sx={{ color: "#00B389", mr: 1 }}
                          />
                        </Tooltip>
                      ) : estatusResponse?.detalleResultado?.e == "2" ? (
                        <Tooltip title="Denegado" placement="top">
                          <DoNotDisturbAltSharpIcon
                            sx={{ color: "#FF0000", mr: 1 }}
                          />
                        </Tooltip>
                      ) : estatusResponse?.detalleResultado?.e == "4" ? (
                        <Tooltip title="Pospuesto" placement="top">
                          <WatchLaterSharpIcon
                            sx={{ color: "orange", mr: 1 }}
                          />
                        </Tooltip>
                      ) : (
                        <Tooltip title="No visto" placement="top">
                          <CoffeeSharpIcon sx={{ color: "#568BFF", mr: 1 }} />
                        </Tooltip>
                      )}
                      {estatusResponse?.detalleResultado?.e == "1"
                        ? "Pagado"
                        : estatusResponse?.detalleResultado?.e == "2"
                        ? "Denegado"
                        : estatusResponse?.detalleResultado?.e == "4"
                        ? "Pospuesto"
                        : "No visto"}
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
