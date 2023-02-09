import Room from './Room';
import style from './RoomsList.module.scss';

interface Props {}

const RoomsList: React.FC<Props> = () => (
  <div className={style.list}>
    <Room />
    <Room />
    <Room />
  </div>
);
export default RoomsList;
