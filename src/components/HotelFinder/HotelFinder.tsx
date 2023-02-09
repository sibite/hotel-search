import FilterBar from './FilterBar/FilterBar';
import style from './HotelFinder.module.css';
import HotelsList from './HotelList/HotelsList';

const HotelFinder: React.FC = () => (
  <div className={style.container}>
    <FilterBar />
    <HotelsList />
  </div>
);
export default HotelFinder;
