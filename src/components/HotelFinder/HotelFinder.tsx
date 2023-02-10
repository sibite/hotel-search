import FilterBar from './FilterBar/FilterBar';
import FiltersContextProvider from './filtering/FiltersContext';
import style from './HotelFinder.module.css';
import HotelsList from './HotelsList/HotelsList';

const HotelFinder: React.FC = () => (
  <FiltersContextProvider>
    <div className={style.container}>
      <FilterBar />
      <HotelsList />
    </div>
  </FiltersContextProvider>
);
export default HotelFinder;
