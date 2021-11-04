import Button from "../Button";
import React from "react";

export default function ClockWrapComponent(props) {
    const {globalColor, time, change} = props
    return (
        <div className='clock_wrap'>
            <div className='clock'> {time} </div>
            <Button change={change} color={globalColor}/>
        </div>
    );
}