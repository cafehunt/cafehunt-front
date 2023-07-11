import { FC } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

import * as Styled from './App.styled';
import * as theme from './theme';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
import { Home } from './pages/Home';
import { appRoutes } from './routes/Routes';
import { Cafe } from './pages/Cafe';
import { ScrollToTop } from './helpers/ScrollToTop';
import { Account } from './pages/Account';
import { NotFound } from './pages/NotFound';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

const App: FC = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <ThemeProvider theme={theme}>
        <Styled.GlobalStyles />
        <BrowserRouter>
          <ScrollToTop>
            <QueryClientProvider client={queryClient}>
              <Routes>
                <Route path={appRoutes.home} element={<Home />} />
                <Route path={appRoutes.login} element={<Login />} />
                <Route path={appRoutes.register} element={<Signup />} />
                <Route path={appRoutes.cafes} element={<Cafe />} />
                <Route path={appRoutes.account} element={<Account />} />
                <Route path={appRoutes.notFound} element={<NotFound />} />
              </Routes>
            </QueryClientProvider>
          </ScrollToTop>
        </BrowserRouter>
      </ThemeProvider>
    </LocalizationProvider>
  );
};

export default App;
