import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';

export const Nav = styled.nav`
  background: #ecbc15;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 10;
  font-size: 1rem;

  @media screen and (max-width: 1900px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80%;
  z-index: 1;
  width: 95%;
  padding: 0 4px;
  max-width: 1800px;
  //   background-color: green;
`;

export const Navlogo = styled(LinkR)`
    width: 10%;
    height: 100%;
    cursor: pointer;
    display; flex;
    align-items: center;
    justify-content: center;
    // background-color: red;
    padding-left: 4px;

`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 760px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #0d0d7f;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;
  padding-top: 10px;

  @media screen and (max-width: 760px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
  padding-top: 20px;
`;
export const NavLinks = styled(LinkS)`
  color: #0d0d7f;
  display: flex;
  aliign-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid yellow;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  background: #ef305c;
  border-radius: 20%;

  @media screen and (max-width: 760px) {
    display: none;
  }
`;

export const NavBtnLink = styled(LinkR)`
  border-radius: 20%;
  white-space: nowrap;
  padding: 22px;
  color: white;
  font-size: 16px;
  font-weight: bold;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2x ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2x ease-in-out;
    background: yellow;
    color: #0d0d7f;
    padding: 22px;
  }
`;
