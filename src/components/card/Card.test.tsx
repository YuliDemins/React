import { render } from '@testing-library/react';
import { describe, vi } from 'vitest';
import { Card } from './Card';

describe('Card', () => {
  test('render name and temperament in card', async () => {
    const onClick = vi.fn();
    const { findByText } = render(
      <Card
        key={'abys'}
        id={'abys'}
        name={'abbysinian'}
        temperament={'Active, Energetic, Independent, Intelligent, Gentle'}
        onClick={onClick}
      />
    );

    expect(await findByText(/abbysinian/i)).toBeInTheDocument();
    expect(
      await findByText(/Active, Energetic, Independent, Intelligent, Gentle/i)
    ).toBeInTheDocument();
  });
});
