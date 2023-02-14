import { fireEvent, render, screen } from '@testing-library/react';
import { ReactNode } from 'react';
import PhotosViewer from './PhotosViewer';

jest.mock('react-dom', () => {
  const originalModule = jest.requireActual('react-dom');

  return {
    __esModule: true,
    ...originalModule,
    createPortal: (node: ReactNode) => node,
  };
});

const urls = ['url1', 'url2', 'url3'];

test('renders the images correctly', () => {
  render(<PhotosViewer URLs={urls} initialIndex={2} onClose={jest.fn()} />);

  expect(screen.getByRole('img')).toHaveAttribute('src', urls[2]);
});

test('calls the onClose function when the close button is clicked', () => {
  const onClose = jest.fn();
  render(<PhotosViewer URLs={urls} onClose={onClose} />);

  fireEvent.click(screen.getByTestId('close-button'));
  expect(onClose).toHaveBeenCalled();
});

test('changes image when the left arrow button is clicked', () => {
  render(<PhotosViewer URLs={urls} initialIndex={1} onClose={jest.fn()} />);

  fireEvent.click(screen.getByTestId('prev-button'));
  expect(screen.getByRole('img')).toHaveAttribute('src', urls[0]);
});

test('changes image when the right arrow button is clicked', () => {
  render(<PhotosViewer URLs={urls} initialIndex={1} onClose={jest.fn()} />);

  fireEvent.click(screen.getByTestId('next-button'));
  expect(screen.getByRole('img')).toHaveAttribute('src', urls[2]);
});

test('calls the onClose function when the escape key is pressed', () => {
  const onClose = jest.fn();
  render(<PhotosViewer URLs={urls} onClose={onClose} />);

  fireEvent.keyDown(document, { code: 'Escape' });
  expect(onClose).toHaveBeenCalled();
});

test('changes image when the left arrow key is pressed', () => {
  render(<PhotosViewer URLs={urls} initialIndex={1} onClose={jest.fn()} />);

  fireEvent.keyDown(document, { code: 'ArrowLeft' });
  expect(screen.getByRole('img')).toHaveAttribute('src', urls[0]);
});

test('changes image when the right arrow key is pressed', () => {
  render(<PhotosViewer URLs={urls} initialIndex={1} onClose={jest.fn()} />);

  fireEvent.keyDown(document, { code: 'ArrowRight' });
  expect(screen.getByRole('img')).toHaveAttribute('src', urls[2]);
});
