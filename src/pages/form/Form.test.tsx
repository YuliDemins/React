import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import '@testing-library/jest-dom';
import { Form } from './Form';

describe('Home', () => {
  it('renders Form', () => {
    render(<Form />);
    expect(screen.getByText(/form/i)).toBeInTheDocument();
  });
});
