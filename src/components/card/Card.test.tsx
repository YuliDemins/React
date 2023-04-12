import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { describe, vi } from 'vitest';
import store from '../../store/store';
import { Card } from './Card';

describe('Card', () => {
  test('render name and temperament in card', async () => {
    const onClick = vi.fn();
    const { findByText } = render(
      <Provider store={store}>
        <Card
          key={'abys'}
          id={'abys'}
          name={'abbysinian'}
          temperament={'Active, Energetic, Independent, Intelligent, Gentle'}
          onClick={onClick}
        />
      </Provider>
    );

    expect(await findByText(/abbysinian/i)).toBeInTheDocument();
    expect(
      await findByText(/Active, Energetic, Independent, Intelligent, Gentle/i)
    ).toBeInTheDocument();
  });
});
