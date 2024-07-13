import React from 'react';

interface LinkProps {
  children: React.ReactNode;
  href?: string;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
  fullWidth?: boolean;
}

const Link: React.FC<LinkProps> = ({ children, href, onClick, fullWidth = false }) => {
  const handleClick = async (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    if (onClick) {
      onClick(event);
    }
  };

  return (
    <a href={href} onClick={handleClick} data-fullwidth={fullWidth}>
      {children}
    </a>
  );
};

export default Link;