import * as types from "../action_types";
import dayjs from "dayjs";
import {DATE_TYPE,getClockEndTip} from "../../utils/commonMap";

let timer = null

export const setTime = (data) => ({type: types.GLOBAL_TIME, data})

export const startTime = (obj) => (dispatch, getState) => {

    const {name, isPress} = obj
    const {globalTime} = getState()

    clearInterval(timer)
    if (isPress) return

    timer = setInterval(() => {
        const currentTime = dayjs(globalTime[name]).format(DATE_TYPE)
        console.log(currentTime)
        if(currentTime === '00:00'){
            clearInterval(timer)
            alert(getClockEndTip(name)+'时间结束了')
        }
        globalTime[name] = dayjs(globalTime[name]).subtract(1, 'second')
        dispatch(setTime(globalTime))
    }, 1000)

}