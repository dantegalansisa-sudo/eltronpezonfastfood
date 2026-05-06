import { motion } from 'framer-motion';
import RevealText from './shared/RevealText';
import './Galeria.css';

const galeria = [
  {
    src: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=900&q=85&auto=format&fit=crop',
    alt: 'Pizza recién horneada',
    span: 'tall',
    label: 'Pizza Tropezón',
  },
  {
    src: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=900&q=85&auto=format&fit=crop',
    alt: 'Hamburguesa Doble Angus',
    span: 'wide',
    label: 'Doble Angus',
  },
  {
    src: 'https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?w=900&q=85&auto=format&fit=crop',
    alt: 'Mofongo Tropezón',
    span: 'normal',
    label: 'Mofongo',
  },
  {
    src: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=900&q=85&auto=format&fit=crop',
    alt: 'Parrilla mar y tierra',
    span: 'wide',
    label: 'Parrilla',
  },
  {
    src: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=900&q=85&auto=format&fit=crop',
    alt: 'Bacon Burger',
    span: 'normal',
    label: 'Bacon Burger',
  },
];

const Galeria = () => {
  return (
    <section id="galeria" className="galeria">
      <div className="galeria__container">
        <motion.div
          className="galeria__header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
        >
          <span className="eyebrow galeria__eyebrow">
            <span className="galeria__eyebrow-line" />
            La Vitrina
          </span>
          <h2 className="galeria__title">
            <RevealText text="Bocados que" />
            <span className="galeria__title-accent">
              <RevealText text="enamoran" delay={0.15} />
            </span>
          </h2>
        </motion.div>

        <div className="galeria__grid">
          {galeria.map((item, i) => (
            <motion.figure
              key={item.src}
              className={`galeria__card galeria__card--${item.span}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
            >
              <img src={item.src} alt={item.alt} loading="lazy" />
              <figcaption>
                <span className="galeria__card-label">{item.label}</span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Galeria;
