import { render, screen } from '@testing-library/react';
import { describe, test } from 'vitest';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { Nav } from './Nav';

describe('Nav', () => {
  test('Nav test', () => {
    render(
      <MemoryRouter>
        <Nav />
      </MemoryRouter>
    );
    const homeLink = screen.getByText('Home');
    const aboutLink = screen.getByText(/about/i);
    userEvent.click(homeLink);
    expect(screen.getByText(/home/i)).toBeInTheDocument();
    userEvent.click(aboutLink);
    expect(screen.getByText(/about/i)).toBeInTheDocument();
  });
});
