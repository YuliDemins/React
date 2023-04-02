import { render, screen } from '@testing-library/react';
import { describe, test } from 'vitest';
import { FormValue } from './FormValue';

describe('Home', () => {
  test('render FormValue', () => {
    const id = '12';
    const image = 'test.png';
    const name = 'Test';
    const country = 'Spain';
    const birthday = '12.03.2022';
    const gender = 'male';
    const agree = true;

    render(
      <FormValue
        key={1}
        data={{
          id,
          image,
          name,
          country,
          birthday,
          gender,
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
