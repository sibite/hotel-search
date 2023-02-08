import { StarIcon as StarIconOutline } from '@heroicons/react/24/outline';
import { StarIcon } from '@heroicons/react/24/solid';
import Icon from '../misc/Icon';

interface Props {
  filled: boolean;
}

const Star: React.FC<Props> = ({ filled }) => {
  const StarComponent = filled ? StarIcon : StarIconOutline;

  return <Icon icon={StarComponent} />;
};
export default Star;
