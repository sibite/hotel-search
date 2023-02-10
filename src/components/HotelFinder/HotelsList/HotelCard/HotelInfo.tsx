import useHotels from '../../../../queries/useHotels';
import Rating from '../../../Rating/Rating';
import style from './HotelInfo.module.scss';
import PhotosSlider from '../PhotosSlider/PhotosSlider';

interface Props {
  id: string;
}

const HotelInfo: React.FC<Props> = ({ id }) => {
  const { name, address1, address2, starRating, images } =
    useHotels().hotelsById[id];

  const URLs = images?.map((image) => image.url) ?? [];

  return (
    <div className={style.container}>
      <PhotosSlider
        URLs={URLs}
        width="var(--ps-width)"
        height="var(--ps-height)"
      />
      <div className={style.text}>
        <h2>{name}</h2>
        <p>
          <span className={style['address-label']}>Address</span>
          <br />
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
