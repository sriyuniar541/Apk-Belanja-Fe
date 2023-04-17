import GambarLogo from '../../componen/logoBelanja';
import ButtonCustom from '../../componen/button';
import React, { useState } from 'react'
import { loginUser } from '../../redux/actions/login'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import './login.css';

export default function LoginSeller() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const dispact = useDispatch()

  const postData = (e) => {
    e.preventDefault()
    let data = {
      email, password
    }
    dispact(loginUser(data, navigate))
  }

  return (
    <div>
      <div className='container cont-login'>
        <div className='container-main col-lg-4 col-10'>
          <div className='logo'>
            <GambarLogo />
          </div>
          <h5 >Please login with your account</h5>
          <div className='button-login'>
            <ButtonCustom />
          </div>
          <div className='form'>
            <form onSubmit={postData}>
              <input
                type='email'
                placeholder='Email'
                value={email}
                name='email'
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type='password'
                placeholder='Password'
                value={password}
                name='password'
                onChange={(e) => setPassword(e.target.value)}
              />
              <p className='forgot-password'>
                Forget password?
              </p>
              {/* <div> */}
                <Button
                className='btn-login'
                  variant="danger"
                  type='submit'
                >
                  Login
                </Button>
              {/* </div> */}
              <p>
                Don't have a Tokopedia account?
                <Link
                  to='/sighupSeller'
                  className='text-danger'>
                  Register
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

