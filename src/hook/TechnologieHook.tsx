import React, {
  createContext,
  useContext,
  Context,
  PropsWithChildren,
} from 'react';
import data from '../data/technologies.json';
import { Technologies } from '../types/common';

const defaultValue: Technologies = data;

const TechnologiesContext: Context<Technologies> =
  createContext<Technologies>(defaultValue);

interface TechnologiesProviderProps extends PropsWithChildren {
  technologies: Technologies;
}

export const TechnologiesProvider: React.FC<TechnologiesProviderProps> = ({
  children,
  technologies,
}) => {
  return (
    <TechnologiesContext.Provider value={technologies} children={children} />
  );
};

export const useTechnologies = (): Technologies => {
  const context: Technologies = useContext(TechnologiesContext);
  return context ||  [""] ;
};