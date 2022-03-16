import React from "react";
import propTypes  from 'prop-types'
import './button.scss'
export default function Button(props) {
    const {color,change,isPress} = props
    const boxShadow =isPress ? '#ebebeb 0 6px 0' : null

    function clickHandle(){
        change(!isPress)
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