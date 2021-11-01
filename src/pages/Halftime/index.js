import React, {Component} from 'react';
import Button from "../../components/Button";
class Index extends Component {
    render() {
        return (
            <div className='clock_wrap'>
                <div className='clock'> 00:00 </div>
                <Button/>
            </div>
        );
    }
}

export default Index;