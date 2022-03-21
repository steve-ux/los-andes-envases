import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';
import Logo from "../../image/logo.png";

const Nav = styled.nav`
  height: 15vh;
  width: 100%;
  position: absolute;
  display: flex;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.616);
  z-index: 2;

  .logo {
    padding: 15px 15px;
  }
  .logoNav {
    width: 8vw;
    padding: 10px;
  }
  @media (max-width: 759px) {
    .logoNav {
      width: 16vw;
    }
  }
`

const Navbar = () => {
  return (
    <Nav>
      <div className="logo">
        <img className="logoNav" src={Logo} alt="Logo envases Los Andes"/>
      </div>
      <Burger />
    </Nav>
  )
}

export default Navbar;
