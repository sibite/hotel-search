import useFilteredHotelsIds from '../filtering/useFilteredHotelsIds';
import HotelCard from './HotelCard/HotelCard';
import style from './HotelsList.module.scss';

interface Props {}

const HotelsList: React.FC<Props> = () => {
  const filteredHotelsIds = useFilteredHotelsIds();

  return (
    <div className={style.list}>
      {filteredHotelsIds.map((id) => (
        <HotelCard key={id} id={id} />
      ))}
    </div>
  );
};
export default HotelsList;
