import { render } from '@testing-library/react';
import { describe, vi } from 'vitest';
import '@testing-library/jest-dom';
import { Card } from './Card';

describe('Card', () => {
  test('render name and temperament in card', () => {
    const id = 'test';
    const name = 'Test name';
    const temperament = 'Test temperament';
    const onClick = vi.fn();

    const { getByText } = render(
      <Card key={id} id={id} name={name} temperament={temperament} onClick={onClick} />
    );
    const nameElement = getByText(/test name/i);
    expect(nameElement).toBeInTheDocument();
    const temperamentElement = getByText(/test temperament/i);
    expect(temperamentElement).toBeInTheDocument();
  });
});
