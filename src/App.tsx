import React from 'react';
import Container from './components/system/Containers';
import './i18n';
import UsedTechnologies from './components/sections/UsedTechnologies';
import Header from './components/Header';
import FormExample from './components/sections/FormExample';

const App: React.FC = () => {


  return (
    <Container>
      <Header />
      <UsedTechnologies />
      <FormExample />
    </Container>
  );
};

export default App;