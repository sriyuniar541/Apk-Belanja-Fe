import axios from 'axios'; //untuk mengimpor data dari database


export const loginUser = (data,navigate) => async(dispact) => {
    try {

        //dispact adalah fungcion yang menerima sebuah objek yang memilik type, ini yang akan menetukan action 
        //yang akan dilakukan reducer type(menggunakan huruf kapital)
        dispact({type:'USER_LOGIN_PENDING'})
        const result = await axios.post('http://localhost:4000/users/login',data)
        const user = result.data.data 
        console.log(result.data.data )
        console.log(result.data )
        
        
        //local storage
        localStorage.setItem('token',user.token)
        localStorage.setItem('user',user)
        dispact({type:'USER_LOGIN_SUCCESS',payload:user})
        navigate('/product') //jika login berhasil maka diarahkan ke product
        console.log('user login success')
        

    }catch (err) {
        console.log('user login fail')
        console.log(err)

    }
}