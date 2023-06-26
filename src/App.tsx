import { FC } from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import * as Styled from './App.styled';
import * as theme from './theme';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
import { Home } from './pages/Home';
import { appRoutes } from './routes/Routes';
import { Cafe } from './pages/Cafe';

const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Styled.GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path={appRoutes.home} element={<Home />} />
          <Route path={appRoutes.login} element={<Login />} />
          <Route path={appRoutes.register} element={<Signup />} />
          <Route path={appRoutes.cafes} element={<Cafe />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
