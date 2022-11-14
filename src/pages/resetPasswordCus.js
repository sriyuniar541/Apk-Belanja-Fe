import GambarLogo from '../componen/logoBelanja';
import buttonSeller from '../componen/buttonSeller';
import ButtonUmum from '../componen/buttonUmum';
import styles from '../pages/login/Login.module.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import FormK from '../componen/form';




function ResetPasswordCus() {
  return (
    <Container className='container'style={{ textAlign:'center'}} >
        <Row className='row'>
            <div className='col-12'>
              <div className='d-flex justify-content-center'><GambarLogo/></div>
                <h4 className={styles.h4}>Reset Password</h4>
                <div className={styles.bt} ><buttonSeller/></div>
                <div className='mt-5'>
                  <FormK type='password' placeholder='Password'/>
                  <a className={styles.fg} href="#"> Forget password?</a>
                </div>
                <div className={styles.bt}><ButtonUmum/></div>
                <p className={styles.p}>Already have a Tokopedia account?<a className="link text-danger" href="#">Login</a></p>
         
                </div>
        </Row>
    </Container>
  ); 
}

export default ResetPasswordCus;
//import ResetPassword2 from './pages/ResetPassword2';