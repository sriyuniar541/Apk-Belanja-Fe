import GambarLogo from './../componen/logoBelanja';
import ButtonCustomSig from '../componen/buttonSig';
import ButtonUmum from './../componen/buttonUmum';
import styles from './login/Login.module.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import FormK from '../componen/form';
import React, { useState, useEffect } from 'react'
import axios from 'axios'; //untuk mengimpor data dari database
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';



export default function SigUpSeller() {


  const [fullname, setFullname] = useState('')
  const [email, setEmail] = useState('')
  // const [phone,setPhone] = useState ('')
  // const [store,setStore] = useState ('')
  const [password, setPassword] = useState('')


  const changeUsername = (e) => {
    const value = e.target.value
    setFullname(value)
  }

  const changeEmail = (e) => {
    const value = e.target.value
    setEmail(value)
  }

  // const changePhone = (e) => {
  //   const value = e.target.value
  //   setPhone (value)
  // }

  // const changeStore = (e) => {
  //   const value = e.target.value
  //   setStore(value)
  // }

  const changePassword = (e) => {
    const value = e.target.value
    setPassword(value)
  }

  const sigHup = () => {

    const data = {
      email: '',
      password: '',
      fullname: '',
      role: 'toko'

    }

    console.log(data)
    axios.post('http://localhost:4000/users/register/toko')
      .then(result => {
        console.log(result)
      })
  }
  // id VARCHAR PRIMARY KEY,
  // email VARCHAR NOT NULL,
  // password VARCHAR NOT NULL,
  // fullname VARCHAR NOT NULL,
  // role VARCHAR

  return (
    <Container className='container ' style={{ textAlign: 'center' }} >
      <Row className='row my-5'>
        <div className='col-12'>
          <div className='d-flex justify-content-center'><GambarLogo /></div>
          <h4 className='my-4'>Please sign up with your account</h4>
          <div className={styles.bt} ><ButtonCustomSig /></div>
          <form className='mt-4  col-lg-4 col-10 offset-1 offset-lg-4  '>
              <Form.Control style={{ height: '48px', borderRadius: '4px', marginBottom: '10px' }} type='email' placeholder='Email' value={email} name='email' onChange={changeEmail} />
              <Form.Control style={{height: '48px', borderRadius: '4px', marginBottom: '10px' }} type='password' placeholder='Password' value={password} name='password' onChange={changePassword} />
              <Form.Control style={{ height: '48px', borderRadius: '4px', marginBottom: '10px' }} type='fullname' placeholder='fullname' value={fullname} name='fullname' onChange={changeUsername} />
              <button className='btn btn-danger col-12 mt-3' style={{ height:'48px',borderRadius:'25px'}}>Register</button>
          </form>
          <p className={styles.p}>Already have a Tokopedia account?<Link to='/loginSeller' className='text-danger'>Login</Link></p>
        </div>
      </Row>
    </Container>
  );
}








