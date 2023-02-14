import { fireEvent, render, screen } from '@testing-library/react';
import IntegerPicker from './IntegerPicker';

describe('IntegerPicker', () => {
  test('should display the initial value', () => {
    render(<IntegerPicker min={0} max={10} initial={5} />);
    expect(screen.getByText('5')).toBeInTheDocument();
  });

  test('should increase the value when the plus button is clicked', () => {
    render(<IntegerPicker min={0} max={10} initial={5} />);
    fireEvent.click(screen.getByTestId('plus'));
    expect(screen.getByText('6')).toBeInTheDocument();
  });

  test('should decrease the value when the minus button is clicked', () => {
    render(<IntegerPicker min={0} max={10} initial={5} />);
    fireEvent.click(screen.getByTestId('minus'));
    expect(screen.getByText('4')).toBeInTheDocument();
  });

  test('should not decrease the value below the minimum', () => {
    render(<IntegerPicker min={5} max={10} initial={5} />);
    fireEvent.click(screen.getByTestId('minus'));
    expect(screen.getByText('5')).toBeInTheDocument();
  });

  test('should not increase the value above the maximum', () => {
    render(<IntegerPicker min={0} max={5} initial={5} />);
    fireEvent.click(screen.getByTestId('plus'));
    expect(screen.getByText('5')).toBeInTheDocument();
  });

  test('should call the onPick prop when the value is modified', () => {
    const onPick = jest.fn();
    render(<IntegerPicker min={0} max={10} initial={5} onPick={onPick} />);
    fireEvent.click(screen.getByTestId('plus'));
    expect(onPick).toHaveBeenCalledWith(6);
  });
});
