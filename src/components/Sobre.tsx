import { motion } from 'framer-motion';
import RevealText from './shared/RevealText';
import MagneticButton from './shared/MagneticButton';
import AnimatedCounter from './shared/AnimatedCounter';
import './Sobre.css';

const SOBRE_IMG = '/images/local-principal.png';

const WA_HREF = `https://wa.me/18299678181?text=${encodeURIComponent(
  'Hola, quiero saber más sobre El Tropezón Fast Food',
)}`;

const Sobre = () => {
  return (
    <section id="sobre" className="sobre">
      <div className="sobre__container">
        <motion.div
          className="sobre__visual"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.9, ease: [0.25, 1, 0.5, 1] }}
        >
          <div className="sobre__img-frame">
            <img src={SOBRE_IMG} alt="Interior de El Tropezón Fast Food" loading="lazy" />
            <div className="sobre__img-tag">
              <span className="eyebrow">Av. 27 de Febrero</span>
              <strong>Azua, RD</strong>
            </div>
          </div>
          <div className="sobre__quote">
            <span className="sobre__quote-mark">”</span>
            <p>
              Tradición caribeña, sabor honesto. Cada plato lleva el orgullo
              del Sur dominicano.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="sobre__content"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.9, ease: [0.25, 1, 0.5, 1] }}
        >
          <span className="eyebrow sobre__eyebrow">
            <span className="sobre__eyebrow-line" />
            Nuestra historia
          </span>

          <h2 className="sobre__title">
            <RevealText text="El sabor" />
            <span className="sobre__title-accent">
              <RevealText text="de Azua" delay={0.15} />
            </span>
          </h2>

          <p className="sobre__paragraph body-lg">
            En <strong>El Tropezón</strong> nacimos de la pasión por la cocina
            dominicana servida sin atajos. Lo que empezó como una receta
            familiar de mofongo en Azua hoy es el destino favorito de quienes
            buscan sabor honesto, abundante y bien servido.
          </p>

          <p className="sobre__paragraph body">
            Cada plato lleva el orgullo del Sur — desde nuestros mofongos
            signature hasta la parrilla mar y tierra, pasando por las pizzas
            crujientes que hemos perfeccionado tropezón a tropezón.
          </p>

          <div className="sobre__pillars">
            <div className="sobre__pillar">
              <span className="sobre__pillar-num">
                <AnimatedCounter to={100} suffix="+" />
              </span>
              <span className="sobre__pillar-label">Recetas en carta</span>
            </div>
            <div className="sobre__pillar">
              <span className="sobre__pillar-num">
                <AnimatedCounter to={5} decimal />
              </span>
              <span className="sobre__pillar-label">★ Google Reviews</span>
            </div>
            <div className="sobre__pillar">
              <span className="sobre__pillar-num">
                <AnimatedCounter to={3} />
              </span>
              <span className="sobre__pillar-label">Servicios: dine-in · pickup · delivery</span>
            </div>
          </div>

          <MagneticButton>
            <a
              href={WA_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="sobre__cta"
            >
              Reserva tu mesa
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
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
        </motion.div>
      </div>
    </section>
  );
};

export default Sobre;
