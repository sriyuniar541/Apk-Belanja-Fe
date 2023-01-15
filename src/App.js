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
import ResetPasswordSeller from './pages/resetPasswordSeller'
import DetailProduct from './pages/DetailProduct'
import AuthChecker from '../src/componen/AuthChecker'
import SellingProduct from './pages/sellingProduct'
import EditProduct from './pages/editProduct';
import CheckOut from './pages/checkout';
import "@fontsource/metropolis";
import Category from './pages/cateory';
import Editcategory from './pages/editcaregory';
import Order from './pages/order';
import History from './pages/historyCus';
import Otp from './pages/login/otp';



//untuk menulis code
function App() {

  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
        <Route path ='/' element={<Navigate to='/Home' />} replace='true'/>
        <Route path='/Home' element={<Home/>}  />
        <Route path='/Home/DetailProduct' element={<DetailProduct/>}  />
        <Route path='/product' element={
          <AuthChecker>  
            <Product/>
            </AuthChecker>
        } />
        <Route path='/SellingProduct/' element={
           <AuthChecker>
                <SellingProduct/>
           </AuthChecker>
        } />
        <Route path='/EditProduct/:id' element={
           <AuthChecker>
                <EditProduct/>
           </AuthChecker>  
        } />
        <Route path='/Editcategory' element={
          <AuthChecker>
              <Editcategory/>
          </AuthChecker>
        } />
        <Route path='/about' element={<About/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/login' element={<LoginSeller/>} />
        <Route path='/sighupSeller' element={<SigUpSeller/>} />
        <Route path='/sighupCustommer' element={<SigUpCustommer/>} />
        <Route path='/MyBag' element={<MyBag/>} />
        <Route path='/ResetPasswordSeller' element={<ResetPasswordSeller/>} />
        <Route path='/DetailProduct' element={<DetailProduct/>} />
        <Route path='/DetailProduct/:id' element={<DetailProduct/>} />
        <Route path='/category/:categoryP' element={<Category/>} />
        <Route path='/ResetPasswordCus/' element={<ResetPasswordSeller/>} />
        <Route path='/checkout/' element={<CheckOut/>} />
        <Route path='/History' element={<History/>} />
        <Route path='/Order' element={<Order/>} />
        <Route path='/Otp' element={<Otp/>} />
        <Route path='*' element={<page not Found/>} /> 
    </Routes>
    </BrowserRouter>
    </div> 
  ); 
}

export default App; //untuk export
