import React, {Component} from 'react';
import Button from "../../components/Button";
import {connect} from "react-redux";

class Index extends Component {
    render() {
        const {globalColor} = this.props
        return (
            <div className='clock_wrap'>
                <div className='clock'> 00:00 </div>
                <Button color={globalColor}/>
            </div>
        );
    }
}
export default connect(
    state=>({
        globalColor:state.globalColor
    }),
    {

    }
)(Index) ;