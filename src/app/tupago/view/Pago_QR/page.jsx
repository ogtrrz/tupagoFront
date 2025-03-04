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
        Pagos por Código QR
      </Typography>

      {/* IMAGEN QR */}

      <Box
        sx={{ width: "100%", display: "flex", justifyContent: "center", mb: 3 }}
      >
        <Image
          src="/qr.webp"
          alt="Pagos Código QR"
          width={800} // Define un ancho fijo
          height={450} // Define un alto fijo proporcionalmente
          style={{ borderRadius: "8px", objectFit: "cover" }} // Estilos adicionales
        />
      </Box>

      {/* TEXTO INTRODUCTORIO */}
      <Typography variant="body1" paragraph>
        Los pagos por código QR son una forma de pago digital que permite a los
        usuarios realizar transacciones simplemente escaneando un código QR con
        la cámara de su teléfono móvil. Este método es cada vez más popular por
        su rapidez, facilidad de uso y seguridad, además de no requerir contacto
        físico, lo que lo hace ideal para diferentes entornos comerciales y de
        servicios.
      </Typography>

      {/* ¿CÓMO FUNCIONA? */}
      <Typography variant="h5" gutterBottom>
        ¿Cómo funciona el pago por código QR?
      </Typography>
      <Typography variant="body1" paragraph>
        El pago por código QR puede realizarse de varias maneras, dependiendo
        del tipo de transacción:
      </Typography>

      {/* 1. Pago mediante escaneo del código QR del comercio */}
      <Typography variant="subtitle1" gutterBottom>
        1. Pago mediante escaneo del código QR del comercio
      </Typography>
      <Typography variant="body2" paragraph>
        Este método se usa en tiendas físicas, restaurantes, mercados y otros
        negocios.
      </Typography>
      <List dense>
        <ListItem>
          <ListItemText
            primary="El comercio genera un código QR estático o dinámico.
              - QR estático: Siempre es el mismo y requiere que el usuario ingrese el monto a pagar.
              - QR dinámico: Se genera automáticamente con cada compra e incluye el monto exacto."
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="El usuario escanea el código QR con la cámara de su móvil o una app de pagos 
              (PayPal, Mercado Pago, Apple Pay, Google Pay, etc.)."
          />
        </ListItem>
        <ListItem>
          <ListItemText primary="Se muestra la información del pago en la aplicación (monto, destinatario, detalles)." />
        </ListItem>
        <ListItem>
          <ListItemText primary="El usuario confirma el pago y la transacción se procesa en segundos." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Tanto el comercio como el usuario reciben una notificación de pago exitoso." />
        </ListItem>
      </List>

      {/* 2. Pago mediante generación de un código QR por parte del usuario */}
      <Typography variant="subtitle1" gutterBottom sx={{ mt: 2 }}>
        2. Pago mediante generación de un código QR por parte del usuario
      </Typography>
      <Typography variant="body2" paragraph>
        Algunas aplicaciones permiten que el usuario genere un código QR con la
        cantidad exacta a pagar, y el comercio lo escanea para procesar la
        transacción.
      </Typography>
      <List dense>
        <ListItem>
          <ListItemText primary="El usuario abre su aplicación de pagos y selecciona 'Generar QR'." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Introduce el monto y muestra el código QR en su pantalla." />
        </ListItem>
        <ListItem>
          <ListItemText primary="El comercio escanea el QR con su sistema de pago o aplicación." />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Se realiza la validación y se completa la transacción, 
              ambos reciben notificación de pago exitoso."
          />
        </ListItem>
      </List>

      {/* 3. Pago por QR en tiendas web */}
      <Typography variant="subtitle1" gutterBottom sx={{ mt: 2 }}>
        3. Pago por QR en tiendas web y comercio electrónico
      </Typography>
      <Typography variant="body2" paragraph>
        Este método se utiliza en compras en línea, donde el comprador puede
        completar su pago escaneando un código QR en la tienda web o
        recibiéndolo por correo electrónico.
      </Typography>
      <List dense>
        <ListItem>
          <ListItemText primary="Al realizar una compra, el usuario selecciona pago por QR." />
        </ListItem>
        <ListItem>
          <ListItemText primary="La tienda genera un código QR único con los detalles del pago." />
        </ListItem>
        <ListItem>
          <ListItemText primary="El usuario escanea el QR y la aplicación de pagos procesa la transacción." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Se envía confirmación tanto al comprador como al vendedor." />
        </ListItem>
      </List>

      {/* 4. Pago por QR en correo electrónico */}
      <Typography variant="subtitle1" gutterBottom sx={{ mt: 2 }}>
        4. Pago por QR en correo electrónico
      </Typography>
      <Typography variant="body2" paragraph>
        Empresas y freelancers pueden enviar facturas con un código QR integrado
        para que los clientes realicen pagos de manera rápida.
      </Typography>
      <List dense>
        <ListItem>
          <ListItemText primary="El vendedor genera una factura digital con un código QR." />
        </ListItem>
        <ListItem>
          <ListItemText primary="El cliente recibe la factura por correo y escanea el QR." />
        </ListItem>
        <ListItem>
          <ListItemText primary="El pago se procesa de inmediato y se genera una confirmación automática." />
        </ListItem>
      </List>

      {/* VENTAJAS */}
      <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
        Ventajas de los Pagos por Código QR
      </Typography>
      <List dense>
        <ListItem>
          <ListItemText
            primary="✅ Rápido y conveniente: La transacción se realiza en segundos, 
              sin necesidad de efectivo ni tarjetas."
          />
        </ListItem>
        <ListItem>
          <ListItemText primary="✅ Mayor seguridad: No se comparten datos bancarios directamente con el comercio." />
        </ListItem>
        <ListItem>
          <ListItemText primary="✅ Reducción de costos: Comisiones más bajas y sin terminales físicas costosas." />
        </ListItem>
        <ListItem>
          <ListItemText primary="✅ Accesible para cualquier tipo de negocio: Ideal para grandes y pequeños comercios." />
        </ListItem>
        <ListItem>
          <ListItemText primary="✅ Ideal para transacciones sin contacto: Menos riesgo de transmisión de enfermedades." />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="✅ Facilidad de integración: Se adapta a tiendas en línea, 
              sistemas de facturación y correos electrónicos."
          />
        </ListItem>
      </List>

      {/* EJEMPLOS DE USO */}
      <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
        Ejemplos de Uso y Aplicaciones
      </Typography>
      <List dense>
        <ListItem>
          <ListItemText
            primary="📌 Tiendas y supermercados: Los clientes escanean un QR en la caja 
              y pagan desde su móvil."
          />
        </ListItem>
        <ListItem>
          <ListItemText primary="📌 Restaurantes y cafeterías: Pagar desde la mesa con un QR en el menú o la cuenta." />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="📌 Transporte público y estacionamientos: Comprar boletos o pagar 
              estacionamiento escaneando un QR."
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="📌 Vendedores ambulantes y mercados: Aceptar pagos digitales sin un 
              terminal de pago, solo con un código QR impreso."
          />
        </ListItem>
        <ListItem>
          <ListItemText primary="📌 Eventos y espectáculos: Vender entradas y validar accesos con QR." />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="📌 Pago de facturas y servicios: Empresas de servicios públicos ofrecen 
              QR en sus facturas para pagos rápidos."
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="📌 Donaciones a ONG: Compartir QR en redes sociales o carteles para 
              recibir donaciones."
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="📌 Tiendas en línea y comercio electrónico: Mostrar un QR al finalizar 
              la compra para pagar sin ingresar datos de tarjeta."
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="📌 Pago de facturas por correo electrónico: Freelancers y empresas 
              pueden enviar facturas con un QR integrado."
          />
        </ListItem>
      </List>

      {/* CONCLUSIÓN */}
      <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
        Conclusión
      </Typography>
      <Typography variant="body1" paragraph>
        El pago por código QR es una alternativa digital segura, rápida y
        accesible que está revolucionando la forma en que los consumidores
        realizan compras y transacciones. Gracias a su facilidad de uso y costos
        reducidos, se ha convertido en una solución ideal para negocios de todos
        los tamaños y sectores, incluyendo el comercio electrónico y los pagos
        por correo electrónico.
      </Typography>
      <Typography variant="body1" paragraph>
        Si te interesa implementar pagos por QR en tu negocio, ¿quieres conocer
        las mejores plataformas para hacerlo? 😊
      </Typography>
    </Container>
  );
}
