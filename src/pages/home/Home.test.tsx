import { findAllByAltText, fireEvent, render, screen } from '@testing-library/react';
import { describe, test, vi } from 'vitest';
import '@testing-library/jest-dom';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { Home } from './Home';
import userEvent from '@testing-library/user-event';
import { CatsModal } from '../../components/catModal/CatsModal';

describe('Home', async () => {
  test('renders Home route', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByText(/cats/i)).toBeInTheDocument();
  });
  test('click', async () => {
    const setVisibleModal = vi.fn;
    const { findAllByRole } = render(<Home />);
    // const card = findAllByRole(''
    // (/card/i);
    // console.log(await card);
    // fireEvent.click(await card);
    // expect(render(<CatsModal id={'abby'} setVisibleModal={setVisibleModal} />));
  });
});

describe('api', () => {
  test('fetch', async () => {
    const { findByText } = render(<Home />);
    expect(await findByText(/abbysinian/i)).toBeInTheDocument();
  });
});
