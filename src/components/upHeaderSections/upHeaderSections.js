import React, { useContext } from 'react';
import classes from './upHeaderSections.module.scss'


const UpHeader = () => {
    return (
        <div className={classes.main}>
            <div className={classes.d1}>
                <p>самый дешёвый</p>
            </div>
            <div className={classes.d2}>
                <p>самый быстрый</p>
            </div>
            <div className={classes.d3}>
                <p>оптимальный</p>
            </div>
        </div>
    );
};
export default UpHeader;

