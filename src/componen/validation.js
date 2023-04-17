export default function Validation(inputData) {
    let errors = {}  
    
    if (!inputData.fullname) {
        errors.fullname='Name is required'
    } 
    if (!inputData.email) {
        errors.email='Email is required'
    } else if (!/\S+@\S+\.\S+/.test(inputData.email)) { 
        errors.email='Email is invalid (exp : contoh@gmail.com)'
    }
    if (!inputData.password) {
        errors.password='Password is required'
    }else if (inputData.password.length < 5 ) {
        errors.password='Password must be more than 5 caracters'
    }

  return errors
}
