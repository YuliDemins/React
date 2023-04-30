import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import { Layout } from './Layout';
import React from 'react';

describe('Home', () => {
  it('renders main', () => {
    render(
      <MemoryRouter>
        <Layout />
      </MemoryRouter>
    );
    expect(screen.getByRole('main')).toBeInTheDocument();
  });
});
