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

// SEO metadata (App Router style)
export const metadata = {
  title: "API RESTful para Pagos por QR con Integración en ERP",
  description:
    "Descripción detallada de la API RESTful para pagos por código QR con integración en sistemas ERP, caja y cuentas por cobrar.",
};

export default function ApiQrPage() {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      {/* Title */}
      <Typography variant="h4" component="h1" gutterBottom>
        API RESTful para Pagos por QR con Integración en Sistemas ERP, Caja y
        Cuentas por Cobrar
      </Typography>

      <Box
        sx={{ width: "100%", display: "flex", justifyContent: "center", mb: 3 }}
      >
        <Image
          src="/rest.webp"
          alt="API RESTful"
          width={800} // Define un ancho fijo
          height={450} // Define un alto fijo proporcionalmente
          style={{ borderRadius: "8px", objectFit: "cover" }} // Estilos adicionales
        />
      </Box>

      {/* INTRODUCCIÓN */}
      <Typography variant="body1" paragraph>
        Esta API RESTful permite la integración de pagos por código QR en
        sistemas de cuentas por cobrar, caja o ERP de una empresa. La API
        facilita la generación de códigos QR para pagos, la consulta del estado
        de transacción y la actualización automática del estatus de pago
        mediante un callback.
      </Typography>

      <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
        1. Flujo de Pago con QR
      </Typography>
      <List dense>
        <ListItem>
          <ListItemText primary="Generación del QR: El sistema solicita la creación de un QR con los datos de la transacción." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Escaneo y pago: El cliente escanea el QR y realiza el pago desde su app bancaria o billetera digital." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Notificación del pago: La plataforma de pago envía una notificación al webhook de la empresa." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Actualización en el ERP: La API procesa el callback y actualiza el estado del pago en el sistema ERP/cuentas por cobrar." />
        </ListItem>
      </List>

      <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
        2. Endpoints de la API
      </Typography>

      {/* 2.1 Generar Código QR */}
      <Typography variant="subtitle1" gutterBottom>
        2.1 Generar Código QR de Pago
      </Typography>
      <Typography variant="body2" paragraph>
        Endpoint: <code>POST /api/qr/generate</code>
      </Typography>
      <Typography variant="body1" paragraph>
        Descripción: Genera un código QR para el pago con un monto y referencia
        específica.
      </Typography>

      {/* Request */}
      <Typography variant="body2" gutterBottom>
        <strong>Request:</strong>
      </Typography>
      <Box
        component="pre"
        sx={{
          whiteSpace: "pre-wrap",
          backgroundColor: "#f5f5f5",
          p: 2,
          mb: 2,
          fontSize: "0.9rem",
        }}
      >
        {`{
    "monto": 100.00,
    "moneda": "MXN",
    "referencia": "FAC12345",
    "callback_url": "https://miempresa.com/api/callback"
  }`}
      </Box>

      {/* Response */}
      <Typography variant="body2" gutterBottom>
        <strong>Response:</strong>
      </Typography>
      <Box
        component="pre"
        sx={{
          whiteSpace: "pre-wrap",
          backgroundColor: "#f5f5f5",
          p: 2,
          mb: 2,
          fontSize: "0.9rem",
        }}
      >
        {`{
    "qr_id": "abc123",
    "qr_url": "https://pagos.com/qr/abc123",
    "estado": "pendiente"
  }`}
      </Box>

      {/* 2.2 Consultar Estado de Pago */}
      <Typography variant="subtitle1" gutterBottom sx={{ mt: 2 }}>
        2.2 Consultar Estado de Pago
      </Typography>
      <Typography variant="body2" paragraph>
        Endpoint: <code>GET /api/qr/status/{`{qr_id}`}</code>
      </Typography>
      <Typography variant="body1" paragraph>
        Descripción: Obtiene el estado actual de un pago.
      </Typography>

      <Typography variant="body2" gutterBottom>
        <strong>Response:</strong>
      </Typography>
      <Box
        component="pre"
        sx={{
          whiteSpace: "pre-wrap",
          backgroundColor: "#f5f5f5",
          p: 2,
          mb: 2,
          fontSize: "0.9rem",
        }}
      >
        {`{
    "qr_id": "abc123",
    "estado": "pagado",
    "fecha_pago": "2024-02-20T14:35:00Z"
  }`}
      </Box>

      {/* 2.3 Webhook para Confirmación de Pago */}
      <Typography variant="subtitle1" gutterBottom sx={{ mt: 2 }}>
        2.3 Webhook para Confirmación de Pago (Callback)
      </Typography>
      <Typography variant="body2" paragraph>
        Endpoint: <code>POST /api/callback</code>
      </Typography>
      <Typography variant="body1" paragraph>
        Descripción: Recibe notificaciones de pago exitoso y actualiza el ERP.
      </Typography>

      <Typography variant="body2" gutterBottom>
        <strong>Request:</strong>
      </Typography>
      <Box
        component="pre"
        sx={{
          whiteSpace: "pre-wrap",
          backgroundColor: "#f5f5f5",
          p: 2,
          mb: 2,
          fontSize: "0.9rem",
        }}
      >
        {`{
    "qr_id": "abc123",
    "referencia": "FAC12345",
    "estado": "pagado",
    "fecha_pago": "2024-02-20T14:35:00Z"
  }`}
      </Box>

      <Typography variant="body1" paragraph>
        <strong>Proceso en el ERP:</strong> Validar la referencia, actualizar el
        estado de la factura y confirmar la actualización enviando una
        respuesta.
      </Typography>

      <Typography variant="body2" gutterBottom>
        <strong>Response:</strong>
      </Typography>
      <Box
        component="pre"
        sx={{
          whiteSpace: "pre-wrap",
          backgroundColor: "#f5f5f5",
          p: 2,
          mb: 2,
          fontSize: "0.9rem",
        }}
      >
        {`{
    "mensaje": "Pago registrado exitosamente",
    "codigo": 200
  }`}
      </Box>

      {/* 3. Arquitectura de Integración */}
      <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
        3. Arquitectura de Integración
      </Typography>
      <Typography variant="body1" paragraph>
        <em>Esquema General</em>
      </Typography>
      <List dense>
        <ListItem>
          <ListItemText primary="1. El usuario escanea el QR y paga." />
        </ListItem>
        <ListItem>
          <ListItemText primary="2. El proveedor de pagos notifica el callback a la API de la empresa." />
        </ListItem>
        <ListItem>
          <ListItemText primary="3. El ERP procesa la notificación y actualiza la cuenta por cobrar." />
        </ListItem>
        <ListItem>
          <ListItemText primary="4. El sistema confirma la transacción al usuario final." />
        </ListItem>
      </List>
      <Typography variant="body1" paragraph>
        (Aquí se incluiría una imagen de diagrama de flujo de integración.)
      </Typography>

      {/* 4. Seguridad y Autenticación */}
      <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
        4. Seguridad y Autenticación
      </Typography>
      <List dense>
        <ListItem>
          <ListItemText primary="Uso de OAuth 2.0 o API Key para autenticación." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Validación de firmas digitales en los callbacks para evitar fraudes." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Protección contra ataques CSRF y validación de origen en los callbacks." />
        </ListItem>
      </List>

      {/* 5. Conclusión */}
      <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
        5. Conclusión
      </Typography>
      <Typography variant="body1" paragraph>
        Esta API RESTful permite la automatización y trazabilidad de los pagos
        con QR, mejorando la eficiencia del proceso de cobro en empresas con
        sistemas ERP, caja y cuentas por cobrar. La implementación de un
        callback garantiza la actualización en tiempo real del estado de los
        pagos, optimizando la conciliación financiera y la experiencia del
        usuario.
      </Typography>
      <Typography variant="body1" paragraph>
        ¿Te gustaría recibir documentación adicional o ejemplos de código para
        la implementación? 😊
      </Typography>
    </Container>
  );
}
