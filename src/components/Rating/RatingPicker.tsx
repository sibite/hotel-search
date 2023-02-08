import React, { PointerEvent, useCallback, useRef, useState } from 'react';
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

  const pointerMoveHandler = useCallback(
    (event: PointerEvent) => {
      if (!pickerRef.current) return;

      const width = pickerRef.current.clientWidth;
      const x = event.clientX - pickerRef.current.offsetLeft;

      const hoveredValue = Math.max(1, Math.floor((x / width) * max + 1));

      setDisplayValue(hoveredValue);
    },
    [max]
  );

  const onPointerUp = () => {
    setValue(displayValue);
    if (onPick) onPick(value);
  };

  return (
    <div
      className={style.picker}
      onPointerMove={pointerMoveHandler}
      onPointerLeave={() => setDisplayValue(value)}
      onPointerUp={onPointerUp}
      ref={pickerRef}
    >
      <Rating max={max} value={displayValue} />
    </div>
  );
};
export default RatingPicker;
