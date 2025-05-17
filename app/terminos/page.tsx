import Link from "next/link";
import { Code, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Términos y Condiciones - SonoraDevelopment",
  description:
    "Términos y condiciones de uso de los servicios de SonoraDevelopment",
};

export default function TermsPage() {
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
                Términos y Condiciones
              </h1>
              <p className="text-muted-foreground">
                Última actualización: {new Date().toLocaleDateString("es-MX")}
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <section className="rounded-lg border bg-card p-6 shadow-sm">
              <h2 className="text-2xl font-semibold mb-4">1. Introducción</h2>
              <p className="text-muted-foreground">
                Estos Términos y Condiciones regulan el uso de los servicios
                proporcionados por SonoraDevelopment (en adelante, "la
                Empresa"), con domicilio en Sonora, México. Al acceder y
                utilizar nuestros servicios, usted acepta estos términos en su
                totalidad.
              </p>
            </section>

            <section className="rounded-lg border bg-card p-6 shadow-sm">
              <h2 className="text-2xl font-semibold mb-4">2. Servicios</h2>
              <p className="text-muted-foreground">
                La Empresa ofrece servicios de desarrollo de software, que
                incluyen pero no se limitan a: desarrollo web, creación de
                chatbots para WhatsApp, landing pages, software a medida,
                consultoría IT y soporte técnico.
              </p>
            </section>

            <section className="rounded-lg border bg-card p-6 shadow-sm">
              <h2 className="text-2xl font-semibold mb-4">
                3. Relación Contractual
              </h2>
              <p className="text-muted-foreground">
                La contratación de nuestros servicios se formalizará mediante un
                contrato específico que detallará el alcance, plazos,
                entregables y condiciones económicas. Estos Términos y
                Condiciones complementan dicho contrato.
              </p>
            </section>

            <section className="rounded-lg border bg-card p-6 shadow-sm">
              <h2 className="text-2xl font-semibold mb-4">
                4. Propiedad Intelectual
              </h2>
              <p className="text-muted-foreground mb-4">
                De conformidad con la Ley Federal del Derecho de Autor de
                México:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>
                  La Empresa mantiene la propiedad intelectual del código fuente
                  desarrollado hasta el pago completo del proyecto.
                </li>
                <li>
                  Una vez finalizado el pago, los derechos patrimoniales sobre
                  el código desarrollado específicamente para el cliente serán
                  transferidos según lo establecido en el contrato específico.
                </li>
                <li>
                  La Empresa conserva el derecho de utilizar técnicas,
                  algoritmos y metodologías generales empleados en el
                  desarrollo.
                </li>
                <li>
                  El cliente es responsable de la legalidad del contenido que
                  proporcione para el desarrollo.
                </li>
              </ul>
            </section>

            <section className="rounded-lg border bg-card p-6 shadow-sm">
              <h2 className="text-2xl font-semibold mb-4">
                5. Confidencialidad
              </h2>
              <p className="text-muted-foreground mb-4">
                Conforme a la Ley Federal de Protección de Datos Personales en
                Posesión de los Particulares:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>
                  La Empresa se compromete a mantener la confidencialidad de
                  toda la información proporcionada por el cliente durante el
                  desarrollo de los proyectos.
                </li>
                <li>
                  No divulgaremos información confidencial a terceros sin
                  autorización previa del cliente, excepto cuando sea requerido
                  por ley.
                </li>
              </ul>
            </section>

            <section className="rounded-lg border bg-card p-6 shadow-sm">
              <h2 className="text-2xl font-semibold mb-4">
                6. Garantías y Responsabilidades
              </h2>
              <p className="text-muted-foreground mb-4">
                De acuerdo con la Ley Federal de Protección al Consumidor:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>
                  La Empresa garantiza que los servicios se prestarán con la
                  diligencia y calidad propias de la industria.
                </li>
                <li>
                  El periodo de garantía para corrección de errores será
                  especificado en el contrato de cada proyecto.
                </li>
                <li>
                  La Empresa no será responsable por fallos debidos a
                  modificaciones realizadas por terceros o por el propio
                  cliente.
                </li>
                <li>
                  La responsabilidad máxima de la Empresa no excederá el importe
                  total pagado por los servicios contratados.
                </li>
              </ul>
            </section>

            <section className="rounded-lg border bg-card p-6 shadow-sm">
              <h2 className="text-2xl font-semibold mb-4">
                7. Condiciones de Pago
              </h2>
              <p className="text-muted-foreground mb-4">
                Las condiciones de pago se especificarán en el contrato de cada
                proyecto, incluyendo:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Calendario de pagos</li>
                <li>Métodos de pago aceptados</li>
                <li>Consecuencias por demora en los pagos</li>
              </ul>
            </section>

            <section className="rounded-lg border bg-card p-6 shadow-sm">
              <h2 className="text-2xl font-semibold mb-4">8. Terminación</h2>
              <p className="text-muted-foreground mb-4">
                La relación contractual podrá terminarse por:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Finalización satisfactoria del proyecto</li>
                <li>Mutuo acuerdo entre las partes</li>
                <li>
                  Incumplimiento grave de las obligaciones por cualquiera de las
                  partes
                </li>
              </ul>
              <p className="text-muted-foreground mt-4">
                En caso de terminación anticipada, se acordarán las condiciones
                de liquidación correspondientes.
              </p>
            </section>

            <section className="rounded-lg border bg-card p-6 shadow-sm">
              <h2 className="text-2xl font-semibold mb-4">
                9. Legislación Aplicable
              </h2>
              <p className="text-muted-foreground">
                Estos Términos y Condiciones se rigen por las leyes de los
                Estados Unidos Mexicanos. Cualquier controversia se someterá a
                los tribunales competentes de Sonora, México, renunciando las
                partes a cualquier otro fuero que pudiera corresponderles.
              </p>
            </section>

            <section className="rounded-lg border bg-card p-6 shadow-sm">
              <h2 className="text-2xl font-semibold mb-4">
                10. Modificaciones
              </h2>
              <p className="text-muted-foreground">
                La Empresa se reserva el derecho de modificar estos Términos y
                Condiciones en cualquier momento. Las modificaciones entrarán en
                vigor desde su publicación en nuestro sitio web.
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
