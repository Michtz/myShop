import React from 'react';
import ReactDOM from 'react-dom/client';
import style from './global.module.scss';
import reportWebVitals from './reportWebVitals';
import App from './App';
import technologies from './data/technologies.json';
import { TechnologiesProvider } from './hook/TechnologieHook';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <TechnologiesProvider technologies={technologies}>
    <App/>
    </TechnologiesProvider>
  </React.StrictMode>
);

reportWebVitals();