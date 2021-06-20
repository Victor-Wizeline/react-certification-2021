import React, { useState } from 'react';

import { IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import { useHistory } from 'react-router-dom';
import {
  StyledNavBar,
  LightModeIcon,
  DarkModeIcon,
  AccountIcon,
  RightContainer,
  LeftContainer,
} from './NavBar.styled';
import Search from './Search/Search.component';

const NavBar = ({ handleSearchChange }) => {
  const history = useHistory();
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
      <LeftContainer>
        <IconButton
          color="inherit"
          onClick={() => {
            history.push('/');
          }}
          aria-label="Go home"
        >
          <HomeIcon />
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
