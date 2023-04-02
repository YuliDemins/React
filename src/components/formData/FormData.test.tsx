import { render, screen } from '@testing-library/react';
import { describe, test, vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import { FormData } from './FormData';
import { Countries } from '../../types/types';

describe('FormData', () => {
  beforeAll(() => {
    const showCardsValues = vi.fn();
    const setShowModal = vi.fn();
    render(<FormData showCardsValues={showCardsValues} showModal={setShowModal} />);
  });
  test('check FormData', async () => {
    expect(screen.queryByText(/error/i)).not.toBeInTheDocument();

    const nameInput = screen.getByLabelText<HTMLInputElement>(/name/i);
    expect(nameInput).toBeInTheDocument();
    await userEvent.type(nameInput, 'test');
    expect(nameInput.value).toEqual('test');

    const countryInput = screen.getByLabelText<HTMLSelectElement>(/country/i);
    expect(countryInput).toBeInTheDocument();
    await userEvent.selectOptions(countryInput, Countries.France);
    expect(countryInput.value).toEqual(Countries.France);

    const birthdayInput = screen.getByLabelText<HTMLInputElement>(/birthday/i);
    expect(birthdayInput).toBeInTheDocument();

    const fileInput = screen.getByLabelText<HTMLInputElement>('', {
      selector: 'input[type="file"]',
    });
    expect(fileInput).toBeInTheDocument();

    test('remove values', async () => {
      await userEvent.type(nameInput, 'test');
      await userEvent.selectOptions(countryInput, Countries.France);
      userEvent.click(screen.getByRole('button', { name: 'Submit' }));

      expect(nameInput.value).toBe('');
      expect(countryInput.value).toBe('');
    });
  });
});
