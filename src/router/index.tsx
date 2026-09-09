import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '../components/Layout.tsx';
import { HomePage } from '../pages/HomePage.tsx';
import { AboutPage } from '../pages/AboutPage.tsx';
import { ServicesPage } from '../pages/ServicesPage.tsx';
import { HSEPage } from '../pages/HSEPage.tsx';
import { ContactPage } from '../pages/ContactPage.tsx';
import { NotFoundPage } from '../pages/NotFoundPage.tsx';

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: 'about',
          element: <AboutPage />,
        },
        {
          path: 'services',
          element: <ServicesPage />,
        },
        {
          path: 'hse',
          element: <HSEPage />,
        },
        {
          path: 'contact',
          element: <ContactPage />,
        },
        {
          path: '*',
          element: <NotFoundPage />,
        },
      ],
    },
  ],
  {
    basename: import.meta.env.BASE_URL,
  }
);
