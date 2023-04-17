import GambarLogo from '../../componen/logoBelanja';
import React, { useState } from 'react'
import ButtonSellerSig from '../../componen/buttonSeller sig';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Validation from '../../componen/validation';
import './sigup.css'


function SigUpSeller() {
  const navigate = useNavigate()
  const [errors, setErrors] = useState({})
  const [inputData, setInputData] = useState({
    email: '',
    password: '',
    fullname: '',
    role: 'toko'
  })

  const registerHandling = async (e) => {
    e.preventDefault()
    setErrors(Validation(inputData))
    const { password, email, fullname, role } = inputData
    const data = { password, email, fullname, role }
    const res = await (await fetch(process.env.REACT_APP_URL_BE + `/users/register/toko`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' }
    })).json()
    if (inputData.fullname === '') {
      return alert('name  is required')
    }
    if (inputData.password === '') {
      return alert('password  is required')
    }
    if (inputData.email === '') {
      return alert('email  is required')
    }
    if (res.success) {
      alert(res.message);
      localStorage.setItem('otp', res.data.otp)
      navigate('/Otp')
    } 
    else {
      alert(res.data)
      console.log(res)
      console.log(errors)
    }
  }

  const onChangeHandler = (e) => {
    const name = e.target.name
    const value = e.target.value
    setInputData({ ...inputData, [name]: value })
  }


  return (
    <div className='container cont-main'>
      <div className='col-lg-4 col-10 box-sigup'>
        <div className='logo'>
          <GambarLogo />
        </div>
        <h5>
          Please sign up with your account
        </h5>
        <div className='button-seller'>
          <ButtonSellerSig />
        </div>
        <form>
          <input
            type='email'
            placeholder='Email'
            value={inputData.email}
            name='email'
            onChange={onChangeHandler}
            required />
          {errors.email &&
            <p
              className='error'>
              {errors.email}
            </p>
          }
          <input
            className=' cth2'
            type='password'
            placeholder='Password'
            value={inputData.password}
            name='password'
            onChange={onChangeHandler}
            required />
          {errors.password &&
            <p
              className='error'>
              {errors.password}
            </p>
          }
          <input
            type='fullname'
            placeholder='fullname'
            value={inputData.fullname}
            name='fullname'
            onChange={onChangeHandler}
            required />
          {errors.fullname &&
            <p
              className='error'>
              {errors.fullname}
            </p>
          }
          <button
            className='btn btn-danger'
            onClick={registerHandling}>
            Register
          </button>
        </form>
        <p >Already have a Tokopedia account?
          <Link to='/login' className='text-danger'>
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SigUpSeller;





