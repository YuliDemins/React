import { render, screen } from '@testing-library/react';
import { describe, test } from 'vitest';
import '@testing-library/jest-dom';
import { Search } from './Search';
import { Provider } from 'react-redux';
import store from '../../store/store';

describe('search', () => {
  test('renders Search', () => {
    render(
      <Provider store={store}>
        <Search />
      </Provider>
    );
    const input = screen.getByRole<HTMLInputElement>('textbox');
    const button = screen.getByLabelText<HTMLButtonElement>('search');
    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });
});
