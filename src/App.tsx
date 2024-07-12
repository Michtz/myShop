import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import UsedTechnologies from './components/sections/UsedTechnologies';
import FormExample from './components/sections/FormExample';
import Error from './components/Error';
import Home from './components/sections/Home';


const App: React.FC = () => {
  return (
      <BrowserRouter>
        <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/usedTechnologies" element={<UsedTechnologies />} />
              <Route path="/form" element={<FormExample />} />
              <Route path="/*" element={<Error />} />
            </Routes>
        </Layout>
      </BrowserRouter>
  );
};

export default App;