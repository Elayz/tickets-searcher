import React, {useState} from 'react';
import classes from './filters.module.scss'
import { Radio } from 'antd';
const Filters = () => {
    const [value, setValue] = useState(1);
    const onChange = (e) => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };

    return (
        <div className={classes.main}>
            <p className={classes.text}>КОЛИЧЕСТВО ПЕРЕСАДОК</p>
            <Radio.Group className={classes.checkBoxList}  onChange={onChange} value={value}>
                <Radio className={classes.checkBox} value={1}>Все</Radio>
                <Radio className={classes.checkBox} value={2}>Без пересадок</Radio>
                <Radio className={classes.checkBox} value={3}>1 пересадка</Radio>
                <Radio className={classes.checkBox} value={4}>2 пересадки</Radio>
                <Radio className={classes.checkBox} value={5}>3 пересадки</Radio>
            </Radio.Group>
        </div>
    );
};
export default Filters;
// const Filters = () => {
//     return (
//         <div className={classes.main}>
//             <p className={classes.text}>КОЛИЧЕСТВО ПЕРЕСАДОК</p>
//             <label className={classes.checkBox}>
//                 <input type="checkbox"/>
//                 <span>Все</span>
//             </label>
//             <label className={classes.checkBox}>
//                 <input type="checkbox"/>
//                 <span>Без пересадок</span>
//             </label>
//             <label className={classes.checkBox}>
//                 <input type="checkbox"/>
//                 <span>1 пересадка</span>
//             </label>
//             <label className={classes.checkBox}>
//                 <input type="checkbox"/>
//                 <span>2 пересадки</span>
//             </label>
//             <label className={classes.checkBox}>
//                 <input type="checkbox"/>
//                 <span>3 пересадки</span>
//             </label>
//         </div>
//     );
// };
// export default Filters;

