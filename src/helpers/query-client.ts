import { QueryClient } from 'react-query';

import { errorMessage } from '@services';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retryDelay: 3000,
      retry: 1,
      cacheTime: 0,
      onError: (e) => {
        console.log('e', e);
        const error = e as Error;

        if (error?.message) errorMessage(String(error?.message));

        return error;
      },
    },
  },
});
