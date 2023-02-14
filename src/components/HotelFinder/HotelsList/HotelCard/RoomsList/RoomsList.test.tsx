import { fireEvent, render, screen } from '@testing-library/react';
import useRoomsQuery from '../../../../../queries/useRoomsQuery';
import RoomsList from './RoomsList';

jest.mock('../../../../../queries/useRoomsQuery');

const useRoomsQueryMock = useRoomsQuery as jest.MockedFunction<
  typeof useRoomsQuery
>;

jest.mock('../../../filtering/useFilteredRoomsIds', () => () => [
  'id1',
  'id2',
  'id3',
]);

jest.mock('./Room', () => ({ id }: { id: string }) => <span>{id}</span>);

jest.mock('../../../../misc/LoadingSpinner', () => () => <span>spinner</span>);

test('renders list of rooms', () => {
  useRoomsQueryMock.mockReturnValueOnce({
    isInitialized: true,
    isLoading: false,
    isError: false,
    refetch: () => {},
    data: null,
  });

  render(<RoomsList hotelId="test" />);

  expect(screen.getByText('id1')).toBeInTheDocument();
  expect(screen.getByText('id2')).toBeInTheDocument();
  expect(screen.getByText('id3')).toBeInTheDocument();
});

test('renders error message', () => {
  useRoomsQueryMock.mockReturnValueOnce({
    isInitialized: true,
    isLoading: false,
    isError: true,
    refetch: () => {},
    data: null,
  });

  render(<RoomsList hotelId="test" />);

  expect(screen.getByText(/error/i)).toBeInTheDocument();
});

test('renders loading spinner', () => {
  useRoomsQueryMock.mockReturnValueOnce({
    isInitialized: true,
    isLoading: true,
    isError: false,
    refetch: () => {},
    data: null,
  });

  render(<RoomsList hotelId="test" />);

  expect(screen.getByText('spinner')).toBeInTheDocument();
});

test('triggers refetch function when button clicked', () => {
  const refetch = jest.fn();

  useRoomsQueryMock.mockReturnValueOnce({
    isInitialized: true,
    isLoading: false,
    isError: true,
    refetch,
    data: null,
  });

  render(<RoomsList hotelId="test" />);

  fireEvent.click(screen.getByText(/reload/i));

  expect(refetch).toHaveBeenCalled();
});
