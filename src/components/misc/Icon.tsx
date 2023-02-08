import { StarIcon } from '@heroicons/react/24/solid';
import { ComponentProps } from 'react';

interface Props extends ComponentProps<typeof StarIcon> {
  icon: typeof StarIcon;
  size?: number;
}

const Icon: React.FC<Props> = ({ icon, size = 30, ...rest }) => {
  const IconComponent = icon;
  const sizeStr = `${size}px`;

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <IconComponent width={sizeStr} height={sizeStr} {...rest} />;
};
export default Icon;
