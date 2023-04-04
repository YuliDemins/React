import { render, screen } from '@testing-library/react';
import { describe, it, Mock, vi } from 'vitest';
import '@testing-library/jest-dom';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { Home } from './Home';
import axios from 'axios';

// vi.mock('axios');

// const hits = [
//   {
//     id: 1,
//     title: 'React',
//   },
//   {
//     id: 2,
//     title: 'Vue',
//   },
// ];

describe('Home', () => {
  it('renders Home route', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByText(/home/i)).toBeInTheDocument();
  });
  // global.fetch = vi.fn(() =>
  //   Promise.resolve({
  //     json: () => Promise.resolve(...your_data),
  //   })
  // ) as Mock;
});
