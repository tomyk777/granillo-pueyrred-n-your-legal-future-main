const WHATSAPP_NUMBER = "5493513513178";
const WHATSAPP_MESSAGE = "Hola, quiero hablar con el estudio para recibir orientacion legal.";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

const WhatsAppStickyButton = () => {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="group fixed bottom-4 right-4 z-[80] inline-flex h-12 w-12 items-center justify-center rounded-full border-2 border-warm-white/70 bg-primary text-primary-foreground shadow-[0_10px_28px_rgba(0,0,0,0.35)] ring-1 ring-charcoal/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-burgundy-light hover:shadow-[0_14px_34px_rgba(90,10,35,0.45)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-warm-white/80 md:bottom-7 md:right-7 md:h-14 md:w-14"
    >
      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-warm-white/90 text-primary shadow-inner shadow-charcoal/15 transition-colors duration-300 group-hover:bg-warm-white group-hover:text-burgundy-light md:h-9 md:w-9">
        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current md:h-5 md:w-5">
          <path d="M20.52 3.48A11.86 11.86 0 0 0 12.04 0C5.52 0 .2 5.3.2 11.82c0 2.08.54 4.1 1.56 5.88L0 24l6.48-1.7a11.8 11.8 0 0 0 5.56 1.42h.01c6.52 0 11.83-5.3 11.83-11.82 0-3.16-1.22-6.14-3.36-8.42ZM12.04 21.7a9.8 9.8 0 0 1-5-1.38l-.36-.21-3.84 1.01 1.03-3.74-.24-.38a9.8 9.8 0 0 1-1.5-5.18c0-5.44 4.44-9.87 9.9-9.87 2.64 0 5.1 1.02 6.98 2.89a9.8 9.8 0 0 1 2.9 6.98c0 5.44-4.45 9.87-9.87 9.88Zm5.42-7.42c-.29-.15-1.72-.85-1.98-.95-.27-.1-.46-.15-.65.15-.2.29-.75.95-.93 1.15-.17.2-.35.22-.64.07-.3-.15-1.27-.46-2.4-1.48-.88-.78-1.47-1.75-1.64-2.04-.17-.29-.02-.45.12-.59.13-.13.3-.35.44-.53.15-.17.2-.3.3-.5.1-.2.05-.38-.03-.53-.08-.15-.65-1.57-.89-2.15-.23-.56-.47-.48-.65-.49h-.56c-.2 0-.53.07-.8.38-.27.3-1.03 1-1.03 2.44 0 1.44 1.06 2.83 1.2 3.03.15.2 2.08 3.17 5.05 4.45.7.3 1.24.48 1.67.62.7.22 1.32.19 1.82.12.56-.08 1.72-.7 1.96-1.38.24-.68.24-1.26.17-1.38-.07-.12-.26-.2-.55-.35Z" />
        </svg>
      </span>
    </a>
  );
};

export default WhatsAppStickyButton;
