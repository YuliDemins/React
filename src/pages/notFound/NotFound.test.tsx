import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import '@testing-library/jest-dom';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { NotFound } from './NotFound';
import React from 'react';

describe('Home', () => {
  it('renders Error route', () => {
    render(
      <MemoryRouter initialEntries={['/yyuv']}>
        <Routes>
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByText(/404/i)).toBeInTheDocument();
  });
});
