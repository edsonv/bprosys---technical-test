import { useCategoryContext } from '@/context/categories';
import { categories } from '@/data';
import { Category } from '@/types/Category';

export const CategoryFilter = () => {
  const { setCurrentCategory } = useCategoryContext();
  return (
    <ul className='flex border justify-around sm:justify-center flex-wrap gap-2 sm:gap-4 md:gap-8 p-2'>
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
  );
};
