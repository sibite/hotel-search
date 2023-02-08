import IntegerPicker from '../../IntegerPicker/IntegerPicker';
import RatingPicker from '../../Rating/RatingPicker';
import style from './FilterBar.module.scss';

interface Props {}

const FilterBar: React.FC<Props> = () => (
  <div className={style['filter-bar']}>
    <RatingPicker max={5} />
    <div className={style.control}>
      <span>Adults:</span>
      <IntegerPicker min={0} max={10} initial={1} />
    </div>
    <div className={style.control}>
      <span>Children:</span>
      <IntegerPicker min={0} max={10} initial={1} />
    </div>
  </div>
);
export default FilterBar;
