import React from 'react'
const style = {
    display: 'flex',
    color: '#fff',
    backgroundColor:'rgba(255, 255, 255, 0.2)',
    borderRadius:'5px',
    padding:'10px',
    boxSizing:'border-box',
    height:'40px'
}
export default function Logo(props) {
    return (
        <div style={style}>
            <img style={{alignSelf:'center'}} alt='' src={props.src}/>
            <span className='setting-span'>设置</span>
        </div>
    )
}