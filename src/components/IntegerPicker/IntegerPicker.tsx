import { MinusIcon, PlusIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';
import IconButton from '../IconButton/IconButton';
import Icon from '../misc/Icon';
import inRange from '../misc/inRange';
import style from './IntegerPicker.module.scss';

interface Props {
  min: number;
  max: number;
  initial: number;
  onPick?: (integer: number) => any;
}

const IntegerPicker: React.FC<Props> = ({ min, max, initial, onPick }) => {
  const [value, setValue] = useState<number>(inRange(min, max, initial));

  const modifyValue = (diff: number) => {
    const newValue = inRange(min, max, value + diff);
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
        data-testid="minus"
      >
        <Icon icon={MinusIcon} size={22} />
      </IconButton>
      <span className={style.value}>{value}</span>
      <IconButton
        onClick={() => {
          modifyValue(1);
        }}
        disabled={value >= max}
        data-testid="plus"
      >
        <Icon icon={PlusIcon} size={22} />
      </IconButton>
    </div>
  );
};
export default IntegerPicker;
