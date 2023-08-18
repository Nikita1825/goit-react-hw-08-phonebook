import React from 'react'
import { useSelector } from 'react-redux';
import { selectUserData } from 'redux/auth/authReduser';
import css from './Menu.module.css'

export const UserMenu = () => {
   
    const { email, name } = useSelector(selectUserData);
     
  return (
    <div className={css.userMenu}>
      <p className={css.infoUser}>User: {name}</p>
      <p className={css.infoUser}>{email}</p>
    </div>
  );
}

