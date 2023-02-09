import HotelCard from './HotelCard';
import style from './HotelsList.module.scss';

interface Props {}

const HotelsList: React.FC<Props> = () => (
  <div className={style.list}>
    <HotelCard />
    <HotelCard />
    <HotelCard />
  </div>
);
export default HotelsList;
