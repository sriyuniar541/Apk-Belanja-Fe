import GambarLogo from '../../componen/logoBelanja';
import ButtonUmum from '../../componen/buttonUmum';
import ButtonSeller from '../../componen/buttonSeller';
import ButtonCustom from '../../componen/button';
import styles from '../login/Login.module.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import FormK from '../../componen/form';
import "@fontsource/metropolis";


function LoginCustommer() {
  return (
    <Container className='container'style={{ textAlign:'center'}} >
        <Row className='row'>
            <div className='col-12'>
              <div className='d-flex justify-content-center'><GambarLogo/></div>
                <h4 className={styles.h4}>Please login with your account</h4>
                <div className={styles.bt} ><ButtonSeller/></div>
                <div className='mt-5'>
                  <FormK type='email' placeholder='Email'/>
                  <FormK type='password' placeholder='Password'/>
                </div>
                <a className={styles.fg} href="#">Forget password?</a>
                <div className={styles.bt}><ButtonUmum/></div>
                <p className={styles.p}>Don't have a Tokopedia account? <a className="link text-danger" href="#">Register</a></p>
            </div>
        </Row>
    </Container>
  ); 
}

export default LoginCustommer;
//import Login from './pages/login';