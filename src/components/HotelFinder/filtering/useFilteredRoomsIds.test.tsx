/* eslint-disable react/jsx-no-constructed-context-values */
import { render, screen } from '@testing-library/react';
import { defaultFiltersContextValue, FiltersContext } from './FiltersContext';
import useFilteredRoomsIds from './useFilteredRoomsIds';

jest.mock('../../../queries/useRooms', () => () => ({
  roomsById: {
    id1: {
      occupancy: {
        maxAdults: 1,
        maxChildren: 1,
      },
    },
    id2: {
      occupancy: {
        maxAdults: 5,
        maxChildren: 1,
      },
    },
    id3: {
      occupancy: {
        maxAdults: 1,
        maxChildren: 5,
      },
    },
    id4: {
      occupancy: {
        maxAdults: 3,
        maxChildren: 3,
      },
    },
  },
  roomsIds: ['id1', 'id2', 'id3', 'id4'],
}));

const TestComponent = () => (
  <div>{useFilteredRoomsIds('id1').join(',') || 'no-rooms'}</div>
);

describe('filters rooms by occupancy correctly', () => {
  test('adults: 0, children: 0', () => {
    render(
      <FiltersContext.Provider
        value={{
          ...defaultFiltersContextValue,
          minAdults: 0,
          minChildren: 0,
        }}
      >
        <TestComponent />
      </FiltersContext.Provider>
    );

    expect(screen.getByText('id1,id2,id3,id4')).toBeInTheDocument();
  });

  test('adults: 1, children: 4', () => {
    render(
      <FiltersContext.Provider
        value={{
          ...defaultFiltersContextValue,
          minAdults: 1,
          minChildren: 4,
        }}
      >
        <TestComponent />
      </FiltersContext.Provider>
    );

    expect(screen.getByText('id3')).toBeInTheDocument();
  });

  test('adults: 4, children: 1', () => {
    render(
      <FiltersContext.Provider
        value={{
          ...defaultFiltersContextValue,
          minAdults: 4,
          minChildren: 1,
        }}
      >
        <TestComponent />
      </FiltersContext.Provider>
    );

    expect(screen.getByText('id2')).toBeInTheDocument();
  });

  test('adults: 4, children: 4', () => {
    render(
      <FiltersContext.Provider
        value={{
          ...defaultFiltersContextValue,
          minAdults: 4,
          minChildren: 4,
        }}
      >
        <TestComponent />
      </FiltersContext.Provider>
    );

    expect(screen.getByText('no-rooms')).toBeInTheDocument();
  });
});
