import { render } from '@testing-library/react';
import { describe, test } from 'vitest';
import '@testing-library/jest-dom';
import { Preloader } from './Preloader';
import React from 'react';

describe('preloader test', () => {
  test('render Preloader', () => {
    const loader = render(<Preloader />);
    expect(loader).not.toBe(null);
  });
});
