import { type ReactNode } from 'react';
import { RouterProvider } from 'atomic-router-react';
import { Pages } from '@/pages';
import { router } from '@/shared/routing';

export const App = (): ReactNode => {
  return (
    <RouterProvider router={router}>
      <Pages />
    </RouterProvider>
  );
};
