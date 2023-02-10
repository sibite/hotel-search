import { useContext } from 'react';
import IntegerPicker from '../../IntegerPicker/IntegerPicker';
import RatingPicker from '../../Rating/RatingPicker';
import { FiltersContext } from '../filtering/FiltersContext';
import style from './FilterBar.module.scss';

interface Props {}

const FilterBar: React.FC<Props> = () => {
  const { setRating, setAdults, setChildren } = useContext(FiltersContext);

  return (
    <div className={style['filter-bar']}>
      <RatingPicker max={5} onPick={(x) => setRating(x)} />
      <div className={style.group}>
        <div className={style.control}>
          <span>Adults:</span>
          <IntegerPicker
            min={0}
            max={9}
            initial={1}
            onPick={(x) => setAdults(x)}
          />
        </div>
        <div className={style.control}>
          <span>Children:</span>
          <IntegerPicker
            min={0}
            max={9}
            initial={0}
            onPick={(x) => setChildren(x)}
          />
        </div>
      </div>
    </div>
  );
};
export default FilterBar;
