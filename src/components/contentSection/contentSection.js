import classes from './ContentSection.module.scss'
import ContentSectionItem from "../contentSection-item/contentSection-item.js";
import UpHeader from "../upHeaderSections/upHeaderSections";
import Filters from "../filters/filters";
import  { connect } from 'react-redux';
import ContentSectionItemError from "../contentSection-itemError/contentSection-itemError";
import ProgressSpin from "../progressSpin/progressSpin";

const ContentSection = ({ progressSpinScore, checkedList, ticketsData, filterState }) => {
    let index = 0;
    let error = false;
    ticketsData.map((item) => {
        item.index = index;
        index++;
    });
    const reserveTicketsData = ticketsData;
    let avgvalue = 0;
    let fiveData = [];
    let elements;
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
                Math.floor(item.price / (item.segments[0].duration + item.segments[1].duration)) <= 34
                &&
                Math.floor(item.price / (item.segments[0].duration + item.segments[1].duration)) >= 28);
        });
    }

    function filterDataByStops(data, allowedStops) {
        return data.filter(flight => {
            const stopsCount = flight.segments.reduce((total, segment) => total + segment.stops.length, 0);
            const stopType = stopsCount === 0 ? 'Без пересадок' : `${stopsCount} пересадки`;
            return allowedStops.includes(stopType);
        });
    }
    if (checkedList.includes('Без пересадок')
        || checkedList.includes('1 пересадки')
        || checkedList.includes('2 пересадки')
        || checkedList.includes('3 пересадки')){
        const filteredData = filterDataByStops(ticketsData, checkedList);
        ticketsData = filteredData
    }else{
        ticketsData = [];
    }
        if (ticketsData.length > 0) {
            if (ticketsData.length >= 5){
                for (let i = 0; i < 5; i++) {
                    fiveData.push(ticketsData[i]);
                }
            }else{
                fiveData = ticketsData;
            }
            elements = fiveData.map((item) => (
                <ContentSectionItem
                    key={item.index}
                    IATA_CODE={item.carrier === undefined ? item.carrier="DP" : item.carrier}
                    price={item.price}
                    segments={item.segments}
                ></ContentSectionItem>
            ));
        } else {
            elements = <ContentSectionItemError/>;
            error = true;
        }
        return (
            <div className={classes.main}>
                <div className={classes.leftSection}>
                    <Filters></Filters>
                </div>
                <div className={classes.rightSection}>
                    <UpHeader></UpHeader>
                    <ProgressSpin progressSpinScore={progressSpinScore}></ProgressSpin>
                    {elements}
                    {/*{!error ? <FooterButton></FooterButton> : <div></div>}*/}
                </div>
            </div>
        );
};

const mapStateToProps = (state) => {     //для переменных из стейт
    return {
        ticketsData: state.ticketsData,
        filterState: state.filterState,
        checkedList: state.checkedList,
        allDataIsLoaded: state.allDataIsLoaded,
        progressSpinScore: state.progressSpinScore,
    };
};
export default connect(mapStateToProps)(ContentSection);

