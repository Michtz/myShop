import React from 'react';

interface LinkProps {
  children: React.ReactNode;
  href?: string;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
  fullWidth?: boolean;
}

const Link: React.FC<LinkProps> = ({ children, href, onClick, fullWidth = false }) => {
  return (
    <a href={href} onClick={onClick} data-fullwidth={fullWidth}>
      {children}
    </a>
  );
};

export default Link;