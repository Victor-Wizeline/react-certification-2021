import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../../providers/Auth';
import { SideDrawerStyled } from './SideBar.styled';
import BlurEffect from '../../Effects';

const SideBar = (props) => {
  const { authenticated } = useAuth();

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
                <NavLink to="/" onClick={() => {}} onKeyDown={() => {}}>
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
