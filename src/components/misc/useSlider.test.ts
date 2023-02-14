import { renderHook, act } from '@testing-library/react';
import useSlider from './useSlider';

test('should initialize index correctly', () => {
  const { result } = renderHook(() => useSlider(5, 2));
  expect(result.current.index).toBe(2);
});

test('should be able to slide within the range', () => {
  const { result } = renderHook(() => useSlider(5, 2));
  act(() => result.current.slide(1));
  expect(result.current.index).toBe(3);

  act(() => result.current.slide(-2));
  expect(result.current.index).toBe(1);
});

test('should not be able to slide out of the range', () => {
  const { result } = renderHook(() => useSlider(5, 2));
  act(() => result.current.slide(-3));
  expect(result.current.index).toBe(0);

  act(() => result.current.slide(5));
  expect(result.current.index).toBe(4);
});
