import { useState } from 'react';

const useSlider = (initialIndex: number = 0) => {
  const [index, setIndex] = useState<number>(initialIndex);

  const slide = (diff: number) => () => setIndex((x) => x + diff);

  return { index, slide };
};
export default useSlider;
