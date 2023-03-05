import GambarLogo from '../../componen/logoBelanja';
import ButtonCustom from '../../componen/button';
import styles from '../login/Login.module.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import { loginUser } from '../../redux/actions/login'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import "@fontsource/metropolis";
import { Link } from 'react-router-dom';


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
      <Container
        className='container'
        style={{ textAlign: 'center' }}
      >
        <Row className='row py-5'>
          <div className='col-12'>
            <div className='d-flex justify-content-center'>
              <GambarLogo />
            </div>
            <h4 className={styles.h4}>Please login with your account</h4>
            <div className={styles.bt} ><ButtonCustom /></div>
            <div className=' col-lg-4 offset-lg-4 col-10 offset-1 justify-content-center mt-5 '>
              <form onSubmit={postData} className='justify-content-center'>
                <Form.Control
                  style={{
                    height: '48px',
                    borderRadius: '4px',
                    marginBottom: '10px'
                  }}
                  type='email'
                  placeholder='Email'
                  value={email}
                  name='email'
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Form.Control
                  style={{
                    height: '48px',
                    borderRadius: '4px',
                    marginBottom: '10px'
                  }}
                  type='password'
                  placeholder='Password'
                  value={password}
                  name='password'
                  onChange={(e) => setPassword(e.target.value)}
                />
                <p className='text-end'
                  style={{ color: 'red' }} >
                  Forget password?
                </p>
                <div className={styles.bt}>
                  <Button
                    className='col-12'
                    variant="danger"
                    type='submit'
                    style={{
                      height: '48px',
                      borderRadius: '25px'
                    }}>
                    Login
                  </Button>
                </div>
                <p className={styles.p}>
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
        </Row>
      </Container>
    </div>
  );
}

