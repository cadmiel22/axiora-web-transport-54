import { MainLayout } from "@/components/layout/MainLayout";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Contacto() {
  return (
    <MainLayout>
      {/* Hero */}
      <section className="bg-primary py-16">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold text-primary-foreground">Contacto</h1>
            <p className="mt-4 text-primary-foreground/80">Solicite una cotización o contacte con nuestro equipo</p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-card rounded-2xl p-8 border border-border/50 shadow-sm">
                <h2 className="text-xl font-bold mb-6 text-foreground">Solicitar Cotización</h2>
                <form 
                  action="/api/contact" 
                  method="POST" 
                  className="grid gap-4 sm:grid-cols-2"
                >
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Nombre *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      placeholder="Su nombre"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      placeholder="email@ejemplo.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      placeholder="+34 600 000 000"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                      Empresa
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      placeholder="Nombre de la empresa"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="service_type" className="block text-sm font-medium text-foreground mb-2">
                      Tipo de servicio
                    </label>
                    <select
                      id="service_type"
                      name="service_type"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      <option value="">Seleccione un servicio</option>
                      <option value="nacional">Transporte Nacional</option>
                      <option value="internacional">Transporte Internacional</option>
                      <option value="ftl">Carga Completa</option>
                      <option value="ltl">Carga Parcial</option>
                      <option value="temperatura">Temperatura Controlada</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="origin" className="block text-sm font-medium text-foreground mb-2">
                      Origen
                    </label>
                    <input
                      type="text"
                      id="origin"
                      name="origin"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      placeholder="Ciudad de origen"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="destination" className="block text-sm font-medium text-foreground mb-2">
                      Destino
                    </label>
                    <input
                      type="text"
                      id="destination"
                      name="destination"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      placeholder="Ciudad de destino"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="cargo_description" className="block text-sm font-medium text-foreground mb-2">
                      Descripción de la carga
                    </label>
                    <input
                      type="text"
                      id="cargo_description"
                      name="cargo_description"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      placeholder="Tipo de mercancía, peso, etc."
                    />
                  </div>
                  
                  <div className="sm:col-span-2">
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Mensaje adicional
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      placeholder="Indique cualquier información adicional relevante"
                    />
                  </div>
                  
                  <div className="sm:col-span-2">
                    <button 
                      type="submit"
                      className="w-full h-12 px-6 font-bold bg-accent text-accent-foreground hover:bg-accent/90 rounded-md transition-colors"
                    >
                      Enviar Solicitud
                    </button>
                  </div>
                </form>
              </div>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-card rounded-2xl p-6 border border-border/50 shadow-sm flex gap-4">
                <Phone className="h-6 w-6 text-accent shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground">Teléfono</h3>
                  <p className="text-muted-foreground">+34 900 000 000</p>
                </div>
              </div>
              
              <div className="bg-card rounded-2xl p-6 border border-border/50 shadow-sm flex gap-4">
                <Mail className="h-6 w-6 text-accent shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground">Email</h3>
                  <p className="text-muted-foreground">info@axiora.es</p>
                </div>
              </div>
              
              <div className="bg-card rounded-2xl p-6 border border-border/50 shadow-sm flex gap-4">
                <MapPin className="h-6 w-6 text-accent shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground">Dirección</h3>
                  <p className="text-muted-foreground">Polígono Industrial Norte, Madrid</p>
                </div>
              </div>
              
              <div className="bg-card rounded-2xl p-6 border border-border/50 shadow-sm flex gap-4">
                <Clock className="h-6 w-6 text-accent shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground">Horario</h3>
                  <p className="text-muted-foreground">Lun-Vie: 8:00-20:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
