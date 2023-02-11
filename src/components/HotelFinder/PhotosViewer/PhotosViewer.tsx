import {
  ChevronLeftIcon,
  ChevronRightIcon,
  XMarkIcon,
} from '@heroicons/react/24/solid';
import { MouseEvent } from 'react';
import { createPortal } from 'react-dom';
import IconButton from '../../IconButton/IconButton';
import Icon from '../../misc/Icon';
import useKeyPress from '../../misc/useKeyPress';
import useSlider from '../../misc/useSlider';
import style from './PhotosViewer.module.scss';

interface Props {
  URLs: string[];
  onClose: Function;
  initialIndex?: number;
}

const PhotosViewer: React.FC<Props> = ({ URLs, onClose, initialIndex = 0 }) => {
  const { index, slide } = useSlider(URLs.length, initialIndex);

  const parentEl = document.getElementById('portal') as HTMLDivElement;

  const closeHandler = (event: MouseEvent<HTMLDivElement>) => {
    if ((event.target as HTMLDivElement).id !== 'background') return;
    onClose();
  };

  useKeyPress('Escape', onClose);
  useKeyPress('ArrowLeft', slide(-1));
  useKeyPress('ArrowRight', slide(1));

  return createPortal(
    <div
      onClick={closeHandler}
      className={style.overlay}
      id="background"
      role="none"
    >
      <IconButton
        onClick={slide(-1)}
        className={style.button}
        disabled={index <= 0}
      >
        <Icon icon={ChevronLeftIcon} size={36} color="white" />
      </IconButton>
      <div className={style['image-wrapper']}>
        <img alt="Hotel" key={URLs[index]} src={URLs[index]} />
      </div>
      <IconButton
        onClick={slide(1)}
        className={style.button}
        disabled={index >= URLs.length - 1}
      >
        <Icon icon={ChevronRightIcon} size={36} color="white" />
      </IconButton>
      <IconButton
        onClick={() => onClose()}
        className={`${style.button} ${style['close-button']}`}
      >
        <Icon icon={XMarkIcon} size={36} color="white" />
      </IconButton>
    </div>,
    parentEl
  );
};
export default PhotosViewer;
