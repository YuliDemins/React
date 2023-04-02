import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import '@testing-library/jest-dom';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { About } from './About';

describe('Home', () => {
  it('renders About route', () => {
    render(
      <MemoryRouter initialEntries={['/about']}>
        <Routes>
          <Route path="/about" element={<About />} />
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByText(/about/i)).toBeInTheDocument();
  });
});
