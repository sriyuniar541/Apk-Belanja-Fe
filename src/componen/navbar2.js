import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import styles from './Componen.module.css';
import logoTas from './../image/tas.png' //untuk import gambar
import segitiga from './../image/Vector (3).png' //untuk import gambar
import keranjang from './../image/shop.png' //untuk import gambar
import { Link } from 'react-router-dom'; //menghubungkan anatar halaman
import "@fontsource/metropolis";


function NavbarSebelumLogin() {
  return (
    
    <div className='Container-fluid shadow p-3 mb-5 bg-white rounded'>
      <div className='Container'>
        <div className={styles.navbar}>
          <div className='ContainerNav col-12'>
            <div className='row'>
              <div className='col-lg-2 col-4 d-flex offset-lg-1'>
                  <img alt="" src={logoTas} width="40" height="40" className="d-inline-block align-top"/>{' '}
                    <h2 className="text-danger mx-2" style={{fontFamily:'Black'}}>Blanja</h2>
              </div>
              <div className='col-lg-4 col-8'>
              <Form className="d-flex">
                <Form.Control type="search" style={{borderRadius:'23px',borderColor:'#8E8E93'}} placeholder="Search" className={styles.fm} aria-label="Search" />
                <Button variant="outline-secondary" style={{borderRadius:'12px',borderColor:'#8E8E93'}} className={styles.bt}><img className={styles.bt2} src={segitiga}/></Button>
              </Form>
              </div> 
              <div className='col-lg-4 col-12 offset-lg-1 '>
                  {/* <Link to ='/MyBag'><img src={keranjang}/> */}
                  <Button variant=""className="mr-lg-2"><Link to ='/MyBag'><img src={keranjang}/></Link></Button>
                  <Button variant="danger" style={{borderRadius:'25px'}} className={styles.btd}><Link to ='/login'style={{textDecoration:'none',color:'black'}}>Login</Link></Button>{' '}
                  <Button variant="light" style={{borderRadius:'25px',borderColor:'#9B9B9B'}} className={styles.btd2}><Link to ='/sighup'style={{textDecoration:'none',color:'black'}}>sighup</Link></Button>{' '}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



export default NavbarSebelumLogin;