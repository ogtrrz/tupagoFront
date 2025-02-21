import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/theme";

export const metadata = {
  title: "TuPago.click, CoDi pagos gratuitos.",
  description:
    // TODO corregir
    "TuPago.click, CoDi pagos gratuitos. bla bla bla ...",
};

// A separate export for viewport
export const viewport = {
  width: "device-width",
  initialScale: 1.0,
  // maximumScale: 1.0,
};

export default function RootLayout({ children }) {
  return (
    <html lang="es-MX">
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
