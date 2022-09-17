import { FC } from 'react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import { AppRouter, ErrorBoundary } from '@common';
import { theme } from '@styles';
import { ThemeProvider } from 'styled-components';

import { store } from './store';

const App: FC = () => (
  <BrowserRouter>
    {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
    {/* @ts-ignore */}
    <ErrorBoundary>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <MuiThemeProvider theme={theme}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <AppRouter />
            </LocalizationProvider>
          </MuiThemeProvider>
        </ThemeProvider>
      </Provider>
    </ErrorBoundary>
  </BrowserRouter>
);

export default App;
