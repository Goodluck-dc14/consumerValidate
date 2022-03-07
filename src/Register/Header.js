import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <Container>
      <Wrapper>
        <Logo to="/">CodeLab</Logo>
        <Navigation>
          <Home to="/create">Create store</Home>
          <Register to="/register">Create an Account</Register>
        </Navigation>

        <Nav to="/signin">Sign In</Nav>
        <Button>Sign Out</Button>
      </Wrapper>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  width: 100%;
  height: 100px;
  background-color: #004080;
  color: white;
  position: fixed;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  margin: 0 20px;
  align-items: center;
`;
const Navigation = styled.div`
  display: flex;
  flex: 1;
`;

const Button = styled.div`
  padding: 15px 30px;
  background: ${({ bg }) => bg};
  font-size: 20px;
  transition: all 350ms;
  transform: scale(1);
  background: #f8003f;
  border-radius: 3px;
  margin: 0 10px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;

  :hover {
    cursor: pointer;
    transform: scale(0.97);
  }
`;

const Home = styled(NavLink)`
  padding: 15px 20px;
  border-radius: 3px;
  transition: all 350ms;
  margin: 0 10px;
  text-decoration: none;
  color: white;
  &.active {
    background-color: rgba(255, 255, 255, 0.3);
  }
  :hover {
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.5);
  }
`;

const Register = styled(NavLink)`
  padding: 15px 20px;
  border-radius: 3px;
  transition: all 350ms;
  margin: 0 10px;
  text-decoration: none;
  color: white;
  &.active {
    background-color: rgba(255, 255, 255, 0.3);
  }
  :hover {
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.5);
  }
`;

const Logo = styled.div`
  color: white;
  margin: 0 20px;
  font-size: 30px;
  font-weight: bold;
  cursor: pointer;
`;

const Nav = styled(NavLink)`
  padding: 15px 20px;
  border-radius: 3px;
  transition: all 350ms;
  margin: 0 10px;
  text-decoration: none;
  color: white;
  &.active {
    background-color: rgba(255, 255, 255, 0.3);
  }
  :hover {
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.5);
  }
`;
