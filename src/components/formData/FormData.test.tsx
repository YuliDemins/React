import { fireEvent, render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { FormData } from './FormData';

describe('Home', () => {
  it('check FormData', () => {
    render(<FormData />);
    fireEvent.change(screen.getByLabelText(/name/i), { target: { value: 'John' } });
    fireEvent.change(screen.getByLabelText(/country/i), { target: { value: 'Spain' } });
    fireEvent.change(screen.getByLabelText(/birthday/i), { target: { value: '12.03.2022' } });
    userEvent.click(screen.getByText('Submit'));
  });
});
