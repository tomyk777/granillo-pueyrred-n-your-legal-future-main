import { Instagram, MapPin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/Logo-USAR.webp";

const sectionLinks = [
  { href: "#nosotros", label: "Nosotros" },
  { href: "#servicios", label: "Servicios" },
  { href: "#faq", label: "Preguntas" },
  { href: "#testimonios", label: "Testimonios" },
  { href: "#contacto", label: "Contacto" },
];

const Footer = () => {
  return (
    <footer className="border-t border-silver/10 bg-charcoal py-10 md:py-12">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid gap-10 md:grid-cols-3 md:gap-8">
          <div className="flex items-center gap-4 md:justify-start justify-center">
            <Image src={logo} alt="Logo del Estudio Juridico Granillo Pueyrredon" className="h-10 w-auto" />
            <span className="font-heading text-silver-light text-sm text-center md:text-left">
              Estudio Jurídico Granillo Pueyrredón
            </span>
          </div>

          <div className="text-center md:text-left">
            <p className="font-heading text-silver-light text-sm uppercase tracking-[0.12em] mb-3">Secciones</p>
            <div className="flex flex-wrap justify-center md:justify-start gap-x-4 gap-y-2">
              {sectionLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-body text-sm text-silver hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-3 text-center md:text-left">
            <p className="font-heading text-silver-light text-sm uppercase tracking-[0.12em]">Ubicación</p>
            <a
              href="https://www.google.com/maps/place/Duarte+Quir%C3%B3s+620,+C%C3%B3rdoba,+Argentina/@-31.4135,-64.1888,17z"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-start gap-2 text-silver transition-colors hover:text-primary"
            >
              <MapPin size={18} className="mt-0.5 shrink-0" />
              <span className="font-body text-sm break-words">Duarte Quirós 620, 2° Piso, Oficina 5 · Córdoba</span>
            </a>
            <a
              href="https://www.instagram.com/estudiojuridicogranillo"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center md:justify-start gap-2 text-silver hover:text-primary transition-colors"
            >
              <Instagram size={18} />
              <span className="font-body text-sm">@estudiojuridicogranillo</span>
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-silver/10 text-center">
          <p className="font-body text-silver/70 text-xs">
            © {new Date().getFullYear()} Estudio Jurídico Granillo Pueyrredón. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
