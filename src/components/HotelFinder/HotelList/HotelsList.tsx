import useHotels from '../../../queries/useHotels';
import HotelCard from './HotelCard';
import style from './HotelsList.module.scss';

interface Props {}

const HotelsList: React.FC<Props> = () => {
  const { hotelsIds } = useHotels();

  return (
    <div className={style.list}>
      {hotelsIds.map((id) => (
        <HotelCard key={id} id={id} />
      ))}
    </div>
  );
};
export default HotelsList;
