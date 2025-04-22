import { products } from '@/data';
import { Category } from '@/types/Category';
import { Product } from '@/types/Product';

export function filteredProductsByCategory(
  currentCategory: Category = Category.EMPTY
): Product[] {
  if (currentCategory === Category.EMPTY) return products as Product[];

  return products.filter((product) =>
    product.category.includes(currentCategory)
  ) as Product[];
}
