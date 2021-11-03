import * as types from '../action_types'
import {getColorMap} from '../../utils/commonMap'


export const setGlobalColor = (key) =>({type: types.GLOBAL_COLOR, data: getColorMap(key)})



