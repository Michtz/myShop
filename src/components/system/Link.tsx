import React from 'react';
import style from '../../styles/system/link.module.scss';

interface LinkProps {
  children: React.ReactNode;
  href?: string;
  external?: boolean;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
  fullWidth?: boolean;
  className?: string;
}

const Link: React.FC<LinkProps> = ({
                                     children,
                                     href,
                                     external = false,
                                     disabled = false,
                                     onClick,
                                     fullWidth = false,
                                     className,
                                   }) => {

  const handleClick = async (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    if (disabled) return;

    if (onClick) {
      onClick(event);
    } else if (href && !external) {
      /*test*/
    }
  };

  const linkClass = `${style['link']} ${className || ''} ${disabled ? style['disabled'] : ''}`;

  return (
    <a
      href={href}
      className={linkClass}
      onClick={handleClick}
      data-fullwidth={fullWidth}
      data-disabled={disabled}
     /* target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}*/
    >
      {children}
    </a>
  );
};

export default Link;