import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AxioraLogo } from "@/components/AxioraLogo";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Inicio", href: "/" },
  { name: "Servicios", href: "/servicios" },
  { name: "Nosotros", href: "/nosotros" },
  { name: "Seguimiento", href: "/seguimiento" },
  { name: "Contacto", href: "/contacto" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full bg-card/95 backdrop-blur-xl supports-[backdrop-filter]:bg-card/80 border-b border-border/50">
      <nav className="container flex h-20 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <AxioraLogo size="md" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:items-center lg:gap-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={cn(
                "text-sm font-semibold transition-colors hover:text-accent",
                location.pathname === item.href
                  ? "text-accent"
                  : "text-foreground"
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden lg:flex lg:items-center lg:gap-4">
          <a href="tel:+34900000000" className="flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors">
            <Phone className="h-4 w-4" />
            900 000 000
          </a>
          <Button asChild className="font-bold bg-accent text-accent-foreground hover:bg-accent/90">
            <Link to="/contacto">Solicitar Cotización</Link>
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="lg:hidden -m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="sr-only">Abrir menú</span>
          {mobileMenuOpen ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border/50 bg-card">
          <div className="container space-y-1 py-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "block rounded-xl px-4 py-3 text-base font-semibold transition-colors",
                  location.pathname === item.href
                    ? "bg-accent/10 text-accent"
                    : "text-foreground hover:bg-secondary"
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-border/50 mt-4 space-y-3">
              <a 
                href="tel:+34900000000" 
                className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-muted-foreground"
              >
                <Phone className="h-4 w-4" />
                900 000 000
              </a>
              <Button asChild className="w-full font-bold bg-accent text-accent-foreground hover:bg-accent/90">
                <Link to="/contacto" onClick={() => setMobileMenuOpen(false)}>
                  Solicitar Cotización
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
