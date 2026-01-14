import { Link } from "react-router-dom";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { 
  Truck, Users, Award, Target, Eye, Heart,
  ArrowRight, CheckCircle, Zap, Shield, Phone
} from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Trato Personal",
    description: "Hablamos contigo directamente. Sin intermediarios, sin call centers, sin esperas."
  },
  {
    icon: Target,
    title: "Compromiso",
    description: "Cuando decimos que llegamos, llegamos. Tu carga es nuestra responsabilidad."
  },
  {
    icon: Zap,
    title: "Agilidad",
    description: "Decisiones rápidas, respuestas inmediatas. La flexibilidad de ser pequeños."
  },
  {
    icon: Shield,
    title: "Confianza",
    description: "Transparencia total. Te informamos en todo momento del estado de tu envío."
  }
];

const whyUs = [
  "Trato directo con el propietario",
  "Precios competitivos sin intermediarios",
  "Flexibilidad horaria para cargas y descargas",
  "Comunicación constante durante el transporte",
  "Seguimiento GPS en tiempo real",
  "Compromiso personal con cada envío"
];

export default function Nosotros() {
  return (
    <MainLayout>
      {/* Hero */}
      <section className="gradient-hero py-20 lg:py-28">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent text-sm font-semibold mb-6">
              <Users className="h-4 w-4" />
              Quiénes Somos
            </span>
            <h1 className="text-4xl font-black tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl">
              Sobre Axiora
            </h1>
            <p className="mt-6 text-lg text-primary-foreground/70">
              Una empresa joven con ganas de hacer las cosas bien. 
              Transporte de confianza con trato personal.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 lg:py-28">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
                <Award className="h-4 w-4" />
                Nuestra Historia
              </span>
              <h2 className="text-3xl lg:text-4xl font-black text-foreground">
                Empezamos con un tráiler y muchas ganas
              </h2>
              <p className="mt-6 text-lg text-muted-foreground">
                Axiora nace de la pasión por el transporte y la convicción de que 
                se pueden hacer las cosas de otra manera: con <strong className="text-foreground">trato cercano</strong>, 
                <strong className="text-foreground"> honestidad</strong> y <strong className="text-foreground">compromiso real</strong>.
              </p>
              <p className="mt-4 text-muted-foreground">
                Somos una empresa nueva, sí. Pero eso nos hace más ágiles, más flexibles 
                y más comprometidos. Cada cliente es importante, cada carga es nuestra responsabilidad.
              </p>
              <p className="mt-4 text-muted-foreground">
                No somos una gran empresa con cientos de camiones. Somos personas que 
                entienden tu negocio y tratamos tu mercancía como si fuera nuestra.
              </p>
            </div>
            
            <div className="bg-secondary rounded-3xl p-8 lg:p-10">
              <h3 className="text-xl font-bold text-foreground mb-6">¿Por qué elegirnos?</h3>
              <ul className="space-y-4">
                {whyUs.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 shrink-0 text-accent mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-secondary py-20 lg:py-28">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="bg-card rounded-3xl p-8 lg:p-10 border border-border/50">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 text-accent mb-6">
                <Target className="h-7 w-7" />
              </div>
              <h2 className="text-2xl font-black text-foreground">Nuestra Misión</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Ofrecer un servicio de transporte de mercancías donde el cliente 
                sea lo primero. Cumplir lo que prometemos, comunicar de forma 
                transparente y cuidar cada carga como si fuera propia.
              </p>
            </div>
            <div className="bg-card rounded-3xl p-8 lg:p-10 border border-border/50">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 text-accent mb-6">
                <Eye className="h-7 w-7" />
              </div>
              <h2 className="text-2xl font-black text-foreground">Nuestra Visión</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Crecer de forma sostenible, manteniendo siempre el trato personal 
                que nos caracteriza. Queremos ser la opción de confianza para 
                empresas que valoran el servicio por encima de todo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-28">
        <div className="container">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
              <Heart className="h-4 w-4" />
              Lo que nos define
            </span>
            <h2 className="text-3xl lg:text-4xl font-black text-foreground">
              Nuestros Valores
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Los principios que guían cada decisión y cada kilómetro
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div key={value.title} className="bg-card rounded-2xl p-6 text-center border border-border/50 hover:border-accent/30 hover:shadow-xl transition-all duration-300">
                <div className="mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-accent text-accent-foreground">
                  <value.icon className="h-7 w-7" />
                </div>
                <h3 className="text-lg font-bold text-foreground">{value.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-primary py-20">
        <div className="container">
          <div className="grid gap-8 sm:grid-cols-3 text-center max-w-3xl mx-auto">
            <div>
              <Truck className="mx-auto h-10 w-10 text-accent" />
              <div className="mt-4 text-4xl font-black text-primary-foreground">1</div>
              <div className="mt-1 text-primary-foreground/70">Tráiler operativo</div>
            </div>
            <div>
              <Target className="mx-auto h-10 w-10 text-accent" />
              <div className="mt-4 text-4xl font-black text-primary-foreground">100%</div>
              <div className="mt-1 text-primary-foreground/70">Compromiso</div>
            </div>
            <div>
              <Heart className="mx-auto h-10 w-10 text-accent" />
              <div className="mt-4 text-4xl font-black text-primary-foreground">24/7</div>
              <div className="mt-1 text-primary-foreground/70">Disponibilidad</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28">
        <div className="container">
          <div className="rounded-3xl bg-secondary p-8 sm:p-12 lg:p-16 text-center">
            <h2 className="text-3xl lg:text-4xl font-black text-foreground">
              ¿Hablamos?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Cuéntanos qué necesitas y veremos cómo podemos ayudarte.
              Sin compromiso, con total transparencia.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="h-14 px-8 font-bold bg-accent text-accent-foreground hover:bg-accent/90">
                <Link to="/contacto">
                  Contactar
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                asChild 
                size="lg" 
                variant="outline"
                className="h-14 px-8 font-bold"
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
