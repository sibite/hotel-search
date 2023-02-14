import { render, screen } from '@testing-library/react';
import HotelInfo from './HotelInfo';

jest.mock(
  '../../../Rating/Star.tsx',
  () =>
    ({ filled }: { filled: boolean }) =>
      <div>{filled ? 'star-filled' : 'star-unfilled'}</div>
);

jest.mock('../../../../queries/useHotels', () => () => ({
  hotelsById: {
    '1': {
      name: 'Hotel 1',
      address1: 'Address 1',
      address2: 'Address 2',
      starRating: '4',
      images: [
        {
          url: 'image1.jpg',
        },
        {
          url: 'image2.jpg',
        },
      ],
    },
  },
}));

jest.mock(
  '../PhotosSlider/PhotosSlider',
  () =>
    ({ URLs }: { URLs: string[] }) =>
      <div data-testid="photos-slider">{URLs.join(', ')}</div>
);

test('renders photo slider', () => {
  render(<HotelInfo id="1" />);

  const photosSlider = screen.getByTestId('photos-slider');
  expect(photosSlider).toHaveTextContent('image1.jpg, image2.jpg');
});

test('renders hotel name', () => {
  render(<HotelInfo id="1" />);

  const hotelName = screen.getByText('Hotel 1');
  expect(hotelName).toBeInTheDocument();
});

test('renders address', () => {
  render(<HotelInfo id="1" />);

  const address = screen.getByText(/Address 1/);
  expect(address).toBeInTheDocument();

  const address2 = screen.getByText(/Address 2/);
  expect(address2).toBeInTheDocument();
});

test('renders rating', () => {
  render(<HotelInfo id="1" />);

  const star = screen.getAllByText('star-filled');
  expect(star).toHaveLength(4);
});
