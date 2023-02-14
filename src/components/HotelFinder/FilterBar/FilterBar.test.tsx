/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/control-has-associated-label */

import { fireEvent, render, screen } from '@testing-library/react';
import { FiltersContext } from '../filtering/FiltersContext';
import FilterBar from './FilterBar';

jest.mock(
  '../../IntegerPicker/IntegerPicker',
  () =>
    ({ min, max, initial, onPick }: any) =>
      (
        <div data-testid="integer-picker">
          {min}-{max}-{initial}
          <button
            data-testid="integer-picker-button"
            onClick={() => onPick(50)}
          />
        </div>
      )
);

jest.mock('../../Rating/RatingPicker', () => ({ max, onPick }: any) => (
  <div data-testid="rating-picker">
    {max}
    <button data-testid="rating-picker-button" onClick={() => onPick(20)} />
  </div>
));

const contextValue = {
  minAdults: 0,
  minChildren: 0,
  minRating: 1,
  setAdults: jest.fn(),
  setChildren: jest.fn(),
  setRating: jest.fn(),
};

test('passes props down to pickers', () => {
  render(
    <FiltersContext.Provider value={contextValue}>
      <FilterBar />
    </FiltersContext.Provider>
  );

  expect(screen.getAllByTestId('integer-picker')[0]).toHaveTextContent(
    /\d-\d-\d/
  );
  expect(screen.getAllByTestId('integer-picker')[1]).toHaveTextContent(
    /\d-\d-\d/
  );
  expect(screen.getByTestId('rating-picker')).toHaveTextContent(/\d+/);
});

test('passes picked values to context', () => {
  render(
    <FiltersContext.Provider value={contextValue}>
      <FilterBar />
    </FiltersContext.Provider>
  );

  const integerPickerButtons = screen.getAllByTestId('integer-picker-button');
  fireEvent.click(integerPickerButtons[0]);
  fireEvent.click(integerPickerButtons[1]);

  const ratingPickerButton = screen.getByTestId('rating-picker-button');
  fireEvent.click(ratingPickerButton);

  expect(contextValue.setAdults).toHaveBeenCalledWith(50);
  expect(contextValue.setChildren).toHaveBeenCalledWith(50);
  expect(contextValue.setRating).toHaveBeenCalledWith(20);
});
