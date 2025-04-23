import { NavigationMenu } from '@/components/NavigationMenu';
import { ReactNode } from 'react';

const Layout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <>
      <NavigationMenu />
      <main>{children}</main>
    </>
  );
};

export default Layout;
