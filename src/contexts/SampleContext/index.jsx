/* eslint-disable no-console */
import React from 'react';
import { useImmer } from 'use-immer';

// Contexts
const SampleStateContext = React.createContext();
const SampleMutationsContext = React.createContext();

// HOC Component
const SampleProvider = ({ children }) => {
  /**
   * Local State:
   */
  const [state, mutate] = useImmer({});

  /**
   * DOM:
   */
  return (
    <SampleStateContext.Provider value={state}>
      <SampleMutationsContext.Provider value={mutate}>
        {children}
      </SampleMutationsContext.Provider>
    </SampleStateContext.Provider>
  );
};
// Export Contexts/Component
export {
  SampleProvider,
  SampleStateContext,
  SampleMutationsContext,
};
