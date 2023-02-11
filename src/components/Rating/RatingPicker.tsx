import React, {
  KeyboardEvent,
  MouseEvent,
  useCallback,
  useRef,
  useState,
} from 'react';
import style from './Rating.module.scss';
import Rating from './Rating';
import inRange from '../misc/inRange';

interface Props {
  max: number;
  onPick?: (rating: number) => any;
}

const RatingPicker: React.FC<Props> = ({ max, onPick }) => {
  const [value, setValue] = useState<number>(1);
  const [displayValue, setDisplayValue] = useState<number>(1);

  const pickerRef = useRef<HTMLDivElement>(null);

  const pickHandler = (rating: number) => {
    setValue(rating);
    setDisplayValue(rating);
    if (onPick) onPick(rating);
  };

  const getHoveredValue = useCallback(
    (mouseX: number) => {
      if (!pickerRef.current) return 1;

      const width = pickerRef.current.clientWidth;
      const x = mouseX - pickerRef.current.offsetLeft;

      return inRange(1, max, Math.floor((x / width) * max + 1));
    },
    [pickerRef, max]
  );

  const pointerMoveHandler = useCallback(
    (event: MouseEvent) => {
      if (!pickerRef.current) return;
      setDisplayValue(getHoveredValue(event.clientX));
    },
    [getHoveredValue]
  );

  const onPointerUp = (event: MouseEvent) => {
    pickHandler(getHoveredValue(event.clientX));
  };

  const keyDownHandler = (event: KeyboardEvent) => {
    const diff =
      {
        ArrowLeft: -1,
        ArrowRight: 1,
      }[event.code] || 0;
    pickHandler(inRange(1, max, value + diff));
  };

  return (
    <div
      className={style.picker}
      role="slider"
      tabIndex={0}
      aria-valuenow={value}
      onMouseMove={pointerMoveHandler}
      onMouseLeave={() => setDisplayValue(value)}
      onPointerUp={onPointerUp}
      onKeyDown={keyDownHandler}
      ref={pickerRef}
    >
      <Rating max={max} value={displayValue} />
    </div>
  );
};
export default RatingPicker;
