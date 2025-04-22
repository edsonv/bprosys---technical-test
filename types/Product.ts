import { Category } from './Category';

export type Product = {
  id: number;
  name: string;
  category: Category[];
};
