 //import { useState } from 'react';
import About from './pages/About'; 
import Home from './pages/Home'; 
import Product from './pages/Product/index'; 
import Profile from './pages/profille/index'; 
import { BrowserRouter,Route,Routes,Navigate} from 'react-router-dom';
import LoginSeller from './pages/login/login';
import  SigUpSeller from './pages/sigup';
import SigUpCustommer from './pages/sigupCus';
import  MyBag from './pages/MyBag';
import LoginCustommer from './pages/login/loginCus'
import ResetPasswordSeller from './pages/resetPasswordSeller'
import DetailProduct from './pages/DetailProduct'
import AuthChecker from '../src/componen/AuthChecker'
import SellingProduct from './pages/sellingProduct'
import CheckOut from './pages/checkout';
import "@fontsource/metropolis";
import Category from './pages/cateory';



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
        <Route path='/loginSeller' element={<LoginSeller/>} />
        <Route path='/loginCus' element={<LoginCustommer/>} />
        <Route path='/sighupSeller' element={<SigUpSeller/>} />
        <Route path='/sighupCustommer' element={<SigUpCustommer/>} />
        <Route path='/MyBag' element={<MyBag/>} />
        <Route path='/ResetPasswordSeller' element={<ResetPasswordSeller/>} />
        <Route path='/DetailProduct' element={<DetailProduct/>} />
        <Route path='/DetailProduct/:id' element={<DetailProduct/>} />
        <Route path='/category/:categoryP' element={<Category/>} />
        <Route path='/ResetPasswordCus/' element={<ResetPasswordSeller/>} />
        <Route path='/SellingProduct/' element={<SellingProduct/>} />
        <Route path='/checkout/' element={<CheckOut/>} />
        <Route path='*' element={<page not Found/>} />
        
    </Routes>
   

    </BrowserRouter>
    </div> 
  ); 
}

export default App; //untuk export
