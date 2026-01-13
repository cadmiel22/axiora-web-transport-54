import { Link } from "react-router-dom";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { 
  Truck, Users, Award, Target, Eye, Heart,
  ArrowRight, CheckCircle
} from "lucide-react";

const timeline = [
  { year: "1999", title: "Fundación", description: "Axiora SL nace como empresa familiar de transporte en Madrid." },
  { year: "2005", title: "Expansión Nacional", description: "Apertura de delegaciones en Barcelona, Valencia y Sevilla." },
  { year: "2010", title: "Certificación ISO", description: "Obtención de la certificación ISO 9001 de calidad." },
  { year: "2015", title: "Internacionalización", description: "Inicio de rutas regulares con Francia, Portugal y Alemania." },
  { year: "2020", title: "Transformación Digital", description: "Implementación del sistema de seguimiento en tiempo real." },
  { year: "2024", title: "Sostenibilidad", description: "Incorporación de vehículos eco y compromiso carbono neutral 2030." }
];

const values = [
  {
    icon: Target,
    title: "Compromiso",
    description: "Cumplimos lo que prometemos. Cada envío es una promesa de puntualidad y cuidado."
  },
  {
    icon: Eye,
    title: "Transparencia",
    description: "Información clara y accesible en todo momento sobre el estado de sus envíos."
  },
  {
    icon: Heart,
    title: "Servicio",
    description: "Ponemos al cliente en el centro. Su satisfacción es nuestro principal objetivo."
  },
  {
    icon: Award,
    title: "Excelencia",
    description: "Mejora continua en procesos, tecnología y formación de nuestro equipo."
  }
];

const certifications = [
  { name: "ISO 9001:2015", description: "Sistema de Gestión de Calidad" },
  { name: "ISO 14001:2015", description: "Sistema de Gestión Ambiental" },
  { name: "ADR", description: "Transporte de Mercancías Peligrosas" },
  { name: "GDP", description: "Good Distribution Practice (Farmacia)" },
  { name: "ATP", description: "Transporte Perecederos" },
  { name: "HACCP", description: "Seguridad Alimentaria" }
];

export default function Nosotros() {
  return (
    <MainLayout>
      {/* Hero */}
      <section className="bg-primary py-16 lg:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl">
              Sobre Axiora SL
            </h1>
            <p className="mt-6 text-lg text-primary-foreground/80">
              Más de 25 años conectando destinos y construyendo relaciones de confianza 
              con nuestros clientes en el sector del transporte pesado.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="space-y-6">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <Target className="h-6 w-6" />
              </div>
              <h2 className="text-3xl font-bold">Nuestra Misión</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Proporcionar soluciones de transporte pesado por carretera que superen las expectativas 
                de nuestros clientes, garantizando la máxima seguridad, puntualidad y eficiencia en 
                cada operación, contribuyendo al éxito de sus negocios.
              </p>
            </div>
            <div className="space-y-6">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <Eye className="h-6 w-6" />
              </div>
              <h2 className="text-3xl font-bold">Nuestra Visión</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Ser referentes en el sector del transporte pesado en España y Europa, 
                reconocidos por nuestra excelencia operativa, innovación tecnológica y 
                compromiso con la sostenibilidad, manteniendo siempre el trato cercano 
                que nos caracteriza.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-secondary py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Nuestros Valores</h2>
            <p className="mt-4 text-muted-foreground">
              Los principios que guían cada decisión y cada kilómetro
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div key={value.title} className="bg-card rounded-xl p-6 text-center">
                <div className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                  <value.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold">{value.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Nuestra Historia</h2>
            <p className="mt-4 text-muted-foreground">
              Un recorrido de crecimiento constante y mejora continua
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2 hidden md:block" />
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={item.year} className={`flex items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="bg-card rounded-xl p-6 inline-block shadow-sm">
                      <div className="text-2xl font-bold text-accent">{item.year}</div>
                      <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                  <div className="hidden md:flex h-4 w-4 shrink-0 rounded-full bg-accent border-4 border-background" />
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="bg-primary py-20">
        <div className="container">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 text-center">
            <div>
              <Users className="mx-auto h-10 w-10 text-accent" />
              <div className="mt-4 text-4xl font-bold text-primary-foreground">200+</div>
              <div className="mt-1 text-primary-foreground/80">Profesionales</div>
            </div>
            <div>
              <Truck className="mx-auto h-10 w-10 text-accent" />
              <div className="mt-4 text-4xl font-bold text-primary-foreground">150+</div>
              <div className="mt-1 text-primary-foreground/80">Vehículos propios</div>
            </div>
            <div>
              <Award className="mx-auto h-10 w-10 text-accent" />
              <div className="mt-4 text-4xl font-bold text-primary-foreground">6</div>
              <div className="mt-1 text-primary-foreground/80">Certificaciones</div>
            </div>
            <div>
              <Target className="mx-auto h-10 w-10 text-accent" />
              <div className="mt-4 text-4xl font-bold text-primary-foreground">98%</div>
              <div className="mt-1 text-primary-foreground/80">Satisfacción</div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Certificaciones</h2>
            <p className="mt-4 text-muted-foreground">
              Garantía de calidad y cumplimiento normativo
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((cert) => (
              <div key={cert.name} className="flex items-center gap-4 rounded-lg border border-border p-4">
                <CheckCircle className="h-6 w-6 shrink-0 text-accent" />
                <div>
                  <div className="font-semibold">{cert.name}</div>
                  <div className="text-sm text-muted-foreground">{cert.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container">
          <div className="rounded-2xl bg-secondary p-8 sm:p-12 text-center">
            <h2 className="text-3xl font-bold">
              ¿Quiere conocernos mejor?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Visítenos en nuestras instalaciones o contacte con nuestro equipo comercial.
            </p>
            <div className="mt-8">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link to="/contacto">
                  Contactar
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}