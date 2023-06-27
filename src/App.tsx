import { FC } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { ThemeProvider } from 'styled-components';

import * as Styled from './App.styled';
import * as theme from './theme';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
import { ItemCardSmall } from './components/ItemCardSmall';
import { ItemCard } from './components/ItemCard';
import { Home } from './pages/Home';
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
  );
};

export default App;
