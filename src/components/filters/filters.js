import React from 'react';
import classes from './filters.module.scss';
import  { connect } from 'react-redux';
import * as actions from "../../actions";
import { bindActionCreators } from "redux";
import { Checkbox, Radio } from 'antd';

const CheckboxGroup = Checkbox.Group;
const plainOptions = ['Без пересадок', '1 пересадки', '2 пересадки', '3 пересадки'];

const Filters = ({ value, onCheckAllChange, onChange }) => {
    return (
        <div className={classes.main}>
            <div>
                <Checkbox
                    onChange={onCheckAllChange}
                    checked={value.checkAll}>
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


const mapStateToProps = (state) => {     //для переменных из стейт
    return {
        value: state,
    }
}
// const mapDispatchToProps = (dispatch) => { //для функций из редьюсера
//     const {onCheckAllChange, onChange} = bindActionCreators(actions, dispatch);
//     return {
//         onCheckAllChange,
//         onChange,
//     }
// };
export default connect(mapStateToProps, actions)(Filters);

