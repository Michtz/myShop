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

/*
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
import LoginExample from './components/sections/LoginExample';
import { ErrorProvider } from './hook/ErrorHook';
import { FeedbackProvider } from './hook/FeedbackHook';
import { ExampleDataProvider } from './hook/ExampleDataHook';
import { TechnologiesProvider } from './hook/TechnologieHook';
import { sides } from './data/navOptions';
import './i18n';

{
  /!*
  Todo:Ideas
  todo: add hash generator for the password https://www.youtube.com/watch?v=NuyzuNBFWxQ
    ToDo: add a api for the quoute of the day
    ToDo: add qr code generator 
    *!/
}

const App: React.FC = () => {
  const componentMap = {
    Home,
    UsedTechnologies,
    FormExample,
    AccordionExample,
    DraggableListExample,
    ProductCardExample,
    LoginExample,
    Error,
  };


  return (
    <ErrorProvider>
      <FeedbackProvider>
        <ExampleDataProvider>
          <TechnologiesProvider>
            <BrowserRouter>
              <Layout>
                <Routes>
                  {sides.map((side) => {
                    const Component = componentMap[side.component.name as keyof typeof componentMap];
                    return <Route key={side.path} path={side.path} element={<Component />} />;
                  })}
                  {/!*<Route path="/" element={<Home />} />
                  <Route path="/usedTechnologies" element={<UsedTechnologies />} />
                  <Route path="/form" element={<FormExample />} />
                  <Route path="/accordion" element={<AccordionExample />} />
                  <Route path="/dndList" element={<DraggableListExample />} />
                  <Route path="/card" element={<ProductCardExample />} />
                  <Route path="/login" element={<LoginExample />} />
                  <Route path="/!*" element={<Error />} />*!/}
                </Routes>
              </Layout>
            </BrowserRouter>
          </TechnologiesProvider>
        </ExampleDataProvider>
      </FeedbackProvider>
    </ErrorProvider>
  );
};

export default App;*/