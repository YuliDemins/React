import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import '@testing-library/jest-dom';
import { Search } from './Search';

describe('Home', () => {
  it('renders Search', () => {
    render(<Search />);
    const input = screen.getByRole('textbox');
    const button = screen.getByLabelText('search');
    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });
});
