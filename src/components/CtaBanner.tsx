const WHATSAPP_NUMBER = "5493515571438";
const CTA_BANNER_WHATSAPP_MESSAGE = "Hola, quiero una consulta personalizada con un especialista en jubilaciones.";
const CTA_BANNER_WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(CTA_BANNER_WHATSAPP_MESSAGE)}`;

const CtaBanner = () => {
  return (
    <section className="bg-primary py-14 md:py-16">
      <div className="container mx-auto px-4 text-center sm:px-6">
        <h2 className="mb-4 font-heading text-2xl font-bold text-primary-foreground md:text-4xl">
          Consultá con especialistas en jubilaciones
        </h2>
        <p className="mx-auto mb-8 max-w-2xl font-body text-base text-primary-foreground/80 md:text-lg">
          Contactanos y recibí una consulta personalizada con nuestro equipo de profesionales.
        </p>
        <a
          href={CTA_BANNER_WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block w-full max-w-xs rounded bg-primary-foreground px-8 py-3.5 font-body text-base font-semibold tracking-wider text-primary uppercase transition-all duration-300 hover:bg-silver-light hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-silver-light focus-visible:ring-offset-2 focus-visible:ring-offset-primary sm:w-auto sm:px-10 sm:py-4 sm:text-lg"
        >
          Consultanos
        </a>
      </div>
    </section>
  );
};

export default CtaBanner;
