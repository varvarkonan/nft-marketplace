import { type ReactNode } from 'react';
import { RouterProvider } from 'atomic-router-react';
import { Pages } from '@/pages';
import { router } from '@/shared/routing';
import { NavBar } from '@/widgets/navigation';
import { Stack } from '@/shared/ui/Stack';

export const App = (): ReactNode => {
  return (
    <RouterProvider router={router}>
      <Stack maxWidth direction="column" justify="center" align="center">
        <NavBar className="navbar" />
        <Pages />
      </Stack>
    </RouterProvider>
  );
};
