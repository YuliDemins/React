import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { Header } from './Header';
import { Title } from '../title/Title';

describe('Header', () => {
  it('Header test', () => {
    render(
      <MemoryRouter>
        <Header headerTitle={<Title title="" />} />
      </MemoryRouter>
    );
    const homeLink = screen.getByText(/home/i);
    const aboutLink = screen.getByText(/about/i);
    userEvent.click(homeLink);
    expect(screen.getByText(/home/i)).toBeInTheDocument();
    userEvent.click(aboutLink);
    expect(screen.getByText(/about/i)).toBeInTheDocument();
  });
});
