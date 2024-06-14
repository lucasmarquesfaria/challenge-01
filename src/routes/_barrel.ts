import { createBrowserRouter } from 'react-router-dom';

import { homeRoute } from './home';
import { profileRoute } from './profile';

export const router = createBrowserRouter([homeRoute, profileRoute]);
