import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; //untuk import
import './custom.scss';
import { Provider } from 'react-redux'; //import store dari redux 
import store from './redux/storage'; //import store dari redux 
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <Provider store={store}>
     <App/> 
  </Provider>

);


//untuk menampilkan di layar ditulis componen dalam <React.StrictMode>