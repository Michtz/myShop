import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import App from './App';
import { TechnologiesProvider } from './hook/TechnologieHook';
import { ExampleDataProvider } from './hook/ExampleDataHook';
import { FeedbackProvider } from './hook/FeedbackHook';
import './i18n'; // initializes i18n instance

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <FeedbackProvider>
      <ExampleDataProvider>
        <TechnologiesProvider>
          <App />
        </TechnologiesProvider>
      </ExampleDataProvider>
    </FeedbackProvider>
  </React.StrictMode>,
);

reportWebVitals();