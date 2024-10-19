import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import Error from './components/Error';
import { ErrorProvider } from './hook/ErrorHook';
import { FeedbackProvider } from './hook/FeedbackHook';
import { ExampleDataProvider } from './hook/ExampleDataHook';
import { TechnologiesProvider } from './hook/TechnologieHook';
import { SideDataProps, sides } from './data/data';
import './i18n';

const App: React.FC = () => {
  return (
    <ErrorProvider>
      <FeedbackProvider>
        <ExampleDataProvider>
          <TechnologiesProvider>
            <BrowserRouter>
              <Layout>
                <Routes>
                  {sides.map((side:SideDataProps) => (
                    <Route key={side.path} path={side.path} element={<side.component />} />
                  ))}
                  <Route path="/*" element={<Error />} />
                </Routes>
              </Layout>
            </BrowserRouter>
          </TechnologiesProvider>
        </ExampleDataProvider>
      </FeedbackProvider>
    </ErrorProvider>
  );
};

export default App;