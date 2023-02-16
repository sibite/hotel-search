import { render, fireEvent, screen } from '@testing-library/react';
import RatingPicker from './RatingPicker';

jest.mock('./Star.tsx', () => ({ filled }: { filled: boolean }) => (
  <div style={{ height: '10px', width: '10px' }}>
    {filled ? 'star-filled' : 'star-unfilled'}
  </div>
));

test('changes the rating on arrow key down', () => {
  render(<RatingPicker max={5} />);
  const picker = screen.getByRole('slider');

  fireEvent.keyDown(picker, { code: 'ArrowRight' });
  expect(picker).toHaveAttribute('aria-valuenow', '2');

  fireEvent.keyDown(picker, { code: 'ArrowLeft' });
  expect(picker).toHaveAttribute('aria-valuenow', '1');
});

test('triggers the onPick callback on mouse up', () => {
  const onPick = jest.fn();
  render(<RatingPicker max={5} onPick={onPick} />);
  const picker = screen.getByRole('slider');

  fireEvent.pointerUp(picker);
  expect(onPick).toHaveBeenCalled();
});
