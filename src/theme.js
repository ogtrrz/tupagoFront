"use client";
import { createTheme } from "@mui/material/styles";
// import "@fontsource/poppins";
// import '@fontsource/gravitas-one';
// import "@fontsource/montserrat";
//import "@fontsource/roboto" //tipografia solicitada en el manual Se usará la tipografía Roboto Condensed - Bold para colocar la información del pago alrededor del QR.
// import "@fontsource/righteous"; //palabra Codi
// import "@fontsource/open-sans"; //La tipografía Calibri, se utilizará para títulos, subtítulos, aplicación de textos y para el uso de botones en distintas plataformas.


const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#095D57",
    },
    secondary: {
      main: "#380232",
    },
    text: {
      secondary: "rgba(0,0,0,0.61)",
      disabled: "rgba(0,0,0,0.49)",
    },
    error: { main: "#FF0000" },
    warning: { main: "#F5EE9E" },
    info: { main: "#568BFF" },
    success: { main: "#00B389" },
    background: { default: "#FDFFFC" },
  },
  breakpoints: {
    values: { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
  },
  shape: {
    borderRadius: 4,
  },
  spacing: 8,
  overrides: {
    MuiAppBar: {
      colorInherit: {
        backgroundColor: "#689f38",
        color: "#fff",
      },
    },
    MuiButton: {
      root: {
        background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
        border: 0,
        borderRadius: 3,
        boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
        color: "white",
        height: 48,
        padding: "0 30px",
      },
    },
  },
  props: {
    MuiAppBar: {
      color: "inherit",
    },
    MuiButtonBase: {
      disableRipple: true,
    },
    MuiList: {
      dense: true,
    },
    MuiMenuItem: {
      dense: true,
    },
    MuiTable: {
      size: "small",
    },
    MuiButton: {
      size: "small",
    },
    MuiButtonGroup: {
      size: "small",
    },
    MuiCheckbox: {
      size: "small",
    },
    MuiFab: {
      size: "small",
    },
    MuiFormControl: {
      margin: "dense",
      size: "small",
    },
    MuiFormHelperText: {
      margin: "dense",
    },
    MuiIconButton: {
      size: "small",
    },
    MuiInputBase: {
      margin: "dense",
    },
    MuiInputLabel: {
      margin: "dense",
    },
    MuiRadio: {
      size: "small",
    },
    MuiSwitch: {
      size: "small",
    },
    MuiTextField: {
      margin: "dense",
      size: "small",
    },
    MuiTooltip: {
      arrow: true,
    },
  },
  typography: {
    // fontFamily: "Poppins, sans-serif",
    // h1: { fontFamily: "Montserrat, sans-serif", fontSize: 48 },
    // h2: { fontFamily: "Montserrat, sans-serif", fontSize: 27 },
    // h3: { fontFamily: "Montserrat, sans-serif", fontSize: 26 },
    // h4: { fontFamily: "Montserrat, sans-serif", fontSize: 25 },
    // h5: { fontFamily: "Montserrat, sans-serif", fontSize: 24 },
    // h6: { fontSize: 23 },
    // subtitle0: { fontSize: 23 },
    // subtitle1: { fontFamily: "Montserrat, sans-serif", fontSize: 26 },
    // subtitle2: { fontFamily: "Montserrat, sans-serif", fontSize: 19 },
    // body1: { fontSize: 16 },
    // body2: { fontSize: 14 },
    palette: {
      primary: {
        main: "#228B22",
      },
      secondary: {
        main: "#f50057",
      },
    },
    // fontFamily: "var(--font-poppins)",
  },
});

export default theme;
