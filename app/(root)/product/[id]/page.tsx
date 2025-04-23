'use client';
import { products } from '@/data';
import { Params } from '@/types/Params';
import { type Product } from '@/types/Product';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Product() {
  const { id } = useParams<Params>();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const [selectedProduct] = products.filter(
      (product) => product.id === parseInt(id, 10)
    );
    if (selectedProduct) {
      setProduct(selectedProduct);
    }
  }, [id]);

  return (
    <>
      {product ? (
        <div className='p-4'>
          <div>{product.name}</div>
          <div>Tipo de producto: {product.type}</div>
          <div>Descripción: {product.description}</div>
          <div>Tasa de interés: {product.interest_rate}</div>
          <div>Categoría: {product.category}</div>
          <div>Perfil de riesgo: {product.risk_level}</div>
        </div>
      ) : (
        <p>No info about product</p>
      )}
      <Link
        href='/'
        className='bg-blue-500 text-white py-2 px-4 absolute bottom-5 right-8'
      >
        Volver a principal
      </Link>
    </>
  );
}
