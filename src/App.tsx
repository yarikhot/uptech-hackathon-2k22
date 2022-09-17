import { FC } from 'react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { BrowserRouter } from 'react-router-dom';
import { QueryClientProvider } from 'react-query';
import { ToastContainer, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import { AppRouter, ErrorBoundary } from '@common';
import { theme } from '@styles';
import { ThemeProvider } from 'styled-components';
import { queryClient } from '@helpers';

import { store } from './store';

const App: FC = () => (
  <BrowserRouter>
    <ErrorBoundary>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <MuiThemeProvider theme={theme}>
            <QueryClientProvider client={queryClient}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <AppRouter />
              </LocalizationProvider>
              <ToastContainer
                position="top-center"
                autoClose={5000}
                transition={Slide}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                toastClassName="toast-customize"
              />
            </QueryClientProvider>
          </MuiThemeProvider>
        </ThemeProvider>
      </Provider>
    </ErrorBoundary>
  </BrowserRouter>
);

export default App;
