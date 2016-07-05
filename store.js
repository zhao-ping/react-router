/**
 * Created by zp on 16-6-28.
 */
import { createStore } from 'redux'
import reducers from './reducers/index.js'

const store=createStore(reducers);
export default store
