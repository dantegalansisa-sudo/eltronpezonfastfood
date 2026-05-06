import { motion } from 'framer-motion';
import RevealText from './shared/RevealText';
import MagneticButton from './shared/MagneticButton';
import { wa, WA_PHONE, WA_PHONE_DISPLAY } from './shared/whatsapp';
import './Contacto.css';

const WA_HREF = wa('quiero hacer un pedido');

// Embed genérico apuntando a "El Tropezón Fast Food, Azua, RD".
// Reemplazar por el embed exacto desde Google Maps cuando esté disponible.
const MAP_EMBED =
  'https://www.google.com/maps?q=Av.+27+de+Febrero+Esq.+Cl.+Armando+Aybar,+Azua+71001,+Rep%C3%BAblica+Dominicana&output=embed';

const Contacto = () => {
  return (
    <section id="contacto" className="contacto">
      <div className="contacto__container">
        <motion.div
          className="contacto__info"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
        >
          <span className="eyebrow contacto__eyebrow">
            <span className="contacto__eyebrow-line" />
            Contacto y ubicación
          </span>

          <h2 className="contacto__title">
            <RevealText text="Visítanos en" />
            <span className="contacto__title-accent">
              <RevealText text="el corazón de Azua" delay={0.15} />
            </span>
          </h2>

          <p className="contacto__intro body-lg">
            Pasa por el local, llámanos o pide por WhatsApp.
            Atendemos en cualquier formato — la comida es la misma de siempre.
          </p>

          <ul className="contacto__list">
            <li className="contacto__item">
              <span className="contacto__icon" aria-hidden>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 22s8-7.5 8-13a8 8 0 1 0-16 0c0 5.5 8 13 8 13Z"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  />
                  <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.8" />
                </svg>
              </span>
              <div>
                <span className="contacto__item-label">Dirección</span>
                <span className="contacto__item-value">
                  Av. 27 de Febrero Esq. Cl. Armando Aybar, Azua 71001, RD
                </span>
              </div>
            </li>

            <li className="contacto__item">
              <span className="contacto__icon" aria-hidden>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <div>
                <span className="contacto__item-label">Teléfono / WhatsApp</span>
                <a
                  className="contacto__item-value contacto__item-link"
                  href={`tel:+1${WA_PHONE}`}
                >
                  {WA_PHONE_DISPLAY}
                </a>
              </div>
            </li>

            <li className="contacto__item">
              <span className="contacto__icon" aria-hidden>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
                  <path
                    d="M12 7v5l3 2"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <div>
                <span className="contacto__item-label">Horario</span>
                <span className="contacto__item-value">Abrimos diariamente desde las 4:00 PM</span>
              </div>
            </li>

            <li className="contacto__item">
              <span className="contacto__icon" aria-hidden>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <rect
                    x="3"
                    y="3"
                    width="18"
                    height="18"
                    rx="5"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  />
                  <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                </svg>
              </span>
              <div>
                <span className="contacto__item-label">Instagram</span>
                <a
                  className="contacto__item-value contacto__item-link"
                  href="https://instagram.com/eltropezonfastfood"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @eltropezonfastfood
                </a>
              </div>
            </li>
          </ul>

          <div className="contacto__cta-row">
            <MagneticButton>
              <a
                href={WA_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="contacto__cta contacto__cta--wapp"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                </svg>
                Pedir por WhatsApp
              </a>
            </MagneticButton>
            <a
              className="contacto__cta contacto__cta--ghost"
              href="https://www.google.com/maps/dir/?api=1&destination=Av.+27+de+Febrero+Esq.+Cl.+Armando+Aybar,+Azua+71001,+Rep%C3%BAblica+Dominicana"
              target="_blank"
              rel="noopener noreferrer"
            >
              Cómo llegar
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path
                  d="M7 17 17 7M9 7h8v8"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </motion.div>

        <motion.div
          className="contacto__map"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.25, 1, 0.5, 1] }}
        >
          <div className="contacto__map-frame">
            <iframe
              src={MAP_EMBED}
              title="Ubicación de El Tropezón Fast Food en Azua"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
          <div className="contacto__map-tag">
            <span className="eyebrow">📍 Estamos aquí</span>
            <strong>El Tropezón Fast Food</strong>
            <span>Azua · República Dominicana</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contacto;
