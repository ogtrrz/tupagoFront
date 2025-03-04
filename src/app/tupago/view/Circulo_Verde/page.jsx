// app/page.js (Server Component: Next.js App Router)
import Image from "next/image";
import {
  Box,
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

// Basic SEO metadata in the App Router
export const metadata = {
  title: "Pagos por Código QR: Funcionamiento, Ventajas y Ejemplos",
  description:
    "Descubre cómo funcionan los pagos por código QR, sus ventajas, ejemplos de uso y cómo integrarlos en tu negocio.",
};

export default function QrPaymentsPage() {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      {/* TÍTULO PRINCIPAL */}
      <Typography variant="h4" component="h1" gutterBottom>
        Circulo Verde, Servicio de Pagos y Recargas Sin Costo de Tiempo Aire
      </Typography>

      {/* IMAGEN QR */}

      <Box
        sx={{ width: "100%", display: "flex", justifyContent: "center", mb: 3 }}
      >
        <Image
          src="/circulo-verde.webp"
          alt="Circulo Verde"
          width={800} // Define un ancho fijo
          height={450} // Define un alto fijo proporcionalmente
          style={{ borderRadius: "8px", objectFit: "cover" }} // Estilos adicionales
        />
      </Box>

      {/* TEXTO INTRODUCTORIO */}
      <Typography variant="body1" paragraph>
        Realiza pagos, transferencias y recargas de manera rápida y segura desde
        tu celular o página web. Sin costo de tiempo aire, podrás pagar
        servicios como luz, agua, electricidad y recargar saldo en compañías de
        telefonía móvil. ¡Fácil, sin complicaciones y disponible 24/7!
      </Typography>
      <Typography>
        Pagar los servicios ahora es más fácil con Circulo Verde. Desde 2015, ya puedes
        pagar en line con Circulo Verde los servicios de agua, luz, impuesto
        predial y tenencia de tu automóvil. Esta opción es una cómoda
        alternativa que te evita hacer largas filas, con un horario de atención
        las 24 horas para el pago de servicios. En el caso de servicios
        bancarios, contamos con un horario flexible de 8 am a 10 pm. Para pagar
        tu servicio, sólo necesitas tu recibo, por ejemplo, el de energía
        eléctrica de la CFE (Comisión Federal de Electricidad), el del impuesto
        del agua de tu municipio o el predial. Recuerda que
        recibimos todos tus pagos, algunos hasta después de vencidos. De esta
        manera pagar servicios se vuelve fácil y práctico, recuerda que hay un
        Circulo Verde en tu teléfono.
      </Typography>
    </Container>
  );
}
