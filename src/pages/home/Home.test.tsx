import { render, screen } from '@testing-library/react';
import { describe, test } from 'vitest';
import '@testing-library/jest-dom';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { Home } from './Home';

describe('Home', () => {
  test('renders Home route', async () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByText(/cats/i)).toBeInTheDocument();
  });
});

describe('api', () => {
  test('fetch', async () => {
    const { findByText } = render(<Home />);
    expect(await findByText(/abbysinian/i)).toBeInTheDocument();
  });
});
