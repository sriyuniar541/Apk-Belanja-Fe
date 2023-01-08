import GambarLogo from '../../componen/logoBelanja';
import ButtonUmum from '../../componen/buttonUmum';
import ButtonSeller from '../../componen/buttonSeller';
import ButtonCustom from '../../componen/button';
import styles from '../login/Login.module.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import FormK from '../../componen/form';
import "@fontsource/metropolis";
import { Link } from 'react-router-dom';
import {Form, Button} from 'react-bootstrap';


function LoginCustommer() {
  return (
    <Container className='container'style={{ textAlign:'center'}} >
        <Row className='row my-5'>
            <div className='col-10 offset-1 col-lg-4 offset-lg-4 '>
              <div className='d-flex justify-content-center'><GambarLogo/></div>
                <h4 className='my-4'>Please login with your account</h4>
                <div className=''><ButtonSeller/></div>
                <div className='my-4'>
                <Form.Control style={{ height:'48px',borderRadius:'4px',marginBottom:'10px'}} type='email' placeholder='Email' />
                <Form.Control style={{ height:'48px',borderRadius:'4px',marginBottom:'10px'}} type='password' placeholder='Password' />
                </div>
                <p className='text-end' >Forget password?</p>
                <Button href='http://localhost:3000/login' variant="danger" className='col-12' style={{ height:'48px',borderRadius:'25px'}}>Login</Button>
                <p className={styles.p}>Don't have a Tokopedia account? <Link to='/sighupCustommer' className='text-danger'>Register</Link></p>
            </div>
        </Row>
    </Container>
  ); 
}

export default LoginCustommer;
//import Login from './pages/login';