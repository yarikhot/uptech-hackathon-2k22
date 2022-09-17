import { useState, useEffect } from 'react';
import { Auth, Hub } from 'aws-amplify';
import { useQuery } from 'react-query';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { errorMessage, Profile, Roles } from '@services';
import { Axios, getFullName, setAuthToken, sortUsers } from '@helpers';
import { setProfile } from '@features';
import { ROUTES } from '@constants';
import { setUsers } from '@features/PeopleManagement/userSlice';

export const useUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const { refetch, data: profile } = useQuery<Profile, unknown>(
    'profile-info',
    () => Axios.get('api/profile/my').then((res) => res.data),
    {
      enabled: false,
      onSuccess: (_profile) => {
        if (!_profile?.workspace?.name) navigate(`/${ROUTES.CreateWorkspace}/${ROUTES.Step1}`);
        if (!getFullName(_profile) && _profile?.workspace?.name) {
          if (
            !window?.location?.pathname?.includes(ROUTES.CreateWorkspace) &&
            !_profile?.roles?.includes(Roles.Admin)
          ) {
            navigate(`/${ROUTES.FillProfile}`);
          } else {
            navigate(`/${ROUTES.CreateWorkspace}/${ROUTES.Step2}`);
          }
        }
        dispatch(setProfile(_profile));
        setIsLoading(false);
      },
      onError: (e) => {
        const error = e as Error;
        if (error?.message) errorMessage(error.message);
        setIsLoading(false);
      },
    },
  );

  const { refetch: fetchUsers } = useQuery<unknown, unknown, Profile[]>(
    'users',
    () => Axios.get('api/workspace/teachers').then((res) => res.data),
    { onSuccess: (users) => dispatch(setUsers(sortUsers(users))), enabled: false },
  );

  useEffect(() => {
    // eslint-disable-next-line consistent-return
    Hub.listen('auth', ({ payload: { event } }) => {
      switch (event) {
        case 'signIn':
          getUser();
          break;
        case 'signOut':
          setUser(null);
          break;
        case 'signIn_failure':
          // errorMessage('Something bad happened, please try again later.');
          break;
        default:
          return null;
      }
    });

    getUser();
  }, []);

  const getUser = () => {
    Auth.currentAuthenticatedUser()
      .then(async (userData) => {
        setUser(userData);
        await setAuthToken();
        refetch();
        fetchUsers();
      })
      .catch(() => setIsLoading(false));
  };

  return { isAuthorized: !!user && !!profile, isLoading };
};
