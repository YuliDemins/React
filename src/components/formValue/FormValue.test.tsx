import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import '@testing-library/jest-dom';
import { FormValue } from './FormValue';

describe('Home', () => {
  it('render FormValue', () => {
    const id = 12;
    const imageValue = 'test.png';
    const nameValue = 'Test';
    const countryValue = 'Spain';
    const birthdayValue = '12.03.2022';
    const genderValue = 'male';
    const agree = true;

    render(
      <FormValue
        key={1}
        values={{
          id,
          imageValue,
          nameValue,
          countryValue,
          birthdayValue,
          genderValue,
          agree,
        }}
      />
    );
    expect(screen.getByText(/name/i)).toBeInTheDocument();
    expect(screen.getByText(/country/i)).toBeInTheDocument();
    expect(screen.getByText(/birthday/i)).toBeInTheDocument();
    expect(screen.getByText(/gender/i)).toBeInTheDocument();
    expect(screen.getByText(/agree/i)).toBeInTheDocument();
  });
});
