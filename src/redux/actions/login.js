import axios from 'axios'; 


export const loginUser = (data,navigate) => async(dispact) => {
    try {
        dispact({type:'USER_LOGIN_PENDING'})
        const result = await axios.post(process.env.REACT_APP_URL_BE +`/users/login`,data)
        const user = result.data.data 
        console.log(result.data.data ,'data dari login data2')
        console.log(result.data,'data dari login data1' )
        
        //local storage
        localStorage.setItem('token',user.token)
        localStorage.setItem('user',user)
        localStorage.setItem('role',user.role)
        dispact({type:'USER_LOGIN_SUCCESS',payload:user})
        navigate('/product') 
        console.log('user login success')
        

    }catch (err) {
        console.log('user login fail')
        console.log(err)
        alert('login fail')

    }
}