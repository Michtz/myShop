import React, { createContext, useContext, Context, PropsWithChildren } from 'react';
import { ExampleData } from '../types/common';
import exampleDataJson from '../data/exampleData.json';

const defaultValue: ExampleData = exampleDataJson;

const ExampleDataContext: Context<ExampleData> = createContext<ExampleData>(defaultValue);

export const ExampleDataProvider: React.FC<PropsWithChildren> = ({ children }) => (
  <ExampleDataContext.Provider value={defaultValue}>{children}</ExampleDataContext.Provider>
);

export const useExampleData = (): ExampleData => {
  const context: ExampleData = useContext(ExampleDataContext);
  if (context === undefined) {
    throw new Error('useExampleData must be used within an ExampleDataProvider');
  }
  return context;
};