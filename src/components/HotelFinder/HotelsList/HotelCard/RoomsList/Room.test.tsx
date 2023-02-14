import { render, screen } from '@testing-library/react';
import Room from './Room';

jest.mock('../../../../../queries/useRooms', () => (hotelId: string) => ({
  roomsById: {
    room1: {
      id: 'DTFF',
      name: 'Deluxe Twin',
      shortDescription: 'Short description',
      longDescription: 'A spacious and luxurious room with a beautiful view.',
      occupancy: {
        maxAdults: 2,
        maxChildren: 1,
        maxOverall: 3,
      },
      disabledAccess: false,
      bedConfiguration: 'Twin',
      images: [],
      facilities: [],
    },
  },
}));

test('renders the name of the room', () => {
  render(<Room hotelId="hotel1" id="room1" />);
  expect(screen.getByText('Deluxe Twin')).toBeInTheDocument();
});

test('renders the maximum occupancy information', () => {
  render(<Room hotelId="hotel1" id="room1" />);
  expect(screen.getByText(/Adults:\s+2/)).toBeInTheDocument();
  expect(screen.getByText(/Children:\s+1/)).toBeInTheDocument();
});

test('renders the long description of the room', () => {
  render(<Room hotelId="hotel1" id="room1" />);
  expect(
    screen.getByText('A spacious and luxurious room with a beautiful view.')
  ).toBeInTheDocument();
});
