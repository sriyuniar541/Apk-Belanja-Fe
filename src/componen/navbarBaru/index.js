import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'; //menghubungkan anatar halaman
import { useSelector } from 'react-redux'; 




const NavbarBaru = () => {
const logout = () => {localStorage.clear() 
window.location.reload(false)} //fungsi tombol untuk refres halaman otomatis dan kembali ke login

const token = localStorage.getItem('token') //mendapat item token dari localStorage
const user = useSelector((state) => state.user.user)

useEffect(()=>{
  console.log(user)
},[user])


  return (
    
    <nav>
        <li><Link to ='/'>Home</Link></li>
        <li><Link to ='/product'>Product</Link></li>
        <li><Link to ='/about'>About</Link></li>
        <li><Link to ='/profile'>Profile</Link></li>
        <li><Link to ='/login'>Login</Link></li>
        <div> 
          <h6>{user.email}</h6>  
          <h6>{user.fullName}</h6> 
        </div>{token && 
        <button className='btn btn-danger btn-small' onClick={()=>logout()}>logout</button>}   
    </nav>
    
  )
}


export default NavbarBaru