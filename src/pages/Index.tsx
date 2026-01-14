import { Link } from "react-router-dom";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Truck, Package, MapPin, Clock, Shield, CheckCircle, 
  ArrowRight, Search, Globe, Users, Award, Phone, 
  ChevronRight, Zap, Target, TrendingUp
} from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const services = [
  {
    icon: Truck,
    title: "Transporte Nacional",
    description: "Cobertura completa en toda la península con entregas en 24-48h.",
    features: ["Entregas express", "Cargas completas", "Grupaje"]
  },
  {
    icon: Globe,
    title: "Transporte Internacional",
    description: "Red europea con partners certificados en más de 20 países.",
    features: ["Francia", "Portugal", "Alemania", "Italia"]
  },
  {
    icon: Package,
    title: "Cargas Especiales",
    description: "Maquinaria pesada, dimensiones excepcionales y ADR.",
    features: ["Góndolas", "Plataformas", "Frigoríficos"]
  },
  {
    icon: Shield,
    title: "Logística Integral",
    description: "Almacenaje, distribución y gestión completa de su cadena.",
    features: ["Almacén", "Cross-docking", "Última milla"]
  }
];

const stats = [
  { value: "25+", label: "Años de experiencia", icon: Award },
  { value: "50K+", label: "Envíos realizados", icon: Package },
  { value: "150+", label: "Vehículos en flota", icon: Truck },
  { value: "98%", label: "Entregas puntuales", icon: Target }
];

const advantages = [
  {
    icon: Zap,
    title: "Rapidez",
    description: "Plazos de entrega competitivos con seguimiento en tiempo real."
  },
  {
    icon: Shield,
    title: "Seguridad",
    description: "Seguro integral de mercancías y protocolos de seguridad certificados."
  },
  {
    icon: TrendingUp,
    title: "Eficiencia",
    description: "Optimización de rutas y costes para máxima rentabilidad."
  },
  {
    icon: Users,
    title: "Atención",
    description: "Equipo dedicado disponible 24/7 para su tranquilidad."
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
      <section className="relative min-h-[90vh] flex items-center gradient-hero overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "2s" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-3xl" />
          
          {/* Grid pattern */}
          <div 
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `linear-gradient(hsl(0 0% 100%) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 100%) 1px, transparent 1px)`,
              backgroundSize: '60px 60px'
            }}
          />
        </div>

        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent mb-8">
                <Truck className="h-4 w-4" />
                <span className="text-sm font-semibold">Líderes en Transporte Pesado</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-primary-foreground leading-[1.1] tracking-tight">
                Tu carga,{" "}
                <span className="text-gradient">nuestra</span>
                <br />
                <span className="text-gradient">prioridad</span>
              </h1>
              
              <p className="mt-6 text-lg lg:text-xl text-primary-foreground/70 max-w-xl mx-auto lg:mx-0">
                Más de 25 años conectando destinos en España y Europa. 
                Soluciones logísticas con la máxima garantía de <strong className="text-primary-foreground">seguridad</strong> y <strong className="text-primary-foreground">puntualidad</strong>.
              </p>

              {/* CTA Buttons */}
              <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <Button 
                  asChild 
                  size="lg" 
                  className="h-14 px-8 text-base font-bold bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg shadow-accent/25 hover:shadow-accent/40 transition-all duration-300"
                >
                  <Link to="/contacto">
                    Solicitar Cotización
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button 
                  asChild 
                  size="lg" 
                  variant="outline"
                  className="h-14 px-8 text-base font-bold border-primary-foreground/20 text-primary-foreground bg-primary-foreground/5 hover:bg-primary-foreground/10 backdrop-blur-sm"
                >
                  <Link to="/servicios">
                    Ver Servicios
                  </Link>
                </Button>
              </div>

              {/* Quick Stats */}
              <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center lg:text-left">
                    <div className="text-2xl sm:text-3xl font-black text-accent">{stat.value}</div>
                    <div className="text-xs text-primary-foreground/60 font-medium mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Tracking Box */}
            <div className="relative">
              <div className="bg-card/95 backdrop-blur-xl rounded-3xl p-8 lg:p-10 shadow-2xl border border-border/50">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-12 w-12 rounded-xl bg-accent/10 flex items-center justify-center">
                    <Search className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-foreground">Rastrea tu Envío</h2>
                    <p className="text-sm text-muted-foreground">Seguimiento en tiempo real</p>
                  </div>
                </div>

                <form onSubmit={handleTracking} className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Número de Seguimiento
                    </label>
                    <Input
                      type="text"
                      placeholder="Ej: AX2501-12345"
                      value={trackingNumber}
                      onChange={(e) => setTrackingNumber(e.target.value)}
                      className="h-14 text-base bg-secondary border-border/50 focus:border-accent"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    size="lg"
                    className="w-full h-14 text-base font-bold bg-primary hover:bg-primary/90"
                  >
                    <Search className="mr-2 h-5 w-5" />
                    Rastrear Ahora
                  </Button>
                </form>

                <div className="mt-6 pt-6 border-t border-border/50">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">¿Necesitas ayuda?</span>
                    <a 
                      href="tel:+34900000000" 
                      className="flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent/80 transition-colors"
                    >
                      <Phone className="h-4 w-4" />
                      900 000 000
                    </a>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="hidden lg:block absolute -top-6 -right-6 bg-accent text-accent-foreground rounded-2xl p-4 shadow-xl animate-float">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  <span className="font-bold text-sm">24/7 Operativo</span>
                </div>
              </div>
              
              <div className="hidden lg:block absolute -bottom-4 -left-4 bg-card text-foreground rounded-2xl p-4 shadow-xl border border-border/50 animate-float" style={{ animationDelay: "3s" }}>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-accent" />
                  <span className="font-bold text-sm">98% Puntualidad</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 lg:py-32 bg-secondary">
        <div className="container">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
              <Package className="h-4 w-4" />
              Nuestros Servicios
            </span>
            <h2 className="text-3xl lg:text-5xl font-black text-foreground">
              Soluciones de transporte
              <span className="text-gradient"> a medida</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Adaptamos nuestros servicios a las necesidades específicas de cada cliente
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div 
                key={service.title}
                className="group relative bg-card rounded-2xl p-6 lg:p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-border/50 hover:border-accent/30"
              >
                <div className="h-14 w-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300">
                  <service.icon className="h-7 w-7 text-accent group-hover:text-accent-foreground transition-colors" />
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature) => (
                    <span 
                      key={feature}
                      className="px-3 py-1 text-xs font-medium bg-secondary rounded-full text-muted-foreground"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <Link 
                  to="/servicios"
                  className="absolute bottom-6 right-6 h-10 w-10 rounded-full bg-secondary flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <ChevronRight className="h-5 w-5 text-foreground" />
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild size="lg" variant="outline" className="h-12 px-6 font-bold">
              <Link to="/servicios">
                Ver todos los servicios
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 lg:py-32">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
                <Award className="h-4 w-4" />
                ¿Por qué Axiora?
              </span>
              <h2 className="text-3xl lg:text-5xl font-black text-foreground leading-tight">
                La confianza de más de 
                <span className="text-gradient"> 5.000 clientes</span>
              </h2>
              <p className="mt-6 text-lg text-muted-foreground">
                Combinamos décadas de experiencia con la última tecnología para ofrecer un servicio de transporte excepcional. Tu mercancía está en las mejores manos.
              </p>

              <div className="mt-10 grid sm:grid-cols-2 gap-6">
                {advantages.map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="h-12 w-12 shrink-0 rounded-xl bg-accent/10 flex items-center justify-center">
                      <item.icon className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground">{item.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Button asChild size="lg" className="mt-10 h-12 px-6 font-bold bg-accent hover:bg-accent/90">
                <Link to="/nosotros">
                  Conocer más sobre nosotros
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            {/* Certificates Box */}
            <div className="relative">
              <div className="bg-primary rounded-3xl p-10 lg:p-12 text-primary-foreground">
                <div className="text-center">
                  <Award className="mx-auto h-20 w-20 text-accent" />
                  <h3 className="mt-6 text-2xl lg:text-3xl font-black">Certificados de Calidad</h3>
                  <p className="mt-3 text-primary-foreground/70">
                    Cumplimos con los más altos estándares de calidad y seguridad
                  </p>
                  
                  <div className="mt-8 flex flex-wrap justify-center gap-4">
                    <span className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-4 py-2 text-sm font-semibold">
                      <CheckCircle className="h-4 w-4 text-accent" /> ISO 9001
                    </span>
                    <span className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-4 py-2 text-sm font-semibold">
                      <CheckCircle className="h-4 w-4 text-accent" /> ADR
                    </span>
                    <span className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-4 py-2 text-sm font-semibold">
                      <CheckCircle className="h-4 w-4 text-accent" /> GDP
                    </span>
                    <span className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-4 py-2 text-sm font-semibold">
                      <CheckCircle className="h-4 w-4 text-accent" /> ISO 14001
                    </span>
                  </div>

                  <div className="mt-8 pt-8 border-t border-primary-foreground/10 grid grid-cols-3 gap-4">
                    <div>
                      <div className="text-3xl font-black text-accent">25+</div>
                      <div className="text-xs text-primary-foreground/60 mt-1">Años</div>
                    </div>
                    <div>
                      <div className="text-3xl font-black text-accent">150+</div>
                      <div className="text-xs text-primary-foreground/60 mt-1">Vehículos</div>
                    </div>
                    <div>
                      <div className="text-3xl font-black text-accent">5K+</div>
                      <div className="text-xs text-primary-foreground/60 mt-1">Clientes</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 h-20 w-20 bg-accent rounded-2xl -z-10" />
              <div className="absolute -bottom-4 -left-4 h-20 w-20 bg-accent/20 rounded-2xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-primary">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-5xl font-black text-primary-foreground">
              ¿Listo para empezar?
            </h2>
            <p className="mt-6 text-lg lg:text-xl text-primary-foreground/70 max-w-2xl mx-auto">
              Solicite una cotización sin compromiso. Nuestro equipo le responderá en menos de 24 horas con la mejor solución para su envío.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                asChild 
                size="lg" 
                className="h-14 px-8 text-base font-bold bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg shadow-accent/25"
              >
                <Link to="/contacto">
                  Solicitar Cotización Gratuita
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                asChild 
                size="lg" 
                variant="outline"
                className="h-14 px-8 text-base font-bold border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
              >
                <a href="tel:+34900000000">
                  <Phone className="mr-2 h-5 w-5" />
                  Llamar: 900 000 000
                </a>
              </Button>
            </div>

            <p className="mt-8 text-sm text-primary-foreground/50">
              Respuesta garantizada en menos de 24 horas · Sin compromiso · Atención personalizada
            </p>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
