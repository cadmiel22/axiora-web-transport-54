import { Link } from "react-router-dom";
import { Truck, Phone, Mail, MapPin, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent">
                <Truck className="h-5 w-5 text-accent-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold">AXIORA SL</span>
                <span className="text-xs opacity-80">Transporte Pesado</span>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              Especialistas en transporte pesado por carretera. Más de 20 años de experiencia garantizando entregas seguras y puntuales en toda España y Europa.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <Link to="/" className="hover:opacity-100 hover:text-accent transition-colors">Inicio</Link>
              </li>
              <li>
                <Link to="/servicios" className="hover:opacity-100 hover:text-accent transition-colors">Servicios</Link>
              </li>
              <li>
                <Link to="/nosotros" className="hover:opacity-100 hover:text-accent transition-colors">Sobre Nosotros</Link>
              </li>
              <li>
                <Link to="/seguimiento" className="hover:opacity-100 hover:text-accent transition-colors">Rastrear Envío</Link>
              </li>
              <li>
                <Link to="/contacto" className="hover:opacity-100 hover:text-accent transition-colors">Contacto</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Servicios</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li>Transporte Nacional</li>
              <li>Transporte Internacional</li>
              <li>Carga Completa</li>
              <li>Mercancías Peligrosas</li>
              <li>Cargas Especiales</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contacto</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-accent" />
                <span className="opacity-80">Polígono Industrial Norte, Calle Principal 123, Madrid, España</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-accent" />
                <a href="tel:+34900000000" className="opacity-80 hover:opacity-100 transition-colors">+34 900 000 000</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-accent" />
                <a href="mailto:info@axiora.es" className="opacity-80 hover:opacity-100 transition-colors">info@axiora.es</a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="h-4 w-4 shrink-0 text-accent" />
                <span className="opacity-80">Lun - Vie: 8:00 - 20:00</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm opacity-70">
          <p>© {new Date().getFullYear()} Axiora SL. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <Link to="/admin" className="hover:opacity-100 transition-colors">Acceso Admin</Link>
            <a href="#" className="hover:opacity-100 transition-colors">Política de Privacidad</a>
            <a href="#" className="hover:opacity-100 transition-colors">Términos y Condiciones</a>
          </div>
        </div>
      </div>
    </footer>
  );
}