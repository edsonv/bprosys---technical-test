import { type Product } from '@/types/Product';

export const ProductContent = ({ product }: { product: Product }) => {
  return (
    <>
      <div>{product.name}</div>
      <div>Tipo de producto: {product.type}</div>
      <div>Descripción: {product.description}</div>
      <div>Tasa de interés: {product.interest_rate}</div>
      <div>Categoría: {product.category}</div>
      <div>Perfil de riesgo: {product.risk_level}</div>
    </>
  );
};
