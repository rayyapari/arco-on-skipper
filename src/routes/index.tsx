import type { SkipperRouteEntry } from '@tokopedia/skipper/router';

import MainLayout from '@/layouts/MainLayout';
import DefaultLayout from '@/layouts/DefaultLayout';

import Home from './Home/Lazy';
import About from './About/Lazy';
import Blog from './Blog/Lazy';
import Arco from './Arco/Lazy';
import ArcoNest from './ArcoNest/Lazy';

import VerifyParamsLayout from './About/layout/VerifyParams/Lazy';

const ROUTES: SkipperRouteEntry[] = [
  {
    type: 'layout-route',
    layout: MainLayout,
    routes: [
      {
        type: 'nested-route',
        name: 'about',
        path: '/about',
        routes: [
          {
            type: 'route',
            name: 'about-us',
            path: ':slug',
            layout: [VerifyParamsLayout, DefaultLayout],
            component: About,
          },
        ],
      },
      {
        type: 'nested-route',
        name: 'poc',
        path: '/poc',
        routes: [
          {
            type: 'route',
            name: 'arco',
            path: ':slug',
            component: Arco,
          },
          {
            type: 'route',
            name: 'arco-nest',
            path: ':slug-nest',
            component: ArcoNest,
          },
        ],
      },
      {
        type: 'route',
        name: 'home',
        path: '/',
        layout: [DefaultLayout],
        component: Home,
      },
    ],
  },
  {
    type: 'route',
    name: 'blog',
    path: '/blog',
    component: Blog,
  },
  // {
  //   type: 'route',
  //   name: 'arco',
  //   path: '/arco',
  //   component: Arco,
  // },
];

export default ROUTES;
