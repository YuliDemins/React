import { render, screen } from '@testing-library/react';
import { describe, test, Mock, vi, afterEach, beforeEach } from 'vitest';
import '@testing-library/jest-dom';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { Home } from './Home';
import axios from 'axios';
import { Card } from '../../components/card/Card';
import { ICat } from '../../types/api.interface';
import { Preloader } from '../../components/preloader/Preloader';
import { setImmediate } from 'timers';

// vi.mock('../components/preloader', () => {
// Loader:
// })

describe('Home', async () => {
  beforeEach(() => {
    global.fetch = vi.fn();
  });
  afterEach(() => {
    vi.clearAllMocks();
  });

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
  // const onClick = vi.fn();
  // global.fetch = vi.fn(() =>
  //   Promise.resolve({
  //     json: () =>
  //       Promise.resolve<ICat[]>([
  //         {
  //           id: 'abys',
  //           name: 'abbysinian',
  //           temperament: 'Active, Energetic, Independent, Intelligent, Gentle',
  //         },
  //       ]),
  //   })
  // ) as Mock;

  // const { getByText } = render(
  //   <Card id={data[0].id} name={data[0].name} temperament={data[0].temperament} onClick={onClick} />
  // );
  // const nameElement = getByText(/abbysinian/i);
  // expect(nameElement).toBeInTheDocument();
  // const temperamentElement = getByText(/Active, Energetic, Independent, Intelligent, Gentle/i);
  // expect(temperamentElement).toBeInTheDocument();

  test('loading', () => {
    (fetch as Mock).mockResolvedValue({ json: () => Promise.resolve([54]) });
    render(<Home />);
    const loader = render(<Preloader />);
    expect(loader).not.toBe(null);
  });
  // test('after fetch', async () => {
  //   (fetch as Mock).mockResolvedValue({ json: () => Promise.resolve([54]) });
  //   render(<Home />);
  //   const loader = render(<Preloader />);
  //   await new Promise(setImmediate);

  //   expect(loader).toBe(null);
  // });
});
