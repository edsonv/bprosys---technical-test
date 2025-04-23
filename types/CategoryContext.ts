import { Dispatch, SetStateAction } from 'react';
import { Category } from './Category';

export type CategoryContextType = {
  currentCategory: Category;
  setCurrentCategory: Dispatch<SetStateAction<Category>>;
};
