// Datos del menú El Tropezón Fast Food — precios reales del cliente.
// Todas las cantidades en pesos dominicanos (RD$).

export interface MenuItem {
  nombre: string;
  desc?: string;
  precio?: number | null;
  precios?: Record<string, number>;
  destacado?: boolean;
}

export type MenuCategoryId =
  | 'mofongos'
  | 'parrilla'
  | 'pizza'
  | 'hamburgers'
  | 'mariscos'
  | 'cortes'
  | 'tacos'
  | 'papaSuprema'
  | 'ensaladas'
  | 'entradas'
  | 'drinks';

export const menuData: Record<MenuCategoryId, MenuItem[]> = {
  mofongos: [
    {
      nombre: 'Mofongo Tropezón Especial',
      desc: 'Carne mixta, pinguillin, camarones y mariscos',
      precio: 800,
      destacado: true,
    },
    { nombre: 'Mofongo Rompe Olas', desc: 'Mariscos, mixta', precio: 750 },
    { nombre: 'Camarofongo', precio: 600 },
    { nombre: 'Salchifongo', precio: 500 },
    { nombre: 'Chicharofongo', precio: 500 },
    { nombre: 'Mofongo Alitas', precio: 500 },
  ],
  parrilla: [
    {
      nombre: 'Parrilla de Carnes',
      desc: 'Pollo, res, alitas, salchichas',
      precios: { '2 personas': 1400, '4 personas': 2500 },
    },
    {
      nombre: 'Mar y Tierra',
      desc: 'Camarones, pulpo, pollo, res, cerdo, salchichas',
      precios: { '2 personas': 1800, '4 personas': 2900 },
      destacado: true,
    },
    {
      nombre: 'Pechuga a la plancha plus',
      desc: 'Salsa BBQ, guacasaca o salsa de ajo',
      precio: 400,
    },
    { nombre: 'Alitas Picante + Papas', precio: 400 },
    { nombre: 'Costilla Baby Back', desc: 'Salsa BBQ', precio: 800 },
    { nombre: 'Pollo Teriyaki', precio: 400 },
    { nombre: 'Cerdo Teriyaki', precio: 500 },
    { nombre: 'Pechuga a la Crema', precio: 500 },
    { nombre: 'Pechuga Golden Bleu', precio: 600 },
    { nombre: 'Pechuga Gratinada', precio: 500 },
  ],
  pizza: [
    { nombre: 'Jamón', precios: { Personal: 250, Mediana: 400, Grande: 500 } },
    { nombre: 'Pepperoni', precios: { Personal: 300, Mediana: 500, Grande: 600 } },
    { nombre: 'Doble Queso', precios: { Personal: 300, Mediana: 500, Grande: 600 } },
    { nombre: 'Salchicha Italiana', precios: { Personal: 300, Mediana: 500, Grande: 600 } },
    { nombre: 'Chorizo', precios: { Personal: 300, Mediana: 500, Grande: 600 } },
    { nombre: 'Tocineta', precios: { Personal: 300, Mediana: 500, Grande: 600 } },
    { nombre: 'Pollo', precios: { Personal: 300, Mediana: 600, Grande: 700 } },
    { nombre: 'Res', precios: { Personal: 350, Mediana: 600, Grande: 700 } },
    { nombre: 'Vegetales Mix', precios: { Personal: 350, Mediana: 650, Grande: 750 } },
    { nombre: 'Maíz', precios: { Personal: 250, Mediana: 400, Grande: 500 } },
    { nombre: 'Hawaiana', precios: { Personal: 450, Mediana: 750, Grande: 900 } },
    { nombre: 'Camarones', precios: { Personal: 450, Mediana: 800, Grande: 1000 } },
    {
      nombre: 'Tropezón Especial',
      desc: 'Pollo, res, jamón, pepperoni, chorizo, salchicha italiana, aceitunas, vegetales y hongos',
      precios: { Personal: 600, Mediana: 900, Grande: 1200 },
      destacado: true,
    },
  ],
  hamburgers: [
    { nombre: 'Hamburguesa + Papa', precio: 350 },
    { nombre: 'Hamburguesa de Pollo', precio: 350 },
    { nombre: 'Hamburguesa + Bacon + Papas', precio: 400 },
    { nombre: 'Burger Doble Carne + Papa + Bacon', precio: 500 },
    { nombre: 'Hamburguesa de Cerdo + Papas', precio: 400 },
    { nombre: 'Hamburguesa de Pierna + Bacon', precio: 500 },
    { nombre: 'Hamburger Angus', precio: 600 },
    { nombre: 'Hamburger Doble Angus', precio: 850, destacado: true },
    { nombre: 'Club Sandwich', precio: 400 },
    { nombre: 'Sandwich', precio: 200 },
  ],
  mariscos: [
    {
      nombre: 'Camarones',
      desc: 'Al ajillo, a la criolla o a la crema',
      precio: 800,
    },
    {
      nombre: 'Filete de Mero',
      desc: 'Al vapor, frito o a la crema',
      precio: 750,
    },
    {
      nombre: 'Salmón',
      desc: 'A la vinagreta, al ajillo o a la criolla',
      precio: 900,
    },
  ],
  cortes: [
    { nombre: 'Churrasco 10oz', precio: 1200, destacado: true },
    { nombre: 'Picaña al Grill 10oz', precio: 1150 },
    { nombre: 'Lomo de Cerdo', precio: 500 },
  ],
  tacos: [
    { nombre: 'Tacos de Camarones', desc: '3 unidades', precio: 600 },
    { nombre: 'Tacos de Pollo', precio: 450 },
    { nombre: 'Tacos de Res', precio: 450 },
    { nombre: 'Tacos Vegetales', precio: 300 },
  ],
  papaSuprema: [
    {
      nombre: 'Papa Suprema Grande',
      desc: 'Pollo o Res',
      precios: { Pollo: 400, Res: 450 },
    },
    { nombre: 'Papa Suprema Mixta Grande', precio: 450 },
    {
      nombre: 'Papa Suprema Mediana',
      desc: 'Pollo o Res',
      precios: { Pollo: 300, Res: 350 },
    },
  ],
  ensaladas: [
    { nombre: 'Ensalada de Camarones', precio: 500 },
    { nombre: 'Ensalada del César', precio: 350 },
  ],
  entradas: [
    {
      nombre: 'Canasticas de Plátano Rellenas',
      desc: 'Carne o mariscos',
      precios: { Pequeña: 300, Grande: 500 },
    },
    { nombre: 'Chicken Nuggets', precio: 250 },
    { nombre: 'Croquetas de Pollo', precio: 250 },
    { nombre: 'Palitos de Mozzarella', precio: 250 },
    { nombre: 'Pescado Empanado', precio: 300 },
  ],
  drinks: [
    {
      nombre: 'Cervezas',
      desc: 'Pequeña o grande',
      precios: { Pequeña: 200, Grande: 400 },
    },
    {
      nombre: 'Tequila',
      precios: { Trago: 200, Botella: 400 },
    },
    {
      nombre: 'Piña Colada',
      precios: { Pequeña: 300, Grande: 350 },
    },
    { nombre: 'Frozen', precio: null },
    { nombre: 'Jugos Naturales', precio: null },
    { nombre: 'Refresco / Soda', precio: null },
    { nombre: 'Botella de Agua', precio: null },
    { nombre: 'Café', precio: null },
    { nombre: 'Baileys', precio: null },
  ],
};

export interface TabConfig {
  id: MenuCategoryId;
  label: string;
  icon: string;
}

export const tabsConfig: TabConfig[] = [
  { id: 'mofongos', label: 'Mofongos', icon: '🥥' },
  { id: 'parrilla', label: 'Parrilla', icon: '🔥' },
  { id: 'pizza', label: 'Pizza', icon: '🍕' },
  { id: 'hamburgers', label: 'Hamburgers', icon: '🍔' },
  { id: 'mariscos', label: 'Pescados y Mariscos', icon: '🦐' },
  { id: 'cortes', label: 'Cortes', icon: '🥩' },
  { id: 'tacos', label: 'Tacos', icon: '🌮' },
  { id: 'papaSuprema', label: 'Papa Suprema', icon: '🥔' },
  { id: 'ensaladas', label: 'Ensaladas', icon: '🥗' },
  { id: 'entradas', label: 'Entradas', icon: '🥟' },
  { id: 'drinks', label: 'Drinks', icon: '🍹' },
];
