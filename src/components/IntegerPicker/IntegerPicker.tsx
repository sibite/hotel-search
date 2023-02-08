import { MinusIcon, PlusIcon } from '@heroicons/react/24/solid';
import { useCallback, useState } from 'react';
import style from './IntegerPicker.module.scss';
import Icon from '../misc/Icon';
import IconButton from '../IconButton/IconButton';

interface Props {
  min: number;
  max: number;
  initial: number;
  onPick?: (integer: number) => any;
}

const IntegerPicker: React.FC<Props> = ({ min, max, initial, onPick }) => {
  const getValueInRange = useCallback(
    (value: number) => Math.min(max, Math.max(min, value)),
    [min, max]
  );

  const [value, setValue] = useState<number>(getValueInRange(initial));

  const modifyValue = (diff: number) => {
    const newValue = getValueInRange(value + diff);
    setValue(newValue);
    if (onPick) onPick(newValue);
  };

  return (
    <div className={style.picker}>
      <IconButton
        onClick={() => {
          modifyValue(-1);
        }}
        disabled={value <= min}
      >
        <Icon icon={MinusIcon} size={24} />
      </IconButton>
      <span className={style.value}>{value}</span>
      <IconButton
        onClick={() => {
          modifyValue(1);
        }}
        disabled={value >= max}
      >
        <Icon icon={PlusIcon} size={24} />
      </IconButton>
    </div>
  );
};
export default IntegerPicker;
