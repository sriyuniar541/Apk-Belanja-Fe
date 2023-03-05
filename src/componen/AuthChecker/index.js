import React from 'react'
import { Navigate } from 'react-router-dom' 


const AuthChecker = ({children}) => {
    const isAuth = localStorage.getItem('token')
    const role = localStorage.getItem('role')
    console.log('my token is',isAuth)
    console.log('role ',role)


    if(!isAuth || role==='cust') { 
        return (
            <Navigate to='/'replace='true'/> 
        )   
    } 
    return children
}

export default AuthChecker;