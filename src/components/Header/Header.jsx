import React, { Component } from 'react';
import classes from'./Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) =>{
    return <header className={classes.header}>
    <img src='https://images.squarespace-cdn.com/content/v1/5b8f9107b105986303431f14/1536137733445-C0OIK3M1MJRKX9ZO34Z7/logo-header.png' />

        /*тоесть если я авторизован то пишем логин*/
    <div className={classes.loginBlock}>
        {props.isAuth
            ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div>
            : <NavLink to="/login" >Login</NavLink> }
    </div>
  </header >;
}

export default Header;