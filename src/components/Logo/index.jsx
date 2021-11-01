import React from 'react'

const style = {
    display: 'flex',
    color: '#fff',
    alignItems:'center'
}

export default function Logo(props) {
    return (
        <div style={style}>
            <img style={{alignSelf: 'center'}} alt='' src={props.src}/>
            <span>{props.title}</span>
        </div>
    )
}