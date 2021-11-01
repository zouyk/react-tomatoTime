import {Redirect} from "react-router-dom";
import {lazy} from "react";

const HalfTime = lazy(() => import('../pages/Halftime'))
const Tomatotime = lazy(() => import('../pages/Tomatotime'))
const Resttime = lazy(() => import('../pages/Resttime'))

const route =[
    {
        path:'/',
        exact:true,
        render:()=><Redirect to='/tomatoTime' />
    },
    {
        path:'/tomatoTime',
        component:Tomatotime
    },
    {
        path:'/restTime',
        component:Resttime
    },
    {
        path:'/halfTime',
        component:HalfTime
    },
    {
        render:()=><Redirect to='/tomatoTime'/>
    }
]
export  default  route