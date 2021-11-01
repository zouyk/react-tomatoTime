import * as types from '../action_types'

const colorMap = {
    '/tomatoTime': '#f05b56',
    '/restTime': '#4ca6a9',
    '/halfTime': '#498fc1',
}
const initialValue = sessionStorage.getItem(types.GLOBAL_COLOR) || '#f05b56'
export default function init(perState = initialValue, action) {
    const {type, data} = action
    switch (type) {
        case types.GLOBAL_COLOR:
            return colorMap[data]
        default:
            return perState
    }
}
