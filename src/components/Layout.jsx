import { Outlet } from 'react-router-dom';
import { AppBarNavigation } from './AppBar/AppBar';
import { Suspense } from 'react';

export const Layout = () => {
  return (
    <div>
      <AppBarNavigation />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};
