// Helper centralizado para todos los CTAs de WhatsApp del sitio.
// Cada mensaje incluye la URL pública y deja claro que el cliente viene
// desde la página web — útil para que el negocio pueda atribuir pedidos.

export const WA_PHONE = '18299678181';
export const WA_PHONE_DISPLAY = '829-967-8181';
export const SITE_URL = 'https://eltronpezonfastfood.vercel.app';

/**
 * Construye el mensaje completo. `action` debe ser la frase
 * que arranca con "quiero ..." (sin saludo ni firma).
 *
 * Ejemplo:
 *   buildMessage('quiero ordenar el Mofongo Tropezón Especial')
 *   → "Hola, vengo desde la página web del negocio (https://...). Quiero ordenar el Mofongo Tropezón Especial."
 */
export const buildMessage = (action: string) => {
  const actionCapitalized = action.charAt(0).toUpperCase() + action.slice(1);
  return `Hola, vengo desde la página web del negocio (${SITE_URL}). ${actionCapitalized}.`;
};

/**
 * Construye una URL de wa.me lista para usar en `href`,
 * con el mensaje ya `encodeURIComponent`-eado.
 */
export const wa = (action: string) =>
  `https://wa.me/${WA_PHONE}?text=${encodeURIComponent(buildMessage(action))}`;
