import GambarLogo from '../componen/logoBelanja';
import React, { useState, useEffect } from 'react'
import ButtonSellerSig from '../componen/buttonSeller sig';
import styles from './login/Login.module.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';




function SigUpCustommer() {
  const navigate = useNavigate()
  const [inputData, setInputData] = useState({
    email: '',
    password: '',
    fullname:'',
    role:'cust'
  })

  const registerHandling = async (e) => {
    e.preventDefault()
    const {password,email,fullname,role} = inputData
    const data = {password,email,fullname,role}
    // adminLogin(data)
    
    const res = await (await fetch(process.env.REACT_APP_URL_BE +`/users/register/cust`, {
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
        role:'cust'
      })
      console.log(res.data.otp,'ini data login')
      localStorage.setItem('otp',res.data.otp)
      navigate('/Otp')
    }  else {
      alert(res.data)
      console.log(res)
  } 
  }

  const onChangeHandler = (e) => {
    const name = e.target.name
    const value = e.target.value
    setInputData({ ...inputData, [name]: value })
  }




  return (
    <Container className='container' style={{ textAlign: 'center' }} >
      <Row className='row my-5'>
        <div className='col-12'>
          <div className='d-flex justify-content-center'><GambarLogo /></div>
          <h4 className='my-3'>Please sign up with your account</h4>
          <div className={styles.bt} ><ButtonSellerSig /></div>
          <form className='mt-4  col-lg-4 col-10 offset-1 offset-lg-4  '>
            <Form.Control style={{ height: '48px', borderRadius: '4px', marginBottom: '10px' }} type='email' placeholder='Email' value={inputData.email} name='email' onChange={onChangeHandler}/>
            <Form.Control style={{ height: '48px', borderRadius: '4px', marginBottom: '10px' }} type='password' placeholder='Password' value={inputData.password} name='password' onChange={onChangeHandler}/>
            <Form.Control style={{ height: '48px', borderRadius: '4px', marginBottom: '10px' }} type='fullname' placeholder='fullname'  value={inputData.fullname} name='fullname'onChange={onChangeHandler}/>
            <button className='btn btn-danger col-12 mt-3' style={{ height: '48px', borderRadius: '25px' }} onClick={registerHandling}>Register</button>
          </form>
          <p className={styles.p}>Already have a Tokopedia account?<Link to='/login' className='text-danger'>Login</Link></p>
        </div>
      </Row>
    </Container>
  );
}

export default SigUpCustommer;
