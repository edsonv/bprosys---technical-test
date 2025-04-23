'use client';
import { NoProductInfo } from '@/components/NoProductInfo';
import { ProductContent } from '@/components/Product';
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
          <ProductContent product={product} />
        </div>
      ) : (
        <NoProductInfo />
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
