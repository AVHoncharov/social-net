import React from "react";
import { NavLink, Redirect } from "react-router-dom";
import style from  './Header.module.css';

export type MapHeaderPropsType = {
  isAuth: boolean,
  login: string | null,
}

export type MapDispatchHeaderPropsType = {
  logout: () => void
}

const Header:React.FC<MapHeaderPropsType & MapDispatchHeaderPropsType> = (props) => {

  const handleLogout = () => {
    props.logout();
  }

  return <div className={style.header}>
      <div className={style.loginBlock}>
          {props.isAuth 
          ? <div>{props.login} - <button onClick={handleLogout}>Logout</button></div>
          : <NavLink to={'/login'}>Login</NavLink>}
      </div>
  </div>;
};

export default Header;