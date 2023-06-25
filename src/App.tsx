import { FC } from 'react';
import { ThemeProvider } from 'styled-components';

import * as Styled from './App.styled';
import * as theme from './theme';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
import { ItemCardSmall } from './components/ItemCardSmall';
import { ItemCard } from './components/ItemCard';
import { Home } from './pages/Home';

const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Styled.GlobalStyles />
      {/* <Login /> */}
      {/* <Signup /> */}
      <ItemCardSmall />
      {/* <ItemCard /> */}
      {/* <Home /> */}
    </ThemeProvider>
  );
};

export default App;
