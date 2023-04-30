import { render, screen } from '@testing-library/react';
import React from 'react';
import { describe, test } from 'vitest';
import { Countries } from '../../types/types';
import { FormValue } from './FormValue';

describe('Home', () => {
  test('render FormValue', () => {
    const value = {
      id: '12',
      image: 'test.png',
      name: 'Test',
      country: Countries.Spain,
      birthday: '12.03.2022',
      gender: 'male',
      agree: true,
    };

    render(<FormValue {...value} />);
    expect(screen.getByText(/name/i)).toBeInTheDocument();
    expect(screen.getByText(/country/i)).toBeInTheDocument();
    expect(screen.getByText(/birthday/i)).toBeInTheDocument();
    expect(screen.getByText(/gender/i)).toBeInTheDocument();
    expect(screen.getByText(/agree/i)).toBeInTheDocument();
  });
});
