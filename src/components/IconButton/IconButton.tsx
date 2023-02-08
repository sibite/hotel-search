import { HTMLProps, ReactNode } from 'react';
import style from './IconButton.module.scss';

interface Props extends Omit<HTMLProps<HTMLButtonElement>, 'type'> {
  children: ReactNode;
}

const IconButton: React.FC<Props> = ({ children, ...rest }) => (
  <button type="button" className={style.button} {...rest}>
    {children}
  </button>
);
export default IconButton;
