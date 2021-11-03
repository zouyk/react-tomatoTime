import React from 'react';
import Button from "../../components/Button";
import {connect} from "react-redux";
import {DATE_TYPE} from "../../utils/commonMap";
import {startTime} from "../../store/actions/globalTime";
import withClockWrap from '../../mixins/withClockWrap'

function RestTime(props) {
    const {globalColor, time, change} = props
    return (
        <div className='clock_wrap'>
            <div className='clock'> {time} </div>
            <Button change={change} color={globalColor}/>
        </div>
    );
}

export default connect(state => ({
    globalColor: state.globalColor,
    time: state.globalTime.restTime.format(DATE_TYPE)
}), {
    startTime
})(withClockWrap(RestTime,'restTime'));