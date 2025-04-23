import { Category } from './types/Category';

export const categories = [
  Category.AHORRO,
  Category.TRANSACCIONAL,
  Category.JUBILACIÓN,
  Category.INVERSION,
  Category.CONSUMO,
  Category.VIVIENDA,
];

export const products = [
  {
    id: 1,
    name: 'Cuenta de ahorro',
    description:
      ' Morbi elit dui, ullamcorper eget justo nec, volutpat posuere ipsum. Duis consectetur id tortor non convallis. Nunc rhoncus nisl sit.',
    type: 'Depósito',
    interest_rate: '1.5%',
    category: Category.AHORRO,
    risk_level: 'Bajo',
  },
  {
    id: 2,
    name: 'Cuenta corriente',
    description:
      ' Morbi elit dui, ullamcorper eget justo nec, volutpat posuere ipsum. Duis consectetur id tortor non convallis. Nunc rhoncus nisl sit.',
    type: 'Depósito',
    interest_rate: '0%',
    category: Category.TRANSACCIONAL,
    risk_level: 'Bajo',
  },
  {
    id: 3,
    name: 'Pensión',
    description:
      ' Morbi elit dui, ullamcorper eget justo nec, volutpat posuere ipsum. Duis consectetur id tortor non convallis. Nunc rhoncus nisl sit.',
    type: 'Previsión',
    interest_rate: 'Variable',
    category: Category.JUBILACIÓN,
    risk_level: 'Medio',
  },
  {
    id: 4,
    name: 'Fondo de inversión',
    description:
      ' Morbi elit dui, ullamcorper eget justo nec, volutpat posuere ipsum. Duis consectetur id tortor non convallis. Nunc rhoncus nisl sit.',
    type: 'Inversión colectiva',
    interest_rate: 'Variable',
    category: Category.INVERSION,
    risk_level: 'Medio',
  },
  {
    id: 5,
    name: 'Bonos',
    description:
      ' Morbi elit dui, ullamcorper eget justo nec, volutpat posuere ipsum. Duis consectetur id tortor non convallis. Nunc rhoncus nisl sit.',
    type: 'Renta fija',
    interest_rate: '4.0%',
    category: Category.INVERSION,
    risk_level: 'Bajo a medio',
  },
  {
    id: 6,
    name: 'Fondos de indexación',
    description:
      ' Morbi elit dui, ullamcorper eget justo nec, volutpat posuere ipsum. Duis consectetur id tortor non convallis. Nunc rhoncus nisl sit.',
    type: 'Inversión colectiva',
    interest_rate: 'Variable',
    category: Category.INVERSION,
    risk_level: 'Medio',
  },
  {
    id: 7,
    name: 'Acciones',
    description:
      ' Morbi elit dui, ullamcorper eget justo nec, volutpat posuere ipsum. Duis consectetur id tortor non convallis. Nunc rhoncus nisl sit.',
    type: 'Renta variable',
    interest_rate: 'Variable',
    category: Category.INVERSION,
    risk_level: 'Alto',
  },
  {
    id: 8,
    name: 'Tarjeta de crédito',
    description:
      ' Morbi elit dui, ullamcorper eget justo nec, volutpat posuere ipsum. Duis consectetur id tortor non convallis. Nunc rhoncus nisl sit.',
    type: 'Crédito',
    interest_rate: '25.0%',
    category: Category.CONSUMO,
    risk_level: 'Alto',
  },
  {
    id: 9,
    name: 'Crédito personal',
    description:
      ' Morbi elit dui, ullamcorper eget justo nec, volutpat posuere ipsum. Duis consectetur id tortor non convallis. Nunc rhoncus nisl sit.',
    type: 'Préstamo',
    interest_rate: '18.0%',
    category: Category.CONSUMO,
    risk_level: 'Medio',
  },
  {
    id: 10,
    name: 'Crédito hipotecario',
    description:
      ' Morbi elit dui, ullamcorper eget justo nec, volutpat posuere ipsum. Duis consectetur id tortor non convallis. Nunc rhoncus nisl sit.',
    type: 'Préstamo',
    interest_rate: '9.5%',
    category: Category.VIVIENDA,
    risk_level: 'Medio',
  },
];
