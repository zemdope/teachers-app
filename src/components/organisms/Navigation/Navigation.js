import React from 'react';
import {
  Logo,
  StyledLink,
  Wrapper
} from 'components/organisms/Navigation/Navigation.styles';
import { useAuth } from '../../../hooks/useAuth';

const Navigation = () => {
  const auth = useAuth();
  return (
    <Wrapper>
      <Logo>
        <h1>
          Teachers
          <br />
          App
        </h1>
      </Logo>
      <StyledLink to='/group'>Dashboard</StyledLink>
      <StyledLink to='/notes'>Notes</StyledLink>
      <StyledLink as='a' onClick={auth.signOut}>
        Logout
      </StyledLink>
    </Wrapper>
  );
};

export default Navigation;
