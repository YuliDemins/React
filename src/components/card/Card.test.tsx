import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import { Card } from './Card';

describe('Card', () => {
  it('renders title, author in cards', () => {
    const id = 0;
    const src = 'Test url';
    const title = 'Test Title';
    const author = 'Test Author';
    const likes = 0;
    const show = 0;
    render(
      <Card key={id} id={id} src={src} title={title} author={author} likes={likes} show={show} />
    );
    expect(screen.getByText(/title/i)).toBeInTheDocument();
    expect(screen.getByText(/author/i)).toBeInTheDocument();
  });
});
