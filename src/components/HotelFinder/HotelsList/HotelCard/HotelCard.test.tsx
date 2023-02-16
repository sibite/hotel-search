import { render, screen } from '@testing-library/react';
import HotelCard from './HotelCard';

jest.mock('./HotelInfo', () => () => <div data-testid="hotel-info" />);
jest.mock('./RoomsList/RoomsList', () => () => (
  <div data-testid="rooms-list" />
));

test('renders the HotelInfo component', () => {
  render(<HotelCard id="hotel-1" />);

  expect(screen.getByTestId('hotel-info')).toBeInTheDocument();
});

test('renders the RoomsList component', () => {
  render(<HotelCard id="hotel-1" />);

  expect(screen.getByTestId('rooms-list')).toBeInTheDocument();
});
