import React from 'react';
import Container from './components/system/Containers';

import UsedTechnologies from './components/sections/UsedTechnologies';
import Header from './components/Header';
import FormExample from './components/sections/FormExample';
import Feedback from './components/system/Feedback';

const App: React.FC = () => {
  return (
    <Container>
      <Header />
      <UsedTechnologies />
      <FormExample />
      <Feedback />
    </Container>
  );
};

export default App;