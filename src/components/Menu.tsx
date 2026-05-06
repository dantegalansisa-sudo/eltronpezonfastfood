import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import RevealText from './shared/RevealText';
import { wa } from './shared/whatsapp';
import {
  menuData,
  tabsConfig,
  type MenuCategoryId,
  type MenuItem,
} from './menu-data';
import './Menu.css';

const fmt = (n: number) => `RD$ ${n.toLocaleString('es-DO')}`;

const ItemRow = ({ item, index }: { item: MenuItem; index: number }) => {
  const hasMultiPrice = !!item.precios;

  const orderAction = `quiero ordenar ${item.nombre}`;

  return (
    <motion.div
      className={`menu__item ${item.destacado ? 'menu__item--destacado' : ''}`}
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.4, delay: index * 0.04, ease: [0.25, 1, 0.5, 1] }}
    >
      <div className="menu__item-info">
        <div className="menu__item-head">
          {item.destacado && <span className="menu__item-star">★ Especial</span>}
          <h4 className="menu__item-name">{item.nombre}</h4>
        </div>
        {item.desc && <p className="menu__item-desc">{item.desc}</p>}

        {hasMultiPrice ? (
          <div className="menu__item-prices">
            {Object.entries(item.precios!).map(([label, price]) => (
              <span key={label} className="menu__item-price-pill">
                <em>{label}</em>
                <strong>{fmt(price)}</strong>
              </span>
            ))}
          </div>
        ) : null}
      </div>

      <div className="menu__item-action">
        {!hasMultiPrice && (
          <span className="menu__item-price">
            {item.precio == null ? 'Consultar' : fmt(item.precio)}
          </span>
        )}
        <a
          href={wa(orderAction)}
          target="_blank"
          rel="noopener noreferrer"
          className="menu__item-cta"
          aria-label={`Pedir ${item.nombre} por WhatsApp`}
        >
          Pedir
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path
              d="M5 12h14M13 6l6 6-6 6"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </motion.div>
  );
};

const Menu = () => {
  const [activeTab, setActiveTab] = useState<MenuCategoryId>('mofongos');
  const items = menuData[activeTab];
  const activeMeta = tabsConfig.find((t) => t.id === activeTab)!;

  return (
    <section id="menu" className="menu">
      <div className="menu__container">
        <motion.div
          className="menu__header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
        >
          <span className="eyebrow menu__eyebrow">
            <span className="menu__eyebrow-line" />
            Carta Completa
          </span>
          <h2 className="menu__title">
            <RevealText text="Todo el menú" />
            <span className="menu__title-accent">
              <RevealText text="al alcance de un toque" delay={0.15} />
            </span>
          </h2>
          <p className="menu__intro body-lg">
            11 categorías, más de 100 platos. Toca el botón verde de cada ítem y
            tu pedido llega directo a nuestro WhatsApp con el plato pre-llenado.
          </p>
        </motion.div>

        <div
          className="menu__tabs"
          role="tablist"
          aria-label="Categorías del menú"
        >
          {tabsConfig.map((tab) => {
            const isActive = tab.id === activeTab;
            return (
              <button
                key={tab.id}
                role="tab"
                aria-selected={isActive}
                className={`menu__tab ${isActive ? 'menu__tab--active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <span className="menu__tab-icon" aria-hidden>{tab.icon}</span>
                {tab.label}
              </button>
            );
          })}
        </div>

        <div className="menu__category-meta">
          <h3 className="menu__category-name">{activeMeta.label}</h3>
          <span className="menu__category-count">
            {items.length} {items.length === 1 ? 'opción' : 'opciones'}
          </span>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            className="menu__grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {items.map((item, i) => (
              <ItemRow key={`${activeTab}-${item.nombre}`} item={item} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        <div className="menu__cta-bottom">
          <a
            href={wa('quiero ayuda eligiendo del menú')}
            target="_blank"
            rel="noopener noreferrer"
            className="menu__cta-link"
          >
            ¿Necesitas ayuda eligiendo? Pídenos recomendación →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Menu;
