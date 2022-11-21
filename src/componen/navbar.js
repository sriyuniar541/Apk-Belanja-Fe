import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import styles from './Componen.module.css';
import logoTas from './../image/tas.png' //untuk import gambar
import segitiga from './../image/Vector (3).png' //untuk import gambar
import keranjang from './../image/shop.png' //untuk import gambar
import email from './../image/mail (3) 1.png' //untuk import gambar
import lonceng from './../image/bell (1) 1.png' //untuk import gambar
import pr from './../image/gbr.png' //untuk import gambar
import { Link } from 'react-router-dom'; //menghubungkan anatar halaman
import { useState } from 'react';




function NavbarLogin() {
  const [search,setSearch] = useState('')
  const [product,setProduct] = useState([])
  let urlGet = process.env.REACT_APP_URL_GET
  
  async function searchN (){
    try{
      const response = await window.fetch(`${urlGet}`)
      const data= await response.json()
      setProduct(data.response)
      //console.log(data)
    } catch (e){
      console.log(e)
    }
  }


  return (
    
    <div className='Container-fluid shadow p-3 mb-5 bg-white rounded'>
      <div className='Container'>
        <div className={styles.navbar}>
          <div className='ContainerNav col-12'>
            <div className='row'>
              <div className='col-lg-2 col-6 offset-4  d-flex offset-lg-1'>
                  <img alt="" src={logoTas} width="40" height="40" className="d-inline-block align-top"/>{' '}
                    <h2 className="text-danger mx-2">Blanja</h2>
              </div>
              <div className='col-lg-4 col-6'>
              <Form className="d-flex">
                <Form.Control className={styles.fm} style={{borderRadius:'23px',borderColor:'#8E8E93'}} type="text" placeholder="Search" aria-label="Search" value={search} onChange={(e)=>setSearch(e.target.value)}/>
                <Button variant="outline-secondary" style={{borderRadius:'12px',borderColor:'#8E8E93'}} className={styles.bt} onClick={searchN}><img className={styles.bt2} src={segitiga} alt=''/></Button>
              </Form>
              
              </div>
              <div className='col-lg-3 offset-lg-1 col-6 ms-auto'>
                  <Button variant=""className="mr-lg-2"><Link to ='/MyBag'><img src={keranjang} alt=''/></Link></Button>
                  <Button variant=""className="mr-lg-2"><img src={lonceng} alt=''/></Button>
                  <Button variant=""className="mr-lg-2"><img src={email} alt=''/></Button>
                  <Button href='http://localhost:3000/profile' variant=""><img src={pr} style={{borderRadius:'50%'}} alt=''/></Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default NavbarLogin;