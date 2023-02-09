import Card from './Card';
import HotelInfo from './HotelInfo';
import RoomsList from './RoomsList';
import style from './HotelCard.module.scss';

interface Props {}

const HotelCard: React.FC<Props> = () => (
  <Card className={style.card}>
    <HotelInfo />
    <RoomsList />
  </Card>
);
export default HotelCard;
