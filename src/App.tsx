import { FC } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import * as Styled from './App.styled';
import * as theme from './theme';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
import { Home } from './pages/Home';
<<<<<<< HEAD
import { ModalBooking } from './components/ModalBooking';

const App: FC = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <ThemeProvider theme={theme}>
        <Styled.GlobalStyles />
        <Login />
        {/* <Signup /> */}
        {/* <ItemCardSmall /> */}
        {/* <ItemCard /> */}
        {/* <Home /> */}
        <ModalBooking cafeName="Very Well Cafe" />
      </ThemeProvider>
    </LocalizationProvider>
=======
import { appRoutes } from './routes/Routes';
import { Cafe } from './pages/Cafe';
import { ScrollToTop } from './helpers/ScrollToTop';

const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Styled.GlobalStyles />
      <BrowserRouter>
        <ScrollToTop>
          <Routes>
            <Route path={appRoutes.home} element={<Home />} />
            <Route path={appRoutes.login} element={<Login />} />
            <Route path={appRoutes.register} element={<Signup />} />
            <Route path={appRoutes.cafes} element={<Cafe />} />
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
    </ThemeProvider>
>>>>>>> main
  );
};

export default App;
