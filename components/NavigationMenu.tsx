'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';

export const NavigationMenu = () => {
  const menuRef = useRef<HTMLUListElement>(null);
  const toggleMenu = () => {
    return menuRef.current?.classList.toggle('hidden');
  };
  return (
    <nav className='flex justify-between relative py-4 items-center px-4 border border-t-0 border-x-0'>
      <div>LOGO</div>
      <button
        className='border p-1 rounded-sm cursor-pointer sm:hidden'
        onClick={toggleMenu}
      >
        <Image src='/bars_icon.svg' alt='Menu icon' width={20} height={20} />
      </button>
      <ul
        ref={menuRef}
        className='absolute top-16 border bg-white right-0 left-0 hidden sm:flex sm:static sm:border-0'
      >
        {['Sobre nosotros', 'Impacto', 'Trabaja con nosotros'].map((el, i) => (
          <li key={el + i} className='bg-white'>
            <Link
              href='#'
              className='block hover:bg-blue-500 hover:text-white p-2 w-full'
            >
              {el}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
