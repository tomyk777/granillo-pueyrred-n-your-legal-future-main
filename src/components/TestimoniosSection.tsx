import { Quote } from "lucide-react";

const testimonials = [
  {
    text: "Hola buenos días! Usted siempre presente, gracias por estar trabajando por la gente hoy sábado!",
    name: "Juan Carlos",
    location: "Córdoba",
  },
  {
    text: "Hola Doctora! Muchas gracias! Que el Niño Jesús los bendiga siempre. Los mejores deseos para uds, y gracias por todo lo que hicieron por nosotros!",
    name: "Walter",
    location: "Córdoba",
  },
  {
    text: 'Tengo amigos que realmente la pasaron mal con otros "gestores" y casi no llegan a realizar el trámite como ud tan bien hizo. Personalmente me siento más que satisfecho con su proceder, muchas gracias!',
    name: "Alejandro",
    location: "Córdoba",
  },
  {
    text: "Qué más decirte Cami que agradezco tanto haberte conocido, muchas gracias por todo por ser esa gran profesional!",
    name: "Ramona",
    location: "Córdoba",
  },
];

const TestimoniosSection = () => {
  return (
    <section id="testimonios" className="bg-charcoal py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="font-heading text-3xl md:text-5xl text-silver-light font-bold text-center mb-4">
          Testimonios
        </h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-14" />

        <div className="mx-auto grid max-w-5xl gap-5 md:grid-cols-2 md:gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="relative rounded-lg border border-silver/10 bg-accent/40 p-6 md:p-8"
            >
              <Quote className="text-primary/40 mb-4" size={32} />
              <p className="font-body text-silver/80 italic leading-relaxed mb-6">
                "{t.text}"
              </p>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-heading font-bold text-sm">
                  {t.name[0]}
                </div>
                <div>
                  <p className="font-body text-silver-light font-semibold text-sm">{t.name}</p>
                  <p className="font-body text-silver/50 text-xs">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimoniosSection;
