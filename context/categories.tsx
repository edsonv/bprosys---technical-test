'use client';

import { Category } from '@/types/Category';
import { CategoryContextType } from '@/types/CategoryContext';
import { createContext, ReactNode, useContext, useState } from 'react';

export const CategoryContext = createContext<CategoryContextType | null>(null);

export const CategoriesContextProvider = ({
  children,
}: Readonly<{ children: ReactNode }>) => {
  const [currentCategory, setCurrentCategory] = useState<Category>(
    Category.EMPTY
  );

  return (
    <CategoryContext.Provider value={{ currentCategory, setCurrentCategory }}>
      {children}
    </CategoryContext.Provider>
  );
};

export const useCategoryContext = () => {
  const context = useContext(CategoryContext);

  if (!context) {
    throw new Error(
      'CategoryContext is null. Ensure the context provider is properly set up.'
    );
  }

  return context;
};
