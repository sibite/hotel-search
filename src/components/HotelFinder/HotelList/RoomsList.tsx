import useRooms from '../../../queries/useRooms';
import Room from './Room';
import style from './RoomsList.module.scss';

interface Props {
  hotelId: string;
}

const RoomsList: React.FC<Props> = ({ hotelId }) => {
  const rooms = useRooms(hotelId).roomsIds;

  return (
    <div className={style.list}>
      {rooms.map((id) => (
        <Room key={id} hotelId={hotelId} id={id} />
      ))}
    </div>
  );
};
export default RoomsList;
