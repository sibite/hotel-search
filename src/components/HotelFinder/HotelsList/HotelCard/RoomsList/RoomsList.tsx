import useFilteredRoomsIds from '../../../filtering/useFilteredRoomsIds';
import Room from './Room';
import style from './RoomsList.module.scss';

interface Props {
  hotelId: string;
}

const RoomsList: React.FC<Props> = ({ hotelId }) => {
  const filteredRoomsIds = useFilteredRoomsIds(hotelId);

  return (
    <div className={style.list}>
      {filteredRoomsIds.map((id) => (
        <Room key={id} hotelId={hotelId} id={id} />
      ))}
    </div>
  );
};
export default RoomsList;
