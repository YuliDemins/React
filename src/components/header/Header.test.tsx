import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import { Header } from './Header';

describe('Header', () => {
  it('Header test', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    const titleElement = screen.getByRole('banner');
    expect(titleElement).toBeInTheDocument();
  });
});
