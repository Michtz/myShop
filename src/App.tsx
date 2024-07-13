import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import UsedTechnologies from './components/sections/UsedTechnologies';
import FormExample from './components/sections/FormExample';
import Error from './components/Error';
import Home from './components/sections/Home';
import AccordionExample from './components/sections/AccordionExample';
import DraggableListExample from './components/sections/DndExample';
import ProductCardExample from './components/sections/ProductCardExample';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/usedTechnologies" element={<UsedTechnologies />} />
          <Route path="/form" element={<FormExample />} />
          <Route path="/accordion" element={<AccordionExample />} />
          <Route path="/dndList" element={<DraggableListExample />} />
          <Route path="/card" element={<ProductCardExample />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;