import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Auth } from 'aws-amplify';

import { ROUTES } from '@constants';
import { errorMessage } from '@services';
import { queryClient } from '@helpers';

export const useLogout = () => {
  const navigate = useNavigate();
  const logout = useCallback(async () => {
    try {
      await Auth.signOut();
      navigate(`/${ROUTES.Login}`);
      queryClient.setQueryData('profile', null);
    } catch (error) {
      errorMessage(String(error));
    }
  }, []);

  return logout;
};
