import { fireEvent, render, screen } from '@testing-library/react';
import PhotosSlider from './PhotosSlider';

import useSlider from '../../../misc/useSlider';

jest.mock('../../../misc/useSlider');

jest.mock('../../PhotosViewer/PhotosViewer', () => () => (
  <div data-testid="photos-viewer" />
));

const useSliderMock = useSlider as jest.MockedFunction<typeof useSlider>;

const slide = jest.fn();

beforeEach(() => {
  useSliderMock.mockReturnValue({ index: 1, slide });
});

test('renders slider with all images inside and PhotosViewer hidden', () => {
  render(
    <PhotosSlider
      URLs={['img1', 'img2', 'img3']}
      width="200px"
      height="150px"
    />
  );

  expect(screen.getAllByRole('img')).toHaveLength(3);
  expect(screen.queryByTestId('photos-viewer')).not.toBeInTheDocument();
});

test('calls slide when clicking on buttons', () => {
  render(
    <PhotosSlider
      URLs={['img1', 'img2', 'img3']}
      width="200px"
      height="150px"
    />
  );

  fireEvent.click(screen.getByTestId('next-button'));
  expect(slide).toHaveBeenLastCalledWith(1);

  fireEvent.click(screen.getByTestId('prev-button'));
  expect(slide).toHaveBeenLastCalledWith(-1);
});

test('not calls slide when clicking on disabled buttons', () => {
  useSliderMock.mockReturnValue({ index: 0, slide });

  render(<PhotosSlider URLs={['img1']} width="200px" height="150px" />);

  fireEvent.click(screen.getByTestId('next-button'));
  fireEvent.click(screen.getByTestId('prev-button'));

  expect(slide).not.toHaveBeenCalled();
});

test('displays PhotosViewer when clicking on fullscreen button', () => {
  render(<PhotosSlider URLs={['img1']} width="200px" height="150px" />);

  fireEvent.click(screen.getByTestId('fs-button'));

  expect(screen.getByTestId('photos-viewer')).toBeInTheDocument();
});
