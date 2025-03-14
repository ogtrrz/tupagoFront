import { Typography, Link as MuiLink } from "@mui/material";
import NextLink from "next/link";
import "@fontsource/righteous"; // Import Righteous font
import "@fontsource/open-sans"; // Import Open Sans font

export default function CoDiText() {
  return (
    <MuiLink
      component={NextLink}
      href="https://www.codi.org.mx/"
      target="_blank" // ✅ Opens in a new tab
      rel="noopener noreferrer" // ✅ Security best practice
      underline="none"
      sx={{ color: "black", textDecoration: "none" }} // ✅ Ensures black text and removes default underline
    >
      <Typography
        component="p"
        sx={{
          fontSize: "16px",
          marginTop: "10px",
          marginBottom: "10px",
          color: "black", // ✅ Ensures typography is also black
        }}
      >
        <span style={{ fontFamily: "Righteous, sans-serif" }}>
          CoDi®, CoDi Cobro Digital®
        </span>{" "}
        <span style={{ fontFamily: "Open Sans, sans-serif" }}>
          y sus logotipos, son marcas registradas del Banco de México, y las
          mismas son utilizadas bajo licencia.
        </span>
      </Typography>
    </MuiLink>
  );
}
