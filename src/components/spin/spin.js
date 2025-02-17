import React from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
const Spiner = () => (
    <Spin
        style={{justifyContent: 'center', display:'flex', paddingTop: '20px'}}
        indicator={
            <LoadingOutlined
                style={{
                    fontSize: 24,
                }}
                spin
            />
        }
    />
);
export default Spiner;