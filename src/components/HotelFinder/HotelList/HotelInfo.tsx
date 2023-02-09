import Rating from '../../Rating/Rating';
import style from './HotelInfo.module.scss';

interface Props {}

const HotelInfo: React.FC<Props> = () => (
  <div className={style.container}>
    <div style={{ width: '150px', height: '150px', background: '#cccccc' }} />
    <div className={style.text}>
      <h2>Hotel 1 name</h2>
      <p>
        Address 1<br />
        Address 2
      </p>
    </div>
    <Rating max={5} value={3} />
  </div>
);
export default HotelInfo;
