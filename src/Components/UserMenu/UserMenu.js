import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../redux/auth/auth-operations';
import { getUsername } from '../../redux/auth/auth-selectors';

import s from '../UserMenu/UserMenu.module.css';

const UserMenu = () => {
  const name = useSelector(getUsername);
  const dispatch = useDispatch();
  const LogOut = () => {
    dispatch(logOut());
  };
  return (
    <div className={s.container}>
      <p className={s.greeting}>
        Welcome to your PhoneBook,<span className={s.name}> {name}</span>
      </p>
      <button className={s.button} onClick={LogOut} type="button">
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
