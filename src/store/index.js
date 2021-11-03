import {createStore,applyMiddleware} from 'redux'
import { composeWithDevTools  } from 'redux-devtools-extension'
import thunk from 'redux-thunk'//引入插件支持中间件使redux传入异步action函数
import reducers from '../store/reducers'

export default createStore(reducers,composeWithDevTools(applyMiddleware(thunk)))