import React from 'react';
import {
  SideBarContainer,
  Icon,
  CloseIcon,
  SideBarWrapper,
  SideBarLink,
  SideBtnWrap,
  SideBarRoute,
  SideBarMenu,
} from '../SideBarMobileView/SideBarElements';

const SideBarMobileView = ({ isOpen, toggle }) => {
  return (
    <SideBarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SideBarWrapper>
        <SideBarMenu>
          <SideBarLink to="about">About Us</SideBarLink>
          <SideBarLink to="partners">Partners</SideBarLink>
          <SideBarLink to="join">Get Involved</SideBarLink>
        </SideBarMenu>
        <SideBtnWrap>
          <SideBarRoute to="/donate">Donate</SideBarRoute>
        </SideBtnWrap>
      </SideBarWrapper>
    </SideBarContainer>
  );
};

export default SideBarMobileView;
