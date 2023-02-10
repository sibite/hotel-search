import style from './HotelCard.module.scss';
import HotelInfo from './HotelInfo';
import RoomsList from './RoomsList/RoomsList';

interface Props {
  id: string;
}

const HotelCard: React.FC<Props> = ({ id }) => (
  <div className={style.card}>
    <HotelInfo id={id} />
    <RoomsList hotelId={id} />
  </div>
);
export default HotelCard;
