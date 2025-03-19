"use client";

import React from "react";
import MyHeaderPrincipal from "@/components/MyHeaderPrincipal";
import MediaCard from "@/components/MediaCard";
import { data } from "@/lib/data";
import "@fontsource/righteous"; // Import Righteous font

import { Box, Container, Grid, Typography } from "@mui/material";

export default function HomePage() {
  return (
    <React.Fragment>
      {/* Hero / Header Section */}
      <Box sx={{ mt: 4 }}>
        <MyHeaderPrincipal
          imageURL="/tupago.webp"
          label={
            <Typography variant="h3" component="span">
              ¡Cobra fácil y rápido con{" "}
              <span style={{ fontFamily: "Righteous, sans-serif" }}>
                CoDi®, CoDi Cobro Digital®
              </span>{" "}
              y TuPago.click!
            </Typography>
          }
          altText="TuPago.click, Codi"
        />
      </Box>

      {/* Main Content Section */}
      <Container maxWidth="lg" sx={{ mt: { xs: 4, md: 8 } }}>
        <Typography variant="h6">
          Olvídate del efectivo y de las comisiones por cobrar. Con{" "}
          <strong>TuPago.click</strong>, un tercero autorizado por Banco de
          México (Banxico), puedes generar mensajes de cobro{" "}
          <span style={{ fontFamily: "Righteous, sans-serif" }}>
            CoDi®, CoDi Cobro Digital®
          </span>{" "}
          de forma sencilla y recibir pagos al instante.{" "}
        </Typography>
        <Typography variant="h6">
          Descubre cómo esta solución puede impulsar tus cobros digitales y
          mejorar la experiencia de pago de tus clientes.
        </Typography>
        {/* ✅ Section: What is CoDi? */}
        <Typography
          variant="h6"
          sx={{
            mt: 3,
            fontFamily: "Open Sans, sans-serif",
          }}
        >
          ¿Qué es{" "}
          <span style={{ fontFamily: "Righteous, sans-serif" }}>
            CoDi®, CoDi Cobro Digital®
          </span>{" "}
          y cuáles son sus beneficios?
        </Typography>

        <Typography variant="h6" paragraph>
          {" "}
          <span style={{ fontFamily: "Righteous, sans-serif" }}>
            CoDi®, CoDi Cobro Digital®
          </span>{" "}
          es una plataforma de pagos desarrollada por Banxico que permite
          realizar cobros y pagos electrónicos de forma rápida, gratuita y
          segura usando códigos QR o notificaciones en el celular.
        </Typography>

        <Typography variant="h6" paragraph>
          En otras palabras, CoDi te permite cobrar a tus clientes a través de
          transferencias electrónicas inmediatas, sin necesidad de efectivo ni
          tarjetas. Sus principales beneficios incluyen:
        </Typography>

        {/* ✅ Benefits List */}
        <Typography variant="h6" paragraph>
          <strong>✔ Sin comisiones:</strong> Realizar cobros con CoDi es gratis.
          Ni tú ni tus clientes pagan comisiones por la transacción.
        </Typography>

        <Typography variant="h6" paragraph>
          <strong>✔ Pagos al instante:</strong> El dinero llega a tu cuenta
          bancaria en cuestión de segundos después de que tu cliente autoriza el
          pago.
        </Typography>

        <Typography variant="h6" paragraph>
          <strong>✔ Seguro y confiable:</strong> Cada pago se realiza mediante
          la banca electrónica con autenticación (como NIP o huella digital) y
          está respaldado por Banxico, brindándote seguridad en cada operación.
        </Typography>

        <Typography variant="h6" paragraph>
          <strong>✔ Fácil y accesible:</strong> Solo necesitas un smartphone o
          computadora para generar un cobro. Tus clientes pagan desde la app de
          su banco – sin apps adicionales – simplemente escaneando un QR o
          recibiendo una notificación.
        </Typography>

        <Typography variant="h6" paragraph>
          <strong>✔ Disponible 24/7:</strong> CoDi funciona en cualquier
          momento, todos los días del año. ¡Puedes recibir pagos aun fuera de
          horario de oficina!
        </Typography>

        <Typography variant="h5" paragraph>
          Olvídate del efectivo y de las comisiones por cobrar. Con{" "}
          <strong>TuPago.click</strong>, un tercero autorizado por Banco de
          México (Banxico), puedes generar mensajes de cobro{" "}
          <span style={{ fontFamily: "Righteous, sans-serif" }}>
            CoDi®, CoDi Cobro Digital®
          </span>{" "}
          de forma sencilla y recibir pagos al instante.
        </Typography>

        <Typography variant="h5" paragraph>
          Descubre cómo esta solución puede impulsar tus cobros digitales y
          mejorar la experiencia de pago de tus clientes.
        </Typography>

        {/* ✅ What is CoDi? */}
        <Typography
          variant="h6"
          sx={{
            mt: 3,
            fontWeight: "bold",
            fontFamily: "Open Sans, sans-serif",
          }}
        >
          ¿Qué es{" "}
          <span style={{ fontFamily: "Righteous, sans-serif" }}>
            CoDi®, CoDi Cobro Digital®
          </span>{" "}
          y cuáles son sus beneficios?
        </Typography>

        <Typography variant="h6" paragraph>
          <span style={{ fontFamily: "Righteous, sans-serif" }}>
            CoDi®, CoDi Cobro Digital®
          </span>{" "}
          es una plataforma de pagos desarrollada por Banxico que permite
          realizar cobros y pagos electrónicos de forma rápida, gratuita y
          segura usando códigos QR o notificaciones en el celular.
        </Typography>

        <Typography variant="h6" paragraph>
          En otras palabras,{" "}
          <span style={{ fontFamily: "Righteous, sans-serif" }}>
            CoDi®, CoDi Cobro Digital®
          </span>{" "}
          te permite cobrar a tus clientes a través de transferencias
          electrónicas inmediatas, sin necesidad de efectivo ni tarjetas. Sus
          principales beneficios incluyen:
        </Typography>

        {/* ✅ Benefits List */}
        {[
          {
            title: "Sin comisiones:",
            text: "Realizar cobros con CoDi es gratis. Ni tú ni tus clientes pagan comisiones por la transacción.",
          },
          {
            title: "Pagos al instante:",
            text: "El dinero llega a tu cuenta bancaria en cuestión de segundos después de que tu cliente autoriza el pago.",
          },
          {
            title: "Seguro y confiable:",
            text: "Cada pago se realiza mediante la banca electrónica con autenticación (como NIP o huella digital) y está respaldado por Banxico, brindándote seguridad en cada operación.",
          },
          {
            title: "Fácil y accesible:",
            text: "Solo necesitas un smartphone o computadora para generar un cobro. Tus clientes pagan desde la app de su banco – sin apps adicionales – simplemente escaneando un QR o recibiendo una notificación.",
          },
          {
            title: "Disponible 24/7:",
            text: "CoDi funciona en cualquier momento, todos los días del año. ¡Puedes recibir pagos aun fuera de horario de oficina!",
          },
        ].map((benefit, index) => (
          <Typography variant="h6" paragraph key={index}>
            <strong>✔ {benefit.title}</strong> {benefit.text}
          </Typography>
        ))}

        {/* ✅ CoDi for PYMEs */}
        <Typography variant="h5" sx={{ mt: 4, fontWeight: "bold" }}>
          CoDi para PYMEs (Pequeñas y Medianas Empresas)
        </Typography>

        {[
          {
            title: "Implementación sencilla:",
            text: "Genera códigos QR de cobro en segundos desde tu celular o computadora con la plataforma de TuPago.click. No requieres equipo especial ni procesos complejos.",
          },
          {
            title: "Ahorro en costos:",
            text: "Olvídate de rentar costosas terminales punto de venta o de pagar comisiones por cada venta. CoDi a través de Tupago.click no tiene costos por transacción, lo que maximiza tus ganancias.",
          },
          {
            title: "Liquidez inmediata:",
            text: "Cada pago que recibes por CoDi se refleja de inmediato en tu cuenta bancaria, mejorando tu flujo de efectivo. Nada de esperas de 24 horas o más para disponer de tu dinero.",
          },
          {
            title: "Más ventas y clientes satisfechos:",
            text: " Ofrece a tus clientes una forma adicional de pago, cómoda y moderna. Aceptar CoDi te permite atender incluso a quienes no cargan efectivo, brindándoles una experiencia de compra ágil y sin fricciones.",
          },
          {
            title: "Menos manejo de efectivo:",
            text: "Al fomentar pagos digitales, reduces el efectivo en caja y los riesgos asociados (como robos o errores de cambio). Todo queda registrado electrónicamente de forma ordenada.",
          },
        ].map((benefit, index) => (
          <Typography variant="h6" paragraph key={index}>
            <strong>✔ {benefit.title}</strong> {benefit.text}
          </Typography>
        ))}

        {/* ✅ CoDi for Large Enterprises */}
        <Typography variant="h5" sx={{ mt: 4, fontWeight: "bold" }}>
          CoDi para grandes empresas
        </Typography>

        {[
          {
            title: "Integración a sistemas existentes:",
            text: "Tupago.click ofrece APIs y soluciones personalizables para integrar CoDi en tus plataformas de venta (POS, e-commerce, apps internas) sin tener que reinventar tus procesos. La adopción de CoDi puede formar parte de tu flujo de cobro actual con mínima fricción.",
          },
          {
            title: "Escalable y robusto",
            text: "La plataforma está preparada para manejar un alto volumen de transacciones simultáneas. Ya sea que recibas cientos o miles de pagos al día, CoDi con Tupago.click escala a la medida de tu empresa sin perder velocidad ni seguridad.",
          },
          {
            title: "Conciliación sencilla:",
            text: "Cada transacción CoDi viene identificada con la información del cobro (monto, concepto, referencia). Esto hace que la conciliación de pagos contra ventas o facturas sea rápida y automatizable, integrándose con tu sistema administrativo o ERP.",
          },
          {
            title: "Seguridad y cumplimiento:",
            text: " Al estar certificado por Banxico, Tupago.click garantiza que los cobros cumplen con todos los protocolos de seguridad. La información viaja encriptada y los fondos se mueven de banco a banco directamente, reduciendo riesgos de fraude.",
          },
          {
            title: "Soporte especializado:",
            text: "Cuenta con el apoyo del equipo de Tupago.click en la implementación y monitoreo de CoDi. Te acompañamos con capacitación y soporte técnico para que todo funcione a la perfección, asegurando una transición suave hacia los pagos digitales.",
          },
        ].map((benefit, index) => (
          <Typography variant="h6" paragraph key={index}>
            <strong>✔ {benefit.title}</strong> {benefit.text}
          </Typography>
        ))}

        {/* ✅ How CoDi Works */}
        <Typography variant="h5" sx={{ mt: 4, fontWeight: "bold" }}>
          ¿Cómo funciona el pago con CoDi?
        </Typography>

        {[
          {
            title: "Generación del cobro:",
            text: "Tu negocio genera un mensaje de cobro a través de TuPago.click, mostrando un código QR en tu pantalla.",
          },
          {
            title: "Notificación al cliente:",
            text: "Tu cliente abre la app de su banco y escanea el código QR.",
          },
        ].map((step, index) => (
          <Typography variant="h6" paragraph key={index}>
            <strong>✔ {step.title}</strong> {step.text}
          </Typography>
        ))}

        {/* ✅ Final Call-to-Action */}
        <Typography variant="h5" sx={{ mt: 4, fontWeight: "bold" }}>
          ¡Implementa{" "}
          <span style={{ fontFamily: "Righteous, sans-serif" }}>
            CoDi®, CoDi Cobro Digital®
          </span>{" "}
          con <strong>TuPago.click</strong> hoy!
        </Typography>

        <Grid container spacing={3} sx={{ mt: { xs: 4, md: 4 } }}>
          {data.skills.map((skill) => (
            <Grid item xs={12} sm={6} md={4} key={skill.skill}>
              <MediaCard skill={skill} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </React.Fragment>
  );
}

/*TODO
- Implement Custom Error Pages: Create custom 404 and 500 error pages to enhance user experie*nce during unexpected errors.
- Utilize the Metadata API: Define metadata directly in your page or layout files to improve SEO and social sharing. 
DEV.TO https://dev.to/joodi/maximizing-seo-with-meta-data-in-nextjs-15-a-comprehensive-guide-4pa7?utm_source=chatgpt.com
- Generate Dynamic Metadata: For dynamic pages, use the generateMetadata function to provide unique titles and descriptions based on content.
- Set Up Security Headers: Configure HTTP security headers to prevent common vulnerabilities.
*/
