import { combineReducers } from "redux";
import  userReducers  from './user';


const rooterReducers =  combineReducers ({ 
    user : userReducers
})

export default rooterReducers

  
