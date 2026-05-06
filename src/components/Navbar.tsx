import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MagneticButton from './shared/MagneticButton';
import { wa } from './shared/whatsapp';
import './Navbar.css';

const WA_HREF = wa('quiero hacer un pedido');

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { label: 'Inicio', href: '#hero' },
    { label: 'Especialidades', href: '#especialidades' },
    { label: 'Menú', href: '#menu' },
    { label: 'Sobre Nosotros', href: '#sobre' },
    { label: 'Contacto', href: '#contacto' },
  ];

  return (
    <motion.nav
      className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
    >
      <div className="navbar__container">
        <a href="#hero" className="navbar__logo" aria-label="El Tropezón Fast Food — Inicio">
          <img src="/images/logo.png" alt="El Tropezón Fast Food" />
        </a>

        <ul className="navbar__links">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>

        <MagneticButton>
          <a
            href={WA_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="navbar__cta"
          >
            Pedir Ahora
          </a>
        </MagneticButton>

        <button
          className={`navbar__burger ${mobileOpen ? 'navbar__burger--open' : ''}`}
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Menú"
          aria-expanded={mobileOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="navbar__mobile"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
          >
            {links.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setMobileOpen(false)}>
                {link.label}
              </a>
            ))}
            <a
              href={WA_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="navbar__mobile-cta"
              onClick={() => setMobileOpen(false)}
            >
              Pedir Ahora
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
