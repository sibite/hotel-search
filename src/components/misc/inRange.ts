const inRange = (min: number, max: number, x: number) =>
  Math.min(max, Math.max(min, x));

export default inRange;
