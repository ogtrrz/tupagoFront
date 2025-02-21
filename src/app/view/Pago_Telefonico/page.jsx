// app/page.js (Server Component: Next.js App Router)

import { Container, Box, Typography, List, ListItem, ListItemText } from "@mui/material";

// Metadatos para SEO (App Router)
export const metadata = {
  title: "Pagos por Mensaje en Móviles",
  description: "Descripción detallada sobre el método de pago por SMS o mensajería.",
};

export default function PagosPorMensajePage() {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      {/* Título principal */}
      <Typography variant="h4" component="h1" gutterBottom>
        Pagos por Mensaje en Móviles
      </Typography>

      {/* Imagen de teléfono */}
      <Box
        component="img"
        src="/telefonico.webp"
        alt="Teléfono"
        sx={{
          width: "100%",
          maxWidth: 800,
          display: "block",
          margin: "0 auto",
          mb: 3,
        }}
      />

      {/* Texto introductorio */}
      <Typography variant="body1" paragraph>
        El pago por mensaje en móviles es un método de pago en el que los usuarios pueden
        realizar transacciones enviando un mensaje de texto (SMS) o a través de aplicaciones
        de mensajería. Este sistema se vincula con el saldo del operador móvil o con una
        cuenta bancaria/tarjeta de crédito previamente configurada.
      </Typography>

      {/* Sección: ¿Cómo funciona? */}
      <Typography variant="h5" gutterBottom>
        ¿Cómo funciona?
      </Typography>
      <List dense>
        <ListItem>
          <ListItemText
            primary="1. El usuario envía un mensaje de texto con un código específico a un número designado."
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="2. El proveedor de pagos o el operador móvil procesa la transacción y carga el monto
            a la factura telefónica o lo descuenta del saldo disponible."
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="3. El usuario recibe una confirmación por SMS o en la aplicación indicando que
            el pago fue exitoso."
          />
        </ListItem>
      </List>

      {/* Ventajas */}
      <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
        Ventajas
      </Typography>
      <List dense>
        <ListItem>
          <ListItemText
            primary="✅ Fácil y rápido: No se necesita ingresar datos bancarios ni instalar aplicaciones adicionales."
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="✅ Accesible: Disponible para personas sin tarjeta de crédito o cuenta bancaria."
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="✅ Seguro: Reduce el riesgo de fraude, al vincular la transacción directamente
            con el número de móvil."
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="✅ Ideal para micropagos: Perfecto para compras pequeñas como boletos de transporte,
            donaciones, suscripciones, etc."
          />
        </ListItem>
      </List>

      {/* Ejemplos de uso */}
      <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
        Ejemplos de uso
      </Typography>
      <List dense>
        <ListItem>
          <ListItemText
            primary="📌 Compra de boletos de transporte público: 
            Un usuario puede enviar un SMS y recibir un código para acceder al metro o autobús."
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="📌 Pago de estacionamiento: Se envía un mensaje con el número de placa y se descuenta el importe."
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="📌 Donaciones a ONG: Enviar un SMS con una palabra clave para donar un monto específico."
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="📌 Compra de contenido digital: Juegos, tonos de llamada o suscripciones a plataformas de entretenimiento."
          />
        </ListItem>
      </List>

      {/* Conclusión / Texto adicional (versión detallada) */}
      <Typography variant="body1" paragraph sx={{ mt: 2 }}>
        Este método es una opción innovadora para facilitar pagos sin depender de tarjetas
        o aplicaciones bancarias. ¿Te gustaría saber más sobre su implementación en
        negocios?
      </Typography>

      <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
        Explicación más Detallada
      </Typography>
      <Typography variant="body1" paragraph>
        El pago por mensaje en móviles se puede dividir en dos grandes modalidades:
      </Typography>

      <Typography variant="subtitle1" gutterBottom>
        1. Pago con cargo al saldo o factura del operador móvil
      </Typography>
      <Typography variant="body2" paragraph>
        El monto de la compra se descuenta del saldo prepago del usuario o se adiciona a la 
        factura telefónica de fin de mes. Esto facilita las microtransacciones sin introducir
        datos bancarios.
      </Typography>

      <Typography variant="subtitle1" gutterBottom>
        2. Pago a través de una cuenta bancaria vinculada
      </Typography>
      <Typography variant="body2" paragraph>
        Algunas plataformas permiten asociar la cuenta bancaria o tarjeta de crédito del 
        usuario, cargando el pago directamente al banco y confirmando la transacción por SMS.
      </Typography>

      <Typography variant="body1" paragraph sx={{ mt: 2 }}>
        En resumen, los pagos por mensaje en móviles representan una alternativa eficiente, 
        segura y accesible para aquellos que buscan una opción de pago sencilla, incluso sin 
        conexión a Internet o sin tarjetas bancarias. 
      </Typography>
    </Container>
  );
}
