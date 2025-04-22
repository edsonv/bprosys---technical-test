'use client';

import { useCategoryContext } from '@/context/categories';
import { categories } from '../data';
import { filteredProductsByCategory } from '@/utils/filteredProductsByCategory';
import { Category } from '@/types/Category';

export default function Home() {
  const { currentCategory, setCurrentCategory } = useCategoryContext();
  return (
    <>
      <main>
        <ul className='flex border justify-around'>
          <li>
            <button
              className='cursor-pointer'
              onClick={() => setCurrentCategory(Category.EMPTY)}
            >
              Todos
            </button>
          </li>
          {categories.map((category) => (
            <li key={category}>
              <button
                className='cursor-pointer'
                onClick={() => setCurrentCategory(category)}
              >
                {category}
              </button>
            </li>
          ))}
        </ul>
        <div>
          {filteredProductsByCategory(currentCategory).map((product) => (
            <div key={product.id} tabIndex={0}>
              {product.name}
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
