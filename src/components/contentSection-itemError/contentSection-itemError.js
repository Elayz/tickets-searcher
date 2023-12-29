import React from 'react';
import classes from './contentSection-itemError.module.scss'

const ContentSectionItemError = () => {

    return (
        <ol className={classes.main}>
            No flights matching the specified filters were found \(0o0)/
            <li>Try to reload page.</li>
            <li>Select other options.</li>
        </ol>
    );
};
export default ContentSectionItemError;

