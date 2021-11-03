import React from 'react';
import Button from "../../components/Button";
import {connect} from "react-redux";
import {startTime} from '../../store/actions/globalTime'
import {DATE_TYPE} from "../../utils/commonMap";
import withClockWrap from '../../mixins/withClockWrap'

function Halftime(props) {
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
        time: state.globalTime.halfTime.format(DATE_TYPE)
    }),
    {
        startTime
    }
)(withClockWrap(Halftime, 'halfTime'));