import React from "react";
import {NavLink} from 'react-router-dom'
import './MyNavLink.scss'

export default function MyNavLink(props) {
    return <NavLink className='navlink' activeClassName='active' {...props}/>
}