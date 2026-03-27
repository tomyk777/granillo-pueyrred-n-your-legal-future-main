import { Scale, Shield, Heart, Award } from "lucide-react";
import Image from "next/image";
import logo from "@/assets/optimized/logo.webp";
import heroBg from "@/assets/optimized/hero-bg.webp";

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
      aria-labelledby="hero-title"
      className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden bg-charcoal md:min-h-screen"
    >
      {/* Background image */}
      <Image
        src={heroBg}
        alt=""
        fill
        className="absolute inset-0 w-full h-full object-cover"
        sizes="100vw"
        priority
      />
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-charcoal/75" />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent" />

      <div className="relative z-10 container mx-auto flex min-h-[100svh] flex-col items-center justify-center px-4 pb-16 pt-24 text-center sm:px-6 md:min-h-screen md:pb-28 md:pt-20">
        <Image
          src={logo}
          alt="Estudio Jurídico Granillo Pueyrredón"
          className="mx-auto mb-5 h-28 w-auto animate-fade-in-up brightness-200 sm:h-32 md:mb-6 md:h-48"
          sizes="(max-width: 768px) 160px, 220px"
          fetchPriority="high"
          priority
        />

        <h1 id="hero-title" className="mb-5 font-heading text-[2.1rem] font-bold tracking-tight text-silver-light animate-fade-in-up sm:text-4xl md:mb-6 md:text-6xl lg:text-7xl" style={{ animationDelay: "0.15s", opacity: 0 }}>
          Hacé valer tus años de trabajo
        </h1>

        <p className="mx-auto mb-4 max-w-2xl font-body text-base text-silver animate-fade-in-up sm:text-lg md:text-xl" style={{ animationDelay: "0.3s", opacity: 0 }}>
          Somos un equipo dedicado a asegurar tu futuro, con la jubilación que merecés.
        </p>

        <h2 className="mb-8 font-heading text-lg font-semibold text-silver/90 animate-fade-in-up sm:text-xl md:mb-10 md:text-2xl" style={{ animationDelay: "0.4s", opacity: 0 }}>
          Especialistas en derecho previsional
        </h2>

        <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-4 animate-fade-in-up" style={{ animationDelay: "0.5s", opacity: 0 }}>
          <a
            href={HERO_WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full max-w-xs rounded bg-primary px-8 py-3.5 font-body text-base font-semibold tracking-wider text-primary-foreground uppercase transition-all duration-300 hover:bg-burgundy-light hover:shadow-lg hover:shadow-primary/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-silver-light/90 focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal sm:w-auto sm:px-10 sm:py-4 sm:text-lg"
          >
            Consultanos
          </a>
          <a
            href="#servicios"
            className="inline-block w-full max-w-xs rounded border border-silver/45 bg-charcoal/35 px-8 py-3.5 font-body text-base font-semibold tracking-wider text-silver-light uppercase transition-all duration-300 hover:border-primary hover:bg-charcoal/55 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/85 focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal sm:w-auto sm:py-4 sm:text-lg"
          >
            Ver servicios
          </a>
        </div>

        <div className="mt-10 w-full max-w-6xl animate-fade-in-up md:mt-12" style={{ animationDelay: "0.65s", opacity: 0 }}>
          <div className="grid grid-cols-3 border-y border-silver/15 bg-charcoal/45 backdrop-blur-sm">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="px-3 py-5 text-center md:px-6 md:py-6 [&:not(:last-child)]:border-r [&:not(:last-child)]:border-silver/15"
              >
                <p className="font-heading text-2xl leading-none text-silver-light sm:text-3xl md:text-4xl">{stat.value}</p>
                <p className="mt-2 font-body text-[10px] tracking-[0.16em] text-silver/75 uppercase sm:text-[11px] md:text-xs md:tracking-[0.18em]">{stat.label}</p>
              </div>
            ))}
          </div>

        </div>
      </div>

      <div className="relative z-20 w-full border-y border-primary/60 bg-primary/95 md:absolute md:bottom-0 md:left-0 md:right-0">
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
      <div className="hidden h-px bg-gradient-to-r from-transparent via-silver/30 to-transparent md:absolute md:bottom-0 md:left-0 md:right-0 md:block" />
    </section>
  );
};

export default HeroSection;
