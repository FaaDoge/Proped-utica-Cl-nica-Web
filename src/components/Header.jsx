import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaStethoscope } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 50px;
  border-radius: 18px;
  background-color: #00A367; /* Color primario */
  color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;

`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const LogoIcon = styled(FaStethoscope)`
  font-size: 2rem;
  margin-right: 10px;
  animation: ${() => keyframes`
    0%, 100% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(20deg);
    }
  `} 2s infinite;
`;

const LogoText = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
`;

const NavLink = styled(Link)`
  font-size: 1rem;
  margin-left: 20px;
  text-decoration: none;
  color: #fff;
  font-family: 'Roboto', sans-serif;
  position: relative;

  &:after {
    content: '';
    display: block;
    width: 0;
    height: 2px;
    background: #fff;
    transition: width .3s;
    position: absolute;
    left: 0;
    bottom: -5px;
  }

  &:hover:after {
    width: 100%;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <LogoContainer>
        <LogoIcon />
        <LogoText>Propedéutica Clínica Web</LogoText>
      </LogoContainer>
      <Nav>
        <NavLink to="/">Inicio</NavLink>
        <NavLink to="/glosario">Glosario</NavLink>
        <NavLink to="/nomenclatura">Nomenclatura</NavLink>
        <NavLink to="/enfermedades">Enfermedades</NavLink>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
