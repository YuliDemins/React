import { fireEvent, render, screen } from '@testing-library/react';
import { describe, test, vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import { FormData } from './FormData';
import { Countries } from '../../types/types';
import { InputAgree } from './InputAgree';

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
  });
  // test('remove values', async () => {
  //   const showCardsValues = vi.fn();
  //   const setShowModal = vi.fn();
  //   render(<FormData showCardsValues={showCardsValues} showModal={setShowModal} />);
  //   const nameInput = screen.getByLabelText<HTMLInputElement>(/name/i);
  //   await userEvent.type(nameInput, 'test');

  //   const countryInput = screen.getByLabelText<HTMLSelectElement>(/country/i);
  //   await userEvent.selectOptions(countryInput, Countries.France);

  //   const button = screen.getByRole('button', { name: 'Submit' });
  //   await userEvent.click(button);
  //   console.debug;
  //   expect(nameInput.value).toEqual('');
  //   expect(countryInput.value).toBe('');
  // });
  // test('checkbox', async () => {
  //   const { container } = render(<InputAgree />);
  //   console.debug
  //   const checkbox = container.firstChild;

  //   expect(checkbox).not.toBeChecked();
  //   await userEvent.click(checkbox);
  //   expect(checkbox).toBeChecked();
  // });
});
