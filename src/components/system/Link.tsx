import React from 'react';
import style from '../../styles/system/link.module.scss';

interface LinkProps {
  children: React.ReactNode;
  href?: string;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
  fullWidth?: boolean;
}

const Link: React.FC<LinkProps> = ({ children, href, onClick, fullWidth = false }) => {
  return (
    <a href={href} onClick={onClick} className={style['link']} data-fullwidth={fullWidth}>
      {children}
    </a>
  );
};

export default Link;