import * as types from '../action_types'

const initialValue = sessionStorage.getItem(types.GLOBAL_COLOR) || '#f05b56'
export default function globalColor(perState = initialValue, action) {
    const {type, data} = action
    switch (type) {
        case types.GLOBAL_COLOR:
            return data
        default:
            return perState
    }
}
