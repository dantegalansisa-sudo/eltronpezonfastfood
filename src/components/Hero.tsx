import { motion } from 'framer-motion';
import RevealText from './shared/RevealText';
import MagneticButton from './shared/MagneticButton';
import {
  TomateDeco,
  AjiDeco,
  HojaAlbahaca,
  LimonDeco,
  PlatanoDeco,
} from './shared/Decoratives';
import './Hero.css';

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?w=1400&q=85&auto=format&fit=crop';

const WA_HREF = `https://wa.me/18299678181?text=${encodeURIComponent(
  'Hola, quiero ordenar el Mofongo Tropezón Especial',
)}`;

const Hero = () => {
  return (
    <section id="hero" className="hero">
      {/* Decorativos flotantes */}
      <motion.div
        className="hero__deco hero__deco--tomate"
        animate={{ y: [0, -18, 0], rotate: [0, 8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <TomateDeco size={88} />
      </motion.div>

      <motion.div
        className="hero__deco hero__deco--aji"
        animate={{ y: [0, 14, 0], rotate: [-12, 4, -12] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      >
        <AjiDeco size={74} />
      </motion.div>

      <motion.div
        className="hero__deco hero__deco--hoja"
        animate={{ y: [0, -12, 0], rotate: [-8, 6, -8] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <HojaAlbahaca size={108} />
      </motion.div>

      <motion.div
        className="hero__deco hero__deco--limon"
        animate={{ y: [0, 16, 0], rotate: [0, -6, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <LimonDeco size={80} />
      </motion.div>

      <motion.div
        className="hero__deco hero__deco--platano"
        animate={{ y: [0, -10, 0], rotate: [-4, 8, -4] }}
        transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <PlatanoDeco size={92} />
      </motion.div>

      <div className="hero__container">
        {/* Columna texto */}
        <div className="hero__text">
          <motion.span
            className="eyebrow hero__eyebrow"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="hero__eyebrow-line" />
            Desde Azua · 5.0 ★ Google
          </motion.span>

          <h1 className="hero__title">
            <span className="hero__title-line">
              <RevealText text="Sabor que" delay={0.35} />
            </span>
            <span className="hero__title-line">
              <RevealText text="conquista el" delay={0.5} />
            </span>
            <span className="hero__title-line hero__title-accent">
              <RevealText text="paladar" delay={0.7} />
            </span>
          </h1>

          <motion.p
            className="hero__signature italic-quote"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            — El Tropezón Fast Food
          </motion.p>

          <motion.p
            className="hero__desc body-lg"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.15 }}
          >
            Mofongos signature, pizza al carbón, parrilla mar y tierra,
            burgers angus y mariscos frescos. Tradición dominicana servida
            con la pasión que solo Azua sabe dar.
          </motion.p>

          <motion.div
            className="hero__cta-group"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.3 }}
          >
            <MagneticButton>
              <a href="#menu" className="hero__cta hero__cta--primary">
                Ver Menú Completo
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path
                    d="M5 12h14M13 6l6 6-6 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </MagneticButton>
            <MagneticButton>
              <a
                href={WA_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="hero__cta hero__cta--secondary"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                </svg>
                Pedir por WhatsApp
              </a>
            </MagneticButton>
          </motion.div>

          <motion.div
            className="hero__meta"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.5 }}
          >
            <div className="hero__meta-item">
              <span className="hero__meta-dot" />
              Abierto desde las 4:00 PM
            </div>
            <div className="hero__meta-divider" />
            <div className="hero__meta-item">Delivery en Azua</div>
            <div className="hero__meta-divider" />
            <div className="hero__meta-item">Visa · Mastercard · Cash</div>
          </motion.div>
        </div>

        {/* Columna plato hero */}
        <motion.div
          className="hero__visual"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.4, 0, 0.2, 1] }}
        >
          <div className="hero__plate-ring">
            <div className="hero__plate-ring-inner">
              <motion.img
                src={HERO_IMAGE}
                alt="Mofongo Tropezón Especial"
                className="hero__plate"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 90, repeat: Infinity, ease: 'linear' }}
                loading="eager"
              />
            </div>
          </div>

          <motion.div
            className="hero__plate-badge"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 1.1 }}
          >
            <span className="eyebrow">★ Plato Estrella</span>
            <strong>Mofongo Tropezón Especial</strong>
            <span className="hero__plate-price">RD$ 800</span>
          </motion.div>

          <motion.div
            className="hero__rating-badge"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.3, ease: [0.34, 1.56, 0.64, 1] }}
          >
            <div className="hero__rating-stars">★★★★★</div>
            <span className="hero__rating-num">5.0</span>
            <span className="hero__rating-label">Google</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="hero__scroll-cue"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.6 }}
        aria-hidden
      >
        <span>Scroll</span>
        <motion.div
          className="hero__scroll-line"
          animate={{ scaleY: [0.3, 1, 0.3], originY: 0 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  );
};

export default Hero;
