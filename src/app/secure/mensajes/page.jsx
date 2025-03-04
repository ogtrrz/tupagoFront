// app/mensajes/page.js (Server Component by default)
import { Suspense } from "react";
import MensajesTable from "@/app/mensajes/MensajesTable"; // Client Component

export default function MensajesPage() {
  return (
    <Suspense fallback={<div>Cargando Mensajes...</div>}>
      <MensajesTable />
    </Suspense>
  );
}
