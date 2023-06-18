import { FC } from 'react';
import { ThemeProvider } from 'styled-components';

import * as Styled from './App.styled';
import * as theme from './theme';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';

const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Styled.GlobalStyles />
      {/* <Login /> */}
      <Signup />
    </ThemeProvider>
  );
};

export default App;
