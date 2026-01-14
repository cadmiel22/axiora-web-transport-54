import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { AxioraLogo } from "@/components/AxioraLogo";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-16 lg:py-20">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <AxioraLogo size="lg" className="text-primary-foreground [&_span]:text-primary-foreground" />
            <p className="mt-6 text-sm text-primary-foreground/70 leading-relaxed">
              Especialistas en transporte pesado por carretera. Más de 25 años de experiencia garantizando entregas seguras y puntuales en toda España y Europa.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-6">Enlaces Rápidos</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/" className="text-primary-foreground/70 hover:text-accent transition-colors font-medium">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/servicios" className="text-primary-foreground/70 hover:text-accent transition-colors font-medium">
                  Servicios
                </Link>
              </li>
              <li>
                <Link to="/nosotros" className="text-primary-foreground/70 hover:text-accent transition-colors font-medium">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link to="/seguimiento" className="text-primary-foreground/70 hover:text-accent transition-colors font-medium">
                  Rastrear Envío
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="text-primary-foreground/70 hover:text-accent transition-colors font-medium">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-6">Servicios</h3>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li className="font-medium">Transporte Nacional</li>
              <li className="font-medium">Transporte Internacional</li>
              <li className="font-medium">Carga Completa</li>
              <li className="font-medium">Mercancías Peligrosas</li>
              <li className="font-medium">Cargas Especiales</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-6">Contacto</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5 shrink-0 text-accent" />
                <span className="text-primary-foreground/70">Polígono Industrial Norte, Calle Principal 123, Madrid, España</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-accent" />
                <a href="tel:+34900000000" className="text-primary-foreground/70 hover:text-accent transition-colors font-medium">
                  +34 900 000 000
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0 text-accent" />
                <a href="mailto:info@axiora.es" className="text-primary-foreground/70 hover:text-accent transition-colors font-medium">
                  info@axiora.es
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="h-5 w-5 shrink-0 text-accent" />
                <span className="text-primary-foreground/70">Lun - Vie: 8:00 - 20:00</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <p className="text-primary-foreground/50">
            © {new Date().getFullYear()} Axiora SL. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 text-primary-foreground/50">
            <Link to="/admin" className="hover:text-accent transition-colors font-medium">
              Acceso Admin
            </Link>
            <a href="#" className="hover:text-accent transition-colors font-medium">
              Política de Privacidad
            </a>
            <a href="#" className="hover:text-accent transition-colors font-medium">
              Términos
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
