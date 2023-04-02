import { render, screen } from '@testing-library/react';
import { describe, test, vi } from 'vitest';
import '@testing-library/jest-dom';
import { Search } from './Search';

describe('search', () => {
  const setQuery = vi.fn();
  test('renders Search', () => {
    render(<Search setQuery={setQuery} />);
    const input = screen.getByRole<HTMLInputElement>('textbox');
    const button = screen.getByLabelText<HTMLButtonElement>('search');
    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });
});
