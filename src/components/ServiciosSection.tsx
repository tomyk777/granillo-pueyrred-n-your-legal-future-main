import { Scale, Users, FileText, Heart, Car } from "lucide-react";

const services = [
  {
    icon: Scale,
    title: "Derecho Previsional",
    desc: "Análisis de situación laboral y previsional, inicio de trámites jubilatorios, compra de moratoria nueva y vieja, ajuste de haberes jubilatorios.",
  },
  {
    icon: Users,
    title: "Derecho de Familia",
    desc: "Tramitación de divorcios, cálculo, reclamo, modificación o ejecución de pensiones alimenticias, inicio de solicitud de planes de responsabilidad parental.",
  },
  {
    icon: FileText,
    title: "Derecho Civil",
    desc: "Asesoramiento y representación legal en diversas cuestiones del ámbito civil.",
  },
  {
    icon: Heart,
    title: "Amparos de Salud",
    desc: "Acciones legales para garantizar el acceso a prestaciones médicas y cobertura de salud.",
  },
  {
    icon: Car,
    title: "Siniestros Viales",
    desc: "Acciones de reclamación de daños ocasionados por accidentes de tránsito.",
  },
];

const ServiciosSection = () => {
  return (
    <section id="servicios" aria-labelledby="servicios-title" className="bg-charcoal py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 id="servicios-title" className="font-heading text-3xl md:text-5xl text-silver-light font-bold text-center mb-4">
          Áreas de Práctica
        </h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-14" />

        {/* Row 1: 3 cards */}
        <div className="mx-auto mb-6 grid max-w-5xl gap-5 md:grid-cols-3 md:gap-6">
          {services.slice(0, 3).map((s) => (
            <div
              key={s.title}
              className="group relative cursor-default rounded-lg border border-silver/10 bg-accent/50 p-6 transition-all duration-300 hover:border-primary/30 hover:bg-primary/10 md:p-8"
            >
              <s.icon className="mb-4 text-primary transition-transform group-hover:scale-110 md:mb-5" size={34} strokeWidth={1.5} />
              <h3 className="mb-2.5 font-heading text-xl font-semibold text-silver-light md:mb-3">{s.title}</h3>
              <p className="font-body text-silver/85 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Row 2: 2 cards centered */}
        <div className="mx-auto grid max-w-3xl gap-5 md:grid-cols-2 md:gap-6">
          {services.slice(3).map((s) => (
            <div
              key={s.title}
              className="group relative cursor-default rounded-lg border border-silver/10 bg-accent/50 p-6 transition-all duration-300 hover:border-primary/30 hover:bg-primary/10 md:p-8"
            >
              <s.icon className="mb-4 text-primary transition-transform group-hover:scale-110 md:mb-5" size={34} strokeWidth={1.5} />
              <h3 className="mb-2.5 font-heading text-xl font-semibold text-silver-light md:mb-3">{s.title}</h3>
              <p className="font-body text-silver/85 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiciosSection;
