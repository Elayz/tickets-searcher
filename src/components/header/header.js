import React, { useContext } from 'react';
import classes from './Header.module.scss'
import logo from '../imgs/Logo.svg'

const Header = () => {
    return (
        <div className={classes.main}>
            <img className={classes.imgClass} src={logo}></img>
        </div>
    );
};
export default Header;

