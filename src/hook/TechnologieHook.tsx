import React, { createContext, useContext, Context, PropsWithChildren } from 'react';
import { PackageJson } from '../types/common';
import technologiesData from '../../package.json';

const defaultValue: PackageJson = technologiesData;

const TechnologiesContext: Context<PackageJson> = createContext<PackageJson>(defaultValue);

export const TechnologiesProvider: React.FC<PropsWithChildren> = ({ children }) => (
  <TechnologiesContext.Provider value={defaultValue} children={children} />
);

export const useTechnologies = (): PackageJson => {
  const context: PackageJson = useContext(TechnologiesContext);
  if (context === undefined) {
    throw new Error('useTechnologies must be used within a TechnologiesProvider');
  }
  return context;
};