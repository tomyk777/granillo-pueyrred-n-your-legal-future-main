import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import estudioImg from "@/assets/estudio3.jpg";

const faqs = [
  {
    q: "¿Cómo hago para jubilarme?",
    a: "Es necesario revisar y estudiar la historia laboral las particularidades de cada caso para saber con qué herramientas contamos para poner cumplimentar los requisitos que pide Anses o en su defecto, la Caja de Jubilaciones de Córdoba para solicitar un beneficio jubilatorio.",
  },
  {
    q: "No tengo aportes, ¿puedo jubilarme?",
    a: "En en el sistema nacional de jubilaciones existen dos leyes de moratoria vigentes para poder completar la historia laboral de quien lo necesita. Lo que hacemos es analizar la posibilidad de comprar años de aportes y con ello acceder a la jubilación.",
  },
  {
    q: 'Tuve un accidente de auto, me chocaron. ¿Puedo pedir que me paguen los arreglos?',
    a: "Ante un siniestro automovilístico es fundamental que se determinen responsabilidades para saber quién debe reparar los perjuicios ocasionados, tanto materiales como físicos a las personas involucradas.",
  },
  {
    q: "Mi hijo necesita un medicamento y la obra social no lo cubre, ¿qué hago?",
    a: "Quien tenga cobertura con una obra social o prepaga debe saber que la misma debe cumplir con las prestaciones básicas de salud y así también con aquellas por las cuales se responsabilizó para cumplimentar.",
  },
];

const FaqSection = () => {
  return (
    <section id="faq" className="bg-warm-white py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="font-heading text-3xl md:text-5xl text-accent font-bold text-center mb-4">
          Preguntas Frecuentes
        </h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-12" />

        <div className="mx-auto grid max-w-6xl items-start gap-8 lg:grid-cols-2 lg:gap-10">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="rounded-lg border border-border bg-background px-4 shadow-sm md:px-6"
              >
                <AccordionTrigger className="font-heading text-left text-accent hover:text-primary text-base md:text-lg py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="font-body text-muted-foreground leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="hidden lg:block">
            <Image
              src={estudioImg}
              alt="Interior del Estudio Jurídico Granillo Pueyrredón"
              className="rounded-lg shadow-2xl w-full h-[480px] object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
