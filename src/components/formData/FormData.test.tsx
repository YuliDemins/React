import { render, screen } from '@testing-library/react';
import { describe, test } from 'vitest';
import userEvent from '@testing-library/user-event';
import { FormData } from './FormData';
import { Countries } from '../../types/types';
import { Provider } from 'react-redux';
import store from '../../store/store';

describe('FormData', () => {
  beforeAll(() => {
    render(
      <Provider store={store}>
        <FormData />
      </Provider>
    );
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
});
