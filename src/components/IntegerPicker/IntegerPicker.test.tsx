import { fireEvent, render, screen } from '@testing-library/react';
import IntegerPicker from './IntegerPicker';

test('displays the initial value', () => {
  render(<IntegerPicker min={0} max={10} initial={5} />);
  expect(screen.getByText('5')).toBeInTheDocument();
});

test('increases the value when the plus button is clicked', () => {
  render(<IntegerPicker min={0} max={10} initial={5} />);
  fireEvent.click(screen.getByTestId('plus'));
  expect(screen.getByText('6')).toBeInTheDocument();
});

test('decreases the value when the minus button is clicked', () => {
  render(<IntegerPicker min={0} max={10} initial={5} />);
  fireEvent.click(screen.getByTestId('minus'));
  expect(screen.getByText('4')).toBeInTheDocument();
});

test('does not decrease the value below the minimum', () => {
  render(<IntegerPicker min={5} max={10} initial={5} />);
  fireEvent.click(screen.getByTestId('minus'));
  expect(screen.getByText('5')).toBeInTheDocument();
});

test('does not increase the value above the maximum', () => {
  render(<IntegerPicker min={0} max={5} initial={5} />);
  fireEvent.click(screen.getByTestId('plus'));
  expect(screen.getByText('5')).toBeInTheDocument();
});

test('calls the onPick prop when the value is modified', () => {
  const onPick = jest.fn();
  render(<IntegerPicker min={0} max={10} initial={5} onPick={onPick} />);
  fireEvent.click(screen.getByTestId('plus'));
  expect(onPick).toHaveBeenCalledWith(6);
});
