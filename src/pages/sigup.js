import GambarLogo from './../componen/logoBelanja';
import ButtonCustom from './../componen/button';
import ButtonUmum from './../componen/buttonUmum';
import styles from './login/Login.module.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import FormK from '../componen/form';
import React, { useState,useEffect } from 'react'
import axios from 'axios'; //untuk mengimpor data dari database
import Form from 'react-bootstrap/Form';



export default function SigUpSeller() {


const [fullname,setFullname] = useState ('')
const [email,setEmail] = useState ('')
// const [phone,setPhone] = useState ('')
// const [store,setStore] = useState ('')
const [password,setPassword] = useState ('')


const changeUsername = (e) => {
  const value = e.target.value
  setFullname (value)
}

const changeEmail = (e) =>{
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
    email : '',
    password :'',
    fullname:'',
    role :'toko'
  
  }

  console.log(data)
  axios.post('http://localhost:4000/users/register/toko')
  .then (result =>{
    console.log(result)
  })
}
// id VARCHAR PRIMARY KEY,
// email VARCHAR NOT NULL,
// password VARCHAR NOT NULL,
// fullname VARCHAR NOT NULL,
// role VARCHAR

  return (
    <Container className='container'style={{ textAlign:'center'}} >
        <Row className='row'>
            <div className='col-12'>
              <div className='d-flex justify-content-center'><GambarLogo/></div>
                <h4 className={styles.h4}>Please sign up with your account</h4>
                <div className={styles.bt} ><ButtonCustom/></div>
                <div className='mt-5'>
                  <form>
                  <Form.Control style={{ width:'400px',height:'48px',borderRadius:'4px',marginBottom:'10px'}} type='email' placeholder='Email' value={email} name='email' onChange={changeEmail}/>
                  <Form.Control style={{ width:'400px',height:'48px',borderRadius:'4px',marginBottom:'10px'}} type='password' placeholder='Password' value={password} name='password' onChange={changePassword}/>
                  <Form.Control style={{ width:'400px',height:'48px',borderRadius:'4px',marginBottom:'10px'}} type='fullname' placeholder='fullname' value={fullname} name='fullname' onChange={changeUsername}/>
                  <div type='submit' className={styles.bt}><ButtonUmum onClick={sigHup} /></div>           
                  </form>
                  {/* <FormK type='email' placeholder='Email'value={email} onChange={changeEmail}/>
                  <FormK type='password' placeholder='Password'value={password} onChange={changePassword}/>
                  <FormK type='fullname' placeholder='Fullname' value={fullname}  onChange={changeUsername}/> */}
                  {/* <FormK type='phone-number' placeholder='Phone Number'value={phone} onChange={changePhone}/>
                  <FormK type='store-number' placeholder='store number'value={store} onChange={changeStore}/> */}
                </div> 
                {/* <div type='submit' className={styles.bt}><ButtonUmum onClick={sigHup} /></div> */}
                <p className={styles.p}>Already have a Tokopedia account?<a className="link text-danger" href="#">Login</a></p>
            </div>
        </Row>
    </Container>
  ); 
}








