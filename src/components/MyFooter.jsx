import React from "react";
// import NextLink from "next/link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Stack from "@mui/material/Stack";
import PolicyIcon from "@mui/icons-material/Policy";
import ArchitectureIcon from "@mui/icons-material/Architecture";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import CookieIcon from "@mui/icons-material/Cookie";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import CoDiText from "./CoDiText";

// TODO autorizado por llenarlo con datos banxico y logo de CoDi

const MyFooter = () => {
  return (
    <React.Fragment>
      <Box sx={{ m: 10 }}></Box>
      <Grid
        container
        sx={{ bgcolor: "primary.main", color: "white", pb: 5, pl: 3 }}
        spacing={{ xs: 3, md: 6 }}
        columns={{ xs: 6, md: 12 }}
      >
        <Grid xs={5} item={true}>
          <Stack
            direction="row"
            alignItems="center"
            gap={1}
            sx={{
              mb: 1,
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
            <LinkedInIcon />
            <Typography variant="body2">Autorizados por ...</Typography>
            <ArrowForwardIcon />
          </Stack>
          <Stack
            direction="row"
            alignItems="center"
            gap={1}
            sx={{
              mb: 1,
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
            <PermContactCalendarIcon />
            <Typography variant="body2">Datos de Contacto.</Typography>
            <ArrowForwardIcon />
          </Stack>
          <Stack
            direction="row"
            alignItems="center"
            gap={1}
            sx={{
              mb: 1,
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
            <ContactMailIcon />
            <Typography variant="body2">Forma de Contacto.</Typography>
            <ArrowForwardIcon />
          </Stack>
          <br />
          <Stack direction="row" alignItems="center" gap={1}>
            <CookieIcon />
            <Typography variant="body2">
              Cookies de sesión y autenticación.
            </Typography>
          </Stack>
        </Grid>
        <Grid xs={5} item={true}>
          <Stack
            direction="row"
            alignItems="center"
            gap={1}
            sx={{
              mb: 1,
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
            <GitHubIcon />
            <Typography variant="body2">TuPago.click GitHub.</Typography>
            <ArrowForwardIcon />
          </Stack>
          <Stack
            direction="row"
            alignItems="center"
            gap={1}
            sx={{
              mb: 1,
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
            <ArchitectureIcon />
            <Typography variant="body2">Manual API.</Typography>
            <ArrowForwardIcon />
          </Stack>
          <Stack
            direction="row"
            alignItems="center"
            gap={1}
            sx={{
              mb: 1,
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
            <PolicyIcon />
            <Typography variant="body2">Politicas de privacidad.</Typography>
            <ArrowForwardIcon />
          </Stack>
          <br />
          <Typography variant="body2">© 2025 TuPago.click.</Typography>
        </Grid>
      </Grid>
      <Box component="section" sx={{ p: 2 }}>
        <CoDiText />
      </Box>
    </React.Fragment>
  );
};

export default React.memo(MyFooter);
