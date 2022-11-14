
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import styles from './Componen.module.css';
import logoTas from './../image/tas.png' //untuk import gambar
import segitiga from './../image/Vector (3).png' //untuk import gambar
import keranjang from './../image/Vector.png' //untuk import gambar
import email from './../image/Vector (2).png' //untuk import gambar
import lonceng from './../image/Vector (4).png' //untuk import gambar
import pr from './../image/gbr.png' //untuk import gambar
import Image from 'react-bootstrap/Image'

function NavbarLogin() {
  return (
    
    <div className='Container-fluid shadow p-3 mb-5 bg-white rounded'>
      <div className='Container'>
        <div className={styles.navbar}>
          <div className='ContainerNav col-12'>
            <div className='row'>
              <div className='col-lg-2 d-flex offset-lg-1'>
                  <img alt="" src={logoTas} width="40" height="40" className="d-inline-block align-top"/>{' '}
                    <h2 className="text-danger mx-2">Blanja</h2>
              </div>
              <div className='col-lg-4 col-6'>
              <Form className="d-flex">
                <Form.Control className={styles.fm} style={{borderRadius:'23px',borderColor:'#8E8E93'}} type="search" placeholder="Search" aria-label="Search"/>
                <Button variant="outline-secondary" style={{borderRadius:'12px',borderColor:'#8E8E93'}} className={styles.bt}><img className={styles.bt2} src={segitiga}/></Button>
              </Form>
              </div>
              <div className='col-lg-4 offset-lg-1 col-6'>
                  <Button href='http://localhost:3000/MyBag' variant=""className="mr-lg-2"><img src={keranjang}/></Button>
                  <Button variant=""className="mr-lg-l2"><img src={lonceng}/></Button>
                  <Button variant=""className="mr-lg-2"><img src={email}/></Button>
                  <Button href='http://localhost:3000/profile' variant=""><img src={pr}/></Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default NavbarLogin;