import { createRoutesView } from 'atomic-router-react';
import { MainPage, mainRoute } from './main';
import { AboutPage, aboutRoute } from './about';

export const Pages = createRoutesView({
  routes: [
    { route: mainRoute, view: MainPage },
    { route: aboutRoute, view: AboutPage },
  ],
  otherwise() {
    return <div>Page not found!</div>;
  },
});
