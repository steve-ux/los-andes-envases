import React from "react";
import styled from "styled-components";
import Burger from "./Burger";
import Logo from "../../image/logo.png";

const Nav = styled.nav`
  height: 12vh;
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: black;
  z-index: 20;

  .logo {
    padding: 0.5px 30px;
  }
  .logoNav {
    width: 7vw;
    padding: 8px;
  }
  @media (max-width: 759px) {
    .logoNav {
      width: 12vw;
    }
  }
  @media (max-width: 520px) {
    .logoNav {
      width: 14vw;
    }
  }
  @media (max-width: 420px) {
    .logoNav {
      width: 18vw;
    }
  }
`;

const Navbar = () => {
  return (
    <Nav className="navigator">
      <div className="logo">
        <img className="logoNav" src={Logo} alt="Logo envases Los Andes" />
      </div>
      <Burger />
    </Nav>
  );
};

export default Navbar;
