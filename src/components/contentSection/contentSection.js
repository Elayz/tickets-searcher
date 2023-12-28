import React, { useContext } from 'react';
import classes from './ContentSection.module.scss'
import ContentSectionItem from "../contentSection-item/contentSection-item.js";
import UpHeader from "../upHeaderSections/upHeaderSections";
import Filters from "../filters/filters";
import  { connect } from 'react-redux';
import ContentSectionItemError from "../contentSection-itemError/contentSection-itemError";

let filtersMass = [];

const ContentSection = ({ checkedList, ticketsData, filterState }) => {
    let index = 0;
    ticketsData.map((item) => {
        item.index = index;
        index++;
    });
    let minPrice = 150000;
    const reserveTicketsData = ticketsData;
    let avgvalue = 0;
    let prefilterMass1 = [];
    let prefilterMass2 = [];
    let prefilterMass3 = [];
    let prefilterMass4 = [];
    let avg = [];
    if(filterState === 'cheap'){
        ticketsData = reserveTicketsData;
        ticketsData.sort((a, b) => a.price - b.price);
    } else if(filterState === 'fastest'){
        ticketsData = reserveTicketsData;
        ticketsData.sort((a, b) => (a.segments[0].duration + a.segments[1].duration) - (b.segments[0].duration + b.segments[1].duration));
    } else{
        ticketsData = reserveTicketsData;
        ticketsData.map((item) =>{
            let itemOpt = Math.floor(item.price / (item.segments[0].duration + item.segments[1].duration));
            avgvalue += itemOpt
        });
        avgvalue = Math.floor(avgvalue / ticketsData.length)
        ticketsData = ticketsData.filter((item) => {
            return (
                Math.floor(item.price / (item.segments[0].duration + item.segments[1].duration)) <= 32
                &&
                Math.floor(item.price / (item.segments[0].duration + item.segments[1].duration)) >= 30);
        });
    }

    // if(checkedList.includes('1 пересадка')){
    //     prefilterMass1 = ticketsData.filter((item) =>{
    //         return item.segments[0].stops.length === 1;
    //     })
    // }else{
    //     prefilterMass1 = ticketsData.filter((item) =>{
    //         return item.segments[0].stops.length !== 1;
    //     })
    // }
    // if(checkedList.includes('2 пересадки')){
    //     prefilterMass2 = ticketsData.filter((item) =>{
    //         return item.segments[0].stops.length === 2;
    //     })
    // }else {
    //     prefilterMass1 = ticketsData.filter((item) => {
    //         return item.segments[0].stops.length !== 2;
    //     })
    // }
    // filtersMass = [...prefilterMass2];
    // console.log(filtersMass)
    // console.log(ticketsData)

    let fiveData = [];
    let elements;
    if (ticketsData.length > 5) {
        for (let i = 0; i<5; i++){
            fiveData.push(ticketsData[i]);
        }



        elements = fiveData.map((item) => (
                <ContentSectionItem
                    key={item.index}
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
        filterState: state.filterState,
        checkedList: state.checkedList
    };
};
export default connect(mapStateToProps)(ContentSection);

