import { Category } from './Category';

export type Product = {
  id: number;
  name: string;
  type: string;
  description: string;
  interest_rate: string;
  category: Category;
  risk_level: string;
};
