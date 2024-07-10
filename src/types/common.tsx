import React, { BaseSyntheticEvent } from 'react';

export type Technologies = Array<string>;

export interface ExampleData {
  formExample?: {
    name: string;
    email: string;
    password: string;
  };
}

export interface IContainerProps {
  children: React.ReactNode;
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
}

export type ContainerWidth = 'small' | 'medium' | 'large' | 'full';