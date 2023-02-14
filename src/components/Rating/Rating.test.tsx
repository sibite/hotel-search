import { render, screen } from '@testing-library/react';
import Rating from './Rating';

jest.mock('./Star.tsx', () => ({ filled }: { filled: boolean }) => (
  <div>{filled ? 'star-filled' : 'star-unfilled'}</div>
));

test('it renders the correct number of stars', () => {
  render(<Rating value={3} max={8} />);
  const stars = screen.getAllByText(/star/);
  expect(stars).toHaveLength(8);
});

test('it fills the correct number of stars', () => {
  render(<Rating value={3} max={5} />);
  const filledStars = screen.getAllByText('star-filled');
  expect(filledStars).toHaveLength(3);
});
