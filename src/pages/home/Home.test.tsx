import { render, screen } from '@testing-library/react';
import { describe, test } from 'vitest';
import '@testing-library/jest-dom';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { Home } from './Home';
import { Provider } from 'react-redux';
import store from '../../store/store';

describe('Home', async () => {
  test('renders Home route', () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/']}>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </MemoryRouter>
      </Provider>
    );
    expect(screen.getByText(/cats/i)).toBeInTheDocument();
  });
});

describe('api', () => {
  test('fetch', async () => {
    const { findByText } = render(
      <Provider store={store}>
        <Home />
      </Provider>
    );
    expect(await findByText(/abbysinian/i)).toBeInTheDocument();
  });
});
