"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import NextLink from "next/link";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Link as MuiLink,
  Pagination,
  Box,
  CircularProgress,
  Tooltip,
} from "@mui/material";
import QrCode2SharpIcon from "@mui/icons-material/QrCode2Sharp";
import SendToMobileSharpIcon from "@mui/icons-material/SendToMobileSharp";
import PriceCheckSharpIcon from "@mui/icons-material/PriceCheckSharp";
import DoNotDisturbAltSharpIcon from "@mui/icons-material/DoNotDisturbAltSharp";
import WatchLaterSharpIcon from "@mui/icons-material/WatchLaterSharp";
import CoffeeSharpIcon from "@mui/icons-material/CoffeeSharp";

const PAGE_SIZE = 10;

export default function MensajesTable() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const page = parseInt(searchParams.get("page") ?? "1", 10);
  const [mensajes, setMensajes] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [totalMessages, setTotalMessages] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchMensajes() {
      try {
        setLoading(true);
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_APP_URL}/api/mensajesadd?page=${
            page - 1
          }&size=${PAGE_SIZE}&eagerload=true`
        );
        if (!res.ok) {
          throw new Error("Failed to fetch messages");
        }
        const data = await res.json();
        const totalMessagesCount =
          parseInt(res.headers.get("X-Total-Count")) || 0;
        setMensajes(data);
        setTotalMessages(totalMessagesCount);
        setTotalPages(Math.ceil(totalMessagesCount / PAGE_SIZE));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchMensajes();
  }, [page]);

  if (loading) {
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
  }

  if (error) {
    return <Typography color="error">Error: {error}</Typography>;
  }

  return (
    <>
      <TableContainer component={Paper}>
        <Table aria-label="mensajes table">
          <TableHead>
            <TableRow>
              <TableCell>
                <b>Cliente</b>
              </TableCell>
              <TableCell>
                <b>Referencia</b>
              </TableCell>
              <TableCell>
                <b>Concepto</b>
              </TableCell>
              <TableCell>
                <b />
              </TableCell>
              <TableCell align="right">
                <b>Monto ($)</b>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {mensajes.map((mensaje) => (
              <TableRow key={mensaje.id} hover>
                <TableCell>
                  <NextLink href={`/mensajes/${mensaje.id}`} passHref legacyBehavior>
                    <MuiLink underline="none">
                      <Typography variant="body1">
                        {mensaje?.nombreCliente}
                        {mensaje?.numeroCelular}
                      </Typography>
                    </MuiLink>
                  </NextLink>
                </TableCell>
                <TableCell>
                  <Box display="flex" alignItems="center">
                    {mensaje?.idMensajeCobro?.length < 11 ? (
                      <Tooltip title="Pago por QR" placement="left">
                        <QrCode2SharpIcon />
                      </Tooltip>
                    ) : (
                      <Tooltip title="Pago Telefónico" placement="left">
                        <SendToMobileSharpIcon />
                      </Tooltip>
                    )}
                    <Typography variant="body2" ml={1}>
                      {mensaje?.referencia}
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell>{mensaje?.concepto}</TableCell>
                <TableCell align="right">
                  <Box display="flex" justifyContent="flex-end" alignItems="center">
                    {mensaje.edoPet === 0 || mensaje.edoPet === 1 ? (
                      <Tooltip title="Pagado" placement="left">
                        <PriceCheckSharpIcon sx={{ color: "#00B389" }} />
                      </Tooltip>
                    ) : mensaje.edoPet === 2 ? (
                      <Tooltip title="Denegado" placement="left">
                        <DoNotDisturbAltSharpIcon sx={{ color: "#FF0000" }} />
                      </Tooltip>
                    ) : mensaje.edoPet === 4 ? (
                      <Tooltip title="Pospuesto" placement="left">
                        <WatchLaterSharpIcon sx={{ color: "orange" }} />
                      </Tooltip>
                    ) : (
                      <Tooltip title="No visto" placement="left">
                        <CoffeeSharpIcon sx={{ color: "#568BFF" }} />
                      </Tooltip>
                    )}
                  </Box>
                </TableCell>

                <TableCell align="right">
                  <Typography variant="body2">
                    $
                    {mensaje?.monto?.toLocaleString("en-US", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {totalMessages > 20 && (
        <Box display="flex" justifyContent="center" mt={2}>
          <Pagination
            count={totalPages}
            page={page}
            size="small"
            onChange={(event, value) => {
              router.push(`?page=${value}`, { scroll: false });
            }}
          />
        </Box>
      )}
    </>
  );
}
