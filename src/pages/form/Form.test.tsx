import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import '@testing-library/jest-dom';
import { Form } from './Form';
import { Provider } from 'react-redux';
import store from '../../store/store';

describe('Home', () => {
  it('renders Form', () => {
    render(
      <Provider store={store}>
        <Form />
      </Provider>
    );
    expect(screen.getByText(/form/i)).toBeInTheDocument();
  });
});
