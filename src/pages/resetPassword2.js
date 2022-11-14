import GambarLogo from '../componen/logoBelanja';
import ButtonCustom from '../componen/button';
import ButtonUmum from '../componen/buttonUmum';
import styles from '../pages/login/Login.module.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import FormK from '../componen/form';




function ResetPassword2() {
  return (
    <Container className='container'style={{ textAlign:'center'}} >
        <Row className='row'>
            <div className='col-12'>
              <div className='d-flex justify-content-center'><GambarLogo/></div>
                <h4 className={styles.h4}>Reset Password</h4>
                <p className='text-danger'>You need to change your password to activate your account</p>
                <div className={styles.bt} ><ButtonCustom/></div>
                <div className='mt-5'>
                  <FormK type='password' placeholder='Password'/>
                  <FormK type='confirmasi-password' placeholder='Confirmasi New Password'/>
                </div>
                <a className={styles.fg} href="#">Forget password?</a>
                <div className={styles.bt}><ButtonUmum/></div>
                </div>
        </Row>
    </Container>
  ); 
}

export default ResetPassword2;
//import ResetPassword2 from './pages/ResetPassword2';