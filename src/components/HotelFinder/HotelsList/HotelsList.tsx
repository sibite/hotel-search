import useHotelsQuery from '../../../queries/useHotelsQuery';
import LoadingSpinner from '../../misc/LoadingSpinner';
import useFilteredHotelsIds from '../filtering/useFilteredHotelsIds';
import HotelCard from './HotelCard/HotelCard';
import style from './HotelsList.module.scss';

interface Props {}

const HotelsList: React.FC<Props> = () => {
  const filteredHotelsIds = useFilteredHotelsIds();
  const { isError, isLoading, refetch } = useHotelsQuery();

  return (
    <div className={style.list}>
      {filteredHotelsIds.map((id) => (
        <HotelCard key={id} id={id} />
      ))}
      {!filteredHotelsIds.length && !isError && !isLoading && (
        <span>No hotels found matching your criteria</span>
      )}
      {isLoading && (
        <div style={{ marginTop: '60px' }}>
          <LoadingSpinner />
        </div>
      )}
      {isError && (
        <>
          <span style={{ color: '#cc0000' }}>Fetching error</span>
          <button type="button" onClick={refetch}>
            Reload
          </button>
        </>
      )}
    </div>
  );
};
export default HotelsList;
