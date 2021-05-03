import React from 'react';
import { FaBars } from 'react-icons/fa';

import logo from './../../images/logo.png';
import {
  Nav,
  NavbarContainer,
  Navlogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <Navlogo to="/">
            <img id="logo" src={logo} alt="logo" />
          </Navlogo>
          <MobileIcon>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about"> About Us</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="join">Get Involved</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="partners">Partners</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/Donate">Donate</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
