import React from 'react'
import { Navigate } from 'react-router-dom' //untuk menghubungkan antar halaman/API



//untuk melindungi product
const AuthCheckerCus = ({children}) => {
    const isAuth = localStorage.getItem('token') //getItem untuk mendapatkan item dari localStorage
    console.log('my token is',isAuth)


    if(!isAuth ) { //jika bukan isAuth
        return (
            <Navigate to='/login'replace='true'/> //maka akan kembali ke halaman login
        )   
    } 
    return children
}

export default AuthCheckerCus;