import { createTheme } from "@mui/material/styles";

import "@fontsource/tilt-neon";
import "@fontsource/open-sans";
// import { purple, red, blueGrey } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    // type: "dark",
    primary: {
      main: "#4267B2",
    },
    secondary: {
      // main: "#ff0054",
      main: "#f40"
    },
    neon: { main: "#08f" },
    text: {
      main: "#c0c0c0",
      secondary: "rgba(0,0,0,0.61)",
      disabled: "rgba(0,0,0,0.49)",
    },
  },
  typography: {
    fontFamily: "Tilt Neon",
    h1: { fontSize: 48 },
    h2: { fontSize: 27 },
    h3: { fontSize: 26 },
    h4: { fontSize: 25 },
    h5: { fontSize: 24 },
    h6: { fontSize: 23 },
    subtitle1: {
      fontFamily: "Open Sans",
      fontSize: 26,
    },
    subtitle2: {
      fontFamily: "Open Sans",
      fontSize: 19,
    },
    body1: {
      fontFamily: "Open Sans",
      fontSize: 18,
    },
    body2: {
      fontFamily: "Open Sans",
      fontSize: 16,
    },
    caption: {
      fontFamily: "Open Sans",
      fontSize: 24,
    },
    overline: {
      fontFamily: "Open Sans",
      fontSize: 24,
    },
  },
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
    MuiSwitch: {
      root: {
        width: 42,
        height: 26,
        padding: 0,
        margin: 8,
      },
      switchBase: {
        padding: 1,
        "&$checked, &$colorPrimary$checked, &$colorSecondary$checked": {
          transform: "translateX(16px)",
          color: "#fff",
          "& + $track": {
            opacity: 1,
            border: "none",
          },
        },
      },
      thumb: {
        width: 24,
        height: 24,
      },
      track: {
        borderRadius: 13,
        border: "1px solid #bdbdbd",
        backgroundColor: "#fafafa",
        opacity: 1,
        transition:
          "background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
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
  spacing: 8,
  shape: {
    borderRadius: 4,
  },
  // direction: "rtl",
});
