import React from 'react';
import { ThemeProvider } from 'styled-components';
import Rotas from './router';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './styles/global';
import theme from './styles/theme';


const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Rotas />
      </Router>
    </ThemeProvider>
  );
}

export default App;
