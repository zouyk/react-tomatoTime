import {combineReducers} from 'redux'
import globalColor from './globalColor'
import globalTime from "./globalTime";

export default combineReducers({
    globalColor,
    globalTime
})