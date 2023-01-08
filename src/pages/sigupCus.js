import GambarLogo from '../componen/logoBelanja';
import ButtonSellerSig from '../componen/buttonSeller sig';
import ButtonUmum from '../componen/buttonUmum';
import styles from './login/Login.module.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import FormK from '../componen/form';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';




function SigUpCustommer() {
  return (
    <Container className='container' style={{ textAlign: 'center' }} >
      <Row className='row my-5'>
        <div className='col-12'>
          <div className='d-flex justify-content-center'><GambarLogo /></div>
          <h4 className='my-3'>Please sign up with your account</h4>
          <div className={styles.bt} ><ButtonSellerSig /></div>
          <form className='mt-4  col-lg-4 col-10 offset-1 offset-lg-4  '>
            <Form.Control style={{ height: '48px', borderRadius: '4px', marginBottom: '10px' }} type='email' placeholder='Email' />
            <Form.Control style={{ height: '48px', borderRadius: '4px', marginBottom: '10px' }} type='password' placeholder='Password' />
            <Form.Control style={{ height: '48px', borderRadius: '4px', marginBottom: '10px' }} type='fullname' placeholder='fullname' />
            <button className='btn btn-danger col-12 mt-3' style={{ height: '48px', borderRadius: '25px' }}>Register</button>
          </form>
          <p className={styles.p}>Already have a Tokopedia account?<Link to='/loginCus' className='text-danger'>Login</Link></p>
        </div>
      </Row>
    </Container>
  );
}

export default SigUpCustommer;
