import React from 'react';
import { NavLink } from 'react-router-dom';
import { SideDrawerStyled } from './SideBar.styled';
import BlurEffect from '../../Effects';
import { useAppContext } from '../../../state/AppProvider';

const SideBar = (props) => {
  const { state, dispatch } = useAppContext();
  const { authenticated } = state;

  const logout = () => {
    dispatch({ type: 'SET_DEAUTH_USER' });
  };

  return (
    <>
      <BlurEffect show={props.open} onClick={props.onClose} />
      <SideDrawerStyled
        onClick={props.onClose}
        onKeyDown={props.onClose}
        open={props.open}
      >
        <nav>
          <ul className="NavigationItems">
            <li>
              <NavLink exact to="/" activeClassName="activeLink">
                Home
              </NavLink>
            </li>
            {authenticated ? (
              <li>
                <NavLink exact to="/favorites" activeClassName="activeLink">
                  Favorites
                </NavLink>
              </li>
            ) : (
              ''
            )}
            {authenticated ? (
              <li>
                <NavLink to="/" onClick={logout}>
                  Logout
                </NavLink>
              </li>
            ) : null}
          </ul>
        </nav>
      </SideDrawerStyled>
    </>
  );
};

export default SideBar;
