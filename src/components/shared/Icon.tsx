import { StarIcon } from '@heroicons/react/24/solid';

interface Props {
  icon: typeof StarIcon;
}

const Icon: React.FC<Props> = ({ icon }) => {
  const IconComponent = icon;

  return <IconComponent width="30px" height="30px" />;
};
export default Icon;
