import GambarLogo from '../../componen/logoBelanja';
import ButtonSeller from '../../componen/buttonSeller';
import styles from '../login/Login.module.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import "@fontsource/metropolis";
import { Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


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
    <Container
      className='container'
      style={{ textAlign: 'center' }}
    >
      <Row className='row my-5'>
        <div className='col-10 offset-1 col-lg-4 offset-lg-4 '>
          <div className='d-flex justify-content-center'>
            <GambarLogo />
          </div>
          <h4 className='my-4'>
            Please login with your account
          </h4>
          <div className=''>
            <ButtonSeller />
          </div>
          <div className='my-4'>
            <Form.Control
              style={{
                height: '48px',
                borderRadius: '4px',
                marginBottom: '10px'
              }}
              value={user.email}
              name='email'
              type='email'
              placeholder='Email'
              onChange={onChangeHandler}
            />
            <Form.Control
              style={{
                height: '48px',
                borderRadius: '4px',
                marginBottom: '10px'
              }}
              value={user.otp}
              name='otp'
              type='otp'
              placeholder='text'
              onChange={onChangeHandler}
            />
          </div>
          <Button
            variant="danger"
            className='col-12'
            style={{
              height: '48px',
              borderRadius: '25px'
            }}
            onClick={registerHandling}>
            Send
          </Button>
          <p className={styles.p}>
            Don't have a Tokopedia account?
            <Link
              to='/sighupCustommer'
              className='text-danger'>
              Register
            </Link>
          </p>
        </div>
      </Row>
    </Container>
  );
}

export default Otp;
