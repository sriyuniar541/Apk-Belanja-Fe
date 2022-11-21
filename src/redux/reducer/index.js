import { combineReducers } from "redux";
import  userReducers  from './user';


const rooterReducers =  combineReducers ({ //wadah untuk menyimpan state
    user : userReducers
})

export default rooterReducers

  
