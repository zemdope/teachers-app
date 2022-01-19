import React from 'react';
import {
  Logo,
  StyledLink,
  Wrapper
} from 'components/organisms/Navigation/Navigation.styles';

const Navigation = () => {
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
    </Wrapper>
  );
};

export default Navigation;
