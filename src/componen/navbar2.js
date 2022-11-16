
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import styles from './Componen.module.css';
import logoTas from './../image/tas.png' //untuk import gambar
import segitiga from './../image/Vector (3).png' //untuk import gambar
import keranjang from './../image/shop.png' //untuk import gambar
import email from './../image/Vector (2).png' //untuk import gambar
import lonceng from './../image/Vector (4).png' //untuk import gambar
import pr from './../image/gbr.png' //untuk import gambar
import Image from 'react-bootstrap/Image'
import LoginSeller from '../pages/login/login';




function NavbarSebelumLogin() {
  return (
    
    <div className='Container-fluid shadow p-3 mb-5 bg-white rounded'>
      <div className='Container'>
        <div className={styles.navbar}>
          <div className='ContainerNav col-12'>
            <div className='row'>
              <div className='col-lg-2 col-4 d-flex offset-lg-1'>
                  <img alt="" src={logoTas} width="40" height="40" className="d-inline-block align-top"/>{' '}
                    <h2 className="text-danger mx-2">Blanja</h2>
              </div>
              <div className='col-lg-4 col-8'>
              <Form className="d-flex">
                <Form.Control type="search" style={{borderRadius:'23px',borderColor:'#8E8E93'}} placeholder="Search" className={styles.fm} aria-label="Search" />
                <Button variant="outline-secondary" style={{borderRadius:'12px',borderColor:'#8E8E93'}} className={styles.bt}><img className={styles.bt2} src={segitiga}/></Button>
              </Form>
              </div> 
              <div className='col-lg-4 col-12 offset-lg-1 '>
                  <Button href='http://localhost:3000/MyBag' variant=""className={styles.ke}><img src={keranjang}/></Button>
                  <Button href='http://localhost:3000/login' variant="danger" style={{borderRadius:'25px'}} className={styles.btd}>login</Button>{' '}
                  <Button href='http://localhost:3000/sighup' variant="light" style={{borderRadius:'25px',borderColor:'#9B9B9B'}} className={styles.btd2}>sigup</Button>{' '}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



export default NavbarSebelumLogin;