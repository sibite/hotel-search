import useHotels from '../../../queries/useHotels';
import Rating from '../../Rating/Rating';
import style from './HotelInfo.module.scss';

interface Props {
  id: string;
}

const HotelInfo: React.FC<Props> = ({ id }) => {
  const { name, address1, address2, starRating } = useHotels().hotelsById[id];

  return (
    <div className={style.container}>
      <div style={{ width: '150px', height: '150px', background: '#cccccc' }} />
      <div className={style.text}>
        <h2>{name}</h2>
        <p>
          {address1}
          <br />
          {address2}
        </p>
      </div>
      <Rating max={5} value={Number(starRating)} />
    </div>
  );
};
export default HotelInfo;
