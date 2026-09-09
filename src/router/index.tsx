import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '../components/Layout.tsx';
import { HomePage } from '../pages/HomePage.tsx';
import { FeaturesPage } from '../pages/FeaturesPage.tsx';
import { AboutPage } from '../pages/AboutPage.tsx';
import { NotFoundPage } from '../pages/NotFoundPage.tsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'features',
        element: <FeaturesPage />,
      },
      {
        path: 'about',
        element: <AboutPage />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
]);
