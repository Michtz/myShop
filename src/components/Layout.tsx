import React from 'react';
import Container from './system/Containers';
import Header from './Header';
import Feedback from './system/Feedback';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <>
    <Header />
    <Container>
      {children}
      <Feedback />
    </Container>
  </>
);

export default Layout;