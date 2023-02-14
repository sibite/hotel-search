import { fireEvent, render, screen } from '@testing-library/react';
import useHotelsQuery from '../../../queries/useHotelsQuery';
import HotelsList from './HotelsList';

jest.mock('../../../queries/useHotelsQuery');

const useHotelsQueryMock = useHotelsQuery as jest.MockedFunction<
  typeof useHotelsQuery
>;

jest.mock('../filtering/useFilteredHotelsIds', () => () => [
  'id1',
  'id2',
  'id3',
]);

jest.mock('./HotelCard/HotelCard', () => ({ id }: { id: string }) => (
  <span>{id}</span>
));

jest.mock('../../misc/LoadingSpinner', () => () => <span>spinner</span>);

test('renders list of rooms', () => {
  useHotelsQueryMock.mockReturnValueOnce({
    isInitialized: true,
    isLoading: false,
    isError: false,
    refetch: () => {},
    data: null,
  });

  render(<HotelsList />);

  expect(screen.getByText('id1')).toBeInTheDocument();
  expect(screen.getByText('id2')).toBeInTheDocument();
  expect(screen.getByText('id3')).toBeInTheDocument();
});

test('renders error message', () => {
  useHotelsQueryMock.mockReturnValueOnce({
    isInitialized: true,
    isLoading: false,
    isError: true,
    refetch: () => {},
    data: null,
  });

  render(<HotelsList />);

  expect(screen.getByText(/error/i)).toBeInTheDocument();
});

test('renders loading spinner', () => {
  useHotelsQueryMock.mockReturnValueOnce({
    isInitialized: true,
    isLoading: true,
    isError: false,
    refetch: () => {},
    data: null,
  });

  render(<HotelsList />);

  expect(screen.getByText('spinner')).toBeInTheDocument();
});

test('triggers refetch function when button clicked', () => {
  const refetch = jest.fn();

  useHotelsQueryMock.mockReturnValueOnce({
    isInitialized: true,
    isLoading: false,
    isError: true,
    refetch,
    data: null,
  });

  render(<HotelsList />);

  fireEvent.click(screen.getByText(/reload/i));

  expect(refetch).toHaveBeenCalled();
});
