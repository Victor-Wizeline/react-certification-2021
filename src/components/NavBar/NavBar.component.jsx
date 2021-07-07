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

const NavBar = ({ handleSearchChange }) => {
  const { state, dispatch } = useAppContext();
  const history = useHistory();
  const [open, setOpen] = useState(false);
  const [lightMode, setLightMode] = useState(false);

  const handleMenu = () => {
    setOpen(true);
  };

  const changeTheme = () => {
    console.log(state.theme);
    setLightMode(!lightMode);
    dispatch({
      type: 'SET_THEME',
      payload: lightMode ? themes.light : themes.dark,
    });
  };

  if (open) console.log('test');

  return (
    <StyledNavBar>
      <IconButton
        color="inherit"
        aria-label="Open Menu"
        onClick={handleMenu}
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
        <Search handleSearchChange={handleSearchChange} />
      </LeftContainer>
      <RightContainer>
        <IconButton onClick={changeTheme} selected={lightMode} aria-label="Change theme">
          {!lightMode ? <LightModeIcon /> : <DarkModeIcon />}
        </IconButton>

        <IconButton color="inherit" aria-label="Log In" onClick={() => {}} edge="start">
          <AccountIcon />
        </IconButton>
      </RightContainer>
    </StyledNavBar>
  );
};

export default NavBar;
