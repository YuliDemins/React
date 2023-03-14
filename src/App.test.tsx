import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { MemoryRouter, Routes, Route } from 'react-router-dom';

import { Header } from './components/header/Header';
import { Cards } from './components/Cards/Cards';
import { Card } from './components/card/Card';
import { Home } from './pages/home/Home';
import { About } from './pages/about/About';
import { Search } from './components/search/Search';
import { NotFound } from './pages/notFound/NotFound';

describe('App', () => {
  it('renders cards', () => {
    render(<Cards />);
    expect(screen.getByTestId(/сards/i)).toBeInTheDocument();
  });
  it('renders title, author in cards', () => {
    const id = 0;
    const src = 'Test url';
    const title = 'Test Title';
    const author = 'Test Author';
    const likes = 0;
    const show = 0;
    render(
      <Card key={id} id={id} src={src} title={title} author={author} likes={likes} show={show} />
    );
    expect(screen.getByText(/title/i)).toBeInTheDocument();
    expect(screen.getByText(/author/i)).toBeInTheDocument();
  });
  it('Header test', () => {
    render(
      <MemoryRouter>
        <Header title={''} />
      </MemoryRouter>
    );
    const homeLink = screen.getByText(/home/i);
    const aboutLink = screen.getByText(/about/i);
    userEvent.click(homeLink);
    expect(screen.getByText(/home/i)).toBeInTheDocument();
    userEvent.click(aboutLink);
    expect(screen.getByText(/about/i)).toBeInTheDocument();
  });
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

  it('renders Search', () => {
    render(<Search />);
    const input = screen.getByRole('textbox');
    const button = screen.getByLabelText('search');
    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });
});
