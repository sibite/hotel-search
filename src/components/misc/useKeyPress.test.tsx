import { render, fireEvent, screen } from '@testing-library/react';
import useKeyPress from './useKeyPress';

test('calls the callback when the specified key is pressed', () => {
  const mockCallback = jest.fn();

  const TestComponent = () => {
    useKeyPress('Escape', mockCallback);
    return <div>Test component</div>;
  };

  render(<TestComponent />);
  fireEvent.keyDown(document, { code: 'Escape' });
  expect(mockCallback).toHaveBeenCalled();
});

test('does not call the callback when a different key is pressed', () => {
  const mockCallback = jest.fn();

  const TestComponent = () => {
    useKeyPress('Escape', mockCallback);
    return <div>Test component</div>;
  };

  render(<TestComponent />);
  fireEvent.keyDown(document, { code: 'Space' });
  expect(mockCallback).not.toHaveBeenCalled();
});

test('calls the callback when the specified key is pressed inside an input', () => {
  const mockCallback = jest.fn();

  const TestComponent = () => {
    useKeyPress('Escape', mockCallback, true);
    return (
      <div>
        <input />
      </div>
    );
  };

  render(<TestComponent />);
  const input = screen.getByRole('textbox');
  fireEvent.keyDown(input, { code: 'Escape' });
  expect(mockCallback).toHaveBeenCalled();
});

test('does not call the callback when the specified key is pressed inside an input by default', () => {
  const mockCallback = jest.fn();

  const TestComponent = () => {
    useKeyPress('Escape', mockCallback);
    return (
      <div>
        <input />
      </div>
    );
  };

  render(<TestComponent />);
  const input = screen.getByRole('textbox');
  fireEvent.keyDown(input, { code: 'Escape' });
  expect(mockCallback).not.toHaveBeenCalled();
});
