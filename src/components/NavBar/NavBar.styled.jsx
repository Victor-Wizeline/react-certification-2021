import styled from 'styled-components';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import HomeIcon from '@material-ui/icons/Home';
import MenuIcon from '@material-ui/icons/Menu';
import Avatar from '@material-ui/core/Avatar';

export const StyledNavBar = styled.nav`
  background-color: ${(props) => props.theme.navBackground};
  box-shadow: 8px 2px 20px 0px rgba(0, 0, 0, 0.08);
  width: 100%;
  height: 48px;
  padding: 10px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
`;

export const RightContainer = styled.div`
  justify-content: right;
`;

export const LeftContainer = styled.div`
  justify-content: left;
  display: flex;
  align-items: center;
`;

export const DarkModeIcon = styled(Brightness4Icon)`
  color: white;
`;

export const LightModeIcon = styled(Brightness7Icon)`
  color: white;
`;

export const AccountIcon = styled(AccountCircleIcon)`
  color: ${(props) => props.theme.fontColor};
`;

export const CustomHomeIcon = styled(HomeIcon)`
  color: ${(props) => props.theme.fontColor};
`;

export const CustomMenuIcon = styled(MenuIcon)`
  color: ${(props) => props.theme.fontColor};
`;

export const StyledAvatar = styled(Avatar)`
  height: 30px;
  width: 30px;
`;
