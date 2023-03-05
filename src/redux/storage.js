//import {applyMiddleware,StoreCreator} from 'redux';
import { applyMiddleware, createStore} from 'redux';
import rooterReducers from './reducer' 
import logger from 'redux-logger';
import thunk from 'redux-thunk';


const store = createStore(rooterReducers,applyMiddleware(thunk,logger))

export default store


