import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { describe } from 'vitest';
import store from '../../store/store';
import { Card } from './Card';

describe('Card', () => {
  test('render name and temperament in card', async () => {
    const { findByText } = render(
      <Provider store={store}>
        <Card
          id={'abys'}
          name={'abbysinian'}
          temperament={'Active, Energetic, Independent, Intelligent, Gentle'}
        />
      </Provider>
    );

    expect(await findByText(/abbysinian/i)).toBeInTheDocument();
    expect(
      await findByText(/Active, Energetic, Independent, Intelligent, Gentle/i)
    ).toBeInTheDocument();
  });
});
