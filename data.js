import { Category } from './types/Category';

export const products = [
  {
    id: 1,
    name: 'Cuenta de ahorro',
    description: '',
    category: [Category.AHORRO],
  },
  { id: 2, name: 'Cuenta corriente', category: [Category.AHORRO] },
  { id: 3, name: 'Pensión', category: [Category.AHORRO, Category.INVERSION] },
  { id: 4, name: 'Fondo de inversión', category: [Category.INVERSION] },
  { id: 5, name: 'Bonos', category: [Category.INVERSION] },
  { id: 6, name: 'Fondos de indexación', category: ['Inversión'] },
  { id: 7, name: 'Acciones', category: [Category.INVERSION] },
  { id: 8, name: 'Tarjeta de crédito', category: [Category.FINANCIANCION] },
  { id: 9, name: 'Crédito personal', category: [Category.FINANCIANCION] },
  { id: 10, name: 'Crédito hipotecario', category: [Category.FINANCIANCION] },
];

export const categories = [
  Category.AHORRO,
  Category.INVERSION,
  Category.FINANCIANCION,
];
