import * as React from "react";
import Box from "@mui/material/Box";
// import Image from "next/image";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material";

export default function MyHeaderPrincipal({ imageURL, label }) {
  // const imageURL = "/principal.webp";
  return (
    <React.Fragment>
      <Stack
        bgcolor="#000"
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{ paddingBottom: "36px" }}
      >
        <h1 className="neonText">TuPago.click</h1>
        {/* <h2 className="neonText">
          Sin comisión
          <br />
          Pagos fáciles, seguros y con conciliación automática
          <br />
          integrado con todos los bancos de México
          <br />
          presenciales (NFC) y remotos (QR)
        </h2> */}
        <Typography variant="h3" color="neon.main" align="center">
          Sin comisión
          <br />
          Pagos fáciles, seguros y con conciliación automática
          <br />
          integrado con todos los bancos de México
          <br />
          presenciales (NFC) y remotos (QR)
        </Typography> 
      </Stack>
    </React.Fragment>
  );
}
