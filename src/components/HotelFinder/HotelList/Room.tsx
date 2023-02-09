import useRooms from '../../../queries/useRooms';
import style from './Room.module.scss';

interface Props {
  hotelId: string;
  id: string;
}

const Room: React.FC<Props> = ({ hotelId, id }) => {
  const { name, occupancy, longDescription } = useRooms(hotelId).roomsById[id];

  return (
    <div className={style.room}>
      <div className={style.props}>
        <h3>{name}</h3>
        <p>
          Adults: {occupancy.maxAdults}
          <br />
          Children: {occupancy.maxChildren}
        </p>
      </div>
      <div className={style.description}>
        <p>{longDescription}</p>
      </div>
    </div>
  );
};
export default Room;
