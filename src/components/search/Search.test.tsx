import { render, screen } from '@testing-library/react';
import { describe, test } from 'vitest';
import '@testing-library/jest-dom';
import { Search } from './Search';

describe('search', () => {
  test('renders Search', () => {
    render(<Search />);
    const input = screen.getByRole<HTMLInputElement>('textbox');
    const button = screen.getByLabelText<HTMLButtonElement>('search');
    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });
});
