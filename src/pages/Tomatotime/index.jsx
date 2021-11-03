import React from 'react';
import Button from "../../components/Button";
import {connect} from "react-redux";
import {DATE_TYPE} from "../../utils/commonMap";
import { startTime } from '../../store/actions/globalTime'
import withClockWrap from "../../mixins/withClockWrap";
function TomatoTime(props) {
    const {globalColor, time, change} = props
    return (
        <div className='clock_wrap'>
            <div className='clock'> {time} </div>
            <Button change={change} color={globalColor}/>
        </div>
    );
}

export default connect(
    state => ({
        globalColor: state.globalColor,
        time:state.globalTime.tomatoTime.format(DATE_TYPE)
    }),
    {
        startTime
    }
)(withClockWrap(TomatoTime,'tomatoTime'));