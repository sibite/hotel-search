import Rating from '../../Rating/Rating';
import style from './FilterBar.module.scss';

interface Props {}

const FilterBar: React.FC<Props> = () => (
  <div className={style['filter-bar']}>
    <Rating max={5} value={3} />
    <span>ADULTS</span>
    <span>KIDS</span>
  </div>
);
export default FilterBar;
