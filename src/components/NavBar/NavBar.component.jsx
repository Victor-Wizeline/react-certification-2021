import React, { useState } from 'react';

import { IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import {
  StyledNavBar,
  LightModeIcon,
  DarkModeIcon,
  AccountIcon,
  RightContainer,
} from './NavBar.styled';
import Search from './Search/Search.component';

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [lightMode, setLightMode] = useState(false);

  const handleMenu = () => {
    setOpen(true);
  };

  const changeTheme = () => {
    setLightMode(!lightMode);
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
        <MenuIcon />
      </IconButton>
      <Search />
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
