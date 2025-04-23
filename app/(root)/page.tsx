'use client';

import { useCategoryContext } from '@/context/categories';
import { filteredProductsByCategory } from '@/utils/filteredProductsByCategory';
import { CategoryFilter } from '@/components/CategoryFilter';
import { ProductCard } from '@/components/ProductCard';

export default function Home() {
  const { currentCategory } = useCategoryContext();
  return (
    <>
      <CategoryFilter />
      <div className='flex flex-wrap gap-4 m-4 justify-center'>
        {filteredProductsByCategory(currentCategory).map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </>
  );
}
