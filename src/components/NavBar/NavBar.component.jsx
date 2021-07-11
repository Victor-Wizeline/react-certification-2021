import React, { useState } from 'react';

import { IconButton } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import {
  StyledNavBar,
  LightModeIcon,
  DarkModeIcon,
  AccountIcon,
  RightContainer,
  LeftContainer,
  CustomHomeIcon,
  CustomMenuIcon,
} from './NavBar.styled';
import Search from './Search/Search.component';
import { useAppContext, themes } from '../../state/AppProvider';
import SideBar from './SideBar';
import LoginModal from '../LoginModal';

const NavBar = () => {
  const { state, dispatch } = useAppContext();
  const history = useHistory();
  const [sideBarState, setSideBarState] = useState(false);
  const [lightMode, setLightMode] = useState(false);
  const [open, setOpen] = useState(false);

  const changeSideBarState = () => {
    setSideBarState(!sideBarState);
  };

  const closeSideBar = () => {
    setSideBarState(false);
  };

  const closeLoginModal = () => {
    setOpen(false);
  };

  const changeTheme = () => {
    console.log(state.theme);
    setLightMode(!lightMode);
    dispatch({
      type: 'SET_THEME',
      payload: lightMode ? themes.light : themes.dark,
    });
  };

  return (
    <StyledNavBar>
      <IconButton
        color="inherit"
        aria-label="Open Menu"
        onClick={changeSideBarState}
        edge="start"
      >
        <CustomMenuIcon />
      </IconButton>
      <LeftContainer>
        <IconButton
          color="inherit"
          onClick={() => {
            history.push('/');
          }}
          aria-label="Go home"
        >
          <CustomHomeIcon />
        </IconButton>
        <Search />
      </LeftContainer>
      <RightContainer>
        <IconButton onClick={changeTheme} selected={lightMode} aria-label="Change theme">
          {!lightMode ? <LightModeIcon /> : <DarkModeIcon />}
        </IconButton>

        <IconButton
          color="inherit"
          aria-label="Log In"
          onClick={() => {
            setOpen(!open);
          }}
          edge="start"
        >
          <AccountIcon />
        </IconButton>
      </RightContainer>
      <SideBar open={sideBarState} onClose={closeSideBar} />
      <LoginModal isOpen={open} onClose={closeLoginModal} />
    </StyledNavBar>
  );
};

export default NavBar;
