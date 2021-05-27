import { useContext } from 'react';

// React Contexts
import { SampleStateContext } from 'contexts/SampleContext';

// `useSampleState` custom hook
// This hooks gives access to the state of the `SampleStateContext`.
const useSampleState = () => {
  const state = useContext(SampleStateContext);

  if (typeof state === 'undefined') {
    throw new Error('useSampleState must be used within a SampleProvider');
  }

  return state;
};

export default useSampleState;
