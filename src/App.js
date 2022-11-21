 //import { useState } from 'react';
import About from './pages/About'; 
import Home from './pages/Home'; 
import Product from './pages/Product/index'; 
import Profile from './pages/profille/index'; 
import { BrowserRouter,Route,Routes,Navigate} from 'react-router-dom';
import LoginSeller from './pages/login/login';
import  SigUpSeller from './pages/sigup';
import  MyBag from './pages/MyBag';
import LoginCustommer from './pages/login/loginCus'
import ResetPasswordSeller from './pages/resetPasswordSeller'
import DetailProduct from './pages/DetailProduct'
import AuthChecker from '../src/componen/AuthChecker'
import SellingProduct from './pages/sellingProduct'
import "@fontsource/metropolis";



//untuk menulis code
function App() {

  return (
    <div className="App">
    <BrowserRouter>

{/*  yang nav untuk penulisan dom dan ditamplikan dilayar 
untuk routes untuk menyambungkan ke halaman terkait pada page*/}

    <Routes>
        <Route path ='/' element={<Navigate to='/Home' />} replace='true'/>
        <Route path='/Home' element={<Home/>}  />
        <Route path='/Home/DetailProduct' element={<DetailProduct/>}  />
        
        <Route path='/product' element={
          //AuthChecker untuk melindungi product agar jika user belum login maka tidak dpt masuk ke product
          <AuthChecker>  
            <Product/>
            </AuthChecker>
        } />
        <Route path='/about' element={<About/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/login' element={<LoginSeller/>} />
        <Route path='/loginCus' element={<LoginCustommer/>} />
        <Route path='/sighup' element={<SigUpSeller/>} />
        <Route path='/MyBag' element={<MyBag/>} />
        <Route path='/ResetPasswordSeller' element={<ResetPasswordSeller/>} />
        <Route path='/DetailProduct' element={<DetailProduct/>} />
        <Route path='/DetailProduct/:id' element={<DetailProduct/>} />
        <Route path='/ResetPasswordCus/' element={<ResetPasswordSeller/>} />
        <Route path='/SellingProduct/' element={<SellingProduct/>} />
        ResetPasswordCus
    </Routes>
   

    </BrowserRouter>
    </div> 
  ); 
}

export default App; //untuk export
