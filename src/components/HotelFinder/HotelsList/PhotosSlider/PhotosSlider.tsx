import {
  ArrowsPointingOutIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from '@heroicons/react/24/solid';
import { CSSProperties, useState } from 'react';
import IconButton from '../../../IconButton/IconButton';
import Icon from '../../../misc/Icon';
import useSlider from '../../../misc/useSlider';
import PhotosViewer from '../../PhotosViewer/PhotosViewer';
import style from './PhotosSlider.module.scss';

interface Props {
  URLs: string[];
  width: number;
  height: number;
}

const PhotosSlider: React.FC<Props> = ({ URLs, width, height }) => {
  const { index, slide } = useSlider();
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

  const openFullscreen = () => {
    setIsFullscreen(true);
  };

  const styles = {
    '--ps-width': `${width}px`,
    '--ps-height': `${height}px`,
  } as CSSProperties;

  return (
    <div className={style.container} style={styles}>
      {isFullscreen && (
        <PhotosViewer
          URLs={URLs}
          initialIndex={index}
          onClose={() => setIsFullscreen(false)}
        />
      )}
      <div
        className={style['slider-wrapper']}
        onClick={openFullscreen}
        role="none"
      >
        <div className={style.slider} style={{ left: `-${index * width}px` }}>
          {URLs.map((URL, i) => (
            <img alt="Hotel" key={URL} src={URL} className={style.image} />
          ))}
        </div>
      </div>
      <div className={style.overlay}>
        <IconButton
          onClick={slide(-1)}
          className={style.button}
          disabled={index <= 0}
        >
          <Icon icon={ChevronLeftIcon} size={24} color="white" />
        </IconButton>
        <IconButton
          onClick={openFullscreen}
          className={`${style.button} ${style['fs-button']}`}
        >
          <Icon icon={ArrowsPointingOutIcon} size={26} color="white" />
        </IconButton>
        <IconButton
          onClick={slide(1)}
          className={style.button}
          disabled={index >= URLs.length - 1}
        >
          <Icon icon={ChevronRightIcon} size={24} color="white" />
        </IconButton>
      </div>
    </div>
  );
};
export default PhotosSlider;