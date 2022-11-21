//import {applyMiddleware,StoreCreator} from 'redux';
import { applyMiddleware, createStore} from 'redux';
import rooterReducers from './reducer' //untuk membuat root reducer yang tergabung dari beberapa reducer digabung menjadi satu
import logger from 'redux-logger';
import thunk from 'redux-thunk';


const store = createStore(rooterReducers,applyMiddleware(thunk,logger))

export default store




//store untuk menyimpan state secara global (value)
//reducer fungsi untuk mengupdate value store (mengupdate store)
//dispatc Action adalah proses pemanggilan instruksi yang disediakan reducer
//subscription proses penggunaan store yang kita miliki /setiap kali ada perubahan pada store maka ini akan terpanggil (notifikasi dari redux )