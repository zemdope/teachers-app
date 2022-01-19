import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import { Wrapper } from './Root.styles';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import Dashboard from 'views/Dashboard';
import FormField from 'components/molecules/FormField/FormField';
import { Button } from 'components/atoms/Button/Button';

const AuthenticatedApp = () => {
  return (
    <MainTemplate>
      <Wrapper>
        <Switch>
          <Route exact path='/'>
            <Redirect to='/group' />
          </Route>
          <Route path='/group/:id?'>
            <Dashboard />
          </Route>
        </Switch>
      </Wrapper>
    </MainTemplate>
  );
};

const UnuthenticatedApp = () => {
  return (
    <form
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
      }}>
      <FormField label='login' name='login' id='login' />
      <FormField label='pasword' name='pasword' id='pasword' type='password' />
      <Button>Sign in</Button>
    </form>
  );
};
const Root = () => {
  const user = null;
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />

        {user ? <AuthenticatedApp /> : <UnuthenticatedApp />}
      </ThemeProvider>
    </Router>
  );
};

export default Root;
