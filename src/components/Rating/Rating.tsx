import style from './Rating.module.scss';
import Star from './Star';

interface Props {
  value: number;
  max: number;
}

const Rating: React.FC<Props> = ({ value, max }) => {
  const starsBP = Array(max)
    .fill(0)
    .map((x, i) => i < value);

  console.log(starsBP);

  return (
    <div className={style.rating}>
      {starsBP.map((filled) => (
        <Star filled={filled} />
      ))}
    </div>
  );
};
export default Rating;
