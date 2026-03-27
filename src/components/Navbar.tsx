"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/optimized/logo-navbar.webp";

const WHATSAPP_NUMBER = "5493513513178";
const NAVBAR_WHATSAPP_MESSAGE = "Hola, quiero asesoramiento legal sobre mi jubilacion.";
const NAVBAR_WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(NAVBAR_WHATSAPP_MESSAGE)}`;

const navLinks = [
  { href: "#nosotros", label: "Nosotros" },
  { href: "#servicios", label: "Servicios" },
  { href: "#faq", label: "Preguntas" },
  { href: "#testimonios", label: "Testimonios" },
  { href: "#contacto", label: "Contacto" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(navLinks[0].href);

  useEffect(() => {
    const updateActiveSection = () => {
      const currentPosition = window.scrollY + 140;
      let currentSection = navLinks[0].href;

      for (const link of navLinks) {
        const section = document.querySelector(link.href);
        if (section instanceof HTMLElement && currentPosition >= section.offsetTop) {
          currentSection = link.href;
        }
      }

      setActiveSection(currentSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  return (
    <nav aria-label="Navegacion principal" className="fixed top-0 left-0 right-0 z-50 bg-charcoal/95 backdrop-blur-sm border-b border-silver/20">
      <div className="container mx-auto flex items-center justify-between px-4 py-2.5 md:py-3">
        <Link href="#inicio" className="flex items-center gap-3">
          <Image
            src={logo}
            alt="Estudio Juridico GP"
            className="h-10 w-auto brightness-200 md:h-12"
            sizes="(max-width: 768px) 72px, 92px"
            fetchPriority="high"
            priority
          />
        </Link>
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-body text-sm tracking-wider uppercase text-silver-light transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/80 focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal rounded-sm"
            >
              <span
                className={`relative inline-block after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:rounded-full after:bg-primary after:origin-left after:transition-all after:duration-300 ${
                  activeSection === link.href ? "after:opacity-100 after:scale-x-100" : "after:opacity-0 after:scale-x-0"
                }`}
              >
                {link.label}
              </span>
            </Link>
          ))}
          <a
            href={NAVBAR_WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded border border-primary/70 bg-primary px-4 py-2 text-xs font-semibold tracking-[0.12em] uppercase text-primary-foreground transition-all duration-300 hover:bg-burgundy-light hover:border-burgundy-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-silver-light/90 focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal"
          >
            Consultanos
          </a>
        </div>
        <button
          type="button"
          className="md:hidden text-silver-light"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Cerrar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <div id="mobile-menu" className="md:hidden bg-charcoal border-t border-silver/20 py-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block px-6 py-3 font-body text-sm tracking-wider uppercase text-silver-light transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/80 focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal rounded-sm"
            >
              <span
                className={`relative inline-block after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:rounded-full after:bg-primary after:origin-left after:transition-all after:duration-300 ${
                  activeSection === link.href ? "after:opacity-100 after:scale-x-100" : "after:opacity-0 after:scale-x-0"
                }`}
              >
                {link.label}
              </span>
            </Link>
          ))}
          <a
            href={NAVBAR_WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-2 mx-6 inline-flex w-[calc(100%-3rem)] items-center justify-center rounded border border-primary/70 bg-primary px-4 py-3 text-xs font-semibold tracking-[0.12em] uppercase text-primary-foreground transition-all duration-300 hover:bg-burgundy-light hover:border-burgundy-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-silver-light/90 focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal"
          >
            Consultanos
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
