import React from 'react'
import { Navigate } from 'react-router-dom' 


const AuthCheckerCus = ({children}) => {
    const isAuth = localStorage.getItem('token') 
    // console.log('my token is',isAuth)

    if(!isAuth ) {
        return (
            <Navigate to='/login'replace='true'/> 
        )   
    } 
    return children
}

export default AuthCheckerCus;