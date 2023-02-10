import useRoomsQuery from '../../../../../queries/useRoomsQuery';
import LoadingSpinner from '../../../../misc/LoadingSpinner';
import useFilteredRoomsIds from '../../../filtering/useFilteredRoomsIds';
import Room from './Room';
import style from './RoomsList.module.scss';

interface Props {
  hotelId: string;
}

const RoomsList: React.FC<Props> = ({ hotelId }) => {
  const filteredRoomsIds = useFilteredRoomsIds(hotelId);
  const { isLoading, isError, refetch } = useRoomsQuery(hotelId);

  return (
    <div className={style.list}>
      {filteredRoomsIds.map((id) => (
        <Room key={id} hotelId={hotelId} id={id} />
      ))}
      {!filteredRoomsIds.length && !isLoading && !isError && (
        <div className={style.placeholder}>
          No rooms found matching your criteria
        </div>
      )}
      {isLoading && (
        <div className={style.placeholder}>
          <LoadingSpinner />
        </div>
      )}
      {isError && (
        <div className={style.placeholder}>
          <span style={{ color: '#cc0000' }}>Fetching error</span>
          <br />
          <br />
          <button type="button" onClick={refetch}>
            Reload
          </button>
        </div>
      )}
    </div>
  );
};
export default RoomsList;
