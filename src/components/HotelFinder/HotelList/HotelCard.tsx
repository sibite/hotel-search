import Card from './Card';
import style from './HotelCard.module.scss';
import HotelInfo from './HotelInfo';
import RoomsList from './RoomsList';

interface Props {
  id: string;
}

const HotelCard: React.FC<Props> = ({ id }) => (
  <Card className={style.card}>
    <HotelInfo id={id} />
    <RoomsList />
  </Card>
);
export default HotelCard;
