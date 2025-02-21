// app/page.js (Server Component: Next.js App Router)

import { Box, Container, Typography, List, ListItem, ListItemText } from "@mui/material";

export const metadata = {
  title: "Reducción de Costos Financieros y de Conciliación",
  description:
    "Cómo los medios de pago sin comisiones y los callbacks automáticos reducen costos en la gestión financiera y conciliación.",
};

export default function CostosFinancierosPage() {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      {/* Title */}
      <Typography variant="h4" component="h1" gutterBottom>
        Reducción de Costos Financieros y de Conciliación con Medios de Pago sin Comisiones y Callbacks
      </Typography>

      {/* Image */}
      <Box
        component="img"
        src="/costos.webp"
        alt="Costos Financieros"
        sx={{
          width: "100%",
          maxWidth: 800,
          display: "block",
          margin: "0 auto",
          mb: 3,
        }}
      />

      {/* 1. Introducción */}
      <Typography variant="body1" >
        En la gestión de pagos empresariales, los costos financieros y los costos operativos
        asociados a la conciliación pueden representar una carga significativa. Sin embargo,
        el uso de medios de pago sin comisiones, combinados con callbacks automáticos para la
        actualización de estados de pago, permite reducir drásticamente estos costos. A
        continuación, se explican los factores clave y se presentan ejemplos prácticos.
      </Typography>

      <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
        1. Introducción
      </Typography>
      <Typography variant="body1" >
        (El texto anterior ya sirve como introducción, por lo que puedes optar por
        omitir este título o reubicarlo. Lo dejamos para respetar la estructura solicitada.)
      </Typography>

      {/* 2. Costos Financieros y Su Reducción */}
      <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
        2. Costos Financieros y Su Reducción
      </Typography>

      {/* 2.1 Costo de Procesamiento de Pagos */}
      <Typography variant="subtitle1" gutterBottom>
        2.1. Costo de Procesamiento de Pagos
      </Typography>
      <Typography variant="body2" paragraph>
        Los pagos con tarjeta de crédito/débito y otras plataformas tradicionales suelen implicar:
      </Typography>
      <List dense>
        <ListItem>
          <ListItemText primary="Comisión por transacción (entre 2% y 5%)" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Costos por terminales POS" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Tarifas de mantenimiento y suscripción" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Retrasos en la liquidación de pagos (1-3 días hábiles)" />
        </ListItem>
      </List>
      <Typography variant="body2" paragraph>
        <strong>Solución:</strong> Medios de pago sin comisiones, como pagos con QR
        vinculados a transferencias directas o criptomonedas, eliminan estos costos
        al no requerir intermediarios financieros.
      </Typography>

      {/* 2.2 Costo de Disponibilidad de Fondos */}
      <Typography variant="subtitle1" gutterBottom sx={{ mt: 2 }}>
        2.2. Costo de Disponibilidad de Fondos
      </Typography>
      <Typography variant="body2" paragraph>
        Cuando una empresa recibe pagos con tarjeta, debe esperar la liquidación bancaria,
        lo que afecta su flujo de caja y genera costos por financiamiento (líneas de crédito,
        intereses bancarios, etc.).
      </Typography>
      <Typography variant="body2" paragraph>
        <strong>Solución:</strong> Los pagos en tiempo real (QR, transferencias directas)
        permiten acceso inmediato a los fondos, reduciendo la necesidad de financiamiento
        externo y costos asociados.
      </Typography>

      {/* 3. Costos de Conciliación y Cómo Reducirlos */}
      <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
        3. Costos de Conciliación y Cómo Reducirlos
      </Typography>

      {/* 3.1 ¿Por qué la Conciliación es Costosa? */}
      <Typography variant="subtitle1" gutterBottom>
        3.1. ¿Por qué la Conciliación es Costosa?
      </Typography>
      <Typography variant="body2" paragraph>
        La conciliación manual de pagos implica:
      </Typography>
      <List dense>
        <ListItem>
          <ListItemText
            primary="Errores humanos en el ingreso y validación de datos"
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Tiempo invertido por equipos contables en revisión de pagos"
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Problemas de identificación de pagos por referencias incorrectas"
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Costos de software contable avanzado para gestión de conciliaciones"
          />
        </ListItem>
      </List>
      <Typography variant="body2" paragraph>
        <strong>Solución:</strong> Uso de callbacks automáticos para actualizar en tiempo real
        el estado de los pagos en el ERP o sistema contable, eliminando la necesidad de
        conciliación manual.
      </Typography>

      {/* 3.2 Funcionamiento de los Callbacks */}
      <Typography variant="subtitle1" gutterBottom sx={{ mt: 2 }}>
        3.2. Funcionamiento de los Callbacks en la Conciliación
      </Typography>
      <List dense>
        <ListItem>
          <ListItemText primary="El cliente realiza un pago (QR, transferencia bancaria, etc.)." />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="El sistema de pago envía un callback con la confirmación de pago y 
            detalles de la transacción."
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="El ERP recibe la información y actualiza la factura automáticamente."
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Se genera una conciliación instantánea sin intervención manual."
          />
        </ListItem>
      </List>
      <Typography variant="body2" paragraph>
        <strong>Ejemplo Práctico:</strong> Una empresa recibe pagos de clientes mediante
        códigos QR. Sin un callback, el equipo contable debe revisar manualmente los
        extractos bancarios, identificar cada pago y actualizar la cuenta del cliente.
        Con un callback, el sistema registra automáticamente el pago en el ERP y cierra
        la factura sin intervención humana.
      </Typography>

      {/* 4. Beneficios Generales de Esta Estrategia */}
      <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
        4. Beneficios Generales de Esta Estrategia
      </Typography>
      <List dense>
        <ListItem>
          <ListItemText
            primary="✅ Reducción del costo financiero al eliminar intermediarios y tiempos de liquidación."
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="✅ Menor carga operativa en conciliación de pagos."
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="✅ Mayor precisión y eliminación de errores en el registro de pagos."
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="✅ Mejor flujo de caja con acceso inmediato a los fondos."
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="✅ Automatización de procesos que permite a los equipos contables enfocarse en 
            tareas estratégicas."
          />
        </ListItem>
      </List>

      {/* 5. Conclusión */}
      <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
        5. Conclusión
      </Typography>
      <Typography variant="body1" paragraph>
        La implementación de medios de pago sin comisiones, junto con callbacks automatizados,
        permite una reducción drástica de los costos financieros y operativos asociados a
        la conciliación. Esta estrategia optimiza la eficiencia empresarial, mejora la
        liquidez y elimina costos innecesarios.
      </Typography>
      <Typography variant="body1" paragraph>
        ¿Necesitas ayuda para implementar este sistema en tu empresa? 😊
      </Typography>
    </Container>
  );
}
