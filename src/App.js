 //import { useState } from 'react';
import Home from './pages/Home'; 
import Product from './pages/Product/index'; 
import Profile from './pages/profille/index'; 
import { BrowserRouter,Route,Routes,Navigate} from 'react-router-dom';
import LoginSeller from './pages/login/login';
import  SigUpSeller from './pages/sigup';
import SigUpCustommer from './pages/sigupCus';
import  MyBag from './pages/MyBag';
import DetailProduct from './pages/DetailProduct'
import AuthChecker from '../src/componen/AuthChecker/index'
import AuthCheckerCus from './componen/AuthChecker/authCheckCus';
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
        <Route path='/profile' element={
          <AuthCheckerCus>
              <Profile/>
          </AuthCheckerCus>    
        }/>
        <Route path='/MyBag' element={
           <AuthCheckerCus>
              <MyBag/>
           </AuthCheckerCus>
        } />
        <Route path='/checkout/' element={
           <AuthCheckerCus>
              <CheckOut/>
           </AuthCheckerCus>
        } />
        <Route path='/History' element={
         <AuthCheckerCus>
              <History/> 
         </AuthCheckerCus>
        } />
        <Route path='/Order' element={
           <AuthCheckerCus>
              <Order/> 
           </AuthCheckerCus>
        } />
        <Route path='/DetailProduct' element={
           <AuthCheckerCus>
              <DetailProduct/>
           </AuthCheckerCus>
        } />
        <Route path='/DetailProduct/:id' element={
           <AuthCheckerCus>
              <DetailProduct/>
           </AuthCheckerCus>
        } />
        <Route path='/login' element={<LoginSeller/>} />
        <Route path='/sighupSeller' element={<SigUpSeller/>} />
        <Route path='/sighupCustommer' element={<SigUpCustommer/>} />
        <Route path='/category/:categoryP' element={<Category/>} />
        <Route path='/Otp' element={<Otp/>} />
        <Route path='*' element={<page not Found/>} /> 
    </Routes>
    </BrowserRouter>
    </div> 
  ); 
}

export default App; //untuk export
