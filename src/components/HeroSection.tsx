import { Scale, Shield, Heart, Award } from "lucide-react";
import Image from "next/image";
import logo from "@/assets/logo.png";
import heroBg from "@/assets/hero-bg.jpg";

const WHATSAPP_NUMBER = "5493513513178";
const HERO_WHATSAPP_MESSAGE = "Hola, quiero consultar por el inicio de mi tramite jubilatorio.";
const HERO_WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(HERO_WHATSAPP_MESSAGE)}`;

const stats = [
  { value: "25+", label: "Años de trayectoria" },
  { value: "Trato", label: "Personalizado y cordial" },
  { value: "3", label: "Profesionales especializados" },
];

const differentials = [
  { icon: Scale, title: "Especialización técnica" },
  { icon: Shield, title: "Gestión integral del conflicto" },
  { icon: Heart, title: "Humanización del vínculo jurídico" },
  { icon: Award, title: "Trayectoria comprobada" },
];

const HeroSection = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col items-center justify-center bg-charcoal overflow-hidden"
    >
      {/* Background image */}
      <Image src={heroBg} alt="" fill className="absolute inset-0 w-full h-full object-cover" priority />
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-charcoal/75" />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent" />

      <div className="relative z-10 container mx-auto px-4 pt-14 pb-24 text-center flex flex-col items-center justify-center min-h-screen md:pt-20 md:pb-28">
        <Image
          src={logo}
          alt="Estudio Jurídico Granillo Pueyrredón"
          className="mx-auto h-36 md:h-48 w-auto brightness-200 mb-6 animate-fade-in-up"
          priority
        />

        <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl text-silver-light font-bold tracking-tight mb-6 animate-fade-in-up" style={{ animationDelay: "0.15s", opacity: 0 }}>
          Hacé valer tus años de trabajo
        </h1>

        <p className="font-body text-lg md:text-xl text-silver max-w-2xl mx-auto mb-4 animate-fade-in-up" style={{ animationDelay: "0.3s", opacity: 0 }}>
          Somos un equipo dedicado a asegurar tu futuro, con la jubilación que merecés.
        </p>

        <h2 className="font-heading text-xl md:text-2xl text-silver/90 font-semibold mb-10 animate-fade-in-up" style={{ animationDelay: "0.4s", opacity: 0 }}>
          Especialistas en derecho previsional
        </h2>

        <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-4 animate-fade-in-up" style={{ animationDelay: "0.5s", opacity: 0 }}>
          <a
            href={HERO_WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary hover:bg-burgundy-light text-primary-foreground font-body font-semibold px-10 py-4 text-lg tracking-wider uppercase rounded transition-all duration-300 hover:shadow-lg hover:shadow-primary/30"
          >
            Consultanos
          </a>
          <a
            href="#servicios"
            className="inline-block border border-silver/45 bg-charcoal/35 text-silver-light font-body font-semibold px-8 py-4 text-lg tracking-wider uppercase rounded transition-all duration-300 hover:border-primary hover:text-primary hover:bg-charcoal/55"
          >
            Ver servicios
          </a>
        </div>

        <div className="mt-12 w-full max-w-6xl animate-fade-in-up" style={{ animationDelay: "0.65s", opacity: 0 }}>
          <div className="grid grid-cols-1 md:grid-cols-3 border-y border-silver/15 bg-charcoal/45 backdrop-blur-sm">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="px-6 py-6 text-center md:[&:not(:last-child)]:border-r md:[&:not(:last-child)]:border-silver/15"
              >
                <p className="font-heading text-3xl md:text-4xl text-silver-light leading-none">{stat.value}</p>
                <p className="mt-2 font-body text-[11px] md:text-xs tracking-[0.18em] uppercase text-silver/75">{stat.label}</p>
              </div>
            ))}
          </div>

        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-20 w-full bg-primary/95 border-y border-primary/60">
        <div className="grid w-full grid-cols-2 gap-x-6 gap-y-3 px-4 py-4 md:grid-cols-4 md:px-8 lg:px-12">
          {differentials.map((d) => (
            <div key={d.title} className="flex items-center justify-center gap-2 text-center md:justify-center">
              <d.icon className="text-primary-foreground/85 shrink-0" size={13} strokeWidth={2} />
              <span className="font-body text-[10px] md:text-[11px] tracking-[0.1em] uppercase text-primary-foreground/90 leading-none">
                {d.title}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-silver/30 to-transparent" />
    </section>
  );
};

export default HeroSection;
