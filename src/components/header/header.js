import React, { useContext } from 'react';
import classes from './Header.module.scss'
import logo from '../imgs/Logo.svg'

const Header = () => {
    return (
        <div className={classes.main}>
            <img src={logo}></img>
        </div>
    );
};
export default Header;

