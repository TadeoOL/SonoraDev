import Link from "next/link";
import { Code, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Política de Privacidad - SonoraDevelopment",
  description:
    "Política de privacidad y tratamiento de datos personales de SonoraDevelopment",
};

export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-background to-muted">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <Code className="h-6 w-6 text-primary" />
              <span className="inline-block font-bold">SonoraDevelopment</span>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1 container py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Button variant="ghost" asChild className="mb-4">
              <Link href="/" className="flex items-center gap-2">
                <ChevronLeft className="h-4 w-4" />
                Volver a la página principal
              </Link>
            </Button>
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tight">
                Aviso de Privacidad
              </h1>
              <p className="text-muted-foreground">
                Última actualización: {new Date().toLocaleDateString("es-MX")}
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <section className="rounded-lg border bg-card p-6 shadow-sm">
              <h2 className="text-2xl font-semibold mb-4">
                1. Identidad y Domicilio del Responsable
              </h2>
              <p className="text-muted-foreground">
                SonoraDevelopment (en adelante, "la Empresa"), con domicilio en
                Sonora, México, es el responsable del tratamiento de sus datos
                personales conforme a este aviso de privacidad.
              </p>
            </section>

            <section className="rounded-lg border bg-card p-6 shadow-sm">
              <h2 className="text-2xl font-semibold mb-4">2. Marco Legal</h2>
              <p className="text-muted-foreground">
                Este Aviso de Privacidad se emite en cumplimiento de lo
                dispuesto por la Ley Federal de Protección de Datos Personales
                en Posesión de los Particulares (LFPDPPP), su Reglamento y los
                Lineamientos del Aviso de Privacidad.
              </p>
            </section>

            <section className="rounded-lg border bg-card p-6 shadow-sm">
              <h2 className="text-2xl font-semibold mb-4">
                3. Datos Personales que Recabamos
              </h2>
              <p className="text-muted-foreground mb-4">
                Para las finalidades señaladas en el presente aviso de
                privacidad, podemos recabar sus datos personales de distintas
                formas: cuando usted nos los proporciona directamente, cuando
                visita nuestro sitio web, y cuando obtenemos información a
                través de otras fuentes permitidas por la ley.
              </p>
              <p className="text-muted-foreground mb-4">
                Los datos personales que recabamos incluyen:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>
                  Datos de identificación: nombre, apellidos, correo
                  electrónico, teléfono.
                </li>
                <li>
                  Datos de contacto empresarial: nombre de la empresa, cargo,
                  dirección comercial.
                </li>
                <li>
                  Datos de facturación: RFC, domicilio fiscal, datos bancarios
                  para pagos.
                </li>
              </ul>
            </section>

            <section className="rounded-lg border bg-card p-6 shadow-sm">
              <h2 className="text-2xl font-semibold mb-4">
                4. Datos Personales Sensibles
              </h2>
              <p className="text-muted-foreground">
                La Empresa no recaba datos personales sensibles.
              </p>
            </section>

            <section className="rounded-lg border bg-card p-6 shadow-sm">
              <h2 className="text-2xl font-semibold mb-4">
                5. Finalidades del Tratamiento
              </h2>
              <p className="text-muted-foreground mb-4">
                Sus datos personales serán utilizados para las siguientes
                finalidades:
              </p>
              <p className="text-muted-foreground mb-2 font-medium">
                Finalidades primarias (necesarias para el servicio solicitado):
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                <li>
                  Establecer comunicación relacionada con nuestros servicios
                </li>
                <li>Elaboración de propuestas y contratos de servicios</li>
                <li>Prestación de los servicios contratados</li>
                <li>Facturación y cobranza</li>
                <li>Atención a solicitudes, quejas y sugerencias</li>
                <li>Cumplimiento de obligaciones legales</li>
              </ul>
              <p className="text-muted-foreground mb-2 font-medium">
                Finalidades secundarias (no necesarias para el servicio
                solicitado):
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>
                  Envío de comunicaciones sobre nuevos servicios o promociones
                </li>
                <li>Invitación a eventos o webinars</li>
                <li>Encuestas de satisfacción y mejora de servicios</li>
                <li>Fines estadísticos y de mercadeo</li>
              </ul>
            </section>

            <section className="rounded-lg border bg-card p-6 shadow-sm">
              <h2 className="text-2xl font-semibold mb-4">
                6. Limitación del Uso o Divulgación de sus Datos Personales
              </h2>
              <p className="text-muted-foreground">
                Usted puede limitar el uso o divulgación de sus datos personales
                para finalidades secundarias enviando un correo electrónico a la
                dirección: sonoradev.to@gmail.com.
              </p>
            </section>

            <section className="rounded-lg border bg-card p-6 shadow-sm">
              <h2 className="text-2xl font-semibold mb-4">
                7. Medios para Ejercer los Derechos ARCO
              </h2>
              <p className="text-muted-foreground mb-4">
                De conformidad con la LFPDPPP, usted tiene derecho a Acceder,
                Rectificar y Cancelar sus datos personales, así como a Oponerse
                al tratamiento de los mismos o revocar el consentimiento que
                para tal fin nos haya otorgado (Derechos ARCO).
              </p>
              <p className="text-muted-foreground mb-4">
                Para ejercer estos derechos, deberá enviar una solicitud por
                escrito a la dirección de correo electrónico
                sonoradev.to@gmail.com, la cual deberá contener al menos:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>
                  Nombre completo y domicilio u otro medio para comunicarle la
                  respuesta a su solicitud
                </li>
                <li>
                  Documentos que acrediten su identidad o, en su caso, la
                  representación legal
                </li>
                <li>
                  Descripción clara y precisa de los datos personales respecto
                  de los que busca ejercer alguno de los derechos ARCO
                </li>
                <li>
                  Cualquier otro elemento o documento que facilite la
                  localización de los datos personales
                </li>
              </ul>
              <p className="text-muted-foreground mt-4">
                La Empresa responderá a su solicitud en un plazo máximo de 20
                (veinte) días hábiles contados desde la fecha en que recibió la
                solicitud correspondiente.
              </p>
            </section>

            <section className="rounded-lg border bg-card p-6 shadow-sm">
              <h2 className="text-2xl font-semibold mb-4">
                8. Transferencia de Datos Personales
              </h2>
              <p className="text-muted-foreground mb-4">
                La Empresa podrá transferir sus datos personales en los
                siguientes casos, sin requerir su consentimiento adicional,
                conforme al artículo 37 de la LFPDPPP:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>
                  Cuando la transferencia esté prevista en una Ley o Tratado en
                  los que México sea parte
                </li>
                <li>
                  Cuando sea necesaria para la prestación del servicio
                  contratado
                </li>
                <li>
                  Cuando sea legalmente exigida para la salvaguarda de un
                  interés público, o para la procuración o administración de
                  justicia
                </li>
                <li>
                  Cuando sea precisa para el reconocimiento, ejercicio o defensa
                  de un derecho en un proceso judicial
                </li>
              </ul>
              <p className="text-muted-foreground mt-4">
                Para otras transferencias no contempladas en los supuestos
                anteriores, se requerirá su consentimiento previo.
              </p>
            </section>

            <section className="rounded-lg border bg-card p-6 shadow-sm">
              <h2 className="text-2xl font-semibold mb-4">
                9. Uso de Cookies y Tecnologías de Rastreo
              </h2>
              <p className="text-muted-foreground mb-4">
                Nuestro sitio web utiliza cookies y tecnologías similares para
                mejorar su experiencia de navegación. Estas tecnologías pueden
                recopilar información sobre su comportamiento de navegación,
                como las páginas que visita y las acciones que realiza en
                nuestro sitio.
              </p>
              <p className="text-muted-foreground">
                Usted puede desactivar el uso de cookies ajustando la
                configuración de su navegador, aunque esto podría afectar la
                funcionalidad del sitio web.
              </p>
            </section>

            <section className="rounded-lg border bg-card p-6 shadow-sm">
              <h2 className="text-2xl font-semibold mb-4">
                10. Cambios al Aviso de Privacidad
              </h2>
              <p className="text-muted-foreground mb-4">
                La Empresa se reserva el derecho de efectuar modificaciones o
                actualizaciones al presente Aviso de Privacidad en cualquier
                momento, para la atención de reformas legislativas, políticas
                internas o nuevos requerimientos para la prestación de nuestros
                servicios.
              </p>
              <p className="text-muted-foreground">
                Estas modificaciones estarán disponibles a través de nuestro
                sitio web. Se entenderá que usted acepta los términos del Aviso
                de Privacidad al utilizar nuestros servicios después de las
                actualizaciones.
              </p>
            </section>

            <section className="rounded-lg border bg-card p-6 shadow-sm">
              <h2 className="text-2xl font-semibold mb-4">
                11. Instituto Nacional de Transparencia (INAI)
              </h2>
              <p className="text-muted-foreground">
                Si usted considera que su derecho a la protección de datos
                personales ha sido vulnerado por alguna conducta de nuestros
                empleados o de nuestras actuaciones o respuestas, puede acudir
                ante el Instituto Nacional de Transparencia, Acceso a la
                Información y Protección de Datos Personales (INAI) para mayor
                información visite www.inai.org.mx.
              </p>
            </section>
          </div>
        </div>
      </main>
      <footer className="w-full border-t bg-background py-6 md:py-8">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row md:gap-8">
          <div className="flex items-center space-x-2">
            <Code className="h-6 w-6 text-primary" />
            <span className="font-bold">SonoraDevelopment</span>
          </div>
          <div className="flex flex-col items-center space-y-2 md:items-start">
            <p className="text-center text-sm text-muted-foreground md:text-left">
              © {new Date().getFullYear()} SonoraDevelopment. Todos los derechos
              reservados.
            </p>
            <a
              href="mailto:sonoradev.to@gmail.com"
              className="text-sm text-primary hover:underline"
            >
              sonoradev.to@gmail.com
            </a>
          </div>
          <div className="flex gap-4">
            <Link
              href="/terminos"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Términos
            </Link>
            <Link
              href="/privacidad"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Privacidad
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
