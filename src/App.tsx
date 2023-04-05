import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import { About } from './pages/about/About';
import { Home } from './pages/home/Home';
import { NotFound } from './pages/notFound/NotFound';
import { Layout } from './components/layout/Layout';
import { Form } from './pages/form/Form';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'form',
        element: <Form />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
