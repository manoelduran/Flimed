import React from 'react';
import { ThemeProvider } from 'styled-components';
import Rotas from './router';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './styles/global';
import theme from './styles/theme';
import { AuthProvider } from './hooks/useAuth';


const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AuthProvider>
        <Router>
          <Rotas />
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
