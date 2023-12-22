import React from 'react';
import classes from './filters.module.scss'

const Filters = () => {
    return (
        <div className={classes.main}>
            <p className={classes.text}>КОЛИЧЕСТВО ПЕРЕСАДОК</p>
            <label className={classes.checkBox}>
                <input type="checkbox"/>
                <span>Все</span>
            </label>
            <label className={classes.checkBox}>
                <input type="checkbox"/>
                <span>Без пересадок</span>
            </label>
            <label className={classes.checkBox}>
                <input type="checkbox"/>
                <span>1 пересадка</span>
            </label>
            <label className={classes.checkBox}>
                <input type="checkbox"/>
                <span>2 пересадки</span>
            </label>
            <label className={classes.checkBox}>
                <input type="checkbox"/>
                <span>3 пересадки</span>
            </label>
        </div>
    );
};
export default Filters;

