import { HTMLProps, ReactNode } from 'react';
import style from './Card.module.scss';

interface Props extends HTMLProps<HTMLDivElement> {
  children?: ReactNode;
}

const Card: React.FC<Props> = ({ children, className, ...rest }) => (
  <div className={`${style.card} ${className}`} {...rest}>
    {children}
  </div>
);
export default Card;
