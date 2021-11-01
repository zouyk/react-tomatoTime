import React ,{Suspense} from "react";
import Header from "./Header";
import MyNavLink from "../components/MyNavLink";
import {renderRoutes} from "react-router-config";
import {withRouter} from "react-router-dom";
import route  from '../router'

import 'normalize.css'
import './app.scss'

const colorMap ={
    '/tomatoTime':'#f05b56',
    '/restTime':'#4ca6a9',
    '/halfTime':'#498fc1',
}
const linkArr = [
    {id: '001', chilren: '来次番茄', to: '/tomatoTime'},
    {id: '002', chilren: '休息片刻', to: '/restTime'},
    {id: '003', chilren: '小憩一会', to: '/halfTime'}
]

 function App(props) {
    const color =colorMap[props.location.pathname]
    return (
        <div className='container' style={{backgroundColor:color}}>
            <Header/>
            <div className='cont'>
                <div className='cont_select'>
                    {
                        linkArr.map(item => <MyNavLink {...item} key={item.id}>{item.chilren}</MyNavLink>)
                    }
                </div>
                <Suspense fallback={null}>
                    {renderRoutes(route)}
                </Suspense>
            </div>
        </div>
    )
}
export default withRouter(App)