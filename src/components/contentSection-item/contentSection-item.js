import React, { useContext } from 'react';
import classes from './contentSection-item.module.scss'
import s7 from '../imgs/S7Logo.svg'

const ContentSectionItem = () => {

    return (
        <div className={classes.main}>
            <div className={classes.cardHeader}>
                <div className={classes.cardHeaderPriceText}>
                    13 400 P
                </div>
                <img src={s7}></img>
            </div>
            <div className={classes.cardFooter}>
                <div className={classes.info}>
                    <p className={classes.smoothText}>MOW - HKT</p>
                    <p className={classes.hardText}>10:00 - 10:00</p>
                </div>
                <div className={classes.info}>
                    <p className={classes.smoothText}>В ПУТИ</p>
                    <p className={classes.hardText}>21ч 15м</p>
                </div>
                <div className={classes.info}>
                    <p className={classes.smoothText}>2 ПЕРЕСАДКИ</p>
                    <p className={classes.hardText}>HKG, JNB</p>
                </div>
            </div>
            <div className={classes.cardFooter}>
                <div className={classes.info}>
                    <p className={classes.smoothText}>MOW - HKT</p>
                    <p className={classes.hardText}>10:00 - 10:00</p>
                </div>
                <div className={classes.info}>
                    <p className={classes.smoothText}>В ПУТИ</p>
                    <p className={classes.hardText}>21ч 15м</p>
                </div>
                <div className={classes.info}>
                    <p className={classes.smoothText}>2 ПЕРЕСАДКИ</p>
                    <p className={classes.hardText}>HKG, JNB</p>
                </div>
            </div>
        </div>
    );
};
export default ContentSectionItem;

