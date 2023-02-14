import { render, screen } from '@testing-library/react';
import { ReactNode } from 'react';
import { act } from 'react-dom/test-utils';
import FiltersContextProvider, {
  FiltersContext,
  FiltersContextType,
} from './FiltersContext';

test('should render children correctly', () => {
  render(
    <FiltersContextProvider>
      <div>12345</div>
    </FiltersContextProvider>
  );

  expect(screen.getByText('12345')).toBeInTheDocument();
});

const wrapper = ({ children }: { children: ReactNode }) => (
  <FiltersContextProvider>{children}</FiltersContextProvider>
);

test('should provide correct context values', () => {
  let context: FiltersContextType;

  render(
    <FiltersContext.Consumer>
      {(value) => {
        context = value;
        return null;
      }}
    </FiltersContext.Consumer>
  );

  expect(context!).toEqual({
    minRating: 1,
    minAdults: 1,
    minChildren: 0,
    setRating: expect.any(Function),
    setAdults: expect.any(Function),
    setChildren: expect.any(Function),
  });
});

test('should update context values when set functions are called', () => {
  let context: FiltersContextType;

  render(
    <FiltersContext.Consumer>
      {(value) => {
        context = value;
        return null;
      }}
    </FiltersContext.Consumer>,
    { wrapper }
  );

  act(() => {
    context.setRating(7);
    context.setAdults(5);
    context.setChildren(3);
  });

  const { minRating, minAdults, minChildren } = context!;

  expect(minRating).toEqual(7);
  expect(minAdults).toEqual(5);
  expect(minChildren).toEqual(3);
});
