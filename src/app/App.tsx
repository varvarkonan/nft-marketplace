import { type ReactNode } from 'react';
import { RouterProvider } from 'atomic-router-react';
import { Pages } from '@/pages';
import { router } from '@/shared/routing';
import { NavBar } from '@/widgets/navigation/ui/NavBar/NavBar';

export const App = (): ReactNode => {
  return (
    <RouterProvider router={router}>
      <NavBar />
      <Pages />
    </RouterProvider>
  );
};
