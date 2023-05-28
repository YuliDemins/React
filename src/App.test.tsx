import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { createBrowserRouter } from 'react-router-dom';
import { App } from './App';
import { Layout } from './components/layout/Layout';
import { About } from './pages/about/About';
import { Form } from './pages/form/Form';
import { Home } from './pages/home/Home';
import { NotFound } from './pages/notFound/NotFound';
import store from './store/store';

describe('App', () => {
  it('renders Home page', () => {
    createBrowserRouter([
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
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(screen.getByText(/cats/i)).toBeInTheDocument();
  });

  it('renders About page', () => {
    createBrowserRouter([
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
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const aboutLink = screen.getByRole('link', { name: 'About' });
    userEvent.click(aboutLink);
    expect(screen.getByText('About')).toBeInTheDocument();
  });
});
