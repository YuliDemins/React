import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import '@testing-library/jest-dom';
import { Modal } from './Modal';
import React from 'react';

describe('Home', () => {
  it('renders modal', () => {
    render(<Modal />);
    expect(screen.getByText(/данные отправлены/i)).toBeInTheDocument();
  });
});
