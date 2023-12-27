import React, { useContext } from 'react';
import classes from './ContentSection.module.scss'
import ContentSectionItem from "../contentSection-item/contentSection-item.js";
import UpHeader from "../upHeaderSections/upHeaderSections";
import Filters from "../filters/filters";
import  { connect } from 'react-redux';
import ContentSectionItemError from "../contentSection-itemError/contentSection-itemError";



const ContentSection = ({ ticketsData }) => {
    let fiveData = []
    let elements
    if (ticketsData.length > 5) {
        for (let i = 0; i<5; i++){
            fiveData.push(ticketsData[i]);
        }
        console.log(fiveData)
        elements = fiveData.map((item) => (
                <ContentSectionItem
                    key={item.price}
                    IATA_CODE={item.carrier}
                    price={item.price}
                    segments={item.segments}
                ></ContentSectionItem>
        ));
    }else{
        elements = <ContentSectionItemError/>;
    }
    return (
        <div className={classes.main}>
            <div className={classes.leftSection}>
                <Filters></Filters>
            </div>
            <div className={classes.rightSection}>
                <UpHeader></UpHeader>
                {elements}
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {     //для переменных из стейт
    return {
        ticketsData: state.ticketsData,
    }
}
export default connect(mapStateToProps)(ContentSection);

