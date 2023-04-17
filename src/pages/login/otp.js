import GambarLogo from '../../componen/logoBelanja';
import ButtonSeller from '../../componen/buttonSeller';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './login.css'


function Otp() {
  let otp = localStorage.getItem('otp')
  console.log(otp)
  const navigate = useNavigate()
  const [user, setUser] = useState({
    email: '',
    otp: otp
  })

  const registerHandling = async (e) => {
    e.preventDefault()
    const { email, otp } = user
    const data = { email, otp }
    const res = await (await fetch(process.env.REACT_APP_URL_BE + `/users/email/otp`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' }
    })).json()
    if (res.success) {
      alert(res.message);
      setUser({
        email: '',
        otp: '',
      })
      navigate('/login')
    } else {
      alert(res.data)
      console.log(res)
    }
  }

  const onChangeHandler = (e) => {
    const name = e.target.name
    const value = e.target.value
    setUser({ ...user, [name]: value })
  }


  return (
    <div className='container cont-otp'>
      <div className='col-10 col-lg-4'>
        <div className='logo'>
          <GambarLogo />
        </div>
        <h5>
          Please login with your account
        </h5>
        <div className='button-otp'>
          <ButtonSeller />
        </div>
        <div className='form-otp'>
          <input
            value={user.email}
            name='email'
            type='email'
            placeholder='Email'
            onChange={onChangeHandler}
          />
          <input
            value={user.otp}
            name='otp'
            type='otp'
            placeholder='text'
            onChange={onChangeHandler}
          />
          <Button
            className='btn-otp'
            variant="danger"
            onClick={registerHandling}>
            Send
          </Button>
        </div>
        <p>
          Don't have a Tokopedia account?
          <Link
            to='/sighupCustommer'
            className='text-danger'>
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Otp;
