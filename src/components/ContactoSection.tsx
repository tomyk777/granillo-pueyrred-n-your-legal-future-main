"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

const WHATSAPP_NUMBER = "5493513513178";

const contacts = [
  { name: "Dr. Enrique Granillo Pueyrredón", phone: "3513 51-3178" },
  { name: "Dra. Camila Puerta Portela", phone: "3515 57-1438" },
  { name: "Dr. Mariano Vega Portela", phone: "3513 44-3506" },
];

const infoItems = [
  { icon: Mail, label: "Email", value: "granilloenrique@hotmail.com", href: "mailto:granilloenrique@hotmail.com" },
  {
    icon: MapPin,
    label: "Dirección",
    value: "Duarte Quirós 620, 2° Piso, Oficina 5 · Córdoba",
    href: "https://www.google.com/maps/place/Duarte+Quir%C3%B3s+620,+C%C3%B3rdoba,+Argentina/@-31.4135,-64.1888,17z",
  },
  { icon: Clock, label: "Horario de atención", value: "Lunes a viernes de 9 a 18 hs" },
];

const ContactoSection = () => {
  const [form, setForm] = useState({ nombre: "", telefono: "", mensaje: "" });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const text = `Hola, quiero enviar una consulta. Soy ${form.nombre}. Mi telefono es ${form.telefono}. ${form.mensaje}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <section id="contacto" aria-labelledby="contacto-title" className="bg-warm-white py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 id="contacto-title" className="font-heading text-3xl md:text-5xl text-accent font-bold text-center mb-4">
          Contacto
        </h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-14" />

        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Info - redesigned */}
          <div className="space-y-6">
            {/* Phones as cards */}
            <div className="rounded-lg border border-border bg-background p-5 shadow-sm md:p-6">
              <h3 className="font-heading text-lg text-accent font-semibold mb-4 flex items-center gap-2">
                <Phone className="text-primary" size={18} />
                Teléfonos
              </h3>
              <div className="space-y-3">
                {contacts.map((c) => (
                  <div key={c.name} className="flex flex-col items-start gap-1 sm:flex-row sm:items-center sm:justify-between sm:gap-3">
                    <span className="font-body text-muted-foreground text-sm">{c.name}</span>
                    <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hola, quiero una consulta para contactar a ${c.name}.`)}`} target="_blank" rel="noopener noreferrer" aria-label={`Consultar por WhatsApp con ${c.name}`} className="font-body text-primary hover:text-burgundy-light transition-colors text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 focus-visible:ring-offset-2 rounded-sm">
                      {c.phone}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Other info */}
            <div className="grid gap-4">
              {infoItems.map((item) => (
                <div key={item.label} className="flex items-start gap-4 rounded-lg border border-border bg-background p-4 shadow-sm">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                    <item.icon className="text-primary" size={18} />
                  </div>
                  <div className="min-w-0">
                    <p className="font-body font-semibold text-accent text-sm">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} target="_blank" rel="noopener noreferrer" className="font-body text-muted-foreground text-sm break-words hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 focus-visible:ring-offset-2 rounded-sm">{item.value}</a>
                    ) : (
                      <p className="font-body text-muted-foreground text-sm break-words">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5 rounded-lg border border-border bg-background p-6 shadow-sm md:p-8">
            <h3 id="contacto-form-title" className="font-heading text-xl text-accent font-semibold mb-2">Envianos tu consulta</h3>
            <div>
              <label htmlFor="nombre" className="font-body text-sm text-muted-foreground mb-1 block">Nombre</label>
              <input
                id="nombre"
                name="nombre"
                type="text"
                required
                maxLength={100}
                autoComplete="name"
                value={form.nombre}
                onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                className="w-full border border-input rounded px-4 py-3 font-body text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
            </div>
            <div>
              <label htmlFor="telefono" className="font-body text-sm text-muted-foreground mb-1 block">Teléfono</label>
              <input
                id="telefono"
                name="telefono"
                type="tel"
                required
                maxLength={20}
                autoComplete="tel"
                value={form.telefono}
                onChange={(e) => setForm({ ...form, telefono: e.target.value })}
                className="w-full border border-input rounded px-4 py-3 font-body text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
            </div>
            <div>
              <label htmlFor="mensaje" className="font-body text-sm text-muted-foreground mb-1 block">Mensaje</label>
              <textarea
                id="mensaje"
                name="mensaje"
                required
                maxLength={1000}
                rows={4}
                value={form.mensaje}
                onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
                className="w-full border border-input rounded px-4 py-3 font-body text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-burgundy-light text-primary-foreground font-body font-semibold py-3 rounded tracking-wider uppercase transition-colors"
            >
              <Send size={18} />
              Enviar por WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactoSection;
