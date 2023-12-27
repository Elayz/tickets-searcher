import React from 'react';
import classes from './contentSection-item.module.scss'
import {format} from 'date-fns';

const ContentSectionItem = (props) => {
    const {segments, IATA_CODE, price} = props;
    let transfer1;
    let transfer2;
    const durationMin1 = segments[0].duration
    const durationMin2 = segments[1].duration
    const takeoff1 = segments[0].date
    const takeoff2 = segments[1].date

    function convertMinutesToHoursAndMinutes(minutes) {
        const hours = Math.floor(minutes / 60);
        const remainingMinutes = minutes % 60;
        const formattedTime = format(new Date().setHours(hours, remainingMinutes), 'HHч mmм');
        return formattedTime;
    }
    function convertMinutesToHoursAndMinutes2(minutes) {
        const hours = Math.floor(minutes / 60);
        const remainingMinutes = minutes % 60;
        const formattedTime = format(new Date().setHours(hours, remainingMinutes), 'HH:mm');
        return formattedTime;
    }
    function convertDateToHoursAndMinutes(dateString) {
        const date = new Date(dateString).getTime();
        return format(date, 'HH:mm');
    }
    function addTimes(time1String, time2String) {
        const t1 = convertDateToHoursAndMinutes(time1String)
        const t2 = convertMinutesToHoursAndMinutes2(time2String)
        const [hours1, minutes1] = t1.split(':').map(Number);
        const [hours2, minutes2] = t2.split(':').map(Number);

        let totalHours = hours1 + hours2;
        let totalMinutes = minutes1 + minutes2;

        if (totalMinutes >= 60) {
            totalHours += Math.floor(totalMinutes / 60);
            totalMinutes = totalMinutes % 60;
        }

        if (totalHours >= 24) {
            totalHours = totalHours % 24;
        }

        // Форматируем общее время
        const formattedSum = `${pad(totalHours)}:${pad(totalMinutes)}`;
        return formattedSum;
    }
    function pad(num) {
        return String(num).padStart(2, '0');
    }


    const transferName1 = segments[0].stops.join(', ');
    const transferName2 = segments[1].stops.join(', ');
    switch (segments[0].stops.length) {
        case 1:
            transfer1 = `1 ПЕРЕСАДКА`
            break;
        case 0:
            transfer1 = `БЕЗ ПЕРЕСАДОК`
            break;
        default:
            transfer1 = `${segments[0].stops.length} ПЕРЕСАДКИ`
    }
    switch (segments[1].stops.length) {
        case 1:
            transfer2 = `1 ПЕРЕСАДКА`
            break;
        case 0:
            transfer2 = `БЕЗ ПЕРЕСАДОК`
            break;
        default:
            transfer2 = `${segments[1].stops.length} ПЕРЕСАДКИ`
    }
    return (
        <div className={classes.main}>
            <div className={classes.cardHeader}>
                <div className={classes.cardHeaderPriceText}>
                    {price} Р
                </div>
                <img src={`https://pics.avs.io/99/36/${IATA_CODE}.png`}></img>
            </div>
            <div className={classes.cardFooter}>
                <div className={classes.info}>
                    <p className={classes.smoothText}>{segments[0].origin} - {segments[0].destination}</p>
                    <p className={classes.hardText}>{convertDateToHoursAndMinutes(takeoff1)} - {addTimes(takeoff1, durationMin1)}</p>
                </div>
                <div className={classes.info}>
                    <p className={classes.smoothText}>В ПУТИ</p>
                    <p className={classes.hardText}>
                        {convertMinutesToHoursAndMinutes(durationMin1)}
                    </p>
                </div>
                <div className={classes.info}>
                    <p className={classes.smoothText}>
                        {transfer1}
                    </p>
                    <p className={classes.hardText}>{transferName1}</p>
                </div>
            </div>





            <div className={classes.cardFooter}>
                <div className={classes.info}>
                    <p className={classes.smoothText}>{segments[0].origin} - {segments[1].destination}</p>
                    <p className={classes.hardText}>{convertDateToHoursAndMinutes(takeoff2)} - {addTimes(takeoff2, durationMin2)}</p>
                </div>
                <div className={classes.info}>
                    <p className={classes.smoothText}>В ПУТИ</p>
                    <p className={classes.hardText}>
                        {convertMinutesToHoursAndMinutes(durationMin2)}
                    </p>
                </div>
                <div className={classes.info}>
                    <p className={classes.smoothText}>
                        {transfer2}
                    </p>
                    <p className={classes.hardText}>{transferName2}</p>
                </div>
            </div>
        </div>
    );
};
export default ContentSectionItem;

