import { createStore ,applyMiddleware} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import  reducers from './reducers'
import thunk from 'react-thunk'


export default createStore(reducers)