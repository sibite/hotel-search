import style from './FilterBar.module.scss';

interface Props {}

const FilterBar: React.FC<Props> = () => (
  <div className={style['filter-bar']}>
    <span>STARS</span>
    <span>ADULTS</span>
    <span>KIDS</span>
  </div>
);
export default FilterBar;
