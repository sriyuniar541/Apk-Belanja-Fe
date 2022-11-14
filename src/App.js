 import { useState } from 'react';
import About from './pages/About'; 
import Home from './pages/Home'; 
import Product from './pages/Product/index'; 
import Profile from './pages/profille/index'; 
import { BrowserRouter,Route,Link,Routes,Navigate } from 'react-router-dom';
import LoginSeller from './pages/login/login';
import  SigUpSeller from './pages/sigup';
import  MyBag from './pages/MyBag';
import LoginCustommer from './pages/login/loginCus'
import ResetPasswordSeller from './pages/resetPasswordSeller'
import DetailProduct from './pages/DetailProduct'




//untuk menulis code
function App() {
  const [title,setTitle] = useState('E comerce')
  return (
    <div className="App">
    <header className="App-header">{title}</header> 
    <BrowserRouter>

{/*  yang nav untuk penulisan dom dan ditamplikan dilayar 
untuk routes untuk menyambungkan ke halaman terkait pada page*/}
    <nav>
        <li><Link to ='./'>Home</Link></li>
        <li><Link to ='./product'>Product</Link></li>
        <li><Link to ='./about'>About</Link></li>
        <li><Link to ='./profile'>Profile</Link></li>
     
        

    </nav>
    <Routes>
        <Route path ='/' element={<Navigate to='/Home' />} replace='true'/>
        <Route path='/Home' element={<Home/>}  />
        <Route path='/product' element={<Product/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/login' element={<LoginSeller/>} />
        <Route path='/loginCus' element={<LoginCustommer/>} />
        <Route path='/sighup' element={<SigUpSeller/>} />
        <Route path='/MyBag' element={<MyBag/>} />
        <Route path='/ResetPasswordSeller' element={<ResetPasswordSeller/>} />
        <Route path='/DetailProduct' element={<DetailProduct/>} />
        

    </Routes>
   



    </BrowserRouter>
    </div> 
  ); 
}

export default App; //untuk export
