import { render } from '@testing-library/react';
import { describe } from 'vitest';
import { Card } from './Card';

describe('Card', () => {
  test('render name and temperament in card', async () => {
    const { findByText } = render(
      <Card
        key={'abys'}
        id={'abys'}
        name={'abbysinian'}
        reference_image_id={'0SxW2SQ_S'}
        temperament={'Active, Energetic, Independent, Intelligent, Gentle'}
      />
    );

    expect(await findByText(/abbysinian/i)).toBeInTheDocument();
    expect(
      await findByText(/Active, Energetic, Independent, Intelligent, Gentle/i)
    ).toBeInTheDocument();
  });
});
