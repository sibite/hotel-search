import React, { MouseEvent, useCallback, useRef, useState } from 'react';
import style from './Rating.module.scss';
import Rating from './Rating';

interface Props {
  max: number;
  onPick?: (rating: number) => any;
}

const RatingPicker: React.FC<Props> = ({ max, onPick }) => {
  const [value, setValue] = useState<number>(0);
  const [displayValue, setDisplayValue] = useState<number>(0);

  const pickerRef = useRef<HTMLDivElement>(null);

  const getHoveredValue = useCallback(
    (mouseX: number) => {
      if (!pickerRef.current) return 1;

      const width = pickerRef.current.clientWidth;
      const x = mouseX - pickerRef.current.offsetLeft;

      return Math.max(1, Math.floor((x / width) * max + 1));
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
    const hoveredValue = getHoveredValue(event.clientX);
    setValue(hoveredValue);
    if (onPick) onPick(hoveredValue);
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
      ref={pickerRef}
    >
      <Rating max={max} value={displayValue} />
    </div>
  );
};
export default RatingPicker;
