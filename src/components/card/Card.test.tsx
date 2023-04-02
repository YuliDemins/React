import { render, screen } from '@testing-library/react';
import { describe, it, vi } from 'vitest';
import '@testing-library/jest-dom';
import { Card } from './Card';

describe('Card', () => {
  it('renders title, author in cards', () => {
    const id = 'test';
    const name = 'Test name';
    const temperament = 'Test temperament';
    const onClick = vi.fn();

    render(
      <Card
        key={id}
        id={id}
        name={name}
        temperament={temperament}
        life_span={'test'}
        onClick={onClick}
      />
    );
    expect(screen.getByText(/test name/i)).toBeInTheDocument();
    expect(screen.getByText(/test temperament/i)).toBeInTheDocument();
  });
});
