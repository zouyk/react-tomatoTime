import React, {useState} from "react";
import propTypes  from 'prop-types'
import './button.scss'
export default function Button(props) {
    const [isPress, setIsPress] = useState(true)
    const boxShadow =isPress ? '#ebebeb 0 6px 0' : null
    const {color,change} = props
    function clickHandle(){
        const changeStatue = !isPress
        setIsPress(changeStatue)
        change(changeStatue)
    }


    return (
        <div className='button' style={{boxShadow,color}}  onClick={clickHandle}>
            {isPress ? "开始" : '暂停'}
        </div>
    )
}
Button.propTypes = {
    color:propTypes.string,
    change:propTypes.func
}

Button.defaultProps ={
    color:'#ccc'
}