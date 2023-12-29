import React from 'react';
import { Progress, Space } from 'antd';

const style = {
    width: '880px',
    margin: '0px 0px -50px 25px'
};

const ProgressSpin = ({ progressSpinScore }) => (
    <Space wrap>
        <Progress style={style} percent={progressSpinScore} />
    </Space>
);
export default ProgressSpin;