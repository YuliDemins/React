import { render, screen } from '@testing-library/react';
import { describe } from 'vitest';
import '@testing-library/jest-dom';
import { CatsModal } from './CatsModal';
import { Provider } from 'react-redux';
import store from '../../store/store';

describe('CatModal', () => {
  test('render modal', async () => {
    render(
      <Provider store={store}>
        <CatsModal />
      </Provider>
    );
    expect(await screen.findByText(/average/i)).toBeInTheDocument();
    expect(screen.queryByRole('button')).toBeInTheDocument();
  });
});
