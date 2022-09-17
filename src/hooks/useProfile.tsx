import { useSelector } from 'react-redux';

import { User } from 'src/Types';

export const useProfile = () => {
  const profile = useSelector((state: any) => state.profile);

  return { profile: profile as User };
};
