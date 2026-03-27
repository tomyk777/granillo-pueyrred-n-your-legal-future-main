"use client";

import { useEffect, useState } from "react";
import { Shield, Heart, Scale, Handshake, Users, Gavel, PenTool, BookOpen } from "lucide-react";
import Image from "next/image";
import nosotrosImg from "@/assets/nosotros.jpg";
import estudioImg1 from "@/assets/estudio.jpg";
import estudioImg2 from "@/assets/estudio2.jpg";
import estudioImg3 from "@/assets/estudio3.jpg";
import estudioImg4 from "@/assets/estudio4.jpg";

const valores = [
  { icon: Heart, label: "Empatía" },
  { icon: Handshake, label: "Confianza" },
  { icon: Shield, label: "Seguridad Jurídica" },
  { icon: Scale, label: "Honestidad" },
  { icon: Users, label: "Compromiso Social" },
];

const profesionales = [
  {
    order: "01",
    name: "Dr. Enrique Granillo Pueyrredón",
    icon: Gavel,
  },
  {
    order: "02",
    name: "Dra. Camila Puerta Portela",
    icon: PenTool,
  },
  {
    order: "03",
    name: "Dr. Mariano Vega Portela",
    icon: BookOpen,
  },
];

const estudioImages = [
  { src: nosotrosImg, alt: "Equipo del Estudio Jurídico Granillo Pueyrredón" },
  { src: estudioImg1, alt: "Interior del Estudio Jurídico Granillo Pueyrredón" },
  { src: estudioImg2, alt: "Espacio de trabajo del Estudio Jurídico Granillo Pueyrredón" },
  { src: estudioImg3, alt: "Sala del Estudio Jurídico Granillo Pueyrredón" },
  { src: estudioImg4, alt: "Oficinas del Estudio Jurídico Granillo Pueyrredón" },
];

const NosotrosSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % estudioImages.length);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="nosotros" className="bg-warm-white py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="font-heading text-3xl md:text-5xl text-accent font-bold text-center mb-4">
          El Estudio
        </h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-12" />

        <div className="mb-16 grid items-start gap-10 lg:grid-cols-2 lg:gap-12">
          <div>
            <p className="font-body text-foreground/80 leading-relaxed mb-6">
              En el año 1999, en un contexto de profundos cambios institucionales y sociales en la Argentina, el Dr. Enrique Granillo Pueyrredón dio el paso fundacional de lo que se convertiría en un referente del derecho previsional. Con una visión clara sobre la necesidad de proteger a uno de los sectores más vulnerables de la sociedad, el estudio abrió sus puertas con la misión de brindar seguridad jurídica y dignidad a los adultos mayores.
            </p>
            <p className="font-body text-foreground/80 leading-relaxed mb-6">
              Más de 25 años de trayectoria avalan un compromiso que nació antes del nuevo milenio y que se proyecta hacia el futuro con la misma convicción del primer día.
            </p>
            <p className="font-body text-foreground/80 leading-relaxed mb-8">
              Desde sus oficinas iniciales, el estudio se posicionó no solo como un mediador administrativo ante la ANSES, sino como una trinchera legal para reclamar el reajuste de haberes. Su visión es clara: profesionalizar la defensa de los derechos de los jubilados y pensionados en un contexto donde el sistema previsional enfrentaba constantes reformas.
            </p>

            <div className="mb-8">
              <h3 className="mb-4 font-heading text-lg font-semibold text-accent md:text-xl">Profesionales del Estudio</h3>
              <div className="space-y-3">
                {profesionales.map((p) => (
                  <div
                    key={p.name}
                    className="group flex items-start gap-3 border-l-2 border-primary bg-background/90 px-4 py-3 transition-all duration-300 hover:translate-x-1 hover:bg-primary/5 hover:shadow-sm md:items-center md:gap-4"
                  >
                    <span className="font-heading text-primary text-xl leading-none w-8 text-center transition-colors duration-300 group-hover:text-burgundy-light">{p.order}</span>
                    <div className="h-6 w-px bg-border transition-colors duration-300 group-hover:bg-primary/40" />
                    <p.icon className="text-primary shrink-0 transition-colors duration-300 group-hover:text-burgundy-light" size={15} strokeWidth={1.7} />
                    <p className="font-heading text-sm leading-tight text-accent transition-colors duration-300 group-hover:text-primary md:text-base">{p.name}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Valores badges */}
            <div className="flex flex-wrap gap-2">
              {valores.map((v) => (
                <span
                  key={v.label}
                  className="group inline-flex items-center gap-2 border border-primary/30 bg-transparent px-3 py-1.5 font-body text-[11px] tracking-[0.12em] uppercase text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:border-primary"
                >
                  <v.icon className="text-primary transition-colors duration-300 group-hover:text-primary-foreground" size={12} />
                  {v.label}
                </span>
              ))}
            </div>
          </div>
          <div className="relative">
            <Image
              src={estudioImages[0].src}
              alt=""
              aria-hidden="true"
              className="rounded-lg shadow-2xl w-full object-cover opacity-0"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
            <div className="absolute inset-0">
              {estudioImages.map((image, index) => (
                <Image
                  key={image.alt}
                  src={image.src}
                  alt={index === currentImageIndex ? image.alt : ""}
                  aria-hidden={index !== currentImageIndex}
                  className={`absolute inset-0 rounded-lg shadow-2xl w-full h-full object-cover transition-opacity duration-700 ${
                    index === currentImageIndex ? "opacity-100" : "opacity-0"
                  }`}
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              ))}
            </div>
            <div className="absolute -bottom-4 -left-4 hidden h-24 w-24 rounded-bl-lg border-b-4 border-l-4 border-primary md:block" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NosotrosSection;
