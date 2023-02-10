import { HTMLProps, ReactNode } from 'react';
import style from './IconButton.module.scss';

interface Props extends Omit<HTMLProps<HTMLButtonElement>, 'type'> {
  children: ReactNode;
}

const IconButton: React.FC<Props> = ({ children, className = '', ...rest }) => (
  <button type="button" className={`${style.button} ${className}`} {...rest}>
    {children}
  </button>
);
export default IconButton;
