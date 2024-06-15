import { RouteObject } from 'react-router-dom';

import { HomePage } from '@/pages/Home';

export const homeRoute: RouteObject = {
  path: '/',
  element: <HomePage />,
};
