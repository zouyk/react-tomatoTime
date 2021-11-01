import React, {useState} from "react";
import './button.scss'
export default function Button(props) {
    const [openStatus, setOpenStatus] = useState(true)
    const boxShadow =openStatus ? '#ebebeb 0 6px 0' : null
    const {color} = props
    function clickHandle(){
        const changeStatue = !openStatus
        setOpenStatus(changeStatue)
        console.log(changeStatue)

    }
    return (
        <div className='button' style={{boxShadow,color}}  onClick={clickHandle}>
            {openStatus ? "开始" : '暂停'}
        </div>
    )
}