import style from './Rating.module.scss';
import Star from './Star';

interface Props {
  value: number;
  max: number;
}

const Rating: React.FC<Props> = ({ value, max }) => {
  const starsBP = Array(max)
    .fill(0)
    .map((x, i) => !i || i < value);

  return (
    <div className={style.rating}>
      {starsBP.map((filled, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <Star key={i} filled={filled} />
      ))}
    </div>
  );
};
export default Rating;
