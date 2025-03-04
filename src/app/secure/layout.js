import SearchAppBar from "@/components/SearchAppBar";
import SessionProviderWrapper from "@/app/providers/SessionProvider";

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


export default function SecureLayout({ children }) {
    return (
      <SessionProviderWrapper>
        <><SearchAppBar />{children}</>
      </SessionProviderWrapper>
    );
  }
