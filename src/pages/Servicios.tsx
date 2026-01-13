import { Link } from "react-router-dom";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Truck, Package, Globe, Shield, Thermometer, Box,
  ArrowRight, CheckCircle, AlertTriangle
} from "lucide-react";

const services = [
  {
    icon: Truck,
    title: "Transporte Nacional",
    description: "Servicio de transporte de mercancías por carretera en todo el territorio español.",
    features: [
      "Cobertura en toda España peninsular e islas",
      "Entregas en 24-48 horas según destino",
      "Flota propia de vehículos modernos",
      "Seguimiento en tiempo real",
      "Seguro incluido en todos los envíos"
    ]
  },
  {
    icon: Globe,
    title: "Transporte Internacional",
    description: "Conexiones regulares con los principales destinos europeos.",
    features: [
      "Red de partners en toda Europa",
      "Gestión de documentación aduanera",
      "Rutas optimizadas y frecuentes",
      "Transporte multimodal disponible",
      "Servicio puerta a puerta"
    ]
  },
  {
    icon: Package,
    title: "Carga Completa (FTL)",
    description: "Camiones dedicados exclusivamente para sus mercancías.",
    features: [
      "Vehículos de 3.5 a 40 toneladas",
      "Sin manipulación intermedia de la carga",
      "Entregas directas sin transbordos",
      "Ideal para grandes volúmenes",
      "Flexibilidad horaria de carga y descarga"
    ]
  },
  {
    icon: Box,
    title: "Carga Parcial (LTL)",
    description: "Solución económica para envíos que no ocupan un camión completo.",
    features: [
      "Costes compartidos con otras cargas",
      "Servicio regular y frecuente",
      "Ideal para envíos medianos",
      "Consolidación de mercancías",
      "Entregas programadas"
    ]
  },
  {
    icon: AlertTriangle,
    title: "Mercancías Peligrosas (ADR)",
    description: "Transporte especializado de materiales regulados bajo normativa ADR.",
    features: [
      "Conductores certificados ADR",
      "Vehículos homologados",
      "Documentación específica gestionada",
      "Cumplimiento normativo garantizado",
      "Asesoramiento en clasificación"
    ]
  },
  {
    icon: Thermometer,
    title: "Temperatura Controlada",
    description: "Transporte frigorífico para productos que requieren condiciones específicas.",
    features: [
      "Rangos de -25°C a +25°C",
      "Monitorización continua de temperatura",
      "Certificación ATP/HACCP",
      "Ideal para alimentación y farmacia",
      "Informes de temperatura disponibles"
    ]
  }
];

const vehicleTypes = [
  { name: "Furgonetas", capacity: "Hasta 1.500 kg", use: "Entregas urgentes y pequeños volúmenes" },
  { name: "Camiones 12T", capacity: "Hasta 6.000 kg", use: "Cargas medias y distribución regional" },
  { name: "Tráilers", capacity: "Hasta 24.000 kg", use: "Grandes volúmenes y larga distancia" },
  { name: "Megatráilers", capacity: "Hasta 25.000 kg", use: "Cargas voluminosas y ligeras" },
  { name: "Góndolas", capacity: "Hasta 40.000 kg", use: "Maquinaria y cargas especiales" },
];

export default function Servicios() {
  return (
    <MainLayout>
      {/* Hero */}
      <section className="bg-primary py-16 lg:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl">
              Nuestros Servicios
            </h1>
            <p className="mt-6 text-lg text-primary-foreground/80">
              Soluciones de transporte pesado adaptadas a cada necesidad. 
              Desde cargas parciales hasta proyectos especiales, tenemos la solución que necesita.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Card key={service.title} className="flex flex-col">
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 shrink-0 text-accent mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet Section */}
      <section className="bg-secondary py-20">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Nuestra Flota
            </h2>
            <p className="mt-4 text-muted-foreground">
              Más de 150 vehículos propios para satisfacer cualquier necesidad de transporte
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-4 font-semibold">Tipo de Vehículo</th>
                  <th className="text-left py-4 px-4 font-semibold">Capacidad</th>
                  <th className="text-left py-4 px-4 font-semibold">Uso Recomendado</th>
                </tr>
              </thead>
              <tbody>
                {vehicleTypes.map((vehicle) => (
                  <tr key={vehicle.name} className="border-b border-border">
                    <td className="py-4 px-4 font-medium">{vehicle.name}</td>
                    <td className="py-4 px-4 text-muted-foreground">{vehicle.capacity}</td>
                    <td className="py-4 px-4 text-muted-foreground">{vehicle.use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container">
          <div className="rounded-2xl bg-primary p-8 sm:p-12 text-center">
            <h2 className="text-3xl font-bold text-primary-foreground">
              ¿Necesita un servicio personalizado?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/80">
              Contacte con nuestro equipo comercial para recibir una propuesta adaptada a sus necesidades específicas.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link to="/contacto">
                  Solicitar Cotización
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