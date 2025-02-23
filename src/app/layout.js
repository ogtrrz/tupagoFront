import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/theme";
import SearchAppBar from "@/components/SearchAppBar";
import MyFooter from "@/components/MyFooter";
// import { Box } from "@mui/material";
import DynamicBreadcrumbs from "@/components/DynamicBreadcrumbs";
// import { SessionProvider } from "next-auth/react";
import SessionProviderWrapper from "@/app/providers/SessionProvider";
import { Analytics } from "@vercel/analytics/next";

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
      <AppRouterCacheProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <SessionProviderWrapper>
            <body>
              <SearchAppBar />
              <main style={{ paddingTop: "80px" }}>
                {" "}
                {/* ✅ Prevent overlap */}
                <DynamicBreadcrumbs /> {/* ✅ Show breadcrumbs */}
                {children}
              </main>
              <MyFooter />
              {/* <Analytics /> */}
            </body>
          </SessionProviderWrapper>
        </ThemeProvider>
      </AppRouterCacheProvider>
    </html>
  );
}
