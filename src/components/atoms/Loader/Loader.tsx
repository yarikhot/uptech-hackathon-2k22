import { FC, ReactElement } from 'react';
import CircularProgress from '@mui/material/CircularProgress';

import { Wrap } from './styles';

export interface LoaderProps {
  isLoading: boolean;
  children?: ReactElement;
  height?: string;
}

export const Loader: FC<LoaderProps> = ({ children, isLoading, height }) => {
  if (isLoading) {
    return (
      <Wrap height={height}>
        <CircularProgress />
      </Wrap>
    );
  }

  return children || null;
};
