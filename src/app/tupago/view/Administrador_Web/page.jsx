// app/page.js (Server Component in Next.js App Router)

import Image from "next/image";
import {
  Box,
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

export const metadata = {
  title: "Aplicación Web para Gestión de Pagos QR y Telefónicos en Tiempo Real",
  description:
    "Solución completa para la generación, consulta y monitoreo de pagos QR y telefónicos con notificaciones en tiempo real y seguridad avanzada.",
};

export default function WebPaymentsAppPage() {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      {/* Title */}
      <Typography variant="h4" component="h1" gutterBottom>
        Aplicación Web para Gestión de Pagos QR y Telefónicos en Tiempo Real
      </Typography>
      <Box
        sx={{ width: "100%", display: "flex", justifyContent: "center", mb: 3 }}
      >
        <Image
          src="/web.webp"
          alt="Aplicación Web"
          width={800} // Define un ancho fijo
          height={450} // Define un alto fijo proporcionalmente
          style={{ borderRadius: "8px", objectFit: "cover" }} // Estilos adicionales
        />
      </Box>

      {/* 1. Introducción */}
      <Typography variant="body1" paragraph>
        Esta aplicación web permite a los usuarios generar códigos QR para
        pagos, consultar el estado de sus transacciones y recibir
        actualizaciones en tiempo real sobre sus pagos realizados mediante QR o
        teléfonos móviles. Es compatible con dispositivos de escritorio y
        móviles, ofreciendo una experiencia de usuario fluida y segura.
      </Typography>

      <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
        1. Introducción
      </Typography>
      <Typography variant="body1" paragraph>
        (El texto introductorio anterior ya cubre esta sección, pero se mantiene
        el encabezado para la estructura solicitada.)
      </Typography>

      {/* 2. Características Principales */}
      <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
        2. Características Principales
      </Typography>
      <List dense>
        <ListItem>
          <ListItemText primary="✅ Generación de Códigos QR: Los usuarios pueden crear códigos QR personalizados para pagos." />
        </ListItem>
        <ListItem>
          <ListItemText primary="✅ Consulta de Estado de Pagos: Acceso en tiempo real al estado de cada transacción." />
        </ListItem>
        <ListItem>
          <ListItemText primary="✅ Historial de Pagos: Registro completo de todas las transacciones realizadas." />
        </ListItem>
        <ListItem>
          <ListItemText primary="✅ Notificaciones en Tiempo Real: Alertas sobre pagos recibidos o rechazados." />
        </ListItem>
        <ListItem>
          <ListItemText primary="✅ Acceso Multiplataforma: Disponible en navegadores de escritorio y móviles sin necesidad de instalación." />
        </ListItem>
        <ListItem>
          <ListItemText primary="✅ Seguridad Avanzada: Cifrado de extremo a extremo y autenticación de dos factores." />
        </ListItem>
      </List>

      {/* 3. Funcionalidades Clave */}
      <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
        3. Funcionalidades Clave
      </Typography>

      {/* 3.1 Panel de Control en Tiempo Real */}
      <Typography variant="subtitle1" gutterBottom>
        3.1. Panel de Control en Tiempo Real
      </Typography>
      <Typography variant="body2" paragraph>
        Un panel interactivo muestra información en vivo sobre pagos recibidos,
        pendientes y rechazados, permitiendo a los usuarios gestionar sus
        transacciones de manera eficiente.
      </Typography>

      {/* 3.2 Generación de Códigos QR */}
      <Typography variant="subtitle1" gutterBottom sx={{ mt: 2 }}>
        3.2. Generación de Códigos QR
      </Typography>
      <Typography variant="body2" paragraph>
        Los usuarios pueden generar códigos QR vinculados a pagos con:
      </Typography>
      <List dense>
        <ListItem>
          <ListItemText primary="Monto personalizado." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Moneda específica." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Descripción del pago." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Fecha de vencimiento." />
        </ListItem>
      </List>

      {/* 3.3 Consulta y Seguimiento de Pagos */}
      <Typography variant="subtitle1" gutterBottom sx={{ mt: 2 }}>
        3.3. Consulta y Seguimiento de Pagos
      </Typography>
      <Typography variant="body2" paragraph>
        Los usuarios pueden buscar pagos por:
      </Typography>
      <List dense>
        <ListItem>
          <ListItemText primary="ID de transacción." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Fecha." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Estado (pendiente, aprobado, rechazado)." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Método de pago (QR, teléfono, transferencia)." />
        </ListItem>
      </List>

      {/* 3.4 Notificaciones y Callbacks */}
      <Typography variant="subtitle1" gutterBottom sx={{ mt: 2 }}>
        3.4. Notificaciones y Callbacks
      </Typography>
      <Typography variant="body2" paragraph>
        La app permite configurar notificaciones vía correo electrónico, SMS o
        notificaciones push cuando un pago cambia de estado.
      </Typography>

      {/* 3.5 Seguridad y Autenticación */}
      <Typography variant="subtitle1" gutterBottom sx={{ mt: 2 }}>
        3.5. Seguridad y Autenticación
      </Typography>
      <List dense>
        <ListItem>
          <ListItemText primary="Acceso con credenciales seguras y autenticación de dos factores (2FA)." />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Protección contra fraudes mediante validación de pagos 
              y detección de transacciones sospechosas."
          />
        </ListItem>
      </List>

      {/* 4. Tecnología Utilizada */}
      <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
        4. Tecnología Utilizada
      </Typography>
      <List dense>
        <ListItem>
          <ListItemText primary="Frontend: React.js / Vue.js para una interfaz moderna y rápida." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Backend: Node.js con Express o Python con Django/Flask." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Base de Datos: PostgreSQL / MongoDB para almacenamiento eficiente." />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="APIs de Pagos: Integración con plataformas como Stripe, PayPal, MercadoPago, 
              o sistemas de pago propios."
          />
        </ListItem>
        <ListItem>
          <ListItemText primary="WebSockets: Para actualizaciones en tiempo real sin recargar la página." />
        </ListItem>
      </List>

      {/* 5. Flujo de Uso */}
      <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
        5. Flujo de Uso
      </Typography>
      <List dense>
        <ListItem>
          <ListItemText primary="Inicio de sesión seguro en la aplicación." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Generación de código QR desde el panel de control." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Compartir el código QR con el cliente o usuario final." />
        </ListItem>
        <ListItem>
          <ListItemText primary="El cliente realiza el pago mediante su app bancaria o billetera digital." />
        </ListItem>
        <ListItem>
          <ListItemText primary="El sistema recibe la confirmación de pago en tiempo real a través de un callback." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Se actualiza el estado del pago automáticamente en el panel de control." />
        </ListItem>
        <ListItem>
          <ListItemText primary="El usuario recibe una notificación con los detalles del pago." />
        </ListItem>
      </List>

      {/* 6. Casos de Uso */}
      <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
        6. Casos de Uso
      </Typography>
      <List dense>
        <ListItem>
          <ListItemText primary="📌 Empresas que reciben pagos QR en tiendas físicas y en línea." />
        </ListItem>
        <ListItem>
          <ListItemText primary="📌 Freelancers y profesionales que quieren gestionar pagos sin comisiones de tarjetas." />
        </ListItem>
        <ListItem>
          <ListItemText primary="📌 Eventos y espectáculos que requieren pagos rápidos sin efectivo." />
        </ListItem>
        <ListItem>
          <ListItemText primary="📌 Negocios de comida y cafeterías con pago sin contacto." />
        </ListItem>
        <ListItem>
          <ListItemText primary="📌 Servicios de suscripción con pagos periódicos gestionados por QR o teléfono." />
        </ListItem>
      </List>

      {/* 7. Conclusión */}
      <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
        7. Conclusión
      </Typography>
      <Typography variant="body1" paragraph>
        Esta aplicación web proporciona una solución completa para la
        generación, consulta y monitoreo de pagos QR y telefónicos en tiempo
        real, con una interfaz intuitiva, segura y accesible desde cualquier
        dispositivo. Su integración con APIs de pago y notificaciones en tiempo
        real la hace ideal para cualquier empresa que desee optimizar sus
        procesos de cobro.
      </Typography>
      <Typography variant="body1" paragraph>
        ¿Te gustaría recibir una demo de esta aplicación o integrar una solución
        personalizada para tu negocio? 😊
      </Typography>
    </Container>
  );
}
