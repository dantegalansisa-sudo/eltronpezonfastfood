import { motion } from 'framer-motion';
import AnimatedCounter from './shared/AnimatedCounter';
import './Stats.css';

const stats = [
  { number: 100, suffix: '+', label: 'Platos en el menú' },
  { number: 5.0, label: 'Estrellas en Google', decimal: true },
  { number: 11, label: 'Categorías gastronómicas' },
  { number: 100, suffix: '%', label: 'Sabor garantizado' },
];

const Stats = () => {
  return (
    <section id="stats" className="stats">
      <div className="stats__container">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            className="stats__item"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.25, 1, 0.5, 1] }}
          >
            <span className="stats__number">
              <AnimatedCounter
                to={s.number}
                suffix={s.suffix ?? ''}
                decimal={s.decimal}
              />
            </span>
            <span className="stats__divider" aria-hidden />
            <span className="stats__label eyebrow">{s.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
