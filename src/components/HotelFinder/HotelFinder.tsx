import FilterBar from './FilterBar/FilterBar';
import style from './HotelFinder.module.css';

const HotelFinder: React.FC = () => (
  <div className={style.container}>
    <FilterBar />
  </div>
);
export default HotelFinder;
