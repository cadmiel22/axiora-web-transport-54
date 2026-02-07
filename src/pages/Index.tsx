import { MainLayout } from "@/components/layout/MainLayout";
import { 
  Container, Package, Globe, Shield, CheckCircle, 
  ArrowRight, Award, Phone, Zap, Heart, TrendingUp, Star, Quote
} from "lucide-react";
import trailerImage from "@/assets/trailer-axiora.png";

const services = [
  {
    icon: Container,
    title: "Transporte Refrigerado",
    description: "Tráiler frigorífico FRC para mercancías con control de temperatura.",
    features: ["Frío garantizado", "Certificación FRC", "Temperatura controlada"]
  },
  {
    icon: Globe,
    title: "Nacional e Internacional",
    description: "España, Portugal y Francia. Rutas directas sin transbordos.",
    features: ["Península Ibérica", "Francia", "Rutas directas"]
  },
  {
    icon: Package,
    title: "Cargas Completas",
    description: "Tráiler dedicado exclusivamente para su mercancía.",
    features: ["Carga completa", "Sin manipulación", "Entrega directa"]
  },
  {
    icon: Shield,
    title: "Atención Personal",
    description: "Trato directo y personalizado. Usted habla con el responsable.",
    features: ["Trato directo", "Flexibilidad", "Compromiso"]
  }
];

const advantages = [
  {
    icon: Zap,
    title: "Agilidad",
    description: "Sin intermediarios. Decisiones rápidas y respuesta inmediata."
  },
  {
    icon: Heart,
    title: "Trato Personal",
    description: "Atención directa del propietario. Su carga es nuestra prioridad."
  },
  {
    icon: TrendingUp,
    title: "Precios Competitivos",
    description: "Costes ajustados sin comprometer la calidad del servicio."
  },
  {
    icon: Shield,
    title: "Compromiso",
    description: "Cumplimos lo que prometemos. Su confianza es nuestro mayor activo."
  }
];

const testimonials = [
  {
    name: "María García",
    company: "Frutas Selectas S.L.",
    text: "Excelente servicio de transporte refrigerado. Nuestra fruta llega siempre en perfectas condiciones.",
    rating: 5
  },
  {
    name: "Carlos Rodríguez",
    company: "Lácteos del Norte",
    text: "Profesionales y puntuales. El trato personal marca la diferencia con otras empresas de transporte.",
    rating: 5
  },
  {
    name: "Ana Martínez",
    company: "Distribuciones Frescas",
    text: "Llevamos trabajando con Axiora varios meses y la experiencia ha sido inmejorable.",
    rating: 5
  }
];

export default function Index() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center gradient-hero overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
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
                <Container className="h-4 w-4" />
                <span className="text-sm font-semibold">Transporte Refrigerado FRC</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-primary-foreground leading-[1.1] tracking-tight">
                Tu carga,{" "}
                <span className="text-gradient">siempre a</span>
                <br />
                <span className="text-gradient">temperatura</span>
              </h1>
              
              <p className="mt-6 text-lg lg:text-xl text-primary-foreground/70 max-w-xl mx-auto lg:mx-0">
                <strong className="text-primary-foreground">Transporte frigorífico certificado FRC</strong> con trato personal y compromiso real. 
                Conectamos España con Europa.
              </p>

              {/* CTA Buttons */}
              <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <a 
                  href="/contacto"
                  className="inline-flex items-center justify-center h-14 px-8 text-base font-bold bg-accent hover:bg-accent/90 text-accent-foreground rounded-md shadow-lg shadow-accent/25 transition-colors"
                >
                  Solicitar Cotización
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
                <a 
                  href="/servicios"
                  className="inline-flex items-center justify-center h-14 px-8 text-base font-bold border border-primary-foreground/20 text-primary-foreground bg-primary-foreground/5 hover:bg-primary-foreground/10 rounded-md backdrop-blur-sm transition-colors"
                >
                  Ver Servicios
                </a>
              </div>

              {/* Quick highlights */}
              <div className="mt-12 flex flex-wrap items-center justify-center lg:justify-start gap-6">
                <div className="flex items-center gap-2 text-primary-foreground/80">
                  <CheckCircle className="h-5 w-5 text-accent" />
                  <span className="text-sm font-medium">Trato directo</span>
                </div>
                <div className="flex items-center gap-2 text-primary-foreground/80">
                  <CheckCircle className="h-5 w-5 text-accent" />
                  <span className="text-sm font-medium">Precios competitivos</span>
                </div>
                <div className="flex items-center gap-2 text-primary-foreground/80">
                  <CheckCircle className="h-5 w-5 text-accent" />
                  <span className="text-sm font-medium">Seguimiento online</span>
                </div>
              </div>
            </div>

            {/* Right - Image and Info Card stacked */}
            <div className="relative space-y-6 pb-8 lg:pb-12">
              {/* Trailer Image */}
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-border/50">
                <img 
                  src={trailerImage} 
                  alt="Tráiler refrigerado Axiora en carretera" 
                  className="w-full h-auto object-cover object-center"
                />
              </div>

              {/* Info Card */}
              <div className="bg-card/95 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-border/50">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                      <Container className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground">Transporte Refrigerado</h3>
                      <p className="text-sm text-muted-foreground">Frigorífico certificado FRC para garantizar la cadena de frío</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-flex items-center gap-1 rounded-full bg-accent/10 px-3 py-1.5 text-sm font-semibold text-foreground">
                      <CheckCircle className="h-4 w-4 text-accent" /> FRC
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-accent/10 px-3 py-1.5 text-sm font-semibold text-foreground">
                      <CheckCircle className="h-4 w-4 text-accent" /> -20°C a +20°C
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-accent/10 px-3 py-1.5 text-sm font-semibold text-foreground">
                      <CheckCircle className="h-4 w-4 text-accent" /> GPS
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border/50">
                    <div className="text-center">
                      <div className="text-2xl font-black text-accent">13.6m</div>
                      <div className="text-xs text-muted-foreground">Longitud</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-black text-accent">33</div>
                      <div className="text-xs text-muted-foreground">Europalets</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-black text-accent">24h</div>
                      <div className="text-xs text-muted-foreground">Autonomía frío</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative corner accent */}
              <div className="hidden lg:block absolute -top-3 -right-3 h-16 w-16 bg-accent rounded-2xl -z-10" />
              <div className="hidden lg:block absolute -bottom-3 -left-3 h-16 w-16 bg-accent/30 rounded-2xl -z-10" />
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
              Servicio personalizado adaptado a las necesidades de cada cliente
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <div 
                key={service.title}
                className="group relative bg-card rounded-2xl p-6 lg:p-8 shadow-sm border border-border/50"
              >
                <div className="h-14 w-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-6">
                  <service.icon className="h-7 w-7 text-accent" />
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
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a 
              href="/servicios"
              className="inline-flex items-center justify-center h-12 px-6 font-bold border border-border rounded-md hover:bg-secondary transition-colors text-foreground"
            >
              Ver todos los servicios
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
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
                Pequeños pero
                <span className="text-gradient"> comprometidos</span>
              </h2>
              <p className="mt-6 text-lg text-muted-foreground">
                Ser una empresa joven nos permite ofrecerte algo que las grandes no pueden: 
                <strong className="text-foreground"> trato directo, flexibilidad total y compromiso personal</strong> con cada envío.
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

              <a 
                href="/nosotros"
                className="inline-flex items-center justify-center mt-10 h-12 px-6 font-bold bg-accent hover:bg-accent/90 text-accent-foreground rounded-md transition-colors"
              >
                Conocer más sobre nosotros
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>

            {/* Info Box */}
            <div className="relative">
              <div className="bg-primary rounded-3xl p-10 lg:p-12 text-primary-foreground">
                <div className="text-center">
                  <Container className="mx-auto h-20 w-20 text-accent" />
                  <h3 className="mt-6 text-2xl lg:text-3xl font-black">Transporte Refrigerado</h3>
                  <p className="mt-3 text-primary-foreground/70">
                    Frigorífico certificado FRC para garantizar la cadena de frío
                  </p>
                  
                  <div className="mt-8 flex flex-wrap justify-center gap-4">
                    <span className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-4 py-2 text-sm font-semibold">
                      <CheckCircle className="h-4 w-4 text-accent" /> FRC
                    </span>
                    <span className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-4 py-2 text-sm font-semibold">
                      <CheckCircle className="h-4 w-4 text-accent" /> -20°C a +20°C
                    </span>
                    <span className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-4 py-2 text-sm font-semibold">
                      <CheckCircle className="h-4 w-4 text-accent" /> GPS
                    </span>
                  </div>

                  <div className="mt-8 pt-8 border-t border-primary-foreground/10 grid grid-cols-3 gap-4">
                    <div>
                      <div className="text-3xl font-black text-accent">13.6m</div>
                      <div className="text-xs text-primary-foreground/60 mt-1">Longitud</div>
                    </div>
                    <div>
                      <div className="text-3xl font-black text-accent">33</div>
                      <div className="text-xs text-primary-foreground/60 mt-1">Europalets</div>
                    </div>
                    <div>
                      <div className="text-3xl font-black text-accent">24h</div>
                      <div className="text-xs text-primary-foreground/60 mt-1">Autonomía frío</div>
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

      {/* Testimonials Section */}
      <section className="py-24 lg:py-32 bg-secondary">
        <div className="container">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
              <Quote className="h-4 w-4" />
              Testimonios
            </span>
            <h2 className="text-3xl lg:text-5xl font-black text-foreground">
              Lo que dicen
              <span className="text-gradient"> nuestros clientes</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              La satisfacción de nuestros clientes es nuestra mejor carta de presentación
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.name}
                className="bg-card rounded-2xl p-8 shadow-sm border border-border/50"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-foreground mb-6">"{testimonial.text}"</p>
                <div>
                  <p className="font-bold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-primary">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-5xl font-black text-primary-foreground">
              ¿Necesitas transportar mercancía?
            </h2>
            <p className="mt-6 text-lg lg:text-xl text-primary-foreground/70 max-w-2xl mx-auto">
              Cuéntanos qué necesitas y te preparamos un presupuesto sin compromiso. 
              Respuesta rápida garantizada.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="/contacto"
                className="inline-flex items-center justify-center h-14 px-8 text-base font-bold bg-accent hover:bg-accent/90 text-accent-foreground rounded-md shadow-lg shadow-accent/25 transition-colors"
              >
                Pedir Presupuesto Gratis
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <span className="inline-flex items-center justify-center h-14 px-8 text-base font-bold border border-primary-foreground/20 text-primary-foreground bg-primary-foreground/5 rounded-md">
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
