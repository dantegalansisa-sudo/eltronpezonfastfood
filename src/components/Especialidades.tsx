import { motion } from 'framer-motion';
import RevealText from './shared/RevealText';
import MagneticButton from './shared/MagneticButton';
import './Especialidades.css';

const PHONE = '18299678181';
const wa = (msg: string) =>
  `https://wa.me/${PHONE}?text=${encodeURIComponent(msg)}`;

const especialidades = [
  {
    nombre: 'Mofongo Tropezón Especial',
    desc: 'Carne mixta, pinguillin, camarones y mariscos. La esencia caribeña en un solo plato.',
    precio: 'RD$ 800',
    badge: 'Plato Estrella',
    img: 'https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?w=900&q=85&auto=format&fit=crop',
    waMsg: 'Hola, quiero ordenar el Mofongo Tropezón Especial',
  },
  {
    nombre: 'Pizza Tropezón Especial',
    desc: 'Pollo, res, jamón, pepperoni, chorizo, salchicha italiana, aceitunas, vegetales y hongos.',
    precio: 'Desde RD$ 600',
    badge: 'Best-Seller',
    img: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=900&q=85&auto=format&fit=crop',
    waMsg: 'Hola, quiero ordenar la Pizza Tropezón Especial',
  },
  {
    nombre: 'Parrilla Mar y Tierra',
    desc: 'Camarones, pulpo, pollo, res, cerdo y salchichas. Para 2 o 4 personas.',
    precio: 'Desde RD$ 1,800',
    badge: 'Para Compartir',
    img: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=900&q=85&auto=format&fit=crop',
    waMsg: 'Hola, quiero ordenar la Parrilla Mar y Tierra',
  },
  {
    nombre: 'Hamburger Doble Angus',
    desc: 'Doble carne angus premium, queso fundido, bacon crujiente y papas doradas.',
    precio: 'RD$ 850',
    badge: 'Premium',
    img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=900&q=85&auto=format&fit=crop',
    waMsg: 'Hola, quiero ordenar la Hamburger Doble Angus',
  },
];

const Especialidades = () => {
  return (
    <section id="especialidades" className="especialidades">
      <div className="especialidades__container">
        <motion.div
          className="especialidades__header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
        >
          <span className="eyebrow especialidades__eyebrow">
            <span className="especialidades__eyebrow-line" />
            La Casa Recomienda
          </span>
          <h2 className="especialidades__title">
            <RevealText text="Las especialidades" />
            <span className="especialidades__title-accent">
              <RevealText text="de la casa" delay={0.15} />
            </span>
          </h2>
          <p className="especialidades__intro body-lg">
            Cuatro recetas que nos definen. Cada una pensada, ajustada y
            servida con la misma intención: que el primer bocado sea inolvidable.
          </p>
        </motion.div>

        <div className="especialidades__grid">
          {especialidades.map((e, i) => (
            <motion.article
              key={e.nombre}
              className="esp-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{
                duration: 0.65,
                delay: i * 0.1,
                ease: [0.25, 1, 0.5, 1],
              }}
            >
              <div className="esp-card__media">
                <img src={e.img} alt={e.nombre} loading="lazy" />
                <span className="esp-card__badge">{e.badge}</span>
              </div>
              <div className="esp-card__body">
                <h3 className="esp-card__title">{e.nombre}</h3>
                <p className="esp-card__desc">{e.desc}</p>
                <div className="esp-card__footer">
                  <span className="esp-card__price">{e.precio}</span>
                  <MagneticButton strength={0.25}>
                    <a
                      href={wa(e.waMsg)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="esp-card__cta"
                    >
                      Pedir
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
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
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Especialidades;
