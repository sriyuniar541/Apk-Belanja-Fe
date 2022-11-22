import GambarLogo from '../../componen/logoBelanja';
import ButtonCustom from '../../componen/button';
import styles from '../login/Login.module.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import {loginUser} from '../../redux/actions/login'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import NavbarBaru from '../../componen/navbarBaru'
import Button from 'react-bootstrap/Button';
import "@fontsource/metropolis";



export default function LoginSeller() {

  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')

  const navigate = useNavigate()
  const dispact = useDispatch()

  const postData =(e) =>{
    e.preventDefault()
    console.log(email)
    console.log(password)
    let data = {
      email,password 
    }
    dispact (loginUser(data,navigate))
    
  }

  return (
    <div>
    <NavbarBaru/>
    <Container className='container'style={{ textAlign:'center'}} >
        <Row className='row'>
            <div className='col-12'>
              <div className='d-flex justify-content-center'><GambarLogo/></div>
                <h4 className={styles.h4}>Please login with your account</h4>
                <div className={styles.bt} ><ButtonCustom/></div>
                <div className='justify-content-center mt-5 '>
                    <form onSubmit={postData} className='justify-content-center'>
                        <Form.Control style={{ marginLeft:'32%',width:'400px',height:'48px',borderRadius:'4px',marginBottom:'10px'}} type='email' placeholder='Email' value={email} name='email' onChange={(e)=>setEmail(e.target.value)}/>
                        <Form.Control style={{ marginLeft:'32%',width:'400px',height:'48px',borderRadius:'4px',marginBottom:'10px'}} type='password' placeholder='Password' value={password} name='password' onChange={(e)=>setPassword(e.target.value)}/>
                        <a className style={{ marginLeft:'25%',color:'red'}} href="#">Forget password?</a>
                        <div className={styles.bt}>
                          {/* <ButtonUmum type='submit'/> */}
                          <Button variant="danger" type='submit' style={{ width:'401px',height:'48px',borderRadius:'25px'}}>Login</Button>{' '}
                          </div>
                        <p className={styles.p}>Don't have a Tokopedia account? <a className="link text-danger" href="#">Register</a></p>
                    </form>
                </div>
            </div>
        </Row>
    </Container>
    </div>
  ); 
}

