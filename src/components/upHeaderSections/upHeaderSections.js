import React from 'react';
import classes from './upHeaderSections.module.scss'
import {bindActionCreators} from "redux";
import  { connect } from 'react-redux';
import * as actions from "../../actions";
import {onSortTickets} from "../../actions";


const UpHeader = ({onSortTickets}) => {
    return (
        <div className={classes.main}>
            <div id={'cheap'} onClick={onSortTickets} className={classes.d1}>
                самый дешёвый
            </div>
            <div id={'fastest'} onClick={onSortTickets} className={classes.d2}>
                самый быстрый
            </div>
            <div id={'optimal'} onClick={onSortTickets} className={classes.d3}>
                оптимальный
            </div>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => {
    const {onSortTickets} = bindActionCreators(actions, dispatch);
    return {
        onSortTickets
    }
};
export default connect(mapDispatchToProps,actions)(UpHeader);

