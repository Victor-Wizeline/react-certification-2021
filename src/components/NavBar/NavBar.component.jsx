import React, { useState } from 'react';

import { IconButton } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import {
  StyledAvatar,
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
import { storage } from '../../utils/storage';

const NavBar = () => {
  const { state, dispatch } = useAppContext();
  const { authenticated } = state;
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

        {!authenticated ? (
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
        ) : (
          <IconButton color="inherit" aria-label="Log Out" edge="start">
            <StyledAvatar src={storage.get('sessionData').avatarUrl} />
          </IconButton>
        )}
      </RightContainer>
      <SideBar open={sideBarState} onClose={closeSideBar} />
      <LoginModal isOpen={open} onClose={closeLoginModal} />
    </StyledNavBar>
  );
};

export default NavBar;
