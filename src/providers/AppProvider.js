import React from 'react';
import { theme } from '../assets/styles/theme';
import { GlobalStyle } from '../assets/styles/GlobalStyle';
import { AuthProvider } from '../hooks/useAuth';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import { ErrorProvider } from 'hooks/useError';
import { Provider } from 'react-redux';
import { store } from 'store';

const AppProvider = ({ children }) => {
  return (
    <Provider store={store}>
      <Router>
        <ThemeProvider theme={theme}>
          <ErrorProvider>
            <AuthProvider>
              <GlobalStyle />
              {children}
            </AuthProvider>
          </ErrorProvider>
        </ThemeProvider>
      </Router>
    </Provider>
  );
};

export default AppProvider;
