import Button from "../Button";
import {DATE_TYPE} from '../../utils/commonMap'
import React from "react";

 function ClockWrapComponent(props) {
    const {globalColor, currentTime, change} = props
    return (
        <div className='clock_wrap'>
            <div className='clock'> {currentTime.time.format(DATE_TYPE)} </div>
            <Button change={change}  isPress={currentTime.isPress} color={globalColor}/>
        </div>
    );
}

export default ClockWrapComponent