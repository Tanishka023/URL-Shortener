import './App.css';
import AppLayout from './layouts/app-layout';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Dashboard from './pages/dashboard';
import RedirectLink from './pages/redirect-link';
import LandingPage from './pages/LandingPage';
import Auth from './pages/auth';
import Link from './pages/link';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <LandingPage />,
      },
      {
        path: '/dashboard',
        element: <Dashboard />,
      },
      {
        path: '/auth',
        element: <Auth />,
      },
      {
        path: '/link/:id',
        element: <Link />,
      },
      {
        path: '/:id',
        element: <RedirectLink />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
