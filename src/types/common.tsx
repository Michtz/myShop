import React from 'react';

/**
 * Represents the structure of package.json
 */
export interface PackageJson {
  name: string;
  version: string;
  private: boolean;
  dependencies: {
    [key: string]: string;
  };
  scripts: {
    start: string;
    build: string;
    test: string;
    eject: string;
    lint: string;
    format: string;
  };
  eslintConfig: {
    extends: Array<string>;
  };
  browserslist: {
    production: Array<string>;
    development: Array<string>;
  };
  devDependencies: {
    [key: string]: string;
  };
}

/**
 * Represents example form data structure
 */
export interface ExampleData {
  formExample?: {
    name: string;
    email: string;
    password: string;
  };
}

/**
 * Props for container components
 */
export interface IContainerProps {
  children: React.ReactNode;
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
}

/**
 * Defines possible width options for containers
 */
export type ContainerWidth = 'small' | 'medium' | 'large' | 'full';

/**
 * Defines possible variants for feedback messages
 */
export type FeedbackVariant = 'error' | 'info' | 'success';