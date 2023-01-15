import React from 'react'
import { Navigate } from 'react-router-dom' //untuk menghubungkan antar halaman/API



//untuk melindungi product
const AuthChecker = ({children}) => {
    const isAuth = localStorage.getItem('token') //getItem untuk mendapatkan item dari localStorage
    const role = localStorage.getItem('role')
    console.log('my token is',isAuth)
    console.log('role ',role)


    if(!isAuth || role==='cust') { //jika bukan isAuth
        return (
            <Navigate to='/'replace='true'/> //maka akan kembali ke halaman login
        )   
    } 
    return children
}

export default AuthChecker;