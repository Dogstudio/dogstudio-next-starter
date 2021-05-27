import { useContext, useCallback } from 'react';

// React Contexts
import { SampleMutationsContext } from 'contexts/SampleContext';

// `useSampleMutations` custom hook
// This hooks gives access to the `mutate` method of the `SampleProvider` HOC component.
const useSampleMutations = () => {
  const mutate = useContext(SampleMutationsContext);

  if (typeof mutate === 'undefined') {
    throw new Error('useSampleMutations must be used within a SampleProvider');
  }

  // Mutations
  const setSampleState = useCallback(
    (action) => {
      switch (action.type) {

      }
    },
    [mutate],
  );

  return { setSampleState };
};

export default useSampleMutations;
