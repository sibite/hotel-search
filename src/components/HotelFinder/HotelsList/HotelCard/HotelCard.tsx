import Card from '../../../Card';
import useFilteredRoomsIds from '../../filtering/useFilteredRoomsIds';
import style from './HotelCard.module.scss';
import HotelInfo from './HotelInfo';
import RoomsList from './RoomsList/RoomsList';

interface Props {
  id: string;
}

const HotelCard: React.FC<Props> = ({ id }) => {
  const roomsCount = useFilteredRoomsIds(id).length;

  if (!roomsCount) return null;

  return (
    <Card className={style.card}>
      <HotelInfo id={id} />
      <RoomsList hotelId={id} />
    </Card>
  );
};
export default HotelCard;
