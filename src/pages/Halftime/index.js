import React, {Component} from 'react';
import Button from "../../components/Button";
import {connect} from "react-redux";
import {startTime} from '../../store/actions/globalTime'
import {DATE_TYPE} from "../../utils/commonMap";

class Index extends Component {
    change =(isPress)=>{
        this.props.startTime({name:'halfTime',isPress})
    }
    render() {
        const {globalColor,time} = this.props
        return (
            <div className='clock_wrap'>
                <div className='clock'> {time} </div>
                <Button change={this.change} color={globalColor}/>
            </div>
        );
    }
}
export default connect(
    state=>({
        globalColor:state.globalColor,
        time:state.globalTime.halfTime.format(DATE_TYPE)
    }),
    {
        startTime
    }
)(Index) ;