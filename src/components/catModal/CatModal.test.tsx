import { render, screen } from '@testing-library/react';
import { describe, vi } from 'vitest';
import '@testing-library/jest-dom';
import { CatsModal } from './CatsModal';
import userEvent from '@testing-library/user-event';

describe('CatModal', () => {
  test('render modal', async () => {
    const setVisibleModal = vi.fn;
    render(<CatsModal id={'testId'} setVisibleModal={setVisibleModal} />);
    // expect(await screen.findByText(/average/i)).toBeInTheDocument();
    const button = screen.queryByRole('button');
    // userEvent.click(button)
  });
});
