import { Dispatch, SetStateAction } from 'react';
import { Category } from './Product';

export type CategoryContextType = {
  currentCategory: Category;
  setCurrentCategory: Dispatch<SetStateAction<Category>>;
};
