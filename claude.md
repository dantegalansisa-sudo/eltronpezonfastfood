# CLAUDE.md — EL TROPEZÓN FAST FOOD

> **🚨 PRIMERA INSTRUCCIÓN OBLIGATORIA:** Use this skill antes de empezar a codificar:
> **https://github.com/Leonxlnx/taste-skill**
>
> Sin ese skill no se construye nada. Es la base de animaciones y micro-interacciones NEXIX.

---

## 0. REGLAS ABSOLUTAS — NEXIX TECH STUDIO

- **Stack:** React + TypeScript + Vite + Framer Motion + **Vanilla CSS** (NUNCA Tailwind)
- **Layout estándar:** `section` padding `120px 0` · `.container` max-width `1320px` padding `0 64px`
- **Componentes obligatorios:** `CustomCursor`, `RevealText`, `MagneticButton`, `AnimatedCounter`, `ScrollProgress`, `WhatsAppButton`
- **Botón WhatsApp flotante** verde `#25D366`, esquina inferior derecha, siempre visible
- **CustomCursor** color rojo del proyecto (`#C8242A`)
- **ScrollProgress** en top con glow rojo
- **RevealText** word-by-word en TODOS los H1 y H2
- **MagneticButton** en TODOS los CTAs
- **NUNCA fondos negros puros.** Este proyecto es **LIGHT MODE EDITORIAL** — fondo crema cálido `#FBF7F0`, jamás negro.
- **Imágenes:** las del cliente están en `public/images/` (logo + 2 imágenes de menú). Para fotos de platos individuales y ambiente usar **Unsplash placeholder** hasta que Dante consiga las fotos reales.
- **`npm run build` debe pasar sin errores TypeScript.**
- **Responsive total:** desktop 1920px, laptop 1440px, tablet 768px, mobile 375px.

---

## 1. DATOS DEL CLIENTE

| Campo | Valor |
|---|---|
| **Negocio** | El Tropezón Fast Food |
| **Tipo** | Restaurante de comida rápida + parrilla + pizzería |
| **Ubicación** | Av. 27 de Febrero Esq. Cl. Armando Aybar, Azua 71001, RD |
| **WhatsApp / Tel** | 829-967-8181 |
| **Instagram** | @eltropezonfastfood |
| **Rating Google** | 5.0 ★ (3 opiniones) |
| **Horario** | Abre 4:00 PM (confirmar cierre con cliente) |
| **Pago** | Efectivo + Visa + Mastercard |
| **Servicio** | Dine-in · Pickup · Delivery en Azua |

**Especialidades reales del menú (extraídas):**
- 🥇 **Mofongo Tropezón Especial** — $800 (carne mixta, pinguillin, camarones y mariscos) — *PLATO ESTRELLA*
- 🍕 **Pizza Tropezón Especial** — $600 / $900 / $1,200 (pollo, res, jamón, pepperoni, chorizo, salchicha italiana, aceitunas, vegetales, hongos)
- 🍔 **Hamburger Doble Angus** — $850
- 🔥 **Parrilla Tropezón Mar y Tierra** — $1,800 / $2,900 (camarones, pulpo, pollo, res, cerdo, salchichas)
- 🥩 **Churrasco 10oz** — $1,200
- 🍤 **Camarofongo** — $600

---

## 2. CONCEPTO VISUAL: "MESA TROPICAL"

> *Fast food dominicano elevado a experiencia editorial caribeña. Fondo crema cálido como mantel de mesa de madera blanqueada, comida como obra de arte cenital, ingredientes tropicales flotando alrededor con micro-animaciones suaves.*

### Inspiración
- Hero estructura: **Cuisine Wave Restaurant** (split text + plato cenital + decorativos flotantes) — pero **invertido a luz**
- Estética editorial: **revistas Bon Appétit / Kinfolk** (espacios blancos, tipografía serif elegante)
- Energía: **Dominicana cálida** (rojos especiados, verdes palma, dorados tostados)
- NO es: gótico, oscuro, gamer, neón, ni "fast food americano genérico"

### Mood Words
`Cálido` · `Apetitoso` · `Editorial` · `Caribeño` · `Premium-casual` · `Hambre-inducer`

---

## 3. PALETA — Variables CSS Completas

```css
:root {
  /* —— Base crema (fondos) —— */
  --cream-base: #FBF7F0;        /* fondo principal — marfil cálido */
  --cream-warm: #F5E6D3;        /* secciones alternas, cards */
  --cream-soft: #F0E5D0;        /* hover states, divisores */

  /* —— Acentos cálidos (extraídos del logo) —— */
  --tomato-red: #C8242A;        /* CTA principal, precios destacados, acentos */
  --tomato-deep: #A11D22;       /* hover del rojo */
  --mango-orange: #E89B3D;      /* CTA secundario, badges, highlights */
  --mango-soft: #F4B96A;        /* fondos suaves naranja */

  /* —— Naturales (frescura) —— */
  --palm-green: #5C7A4D;        /* divisores, hojas decorativas, "fresh" */
  --palm-light: #8AA877;        /* acentos verdes claros */

  /* —— Texto y profundidad —— */
  --chocolate: #3D2817;         /* texto principal — marrón del logo */
  --chocolate-soft: #5C4231;    /* texto secundario */
  --gold-toast: #B8923A;        /* línea decorativa bajo títulos, dorado tostado */

  /* —— Funcionales —— */
  --white-pure: #FFFFFF;
  --shadow-warm: rgba(61, 40, 23, 0.08);
  --shadow-strong: rgba(61, 40, 23, 0.15);
  --whatsapp-green: #25D366;

  /* —— Tipografía —— */
  --font-serif: 'Cormorant Garamond', serif;
  --font-sans: 'DM Sans', sans-serif;

  /* —— Espaciado —— */
  --section-padding: 120px 0;
  --container-max: 1320px;
  --container-padding: 0 64px;

  /* —— Transiciones —— */
  --ease-smooth: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

/* Reset elegante */
* { margin: 0; padding: 0; box-sizing: border-box; }
html { scroll-behavior: smooth; }
body {
  font-family: var(--font-sans);
  color: var(--chocolate);
  background: var(--cream-base);
  font-weight: 400;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  overflow-x: hidden;
}
```

### Google Fonts (en `index.html`)
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600&family=DM+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
```

### Escala tipográfica
```css
.h-display    { font-family: var(--font-serif); font-size: clamp(64px, 9vw, 144px); font-weight: 600; line-height: 0.95; letter-spacing: -0.02em; }
.h-1          { font-family: var(--font-serif); font-size: clamp(48px, 6vw, 88px); font-weight: 600; line-height: 1.05; letter-spacing: -0.015em; }
.h-2          { font-family: var(--font-serif); font-size: clamp(36px, 4.5vw, 64px); font-weight: 600; line-height: 1.1; }
.h-3          { font-family: var(--font-serif); font-size: clamp(24px, 2.8vw, 36px); font-weight: 600; line-height: 1.2; }
.eyebrow      { font-family: var(--font-sans); font-size: 13px; font-weight: 600; letter-spacing: 0.18em; text-transform: uppercase; }
.italic-quote { font-family: var(--font-serif); font-style: italic; font-weight: 500; }
.body-lg      { font-family: var(--font-sans); font-size: 19px; line-height: 1.65; }
.body         { font-family: var(--font-sans); font-size: 16px; line-height: 1.65; }
.caption      { font-family: var(--font-sans); font-size: 14px; line-height: 1.5; }
```

---

## 4. ESTRUCTURA DE ARCHIVOS

```
tropezon/
├── public/
│   ├── images/
│   │   ├── logo.png                    (provisto por cliente)
│   │   ├── menu-principal.png          (provisto por cliente — fallback)
│   │   ├── menu-pizza.png              (provisto por cliente — fallback)
│   │   ├── hero-mofongo.jpg            (Unsplash placeholder)
│   │   ├── plato-pizza.jpg             (Unsplash placeholder)
│   │   ├── plato-burger.jpg            (Unsplash placeholder)
│   │   ├── plato-parrilla.jpg          (Unsplash placeholder)
│   │   └── decorativos/
│   │       ├── tomate.png
│   │       ├── aji.png
│   │       ├── hoja-albahaca.png
│   │       ├── platano-frito.png
│   │       └── limon.png
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Navbar.tsx + Navbar.css
│   │   ├── Hero.tsx + Hero.css
│   │   ├── Stats.tsx + Stats.css
│   │   ├── Especialidades.tsx + Especialidades.css
│   │   ├── Menu.tsx + Menu.css
│   │   ├── Sobre.tsx + Sobre.css
│   │   ├── Galeria.tsx + Galeria.css
│   │   ├── Contacto.tsx + Contacto.css
│   │   ├── Footer.tsx + Footer.css
│   │   ├── shared/
│   │   │   ├── CustomCursor.tsx
│   │   │   ├── RevealText.tsx
│   │   │   ├── MagneticButton.tsx
│   │   │   ├── AnimatedCounter.tsx
│   │   │   ├── ScrollProgress.tsx
│   │   │   └── WhatsAppButton.tsx
│   │   └── menu-data.ts                (datos completos del menú)
│   ├── App.tsx
│   ├── App.css
│   ├── index.css
│   └── main.tsx
├── index.html
├── vite.config.ts
├── tsconfig.json
└── package.json
```

---

## 5. SECCIONES — CÓDIGO COMPLETO

### 5.1 NAVBAR

**Diseño:** Logo a la izquierda + nav links centro + botón rojo "Pedir Ahora" a la derecha. Background `cream-base` con leve transparencia y blur al hacer scroll.

```tsx
// src/components/Navbar.tsx
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import MagneticButton from './shared/MagneticButton';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
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
        <a href="#hero" className="navbar__logo">
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
            href="https://wa.me/18299678181?text=Hola%2C%20quiero%20hacer%20un%20pedido"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar__cta"
          >
            Pedir Ahora
          </a>
        </MagneticButton>

        <button
          className="navbar__burger"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menú"
        >
          <span /><span /><span />
        </button>
      </div>

      {mobileOpen && (
        <motion.div
          className="navbar__mobile"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMobileOpen(false)}>
              {link.label}
            </a>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
```

```css
/* src/components/Navbar.css */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  padding: 20px 0;
  background: rgba(251, 247, 240, 0.0);
  transition: all 0.4s var(--ease-smooth);
}

.navbar--scrolled {
  background: rgba(251, 247, 240, 0.92);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  padding: 12px 0;
  box-shadow: 0 4px 30px var(--shadow-warm);
}

.navbar__container {
  max-width: var(--container-max);
  margin: 0 auto;
  padding: var(--container-padding);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
}

.navbar__logo img {
  height: 56px;
  width: auto;
  display: block;
}

.navbar__links {
  display: flex;
  gap: 36px;
  list-style: none;
}

.navbar__links a {
  font-size: 15px;
  font-weight: 500;
  color: var(--chocolate);
  text-decoration: none;
  position: relative;
  transition: color 0.3s var(--ease-smooth);
}

.navbar__links a::after {
  content: '';
  position: absolute;
  bottom: -6px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--tomato-red);
  transition: width 0.3s var(--ease-smooth);
}

.navbar__links a:hover { color: var(--tomato-red); }
.navbar__links a:hover::after { width: 100%; }

.navbar__cta {
  display: inline-block;
  padding: 14px 28px;
  background: var(--tomato-red);
  color: var(--cream-base);
  font-weight: 600;
  font-size: 15px;
  border-radius: 50px;
  text-decoration: none;
  transition: all 0.3s var(--ease-smooth);
  box-shadow: 0 4px 14px rgba(200, 36, 42, 0.25);
}

.navbar__cta:hover {
  background: var(--tomato-deep);
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(200, 36, 42, 0.35);
}

.navbar__burger { display: none; }

@media (max-width: 968px) {
  .navbar__links, .navbar__cta { display: none; }
  .navbar__burger {
    display: flex;
    flex-direction: column;
    gap: 5px;
    background: none;
    border: none;
    cursor: pointer;
  }
  .navbar__burger span {
    width: 28px;
    height: 2px;
    background: var(--chocolate);
  }
  .navbar__mobile {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background: var(--cream-base);
    padding: 24px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    box-shadow: 0 10px 30px var(--shadow-warm);
  }
  .navbar__mobile a {
    color: var(--chocolate);
    text-decoration: none;
    font-size: 17px;
    font-weight: 500;
  }
}
```

---

### 5.2 HERO ⭐ **CHECKPOINT — DETENERSE AQUÍ PARA APROBACIÓN**

**Diseño (split editorial estilo Cuisine Wave invertido a luz):**

```
┌──────────────────────────────────────────────────────────────────┐
│  CREMA BASE #FBF7F0                                              │
│                                                                   │
│   [eyebrow] DESDE AZUA · CALIDAD QUE SE QUEDA CONTIGO            │
│                                                                   │
│   Sabor que                              ╭─────────────╮         │
│   Conquista                              │   PLATO     │         │
│   El Paladar                             │   CENITAL   │         │
│                                          │   GRANDE    │         │
│   [italic] El Tropezón Fast Food         │  (Mofongo   │         │
│                                          │  Tropezón)  │         │
│   [body] Mofongos · Pizza · Parrilla     ╰─────────────╯         │
│   · Burgers · Mariscos                                            │
│                                                                   │
│   [BTN ROJO] Ver Menú   [BTN OUTLINE] Pedir por WhatsApp         │
│                                                                   │
│   [decorativos flotando: 🍅 🌶️ 🌿 🍋 🥖 con float-gentle]        │
└──────────────────────────────────────────────────────────────────┘
```

```tsx
// src/components/Hero.tsx
import { motion } from 'framer-motion';
import RevealText from './shared/RevealText';
import MagneticButton from './shared/MagneticButton';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      {/* Decorativos flotantes */}
      <motion.img
        src="/images/decorativos/tomate.png"
        alt=""
        className="hero__deco hero__deco--tomate"
        animate={{ y: [0, -18, 0], rotate: [0, 8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.img
        src="/images/decorativos/aji.png"
        alt=""
        className="hero__deco hero__deco--aji"
        animate={{ y: [0, 14, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.img
        src="/images/decorativos/hoja-albahaca.png"
        alt=""
        className="hero__deco hero__deco--hoja-1"
        animate={{ y: [0, -12, 0], rotate: [0, 12, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.img
        src="/images/decorativos/limon.png"
        alt=""
        className="hero__deco hero__deco--limon"
        animate={{ y: [0, 16, 0], rotate: [0, -6, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="hero__container">
        {/* COLUMNA TEXTO */}
        <div className="hero__text">
          <motion.span
            className="eyebrow hero__eyebrow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="hero__eyebrow-line" />
            Desde Azua · 5.0 ★ Google
          </motion.span>

          <h1 className="hero__title">
            <RevealText text="Sabor que" delay={0.4} />
            <RevealText text="Conquista el" delay={0.55} />
            <span className="hero__title-accent">
              <RevealText text="Paladar" delay={0.7} />
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            Mofongos signature, pizza al carbón, parrilla mar y tierra,
            burgers angus y mariscos frescos. Tradición dominicana servida
            con la pasión que solo Azua sabe dar.
          </motion.p>

          <motion.div
            className="hero__cta-group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
          >
            <MagneticButton>
              <a href="#menu" className="hero__cta hero__cta--primary">
                Ver Menú Completo
              </a>
            </MagneticButton>
            <MagneticButton>
              <a
                href="https://wa.me/18299678181?text=Hola%2C%20quiero%20hacer%20un%20pedido"
                target="_blank"
                rel="noopener noreferrer"
                className="hero__cta hero__cta--secondary"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Pedir por WhatsApp
              </a>
            </MagneticButton>
          </motion.div>
        </div>

        {/* COLUMNA PLATO HERO */}
        <motion.div
          className="hero__visual"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.4, 0, 0.2, 1] }}
        >
          <div className="hero__plate-ring">
            <motion.img
              src="/images/hero-mofongo.jpg"
              alt="Mofongo Tropezón Especial"
              className="hero__plate"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
            />
          </div>
          <div className="hero__plate-badge">
            <span className="eyebrow">Plato Estrella</span>
            <strong>Mofongo Tropezón Especial</strong>
            <span className="hero__plate-price">RD$ 800</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
```

```css
/* src/components/Hero.css */
.hero {
  position: relative;
  min-height: 100vh;
  padding: 160px 0 80px;
  background: linear-gradient(135deg, var(--cream-base) 0%, var(--cream-warm) 100%);
  overflow: hidden;
}

/* Textura sutil de fondo opcional (puntos cremosos) */
.hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: radial-gradient(circle at 20% 30%, rgba(232, 155, 61, 0.06) 0%, transparent 40%),
                    radial-gradient(circle at 80% 70%, rgba(200, 36, 42, 0.05) 0%, transparent 40%);
  pointer-events: none;
}

.hero__container {
  position: relative;
  max-width: var(--container-max);
  margin: 0 auto;
  padding: var(--container-padding);
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
  z-index: 2;
}

/* —— Columna texto —— */
.hero__text { display: flex; flex-direction: column; gap: 28px; }

.hero__eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 14px;
  color: var(--tomato-red);
}
.hero__eyebrow-line {
  width: 40px;
  height: 2px;
  background: var(--tomato-red);
  display: block;
}

.hero__title {
  font-family: var(--font-serif);
  font-size: clamp(56px, 7.5vw, 120px);
  font-weight: 600;
  line-height: 0.98;
  letter-spacing: -0.02em;
  color: var(--chocolate);
}
.hero__title-accent {
  display: block;
  font-style: italic;
  color: var(--tomato-red);
  font-weight: 500;
}

.hero__signature {
  font-size: 22px;
  color: var(--chocolate-soft);
}

.hero__desc {
  color: var(--chocolate-soft);
  max-width: 520px;
}

/* —— CTAs —— */
.hero__cta-group {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  margin-top: 12px;
}

.hero__cta {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 18px 32px;
  font-weight: 600;
  font-size: 16px;
  border-radius: 50px;
  text-decoration: none;
  transition: all 0.3s var(--ease-smooth);
}

.hero__cta--primary {
  background: var(--tomato-red);
  color: var(--cream-base);
  box-shadow: 0 6px 20px rgba(200, 36, 42, 0.3);
}
.hero__cta--primary:hover {
  background: var(--tomato-deep);
  transform: translateY(-3px);
  box-shadow: 0 10px 28px rgba(200, 36, 42, 0.4);
}

.hero__cta--secondary {
  background: transparent;
  color: var(--chocolate);
  border: 2px solid var(--mango-orange);
}
.hero__cta--secondary:hover {
  background: var(--mango-orange);
  color: var(--cream-base);
  transform: translateY(-3px);
}

/* —— Plato hero —— */
.hero__visual {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero__plate-ring {
  position: relative;
  width: 520px;
  height: 520px;
  border-radius: 50%;
  background: var(--cream-warm);
  border: 4px solid var(--gold-toast);
  padding: 24px;
  box-shadow:
    0 30px 80px var(--shadow-strong),
    inset 0 0 0 1px rgba(184, 146, 58, 0.2);
}
.hero__plate-ring::before {
  content: '';
  position: absolute;
  inset: -20px;
  border: 1px dashed var(--gold-toast);
  border-radius: 50%;
  opacity: 0.5;
}

.hero__plate {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  display: block;
}

.hero__plate-badge {
  position: absolute;
  bottom: 0;
  right: -20px;
  background: var(--cream-base);
  padding: 18px 24px;
  border-radius: 16px;
  box-shadow: 0 12px 30px var(--shadow-strong);
  display: flex;
  flex-direction: column;
  gap: 4px;
  border-left: 4px solid var(--tomato-red);
}
.hero__plate-badge .eyebrow { color: var(--tomato-red); font-size: 11px; }
.hero__plate-badge strong {
  font-family: var(--font-serif);
  font-size: 22px;
  font-weight: 600;
  color: var(--chocolate);
  line-height: 1.1;
}
.hero__plate-price {
  font-size: 18px;
  font-weight: 700;
  color: var(--mango-orange);
}

/* —— Decorativos flotantes —— */
.hero__deco {
  position: absolute;
  z-index: 1;
  pointer-events: none;
  filter: drop-shadow(0 8px 16px var(--shadow-warm));
}
.hero__deco--tomate { top: 12%; left: 8%; width: 80px; }
.hero__deco--aji { bottom: 18%; left: 14%; width: 70px; }
.hero__deco--hoja-1 { top: 22%; right: 12%; width: 90px; }
.hero__deco--limon { bottom: 12%; right: 8%; width: 75px; }

/* —— Responsive —— */
@media (max-width: 968px) {
  .hero { padding: 120px 0 60px; }
  .hero__container {
    grid-template-columns: 1fr;
    gap: 60px;
    text-align: center;
  }
  .hero__text { align-items: center; }
  .hero__plate-ring { width: 360px; height: 360px; }
  .hero__cta-group { justify-content: center; }
  .hero__deco { display: none; }
}
@media (max-width: 480px) {
  .hero__plate-ring { width: 280px; height: 280px; padding: 16px; }
  .hero__plate-badge { right: -10px; padding: 12px 16px; }
}
```

> ## 🛑 CHECKPOINT OBLIGATORIO
> **DESPUÉS DE CONSTRUIR EL HERO, DETENTE.**
> Toma screenshot completo, muéstralo a Dante, espera aprobación antes de continuar con el resto de secciones. NO construyas Stats / Especialidades / Menú hasta que el Hero esté aprobado.

---

### 5.3 STATS / TRUST BADGES

**Diseño:** Sección crema-warm corta (no 120px, sino 80px). 4 contadores animados en grid horizontal con líneas verticales decorativas en oro tostado.

```tsx
// Stats con AnimatedCounter
const stats = [
  { number: 100, suffix: '+', label: 'Platos en el Menú' },
  { number: 5.0, label: 'Estrellas en Google', decimal: true },
  { number: 7, label: 'Categorías Gastronómicas' },
  { number: 100, suffix: '%', label: 'Sabor Garantizado' },
];
```

**CSS clave:**
- Background: `var(--cream-warm)`
- Padding: `80px 0`
- Grid 4 columnas con `gap: 0` y separadores `::after` con border-right de `var(--gold-toast)` opacity 0.3
- Números: `font-family: var(--font-serif); font-size: clamp(48px, 6vw, 88px); color: var(--tomato-red);`
- Labels: `eyebrow` style en `var(--chocolate-soft)`
- En mobile: grid 2x2

---

### 5.4 ESPECIALIDADES — 4 PLATOS ESTRELLA

**Diseño:** H2 grande "Las Especialidades de la Casa" con `RevealText`. Grid de 4 cards grandes, cada una con: imagen cenital del plato (ratio 1:1), nombre serif, precio destacado en rojo, descripción breve, botón outline "Pedir por WhatsApp" con mensaje pre-llenado del plato.

**Datos:**
```tsx
const especialidades = [
  {
    nombre: 'Mofongo Tropezón Especial',
    desc: 'Carne mixta, pinguillin, camarones y mariscos. La esencia caribeña en un solo plato.',
    precio: 'RD$ 800',
    img: '/images/plato-mofongo.jpg',
    waMsg: 'Hola, quiero ordenar el Mofongo Tropezón Especial',
  },
  {
    nombre: 'Pizza Tropezón Especial',
    desc: 'Pollo, res, jamón, pepperoni, chorizo, salchicha italiana, aceitunas, vegetales y hongos.',
    precio: 'Desde RD$ 600',
    img: '/images/plato-pizza.jpg',
    waMsg: 'Hola, quiero ordenar la Pizza Tropezón Especial',
  },
  {
    nombre: 'Parrilla Mar y Tierra',
    desc: 'Camarones, pulpo, pollo, res, cerdo y salchichas. Para 2 o 4 personas.',
    precio: 'Desde RD$ 1,800',
    img: '/images/plato-parrilla.jpg',
    waMsg: 'Hola, quiero ordenar la Parrilla Mar y Tierra',
  },
  {
    nombre: 'Hamburger Doble Angus',
    desc: 'Doble carne angus premium, queso fundido, bacon crujiente y papas doradas.',
    precio: 'RD$ 850',
    img: '/images/plato-burger.jpg',
    waMsg: 'Hola, quiero ordenar la Hamburger Doble Angus',
  },
];
```

**CSS clave:**
- Background: `var(--cream-base)`
- Cards: background `var(--white-pure)`, border-radius `20px`, padding `0`, shadow `0 10px 40px var(--shadow-warm)`, hover transform `translateY(-8px)` + shadow más fuerte
- Imagen del plato: aspect-ratio 1, object-fit cover, border-radius `20px 20px 0 0`
- Hover: imagen `scale(1.06)` con transition 0.6s
- Precio: `color: var(--tomato-red); font-weight: 700; font-size: 22px;`
- Grid: `repeat(4, 1fr)` desktop, `repeat(2, 1fr)` tablet, `1fr` mobile
- Stagger animation con `whileInView` + delay incremental por card

---

### 5.5 MENÚ COMPLETO — TABS POR CATEGORÍA

**Diseño:** Esta es la sección más rica. Tabs horizontales con scroll en mobile. Al hacer click en cada tab, se filtra la categoría con animación AnimatePresence de Framer Motion.

**Categorías (10 tabs):**
1. Entradas
2. Hamburgers
3. Parrilla Tropezón
4. Pescados y Mariscos
5. Mofongos ⭐
6. Tacos y Burritos
7. Papa Suprema
8. Cortes
9. Ensaladas
10. Pizza ⭐
11. Drinks

**Crear archivo `src/components/menu-data.ts` con TODA la data del menú:**

```tsx
export const menuData = {
  entradas: [
    { nombre: 'Canasticas de Plátano Rellenas', desc: 'Carne o mariscos', precios: { peq: 300, gde: 500 } },
    { nombre: 'Chicken Nuggets', precio: 250 },
    { nombre: 'Croquetas de Pollo', precio: 250 },
    { nombre: 'Palitos de Mozzarella', precio: 250 },
    { nombre: 'Pescado Empanado', precio: 300 },
  ],
  hamburgers: [
    { nombre: 'Hamburguesas + Papa', precio: 350 },
    { nombre: 'Hamburguesas de Pollo', precio: 350 },
    { nombre: 'Hamburguesas + Bacon + Papas', precio: 400 },
    { nombre: 'Burger Doble Carne + Papa + Bacon', precio: 500 },
    { nombre: 'Hamburguesas de Cerdo + Papas', precio: 400 },
    { nombre: 'Hamburguesa de Pierna + Bacon', precio: 500 },
    { nombre: 'Hamburger Angus', precio: 600 },
    { nombre: 'Hamburger Doble Angus', precio: 850, destacado: true },
    { nombre: 'Club Sandwich', precio: 400 },
    { nombre: 'Sandwich', precio: 200 },
  ],
  parrilla: [
    { nombre: 'Parrilla de Carnes', desc: 'Pollo, res, alitas, salchichas', precios: { '2p': 1400, '4p': 2500 } },
    { nombre: 'Mar y Tierra', desc: 'Camarones, pulpo, pollo, res, cerdo, salchichas', precios: { '2p': 1800, '4p': 2900 }, destacado: true },
    { nombre: 'Pechuga a la plancha plus', desc: 'Salsa BBQ, guacasaca, salsa de ajo', precio: 400 },
    { nombre: 'Alitas Picante + Papas', precio: 400 },
    { nombre: 'Costilla Baby Back (Salsa BBQ)', precio: 800 },
    { nombre: 'Pollo Teriyaki', precio: 400 },
    { nombre: 'Cerdo Teriyaki', precio: 500 },
    { nombre: 'Pechuga a la Crema', precio: 500 },
    { nombre: 'Pechuga Golden Bleu', precio: 600 },
    { nombre: 'Pechuga Gratinada', precio: 500 },
  ],
  mariscos: [
    { nombre: 'Camarones', desc: 'Al ajillo, a la criolla, a la crema', precio: 800 },
    { nombre: 'Filete de Mero', desc: 'Al vapor, frito, a la crema', precio: 750 },
    { nombre: 'Salmón', desc: 'A la vinagreta, al ajillo, a la criolla', precio: 900 },
  ],
  mofongos: [
    { nombre: 'Mofongo Tropezón Especial', desc: 'Carne mixta, pinguillin, camarones y mariscos', precio: 800, destacado: true },
    { nombre: 'Mofongo Rompe Olas', desc: 'Mariscos, mixta', precio: 750 },
    { nombre: 'Camarofongo', precio: 600 },
    { nombre: 'Salchifongo', precio: 500 },
    { nombre: 'Chicharofongo', precio: 500 },
    { nombre: 'Mofongo Alitas', precio: 500 },
  ],
  tacos: [
    { nombre: 'Tacos de Camarones (3 tacos)', precio: 600 },
    { nombre: 'Tacos Pollo', precio: 450 },
    { nombre: 'Taco de Res', precio: 450 },
    { nombre: 'Taco Vegetales', precio: 300 },
  ],
  papaSuprema: [
    { nombre: 'Papa Suprema Pollo / Res Grande', precios: { pollo: 400, res: 450 } },
    { nombre: 'Mixta Grande', precio: 450 },
    { nombre: 'Papa Suprema Pollo / Res / Mixta Mediana', precios: { pollo: 300, res: 350 } },
  ],
  cortes: [
    { nombre: 'Churrasco 10oz', precio: 1200 },
    { nombre: 'Picaña al Grill 10oz', precio: 1150 },
    { nombre: 'Lomo de Cerdo', precio: 500 },
  ],
  ensaladas: [
    { nombre: 'Ensalada de Camarones', precio: 500 },
    { nombre: 'Ensalada del César', precio: 350 },
  ],
  pizza: [
    { nombre: 'Jamón', precios: { personal: 250, mediana: 400, grande: 500 } },
    { nombre: 'Pepperoni', precios: { personal: 300, mediana: 500, grande: 600 } },
    { nombre: 'Doble Queso', precios: { personal: 300, mediana: 500, grande: 600 } },
    { nombre: 'Salchicha Italiana', precios: { personal: 300, mediana: 500, grande: 600 } },
    { nombre: 'Chorizo', precios: { personal: 300, mediana: 500, grande: 600 } },
    { nombre: 'Tocineta', precios: { personal: 300, mediana: 500, grande: 600 } },
    { nombre: 'Pollo', precios: { personal: 300, mediana: 600, grande: 700 } },
    { nombre: 'Res', precios: { personal: 350, mediana: 600, grande: 700 } },
    { nombre: 'Vegetales Mix', precios: { personal: 350, mediana: 650, grande: 750 } },
    { nombre: 'Maíz', precios: { personal: 250, mediana: 400, grande: 500 } },
    { nombre: 'Hawaiana', precios: { personal: 450, mediana: 750, grande: 900 } },
    { nombre: 'Camarones', precios: { personal: 450, mediana: 800, grande: 1000 } },
    { nombre: 'Tropezón Especial', desc: 'Pollo, res, jamón, pepperoni, chorizo, salchicha italiana, aceitunas, vegetales y hongos', precios: { personal: 600, mediana: 900, grande: 1200 }, destacado: true },
  ],
  drinks: [
    { nombre: 'Cervezas Pequeñas', precios: { peq: 200, gde: 400 } },
    { nombre: 'Tequila', precios: { peq: 200, gde: 400 } },
    { nombre: 'Piña Colada', precios: { peq: 300, gde: 350 } },
    { nombre: 'Frozen', precio: null },
    { nombre: 'Jugos Naturales', precio: null },
    { nombre: 'Refresco / Soda', precio: null },
    { nombre: 'Botella de Agua', precio: null },
    { nombre: 'Café', precio: null },
    { nombre: 'Baileys', precio: null },
  ],
};

export const tabsConfig = [
  { id: 'entradas', label: 'Entradas', icon: '🥟' },
  { id: 'hamburgers', label: 'Hamburgers', icon: '🍔' },
  { id: 'parrilla', label: 'Parrilla', icon: '🔥' },
  { id: 'mariscos', label: 'Mariscos', icon: '🦐' },
  { id: 'mofongos', label: 'Mofongos', icon: '🥥' },
  { id: 'tacos', label: 'Tacos', icon: '🌮' },
  { id: 'papaSuprema', label: 'Papa Suprema', icon: '🥔' },
  { id: 'cortes', label: 'Cortes', icon: '🥩' },
  { id: 'ensaladas', label: 'Ensaladas', icon: '🥗' },
  { id: 'pizza', label: 'Pizza', icon: '🍕' },
  { id: 'drinks', label: 'Drinks', icon: '🍹' },
];
```

**Componente Menu.tsx:**
- Estado: `const [activeTab, setActiveTab] = useState('mofongos');` (arrancar en mofongos por ser el plato estrella)
- Tabs scrolleables horizontalmente con scroll-snap
- Cada tab activa: background `var(--tomato-red)`, color `var(--cream-base)`
- Cards de items con AnimatePresence + stagger
- Items destacados: borde izquierdo `var(--mango-orange)` 4px + badge "⭐ ESPECIAL"
- Cada item con botón "Pedir" pequeño que abre WhatsApp con el nombre del plato pre-llenado:
  ```
  https://wa.me/18299678181?text=Hola%2C%20quiero%20ordenar%20${encodeURIComponent(item.nombre)}
  ```

**CSS clave del Menú:**
```css
.menu { background: var(--cream-base); padding: var(--section-padding); }
.menu__tabs {
  display: flex;
  gap: 12px;
  overflow-x: auto;
  padding: 8px 0;
  margin-bottom: 60px;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
}
.menu__tab {
  flex-shrink: 0;
  padding: 14px 24px;
  background: var(--cream-warm);
  border: none;
  border-radius: 50px;
  font-weight: 600;
  font-size: 15px;
  color: var(--chocolate);
  cursor: pointer;
  transition: all 0.3s var(--ease-smooth);
  scroll-snap-align: start;
}
.menu__tab--active {
  background: var(--tomato-red);
  color: var(--cream-base);
  box-shadow: 0 6px 20px rgba(200, 36, 42, 0.3);
}
.menu__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}
.menu__item {
  background: var(--white-pure);
  padding: 24px 28px;
  border-radius: 14px;
  box-shadow: 0 4px 18px var(--shadow-warm);
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;
  transition: all 0.3s var(--ease-smooth);
}
.menu__item:hover { transform: translateY(-4px); box-shadow: 0 12px 30px var(--shadow-strong); }
.menu__item--destacado {
  border-left: 4px solid var(--mango-orange);
  background: linear-gradient(135deg, var(--white-pure) 0%, #FFF8EC 100%);
}
.menu__item-name { font-family: var(--font-serif); font-size: 22px; font-weight: 600; color: var(--chocolate); }
.menu__item-desc { font-size: 14px; color: var(--chocolate-soft); margin-top: 4px; }
.menu__item-price { color: var(--tomato-red); font-weight: 700; font-size: 20px; white-space: nowrap; }
@media (max-width: 768px) { .menu__grid { grid-template-columns: 1fr; } }
```

---

### 5.6 SOBRE NOSOTROS

**Diseño:** Split 60/40. Izquierda: imagen del local (Unsplash placeholder de restaurante caribeño). Derecha: H2 "El Sabor de Azua" + 2 párrafos historia + 3 mini-stats inline (años · clientes felices · platos servidos) + botón outline.

**Copy sugerido:**
> *"En El Tropezón nacimos de la pasión por la cocina dominicana servida sin atajos. Lo que empezó como una receta familiar de mofongo en Azua hoy es el destino favorito de quienes buscan sabor honesto, abundante y bien servido."*
>
> *"Cada plato lleva el orgullo del Sur — desde nuestros mofongos signature hasta la parrilla mar y tierra, pasando por las pizzas crujientes que hemos perfeccionado tropezón a tropezón."*

**CSS:** Background `var(--cream-warm)`. Imagen con border-radius `20px` y shadow fuerte. Texto serif para H2 grande, body sans para párrafos.

---

### 5.7 GALERÍA — AMBIENTE Y PLATOS

**Diseño:** Galería masonry de 6-8 imágenes con efecto hover overlay rojo translúcido + zoom suave. Lightbox al hacer click (opcional). Mix de fotos del local + fotos de platos.

**Estructura:**
```tsx
const galeria = [
  { src: '/images/galeria/local-1.jpg', alt: 'Salón principal', size: 'large' },
  { src: '/images/galeria/plato-1.jpg', alt: 'Mofongo Tropezón', size: 'medium' },
  // ...
];
```

CSS Grid con `grid-template-rows: masonry` (fallback a aspect-ratio variado).

---

### 5.8 CONTACTO Y UBICACIÓN

**Diseño:** Split 50/50. Izquierda: información (dirección, teléfono, horario, redes) + botón grande verde WhatsApp. Derecha: iframe de Google Maps embebido centrado en `Av. 27 de Febrero, Azua`.

**Mapa Google embed:**
```html
<iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3792.123!2d-70.7344!3d18.4543!..."
  style="border:0; border-radius: 20px; width: 100%; height: 480px;"
  loading="lazy"
></iframe>
```
*Nota: Dante debe sacar el embed real de Google Maps buscando "El Tropezón Fast Food Azua".*

**Datos:**
- 📍 Av. 27 de Febrero Esq. Cl. Armando Aybar, Azua 71001
- 📱 829-967-8181
- 🕐 Abrimos a las 4:00 PM
- 📷 @eltropezonfastfood

---

### 5.9 FOOTER

**Diseño:** 4 columnas + barra inferior con créditos NEXIX.

```
[ Logo + tagline ]  [ Menú rápido ]  [ Especialidades ]  [ Contacto ]
─────────────────────────────────────────────────────────────────
  © 2026 El Tropezón Fast Food · Web por NEXIX Tech Studio
```

Background: `var(--chocolate)` (sí, footer puede ir oscuro elegante — es la única excepción permitida). Texto en `var(--cream-base)`.

---

## 6. INVENTARIO FOTOGRÁFICO

| # | Sección | Foto necesaria | Estado | Fallback |
|---|---|---|---|---|
| 1 | Hero | Mofongo Tropezón cenital sobre madera | ❌ Falta | Unsplash mofongo dish |
| 2 | Especialidades | Pizza Tropezón cenital | ❌ Falta | Unsplash pizza |
| 3 | Especialidades | Parrilla Mar y Tierra | ❌ Falta | Unsplash mixed grill |
| 4 | Especialidades | Hamburger Doble Angus | ❌ Falta | Unsplash double burger |
| 5 | Sobre | Foto del local interior/fachada | ❌ Falta | Unsplash caribbean restaurant |
| 6 | Galería | 6-8 fotos mix ambiente + platos | ❌ Falta | Unsplash mix |
| 7 | Decorativos | tomate.png, aji.png, hoja-albahaca.png, limon.png, platano-frito.png (PNG transparent) | ❌ Falta | Buscar en flaticon o generar con Gemini |
| 8 | Logo | logo.png | ✅ Provisto | — |
| 9 | Menú PDF | menu-principal.png + menu-pizza.png | ✅ Provisto | — |

> **Acción para Dante:** Pedirle al cliente fotos profesionales de los 4 platos estrella (mofongo, pizza, parrilla, burger angus) + 2 fotos del local. Mientras tanto, Claude Code usa Unsplash de alta calidad.

**URLs Unsplash sugeridas (alta resolución, gratis):**
- Mofongo: `https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?w=1200`
- Pizza: `https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=1200`
- Parrilla: `https://images.unsplash.com/photo-1544025162-d76694265947?w=1200`
- Burger: `https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=1200`
- Local: `https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1600`

---

## 7. SEO

```html
<!-- index.html <head> -->
<title>El Tropezón Fast Food | Mofongos, Pizza, Parrilla en Azua</title>
<meta name="description" content="El Tropezón Fast Food Azua: mofongos signature, pizza al carbón, parrilla mar y tierra, hamburgers angus y mariscos frescos. Pedidos al 829-967-8181.">
<meta name="keywords" content="comida rápida Azua, mofongo Azua, pizza Azua, parrilla Azua, El Tropezón, fast food República Dominicana, delivery Azua">
<meta name="author" content="El Tropezón Fast Food">
<meta name="theme-color" content="#C8242A">

<!-- Open Graph -->
<meta property="og:type" content="restaurant">
<meta property="og:title" content="El Tropezón Fast Food | Sabor que conquista el paladar">
<meta property="og:description" content="Mofongos signature, pizza, parrilla y mariscos en Azua. Tradición dominicana servida con pasión.">
<meta property="og:image" content="/images/og-image.jpg">
<meta property="og:url" content="https://eltropezon.com">
<meta property="og:locale" content="es_DO">

<!-- Schema.org -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "name": "El Tropezón Fast Food",
  "image": "https://eltropezon.com/images/logo.png",
  "telephone": "+1-829-967-8181",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Av. 27 de Febrero Esq. Cl. Armando Aybar",
    "addressLocality": "Azua",
    "postalCode": "71001",
    "addressCountry": "DO"
  },
  "servesCuisine": ["Dominican", "Fast Food", "Caribbean"],
  "priceRange": "RD$200 - RD$2900",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "3"
  }
}
</script>
```

---

## 8. COMPONENTES SHARED — REFERENCIA RÁPIDA

Todos los componentes de `src/components/shared/` siguen el patrón del **taste-skill**. Si el skill no los provee, implementarlos así:

- **CustomCursor:** dot rojo `var(--tomato-red)` 8px + ring 32px que sigue mouse con lerp 0.15. Hover en links → ring crece a 60px.
- **RevealText:** divide texto por palabras, cada una con `motion.span` `initial={{ y: '110%' }}` `animate={{ y: 0 }}` + delay incremental 0.05s, dentro de container `overflow: hidden`.
- **MagneticButton:** wrapper que detecta `mousemove` y aplica `translate3d(x*0.3, y*0.3, 0)` al hijo con spring de Framer Motion.
- **AnimatedCounter:** usa `useInView` + `useMotionValue` + `useTransform` + `animate()` para contar de 0 al número objetivo en 2s con ease-out.
- **ScrollProgress:** barra fija top, height 3px, width = `useScroll().scrollYProgress * 100%`, background `var(--tomato-red)` con `box-shadow: 0 0 10px var(--tomato-red)`.
- **WhatsAppButton:** position fixed bottom-right, 60x60, background `var(--whatsapp-green)`, icono SVG WhatsApp blanco, pulse animation infinita, link a `https://wa.me/18299678181`.

---

## 9. PROMPT FINAL PARA CLAUDE CODE

> 📋 **Pega este bloque completo en Claude Code para empezar la construcción.**

```
Use this skill: https://github.com/Leonxlnx/taste-skill

Vamos a construir la web de EL TROPEZÓN FAST FOOD siguiendo el CLAUDE.md
completo que está en la raíz del proyecto.

CONTEXTO:
- Cliente: Restaurante de comida rápida en Azua, RD
- Concepto visual: "MESA TROPICAL" — light mode editorial caribeño
- Stack: React + TypeScript + Vite + Framer Motion + Vanilla CSS
- NUNCA usar Tailwind. NUNCA fondos negros (footer es la única excepción).
- Paleta: cream-base #FBF7F0 + tomato-red #C8242A + mango-orange #E89B3D +
  palm-green #5C7A4D + chocolate #3D2817 (todas las variables están en
  CLAUDE.md sección 3).
- Fuentes: Cormorant Garamond + DM Sans (Google Fonts link en sección 3).
- Imágenes del cliente ya están en public/images/ (logo + 2 menús).
  Para fotos de platos individuales usa Unsplash placeholder de la sección 6.

FLUJO DE CONSTRUCCIÓN — UNA SECCIÓN A LA VEZ:

PASO 1: Setup inicial
- Crear proyecto Vite con React + TypeScript
- Instalar framer-motion
- Configurar Google Fonts en index.html
- Crear todos los componentes shared/ (CustomCursor, RevealText,
  MagneticButton, AnimatedCounter, ScrollProgress, WhatsAppButton)
- Setup de variables CSS globales en index.css

PASO 2: Construir Navbar (sección 5.1 del CLAUDE.md)
- Código TSX y CSS completos están provistos
- Mostrar resultado

PASO 3: Construir Hero (sección 5.2 del CLAUDE.md) ⭐ CHECKPOINT
- Código TSX y CSS completos están provistos
- Implementar todos los decorativos flotantes con animación
- Mostrar resultado y DETENERSE
- Esperar mi aprobación antes de continuar

PASO 4 en adelante: Una sección por vez, en orden:
Stats → Especialidades → Menú → Sobre → Galería → Contacto → Footer
Cada sección sigue las especificaciones del CLAUDE.md.

REGLAS ABSOLUTAS:
- npm run build debe pasar sin errores TypeScript
- Responsive total: 1920 / 1440 / 768 / 375
- Todos los CTAs apuntan a WhatsApp 829-967-8181 con mensaje pre-llenado
  usando encodeURIComponent
- Botón flotante WhatsApp siempre visible
- CustomCursor activo en toda la web
- ScrollProgress en top
- RevealText en H1 y H2
- MagneticButton en todos los CTAs

EMPIEZA POR EL PASO 1. Cuando termines el Hero, MUÉSTRAME un screenshot
y espera mi aprobación antes de seguir.
```

---

## 🎬 RESUMEN EJECUTIVO

✅ **Concepto:** "MESA TROPICAL" — light editorial caribeño
✅ **Paleta:** Crema + tomato red + mango + palm green + chocolate
✅ **Tipografía:** Cormorant Garamond + DM Sans
✅ **Hero:** Split estilo Cuisine Wave invertido a luz, plato cenital con marco dorado, decorativos flotantes
✅ **Menú:** 11 categorías con tabs, todos los precios reales del cliente
✅ **CTA principal:** WhatsApp 829-967-8181 con mensajes pre-llenados por plato
✅ **Plato estrella:** Mofongo Tropezón Especial (RD$ 800)
✅ **Checkpoint:** Después del Hero, parar y aprobar.

**Listo para construir. 🚀**