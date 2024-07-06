import React, { createContext, useContext, Context, PropsWithChildren } from 'react';
import data from '../data/exampleData.json';
import { ExampleData } from '../types/common';

const defaultValue: ExampleData = data;

const TechnologiesContext: Context<ExampleData> = createContext<ExampleData>(defaultValue);

interface ExampleDataProviderProps extends PropsWithChildren {
  exampleData: ExampleData;
}

export const ExampleDataProvider: React.FC<ExampleDataProviderProps> = ({ children, exampleData }) => {
  return <TechnologiesContext.Provider value={exampleData} children={children} />;
};

export const useExampleData = (): ExampleData => {
  const context: ExampleData = useContext(TechnologiesContext);
  return context || [''];
};