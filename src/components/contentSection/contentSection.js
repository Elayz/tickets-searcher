import React, { useContext } from 'react';
import classes from './ContentSection.module.scss'
import ContentSectionItem from "../contentSection-item/contentSection-item.js";
import UpHeader from "../upHeaderSections/upHeaderSections";
import Filters from "../filters/filters";



const ContentSection = () => {
    const inputValue = [{value: 'hehe1', id:1},{value: 'hehe2', id:2},{value: 'hehe3', id:3}]
    const elsements = inputValue.map((item) => (
        <ContentSectionItem
            key={item.id}
            value={item.value}
        ></ContentSectionItem>
    ));
    return (
        <div className={classes.main}>
            <div className={classes.leftSection}>
                <Filters></Filters>
            </div>
            <div className={classes.rightSection}>
                <UpHeader></UpHeader>
                {elsements}
            </div>
        </div>
    );
};
export default ContentSection;

