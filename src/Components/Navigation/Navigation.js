import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getIsAuthenticated } from '../../redux/auth/auth-selectors';

import s from '../../Components/Navigation/Navigation.module.css';

const Navigation = () => {
  const isAuthenticated = useSelector(getIsAuthenticated);
  return (
    <nav>
      <NavLink to="/" className={s.link}>
        HOME
      </NavLink>

      {isAuthenticated && (
        <NavLink to="/contacts" className={s.link}>
          CONTACTS
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
