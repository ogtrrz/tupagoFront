"use client";

import { useState, useEffect } from "react";
import { fetchCallbacks } from "@/app/actions/fetchCallbacks";
import {
  List,
  ListItem,
  ListItemText,
  CircularProgress,
  Box,
  Typography,
  Tooltip,
} from "@mui/material";
import PriceCheckSharpIcon from "@mui/icons-material/PriceCheckSharp";
import DoNotDisturbAltSharpIcon from "@mui/icons-material/DoNotDisturbAltSharp";
import WatchLaterSharpIcon from "@mui/icons-material/WatchLaterSharp";
import CoffeeSharpIcon from "@mui/icons-material/CoffeeSharp";

export default function CallbacksList({ idsString }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // console.log("component extra6", idsString);

  useEffect(() => {
    async function loadData() {
      try {
        const response = await fetchCallbacks(idsString);
        // console.log("Callback", response);

        if (response?.error) {
          setError(response.error);
        } else {
          // ✅ Filter only records where `extra6` is NOT empty/null
          const filteredData = response.filter(
            (item) => item.resultadoMensajeCobro > 0
          );
          setData(filteredData);
        }
      } catch (err) {
        setError("Error fetching data");
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, [idsString]);

  if (loading) {
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

  return (
    <Box>
      <Typography variant="body1">
        <b>Movimientos:</b> {data.length}
      </Typography>
      {data.length === 0 ? (
        <Typography>Sin movimientos.</Typography>
      ) : (
        <List>
          {data.map((item, index) => (
            <ListItem key={index} divider>
              <ListItemText
                primary={
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
                      <b>Cliente:</b> {item.nombreCliente}
                    </Typography>
                    <Typography variant="body2">
                      <b>Identificador:</b> {item.idMensajeCobro}
                    </Typography>
                    <Typography variant="body2">
                      <b>Rastreo:</b> {item.claveRastreo}
                    </Typography>
                    <Typography variant="body2">
                      <b>Cuenta:</b> {item.numeroCuentaCliente}
                    </Typography>
                    <Typography
                      variant="body2"
                      display="flex"
                      alignItems="center"
                    >
                      <b>Pago:</b>&nbsp;
                      {item.resultadoMensajeCobro == "1" ? (
                        <Tooltip title="Pagado" placement="top">
                          <PriceCheckSharpIcon
                            sx={{ color: "#00B389", mr: 1 }}
                          />
                        </Tooltip>
                      ) : item.resultadoMensajeCobro == "2" ? (
                        <Tooltip title="Denegado" placement="top">
                          <DoNotDisturbAltSharpIcon
                            sx={{ color: "#FF0000", mr: 1 }}
                          />
                        </Tooltip>
                      ) : item.resultadoMensajeCobro == "4" ? (
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
                      {item.resultadoMensajeCobro == "1"
                        ? "Pagado"
                        : item.resultadoMensajeCobro == "2"
                        ? "Denegado"
                        : item.resultadoMensajeCobro == "4"
                        ? "Pospuesto"
                        : "No visto"}
                    </Typography>
                  </Box>
                }
              />
            </ListItem>
          ))}
        </List>
      )}
    </Box>
  );
}
