import React, {useEffect} from 'react';
import classes from './filters.module.scss';
import  { connect } from 'react-redux';
import * as actions from "../../actions";
import { bindActionCreators } from "redux";
import { Checkbox, Radio } from 'antd';
import {onChange} from "../../actions";

const CheckboxGroup = Checkbox.Group;
const plainOptions = ['Без пересадок', '1 пересадка', '2 пересадки', '3 пересадки'];

const Filters = ({ value, onCheckAllChange, onChange, first }) => {
    useEffect(() => {
        first()
        return () => {

        };
    }, []);

    return (
        <div className={classes.main}>
            <div>
                <Checkbox
                    onChange={onCheckAllChange}
                    checked={value.checkAll}
                >
                    Все
                </Checkbox>
            </div>
            <br/>

            <CheckboxGroup
                className={classes.checkBoxList}
                options={plainOptions}
                value={value.checkedList}
                onChange={onChange}/>

        </div>
    );
};


const mapStateToProps = (state) => {
    return {
        value: state,
    }
}
const mapDispatchToProps = (dispatch) => {
    const {onCheckAllChange, onChange, first} = bindActionCreators(actions, dispatch);
    return {
        onCheckAllChange,
        onChange,
        first,
    }
};
export default connect(mapStateToProps, actions)(Filters);

