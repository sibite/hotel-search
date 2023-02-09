import hotelsPlaceholderData from '../../../hotels-placeholder-data';
import HotelCard from './HotelCard';
import style from './HotelsList.module.scss';

const hotels = hotelsPlaceholderData;

interface Props {}

const HotelsList: React.FC<Props> = () => (
  <div className={style.list}>
    <HotelCard />
  </div>
);
export default HotelsList;
