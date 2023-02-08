import RatingPicker from '../../Rating/RatingPicker';
import style from './FilterBar.module.scss';

interface Props {}

const FilterBar: React.FC<Props> = () => (
  <div className={style['filter-bar']}>
    <RatingPicker max={5} />
    <span>ADULTS</span>
    <span>KIDS</span>
  </div>
);
export default FilterBar;
