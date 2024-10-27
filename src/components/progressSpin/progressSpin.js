import React from 'react';
import { Progress, Space } from 'antd';
import classes from "./progressSpin.module.scss";

const style = {
    width: '640px',
    margin: '0px 0px -50px 25px'
};

const ProgressSpin = ({ progressSpinScore }) => (
    <Space wrap>
        <Progress className={ classes.spin} style={style} percent={progressSpinScore} />
    </Space>
);
export default ProgressSpin;