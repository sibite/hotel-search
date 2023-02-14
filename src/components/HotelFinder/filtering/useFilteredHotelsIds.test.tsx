/* eslint-disable react/jsx-no-constructed-context-values */
import { render, screen } from '@testing-library/react';
import { defaultFiltersContextValue, FiltersContext } from './FiltersContext';
import useFilteredHotelsIds from './useFilteredHotelsIds';

jest.mock('../../../queries/useHotels', () => () => ({
  hotelsById: {
    id1: { starRating: 1 },
    id2: { starRating: 2 },
    id3: { starRating: 3 },
    id4: { starRating: 4 },
    id5: { starRating: 5 },
  },
  hotelsIds: ['id1', 'id2', 'id3', 'id4', 'id5'],
}));

const TestComponent = () => <div>{useFilteredHotelsIds().join(',')}</div>;

test('filters hotels by rating correctly', () => {
  render(
    <FiltersContext.Provider
      value={{
        ...defaultFiltersContextValue,
        minRating: 3,
      }}
    >
      <TestComponent />
    </FiltersContext.Provider>
  );

  expect(screen.getByText('id3,id4,id5')).toBeInTheDocument();
});
