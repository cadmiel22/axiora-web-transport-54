import { Link } from "react-router-dom";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { 
  Truck, Package, MapPin, Clock, Shield, CheckCircle, 
  ArrowRight, Search, Globe, Users, Award
} from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const services = [
  {
    icon: Truck,
    title: "Transporte Nacional",
    description: "Cobertura completa en toda España con entregas rápidas y seguras."
  },
  {
    icon: Globe,
    title: "Transporte Internacional",
    description: "Conexiones con toda Europa. Red de partners certificados."
  },
  {
    icon: Package,
    title: "Carga Completa",
    description: "Camiones dedicados para sus envíos de gran volumen."
  },
  {
    icon: Shield,
    title: "Mercancías Especiales",
    description: "ADR, temperatura controlada y cargas de dimensiones excepcionales."
  }
];

const stats = [
  { value: "25+", label: "Años de experiencia" },
  { value: "50K+", label: "Envíos realizados" },
  { value: "150+", label: "Vehículos en flota" },
  { value: "98%", label: "Entregas puntuales" }
];

const whyUs = [
  {
    icon: Clock,
    title: "Puntualidad Garantizada",
    description: "Cumplimos plazos de entrega con precisión."
  },
  {
    icon: MapPin,
    title: "Seguimiento en Tiempo Real",
    description: "Sigue tu carga en cualquier momento."
  },
  {
    icon: Shield,
    title: "Seguro Integral",
    description: "Tu mercancía siempre protegida."
  },
  {
    icon: Users,
    title: "Atención Personalizada",
    description: "Un equipo dedicado a tu servicio."
  }
];

export default function Index() {
  const [trackingNumber, setTrackingNumber] = useState("");
  const navigate = useNavigate();

  const handleTracking = (e: React.FormEvent) => {
    e.preventDefault();
    if (trackingNumber.trim()) {
      navigate(`/seguimiento?ref=${trackingNumber.trim()}`);
    }
  };

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-primary py-24 lg:py-32">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyem0wLTRWMjhoLTEydjJoMTJ6bTEyLTR2LTJINDJ2Mmg2eiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
        <div className="container relative">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl">
              Transporte pesado{" "}
              <span className="text-accent">de confianza</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-primary-foreground/80">
              Más de 25 años conectando destinos en toda España y Europa. 
              Soluciones logísticas integrales con la máxima garantía de seguridad y puntualidad.
            </p>
            
            {/* Quick Tracking */}
            <form onSubmit={handleTracking} className="mt-10 flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Número de seguimiento (ej: AX2501-12345)"
                  value={trackingNumber}
                  onChange={(e) => setTrackingNumber(e.target.value)}
                  className="pl-10 h-12 bg-card text-foreground"
                />
              </div>
              <Button type="submit" size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                Rastrear Envío
              </Button>
            </form>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" variant="secondary" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                <Link to="/contacto">
                  Solicitar Cotización
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                <Link to="/servicios">Ver Servicios</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-b border-border bg-card">
        <div className="container py-12">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-accent sm:text-4xl">{stat.value}</div>
                <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 lg:py-28">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Nuestros Servicios
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Soluciones de transporte adaptadas a las necesidades de cada cliente
            </p>
          </div>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <Card key={service.title} className="group hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold">{service.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild variant="outline">
              <Link to="/servicios">
                Ver todos los servicios
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-secondary py-20 lg:py-28">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                ¿Por qué elegir Axiora?
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Combinamos experiencia, tecnología y compromiso para ofrecer el mejor servicio de transporte pesado del mercado.
              </p>
              <div className="mt-10 space-y-6">
                {whyUs.map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-primary/5 p-8 lg:p-12">
                <div className="flex h-full items-center justify-center">
                  <div className="text-center">
                    <Award className="mx-auto h-24 w-24 text-accent" />
                    <h3 className="mt-6 text-2xl font-bold">Certificados</h3>
                    <p className="mt-2 text-muted-foreground">ISO 9001 | ADR | GDP</p>
                    <div className="mt-6 flex flex-wrap justify-center gap-2">
                      <span className="inline-flex items-center rounded-full bg-accent/10 px-3 py-1 text-sm text-accent">
                        <CheckCircle className="mr-1 h-3 w-3" /> Calidad
                      </span>
                      <span className="inline-flex items-center rounded-full bg-accent/10 px-3 py-1 text-sm text-accent">
                        <CheckCircle className="mr-1 h-3 w-3" /> Seguridad
                      </span>
                      <span className="inline-flex items-center rounded-full bg-accent/10 px-3 py-1 text-sm text-accent">
                        <CheckCircle className="mr-1 h-3 w-3" /> Medio Ambiente
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28">
        <div className="container">
          <div className="rounded-2xl bg-primary p-8 sm:p-12 lg:p-16 text-center">
            <h2 className="text-3xl font-bold text-primary-foreground sm:text-4xl">
              ¿Necesita un servicio de transporte?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/80">
              Solicite una cotización sin compromiso. Nuestro equipo le responderá en menos de 24 horas con la mejor solución para su envío.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link to="/contacto">
                  Solicitar Cotización Gratuita
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                <a href="tel:+34900000000">
                  Llamar Ahora: 900 000 000
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}