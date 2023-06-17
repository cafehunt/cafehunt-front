import { FC } from 'react';
import { ThemeProvider } from 'styled-components';

import * as Styled from './App.styled';
import * as theme from './theme';
import { Login } from './pages/Login/Login';

const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Styled.GlobalStyles />
      <Login />
    </ThemeProvider>
  );
};

export default App;
