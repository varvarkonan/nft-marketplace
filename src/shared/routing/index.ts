import { createHistoryRouter } from 'atomic-router';
import { createBrowserHistory } from 'history';

import { mainRoute } from '@/pages/main';
import { aboutRoute } from '@/pages/about';

export const routes = [
  { path: '/', route: mainRoute },
  { path: '/about', route: aboutRoute },
];

export const router = createHistoryRouter({
  routes,
});

const history = createBrowserHistory();

router.setHistory(history);
