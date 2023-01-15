import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'; 
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import styles from './Componen.module.css';
import logoTas from './../image/tas.png' //untuk import gambar
import segitiga from './../image/Vector (3).png' //untuk import gambar
import keranjang from './../image/shop.png' //untuk import gambar
import { Link, useNavigate } from 'react-router-dom'; //menghubungkan anatar halaman
import "@fontsource/metropolis";
import email from './../image/mail (3) 1.png' //untuk import gambar
import lonceng from './../image/bell (1) 1.png' //untuk import gambar
import pr from './../image/gbr1.png' //untuk import gambar
import axios from 'axios';



function NavbarSebelumLogin(props) {

  const navigate = useNavigate
  const logout = () => {
    localStorage.clear() 
    // window.location.reload(false)
    navigate('/login')
  } //fungsi tombol untuk refres halaman otomatis dan kembali ke login
    
    const token = localStorage.getItem('token') //mendapat item token dari localStorage
    const role = localStorage.getItem('role')
    const user = useSelector((state) => state.user.user)
    const [data,setData] = useState([])

    let users = `http://localhost:4000/users/get/${user.id}`
    const get = () => {
        axios.get(users)
            .then((res) => {
                console.log('get data sukses')
                console.log(res.data.data[0])
                res.data && setData(res.data.data[0])
            }).catch((err) => {
                console.log('get data gagal')
                console.log(err)
            })
    }
    useEffect(()=>{
      get()
      console.log(user)
    },[user])

     // localStorage.setItem('token',user.token)
      // localStorage.getItem('user',user.role === "toko" ? navigate('/product') :  navigate('/')) 
    let filterRole = localStorage.getItem('role')
    const toko = filterRole ==='toko'
    console.log(toko)

  return (
    <div className='container-fluid bg-white shadow p-3 mb-3  rounded'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-2 col-3 bg-white'>
            <Link to='/Home'>
              <div className='d-flex'>
                <img alt="" src={logoTas} width="40" height="45" className="d-inline-block align-top" />
                <h4 className="text-danger mx-3 mt-2" style={{ textDecoration: 'none' }}><b>Blanja</b></h4>
              </div>
            </Link>
          </div>
          <div className='col-lg-6 col-4 bg-white'>
            <div className='mt-1'>
              <Form className="d-flex">
                <Form.Control type="search" style={{ borderRadius: '23px', borderColor: '#8E8E93' }} placeholder="Search" className={styles.fm} aria-label="Search" name = {props.name} value={props.value} onChange={props.onChange}/>
                <Button variant="outline-secondary" style={{ borderRadius: '12px', borderColor: '#8E8E93' }} className={styles.bt}><img className={styles.bt2} src={segitiga} alt='' /></Button>
              </Form>
            </div>
          </div>
          <div className='col-5 col-lg-3 offset-lg-1 bg-white d-flex'>
            <Button variant="" className=""><Link to='/MyBag'><img src={keranjang} alt='' />
            </Link></Button>
            { !token ? 
             (
              <><Link to='/'><button className='col-lg-5 btn btn-danger me-2' style={{ borderRadius: '20px' }}>Login</button></Link>
              <Link to='/sighupSeller'><button className='col-lg-5 btn btn-white border-secondary ' style={{ borderRadius: '20px' }}>SingIn</button></Link></>
              ): (
                <><>
                  {!toko ?
                    (<><Button variant="" className="mr-lg-2"><img src={lonceng} alt='' /></Button>
                    <Link to='/profile'><Button variant="" className="  mx-lg-2 mt-2"><img src={data.photo? data.photo : 'data not found'} alt='' style={{borderRadius:'50%', width:'30px'}} /></Button></Link>
                    </>)
                    :
                    (<><Link to='/profile'><img src={data ? data.photo : 'data not found'} style={{ borderRadius: '50%', width: '30px' }} alt=''  className='mt-2'/></Link>
                    <Link to='/product'><Button variant="" className="mr-lg-2 btn-white border mt-2 mx-lg-2">Product</Button></Link>
                    </>
                    )}
                </>
                <Link to='/login'>
                  <Button className='btn btn-danger mt-2' variant="" onClick={() => logout()}>logout</Button>
                </Link>
                </>
                )
              } 
          </div>
        </div>
      </div>
    </div>
  );
}


export default NavbarSebelumLogin;