import { Link } from "react-router-dom";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Truck, Package, Globe, Shield, MapPin, Clock,
  ArrowRight, CheckCircle, Phone
} from "lucide-react";

const services = [
  {
    icon: Truck,
    title: "Transporte Nacional",
    description: "Servicio de transporte de mercancías por carretera en toda España.",
    features: [
      "Cobertura en toda la península ibérica",
      "Entregas flexibles según sus necesidades",
      "Tráiler de lona con capacidad de 24 toneladas",
      "Seguimiento en tiempo real",
      "Comunicación directa con el conductor"
    ]
  },
  {
    icon: Globe,
    title: "Transporte Internacional",
    description: "Rutas hacia Portugal y Francia, expandiendo horizontes.",
    features: [
      "Envíos a Portugal (todo el país)",
      "Rutas hacia Francia",
      "Gestión de documentación",
      "Servicio puerta a puerta",
      "Ampliando destinos próximamente"
    ]
  },
  {
    icon: Package,
    title: "Carga Completa (FTL)",
    description: "Tráiler dedicado exclusivamente para sus mercancías.",
    features: [
      "Capacidad hasta 24.000 kg",
      "Sin manipulación intermedia de la carga",
      "Entregas directas sin transbordos",
      "Ideal para grandes volúmenes",
      "Flexibilidad horaria de carga y descarga"
    ]
  },
  {
    icon: Shield,
    title: "Mercancía Segura",
    description: "Su carga protegida en todo momento durante el transporte.",
    features: [
      "Tráiler en perfecto estado",
      "Sistemas de sujeción de carga",
      "Lona en óptimas condiciones",
      "Seguro de transporte",
      "Conductor experimentado"
    ]
  }
];

const coverage = [
  { region: "Península Ibérica", countries: ["España completa", "Portugal"] },
  { region: "Europa", countries: ["Francia (rutas en desarrollo)", "Más destinos próximamente"] },
];

export default function Servicios() {
  return (
    <MainLayout>
      {/* Hero */}
      <section className="gradient-hero py-20 lg:py-28">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent text-sm font-semibold mb-6">
              <Package className="h-4 w-4" />
              Lo que hacemos
            </span>
            <h1 className="text-4xl font-black tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl">
              Nuestros Servicios
            </h1>
            <p className="mt-6 text-lg text-primary-foreground/70">
              Transporte de mercancías con tráiler de lona. Servicio directo, 
              sin intermediarios y con la atención que tu carga merece.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 lg:py-28">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2">
            {services.map((service) => (
              <Card key={service.title} className="flex flex-col border-border/50 hover:border-accent/30 hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                    <service.icon className="h-7 w-7" />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 shrink-0 text-accent mt-0.5" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Trailer Section */}
      <section className="bg-secondary py-20 lg:py-28">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
                <Truck className="h-4 w-4" />
                Nuestro Vehículo
              </span>
              <h2 className="text-3xl lg:text-4xl font-black text-foreground">
                Tráiler de Lona
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Vehículo moderno y bien mantenido, preparado para transportar 
                tu mercancía con total seguridad.
              </p>
              
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="bg-card rounded-xl p-4 border border-border/50">
                  <div className="text-2xl font-black text-accent">24 Ton</div>
                  <div className="text-sm text-muted-foreground">Capacidad de carga</div>
                </div>
                <div className="bg-card rounded-xl p-4 border border-border/50">
                  <div className="text-2xl font-black text-accent">13.6m</div>
                  <div className="text-sm text-muted-foreground">Longitud útil</div>
                </div>
                <div className="bg-card rounded-xl p-4 border border-border/50">
                  <div className="text-2xl font-black text-accent">90m³</div>
                  <div className="text-sm text-muted-foreground">Volumen</div>
                </div>
                <div className="bg-card rounded-xl p-4 border border-border/50">
                  <div className="text-2xl font-black text-accent">GPS</div>
                  <div className="text-sm text-muted-foreground">Seguimiento</div>
                </div>
              </div>
            </div>
            
            <div className="bg-primary rounded-3xl p-8 lg:p-10 text-primary-foreground">
              <h3 className="text-xl font-bold mb-6">Características del Tráiler</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 shrink-0 text-accent mt-0.5" />
                  <span>Lona lateral y superior en perfecto estado</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 shrink-0 text-accent mt-0.5" />
                  <span>Sistema de sujeción con barras y cinchas</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 shrink-0 text-accent mt-0.5" />
                  <span>Piso antideslizante</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 shrink-0 text-accent mt-0.5" />
                  <span>Carga lateral y trasera</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 shrink-0 text-accent mt-0.5" />
                  <span>Localización GPS en tiempo real</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 shrink-0 text-accent mt-0.5" />
                  <span>Seguro de mercancías incluido</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage */}
      <section className="py-20 lg:py-28">
        <div className="container">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
              <MapPin className="h-4 w-4" />
              Cobertura
            </span>
            <h2 className="text-3xl lg:text-4xl font-black text-foreground">
              Dónde Operamos
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Cubrimos toda la península ibérica y estamos expandiendo nuestras rutas europeas
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {coverage.map((area) => (
              <div key={area.region} className="bg-card rounded-2xl p-6 border border-border/50">
                <h3 className="text-xl font-bold text-foreground mb-4">{area.region}</h3>
                <ul className="space-y-2">
                  {area.countries.map((country) => (
                    <li key={country} className="flex items-center gap-2 text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-accent" />
                      {country}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-primary">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-black text-primary-foreground">
              ¿Necesitas un transporte?
            </h2>
            <p className="mx-auto mt-4 text-lg text-primary-foreground/70">
              Cuéntanos qué necesitas mover y te damos precio sin compromiso.
              Respuesta rápida garantizada.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="h-14 px-8 font-bold bg-accent text-accent-foreground hover:bg-accent/90">
                <Link to="/contacto">
                  Pedir Presupuesto
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                asChild 
                size="lg" 
                variant="outline"
                className="h-14 px-8 font-bold border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
              >
                <a href="tel:+34600000000">
                  <Phone className="mr-2 h-5 w-5" />
                  600 000 000
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
