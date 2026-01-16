import { MainLayout } from "@/components/layout/MainLayout";
import { Search, Package, MapPin, Clock, CheckCircle, Container, AlertCircle, Phone, Mail } from "lucide-react";

export default function Seguimiento() {
  return (
    <MainLayout>
      {/* Hero */}
      <section className="gradient-hero py-20 lg:py-28">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent text-sm font-semibold mb-6">
              <MapPin className="h-4 w-4" />
              Localiza tu envío
            </span>
            <h1 className="text-4xl font-black tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl">
              Seguimiento de Envío
            </h1>
            <p className="mt-6 text-lg text-primary-foreground/70">
              Introduce tu número de referencia para conocer el estado de tu envío en tiempo real
            </p>
          </div>
        </div>
      </section>

      {/* Search Form */}
      <section className="py-16">
        <div className="container max-w-2xl">
          <div className="bg-card rounded-3xl p-8 lg:p-10 border border-border/50 shadow-lg -mt-20 relative z-10">
            <form action="/seguimiento" method="get" className="space-y-6">
              <div>
                <label htmlFor="ref" className="block text-sm font-medium text-foreground mb-2">
                  Número de Referencia
                </label>
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <input
                    type="text"
                    id="ref"
                    name="ref"
                    placeholder="Ej: AX2501-12345"
                    className="w-full h-14 pl-12 pr-4 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full h-14 bg-accent text-accent-foreground font-bold rounded-xl hover:bg-accent/90 transition-colors"
              >
                Buscar Envío
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
              <Package className="h-4 w-4" />
              Estados del Envío
            </span>
            <h2 className="text-3xl lg:text-4xl font-black text-foreground">
              Cómo funciona el seguimiento
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Tu envío pasa por diferentes estados hasta llegar a destino
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
            <div className="bg-card rounded-2xl p-6 text-center border border-border/50">
              <div className="mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-muted text-muted-foreground">
                <Clock className="h-7 w-7" />
              </div>
              <h3 className="text-lg font-bold text-foreground">Pendiente</h3>
              <p className="mt-2 text-sm text-muted-foreground">Esperando recogida en origen</p>
            </div>

            <div className="bg-card rounded-2xl p-6 text-center border border-border/50">
              <div className="mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
                <Package className="h-7 w-7" />
              </div>
              <h3 className="text-lg font-bold text-foreground">Recogido</h3>
              <p className="mt-2 text-sm text-muted-foreground">Mercancía cargada y asegurada</p>
            </div>

            <div className="bg-card rounded-2xl p-6 text-center border border-border/50">
              <div className="mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                <Container className="h-7 w-7" />
              </div>
              <h3 className="text-lg font-bold text-foreground">En Tránsito</h3>
              <p className="mt-2 text-sm text-muted-foreground">Camino al punto de destino</p>
            </div>

            <div className="bg-card rounded-2xl p-6 text-center border border-border/50">
              <div className="mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-green-600">
                <CheckCircle className="h-7 w-7" />
              </div>
              <h3 className="text-lg font-bold text-foreground">Entregado</h3>
              <p className="mt-2 text-sm text-muted-foreground">Mercancía entregada con éxito</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="bg-secondary py-16 lg:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/10 text-accent mb-6">
              <AlertCircle className="h-8 w-8" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-black text-foreground">
              ¿No encuentras tu envío?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Si tienes problemas para localizar tu envío o necesitas más información, 
              contacta directamente con nosotros
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="tel:+34600000000"
                className="inline-flex items-center justify-center h-14 px-8 font-bold bg-accent text-accent-foreground rounded-md hover:bg-accent/90"
              >
                <Phone className="mr-2 h-5 w-5" />
                600 000 000
              </a>
              <a 
                href="mailto:info@axiora.es"
                className="inline-flex items-center justify-center h-14 px-8 font-bold border border-border rounded-md hover:bg-card"
              >
                <Mail className="mr-2 h-5 w-5" />
                info@axiora.es
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-3 max-w-5xl mx-auto">
            <div className="bg-card rounded-2xl p-8 border border-border/50">
              <h3 className="text-lg font-bold text-foreground mb-4">¿Dónde encuentro mi referencia?</h3>
              <p className="text-muted-foreground">
                El número de referencia te lo proporcionamos cuando confirmamos tu envío. 
                Tiene el formato AX2501-XXXXX y lo encontrarás en el email de confirmación.
              </p>
            </div>
            <div className="bg-card rounded-2xl p-8 border border-border/50">
              <h3 className="text-lg font-bold text-foreground mb-4">Actualizaciones en tiempo real</h3>
              <p className="text-muted-foreground">
                El estado del envío se actualiza automáticamente durante el transporte. 
                Puedes consultarlo tantas veces como necesites.
              </p>
            </div>
            <div className="bg-card rounded-2xl p-8 border border-border/50">
              <h3 className="text-lg font-bold text-foreground mb-4">Comunicación directa</h3>
              <p className="text-muted-foreground">
                Si necesitas información más detallada, llámanos directamente. 
                Te atendemos personalmente y te informamos al momento.
              </p>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
