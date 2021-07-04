import styled from 'styled-components';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

export const StyledNavBar = styled.nav`
  background-color: rgb(165, 42, 42);
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
  color: black;
`;

export const LightModeIcon = styled(Brightness7Icon)`
  color: white;
`;

export const AccountIcon = styled(AccountCircleIcon)`
  color: black;
`;
