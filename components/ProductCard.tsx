import { Product } from '@/types/Product';
import Link from 'next/link';

export const ProductCard = ({ product }: { product: Product }) => {
  const { id, name, interest_rate, risk_level } = product;
  return (
    <Link
      href={`/product/${id}`}
      key={id}
      className='block border rounded-lg py-2 px-3 w-[300px]'
    >
      <div>{name}</div>
      <div>Tasa de interés: {interest_rate}</div>
      <div>Nivel de riesgo: {risk_level}</div>
    </Link>
  );
};
