import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';

interface FeedbackContextType {
  isVisible: boolean;
  variant: 'error' | 'info' | 'success';
  label: string;
  showFeedback: (label: string, variant: 'error' | 'info' | 'success') => void;
  hideFeedback: () => void;
}

const FeedbackContext = createContext<FeedbackContextType | undefined>(undefined);

interface FeedbackProviderProps {
  children: ReactNode;
}

export const FeedbackProvider: React.FC<FeedbackProviderProps> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [variant, setVariant] = useState<'error' | 'info' | 'success'>('success');
  const [label, setLabel] = useState('');

  const showFeedback = useCallback((newLabel: string, newVariant: 'error' | 'info' | 'success') => {
    setLabel(newLabel);
    setVariant(newVariant);
    setIsVisible(true);

    // Auto-hide feedback after 3 seconds
    setTimeout(() => {
      setIsVisible(false);
    }, 3000);
  }, []);

  const hideFeedback = useCallback(() => {
    setIsVisible(false);
  }, []);

  const value = {
    isVisible,
    variant,
    label,
    showFeedback,
    hideFeedback,
  };

  return <FeedbackContext.Provider value={value}>{children}</FeedbackContext.Provider>;
};

export const useFeedback = (): FeedbackContextType => {
  const context = useContext(FeedbackContext);
  if (context === undefined) {
    throw new Error('useFeedback must be used within a FeedbackProvider');
  }
  return context;
};