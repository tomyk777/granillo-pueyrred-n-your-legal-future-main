const WHATSAPP_NUMBER = "5493513513178";
const CTA_BANNER_WHATSAPP_MESSAGE = "Hola, quiero una consulta personalizada con un especialista en jubilaciones.";
const CTA_BANNER_WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(CTA_BANNER_WHATSAPP_MESSAGE)}`;

const CtaBanner = () => {
  return (
    <section className="bg-primary py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-heading text-2xl md:text-4xl text-primary-foreground font-bold mb-4">
          Consultá con especialistas en jubilaciones
        </h2>
        <p className="font-body text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
          Contactanos y recibí una consulta personalizada con nuestro equipo de profesionales.
        </p>
        <a
          href={CTA_BANNER_WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-primary-foreground text-primary font-body font-semibold px-10 py-4 text-lg tracking-wider uppercase rounded transition-all duration-300 hover:bg-silver-light hover:shadow-lg"
        >
          Consultanos
        </a>
      </div>
    </section>
  );
};

export default CtaBanner;
