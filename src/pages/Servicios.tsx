import { MainLayout } from "@/components/layout/MainLayout";
import { 
  Container, Package, Globe, Shield, MapPin,
  ArrowRight, CheckCircle, Phone
} from "lucide-react";

const services = [
  {
    icon: Container,
    title: "Transporte Refrigerado FRC",
    description: "Tráiler frigorífico certificado para mercancías con control de temperatura.",
    features: [
      "Certificación FRC (Frigorífico Reforzado Clase C)",
      "Rango de temperatura: -20°C a +20°C",
      "Registro continuo de temperatura",
      "Ideal para alimentación, farmacia y productos sensibles",
      "Cadena de frío garantizada"
    ]
  },
  {
    icon: Globe,
    title: "Transporte Internacional",
    description: "Rutas refrigeradas hacia Portugal y Francia.",
    features: [
      "Envíos a Portugal (todo el país)",
      "Rutas hacia Francia",
      "Gestión de documentación ATP",
      "Servicio puerta a puerta",
      "Cumplimiento normativa europea"
    ]
  },
  {
    icon: Package,
    title: "Carga Completa (FTL)",
    description: "Tráiler dedicado exclusivamente para sus mercancías.",
    features: [
      "Capacidad para 33 europalets",
      "Sin manipulación intermedia de la carga",
      "Entregas directas sin transbordos",
      "Temperatura estable durante todo el trayecto",
      "Flexibilidad horaria de carga y descarga"
    ]
  },
  {
    icon: Shield,
    title: "Cadena de Frío Segura",
    description: "Su mercancía protegida y a temperatura controlada en todo momento.",
    features: [
      "Equipo frigorífico de última generación",
      "Termógrafo digital con impresión de tickets",
      "Seguimiento GPS en tiempo real",
      "Seguro de transporte incluido",
      "Conductor especializado en refrigerado"
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
              Transporte refrigerado con certificación FRC. Servicio directo, 
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
              <div 
                key={service.title} 
                className="flex flex-col bg-card rounded-2xl p-8 border border-border/50 shadow-sm"
              >
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                  <service.icon className="h-7 w-7" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">{service.title}</h2>
                <p className="mt-2 text-muted-foreground">{service.description}</p>
                <ul className="mt-6 space-y-3 flex-1">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 shrink-0 text-accent mt-0.5" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Equipment Section */}
      <section className="bg-secondary py-20 lg:py-28">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
                <Container className="h-4 w-4" />
                Nuestro Equipo
              </span>
              <h2 className="text-3xl lg:text-4xl font-black text-foreground">
                Tráiler Frigorífico FRC
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Semirremolque refrigerado con certificación FRC, preparado para 
                mantener la cadena de frío en todo el trayecto.
              </p>
              
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="bg-card rounded-xl p-4 border border-border/50">
                  <div className="text-2xl font-black text-accent">-20°C</div>
                  <div className="text-sm text-muted-foreground">Temperatura mínima</div>
                </div>
                <div className="bg-card rounded-xl p-4 border border-border/50">
                  <div className="text-2xl font-black text-accent">+20°C</div>
                  <div className="text-sm text-muted-foreground">Temperatura máxima</div>
                </div>
                <div className="bg-card rounded-xl p-4 border border-border/50">
                  <div className="text-2xl font-black text-accent">33</div>
                  <div className="text-sm text-muted-foreground">Europalets</div>
                </div>
                <div className="bg-card rounded-xl p-4 border border-border/50">
                  <div className="text-2xl font-black text-accent">FRC</div>
                  <div className="text-sm text-muted-foreground">Certificación ATP</div>
                </div>
              </div>
            </div>
            
            <div className="bg-primary rounded-3xl p-8 lg:p-10 text-primary-foreground">
              <h3 className="text-xl font-bold mb-6">Características del Frigorífico</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 shrink-0 text-accent mt-0.5" />
                  <span>Certificación FRC vigente (ATP internacional)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 shrink-0 text-accent mt-0.5" />
                  <span>Equipo de frío de última generación</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 shrink-0 text-accent mt-0.5" />
                  <span>Termógrafo digital con impresión de tickets</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 shrink-0 text-accent mt-0.5" />
                  <span>Suelo antideslizante y raíles para europalets</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 shrink-0 text-accent mt-0.5" />
                  <span>Localización GPS en tiempo real</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 shrink-0 text-accent mt-0.5" />
                  <span>Seguro de mercancías refrigeradas incluido</span>
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
              <a 
                href="/contacto"
                className="inline-flex items-center justify-center h-14 px-8 font-bold bg-accent text-accent-foreground hover:bg-accent/90 rounded-md transition-colors"
              >
                Pedir Presupuesto
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <span className="inline-flex items-center justify-center h-14 px-8 font-bold border border-primary-foreground/20 text-primary-foreground rounded-md">
                <Phone className="mr-2 h-5 w-5" />
                600 000 000
              </span>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
