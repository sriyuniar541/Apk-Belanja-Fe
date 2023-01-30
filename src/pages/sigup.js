import GambarLogo from './../componen/logoBelanja';
import ButtonCustomSig from '../componen/buttonSig';
import styles from './login/Login.module.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import React, { useState, useEffect } from 'react'
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


export default function SigUpSeller() {

  const navigate = useNavigate()
  const [inputData, setInputData] = useState({
    email: '',
    password: '',
    fullname:'',
    role:'toko'
  })

  const registerHandling = async (e) => {
    e.preventDefault()
    const {password,email,fullname,role} = inputData
    const data = {password,email,fullname,role}
    // adminLogin(data)

    const res = await (await fetch(process.env.REACT_APP_URL_BE +`/users/register/toko`, {
      method : 'POST',
      body : JSON.stringify(data),
      headers : { 'Content-Type' :'application/json' }
    })).json()
    if (res.success) {
      alert(res.message);
      setInputData({
        email: '',
        password: '',
        fullname:'',
        role:'toko'
      })
      console.log(res.data.otp,'ini data login')
      localStorage.setItem('otp',res.data.otp)
      navigate('/Otp')
    }  else {
      alert(res.data)
      console.log(res.data.data)
  } 
  }

  const onChangeHandler = (e) => {
    const name = e.target.name
    const value = e.target.value
    setInputData({ ...inputData, [name]: value })
  }


  return (
    <Container className='container ' style={{ textAlign: 'center' }} >
      <Row className='row my-5'>
        <div className='col-12'>
          <div className='d-flex justify-content-center'><GambarLogo /></div>
          <h4 className='my-4'>Please sign up with your account</h4>
          <div className={styles.bt} ><ButtonCustomSig /></div>
          <form className='mt-4  col-lg-4 col-10 offset-1 offset-lg-4  '>
              <Form.Control style={{ height: '48px', borderRadius: '4px', marginBottom: '10px' }} type='email' placeholder='Email' value={inputData.email} name='email' onChange={onChangeHandler} />
              <Form.Control style={{height: '48px', borderRadius: '4px', marginBottom: '10px' }} type='password' placeholder='Password' value={inputData.password} name='password' onChange={onChangeHandler} />
              <Form.Control style={{ height: '48px', borderRadius: '4px', marginBottom: '10px' }} type='fullname' placeholder='fullname' value={inputData.fullname} name='fullname' onChange={onChangeHandler} />
              <button className='btn btn-danger col-12 mt-3' style={{ height:'48px',borderRadius:'25px'}} onClick={registerHandling}>Register</button>
          </form>
          <p className={styles.p}>Already have a Tokopedia account?<Link to='/login' className='text-danger'>Login</Link></p>
        </div>
      </Row>
    </Container>
  );
}








