import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import App from './App';
import technologies from './data/technologies.json';
import exampleData from './data/exampleData.json';
import { TechnologiesProvider } from './hook/TechnologieHook';
import { ExampleDataProvider } from './hook/ExampleDataHook';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <ExampleDataProvider exampleData={exampleData}>
      <TechnologiesProvider technologies={technologies}>
        <App />
      </TechnologiesProvider>
    </ExampleDataProvider>
  </React.StrictMode>,
);

reportWebVitals();