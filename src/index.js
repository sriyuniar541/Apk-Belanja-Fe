import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; //untuk import
// import Home from './home'; 
// import Product from './product'; 
 import './custom.scss';
// import { BrowserRouter,Router,Route,Routes,Navigate } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  
  </React.StrictMode>
);





//untuk menampilkan di layar ditulis componen dalam <React.StrictMode>