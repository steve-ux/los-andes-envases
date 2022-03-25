import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  li {
    padding: 30px 30px;
    font-family: Telegraf Ultrabold;
    color: white;
    text-transform: uppercase;
  }
  li:hover {
      color: #a31c46;
  }
  a {
      text-decoration: none;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: white;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 200px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    z-index: 19;

    li {
      color: black;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <Link to="/"><li>INICIO</li></Link>
      <Link to="/SobreNosotros"><li>NOSOTROS</li></Link>
      <Link to="/Contacto"><li>CONTACTO</li></Link>
    </Ul>
  )
}

export default RightNav;