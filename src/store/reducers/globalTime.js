import * as types from '../action_types'
import {tomatoTime, restTime, halfTime} from '../../utils/commonMap'

const initialValue = {
    tomatoTime,
    restTime,
    halfTime
}

export default function globalTime(perState = initialValue, action) {
    const {type, data} = action
    switch (type) {
        case types.GLOBAL_TIME :
            return {...data}
        default:
            return perState
    }

}

