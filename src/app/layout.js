import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/theme";
// import SearchAppBar from "@/components/SearchAppBar";
import MyFooter from "@/components/MyFooter";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import DynamicBreadcrumbs from "@/components/DynamicBreadcrumbs";

export const metadata = {
  title: "TuPago.click, CoDi pagos gratuitos.",
  description: "TuPago.click, CoDi pagos gratuitos. bla bla bla ...",
};

export const viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export default function RootLayout({ children }) {
  return (
    <html lang="es-MX">
      <AppRouterCacheProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <body>
            <main style={{ paddingTop: "80px" }}>
              <DynamicBreadcrumbs />
              {children}
            </main>
            <MyFooter />
            <Analytics />
            <SpeedInsights />
          </body>
        </ThemeProvider>
      </AppRouterCacheProvider>
    </html>
  );
}
