import { useState } from 'react';
import inRange from './inRange';

const useSlider = (size: number, initialIndex: number = 0) => {
  const [index, setIndex] = useState<number>(initialIndex);

  const slide = (diff: number) =>
    setIndex((x) => inRange(0, size - 1, x + diff));

  return { index, slide };
};
export default useSlider;
