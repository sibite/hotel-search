import style from './Room.module.scss';

interface Props {}

const Room: React.FC<Props> = () => (
  <div className={style.room}>
    <div className={style.props}>
      <h3>Room Name</h3>
      <p>
        Adults: 1<br />
        Children: 2
      </p>
    </div>
    <div className={style.description}>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere facilis
        quos at, asperiores magni debitis, ratione animi mollitia dolorem
        cupiditate maiores possimus id. Fugit incidunt explicabo ex nulla quas
        voluptatem.
      </p>
    </div>
  </div>
);
export default Room;
