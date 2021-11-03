import React, {Suspense, useEffect} from "react";
import Header from "./Header";
import MyNavLink from "../components/MyNavLink";
import {renderRoutes} from "react-router-config";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {setGlobalColor} from '../store/actions/globalColor'
import route from '../router'
import * as types from '../store/action_types'


import 'normalize.css'
import './app.scss'

const linkArr = [
    {id: '001', chilren: '来次番茄', to: '/tomatoTime'},
    {id: '002', chilren: '休息片刻', to: '/restTime'},
    {id: '003', chilren: '小憩一会', to: '/halfTime'}
]

function App(props) {
    // const color =colorMap[props.location.pathname]

    const {globalColor} = props
    //存储当前全局color 用于初始化store
    sessionStorage.setItem(types.GLOBAL_COLOR,globalColor)

    useEffect(() => {
        props.setGlobalColor(props.location.pathname.slice(1))

    })

    return (
        <div className='container' style={{backgroundColor: globalColor}}>
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

export default connect(
    state => ({
        globalColor: state.globalColor
    }),
    {
        setGlobalColor
    }
)(withRouter(App))