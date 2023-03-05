import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import styles from './Componen.module.css';
import logoTas from './../image/tas.png'
import { Link, useNavigate } from 'react-router-dom';
import "@fontsource/metropolis";
import { FiShoppingCart, FiFilter } from "react-icons/fi";
import { BiBell } from "react-icons/bi";
import axios from 'axios';


function NavbarSebelumLogin(props) {
  const navigate = useNavigate
  const logout = () => {
    localStorage.clear()
    navigate('/login')
  }

  const token = localStorage.getItem('token')
  const role = localStorage.getItem('role')
  const user = useSelector((state) => state.user.user)
  const [data, setData] = useState([])

  let users = process.env.REACT_APP_URL_BE + `/users/get/${user.id}`
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
  useEffect(() => {
    get()
    console.log(user)
  }, [user])


  let filterRole = localStorage.getItem('role')
  const toko = filterRole === 'toko'
  console.log(toko)

  return (
    <div className='container-fluid bg-white shadow p-3 mb-3  rounded'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-2 col-3 bg-white'>
            <Link to='/Home' style={{ textDecoration: 'none' }}>
              <div className='d-flex'>
                <img alt=""
                  src={logoTas}
                  width="40"
                  height="45"
                  className="d-inline-block align-top"
                />
                <h4 className="text-danger mx-3 mt-2">
                  <b>Blanja</b>
                </h4>
              </div>
            </Link>
          </div>
          <div className='col-lg-6 col-4 bg-white'>
            <div className='mt-1'>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  style={{ 
                    borderRadius: '23px', 
                    borderColor: '#8E8E93' 
                  }}
                  placeholder="Search"
                  className={styles.fm}
                  aria-label="Search"
                  name={props.name}
                  value={props.value}
                  onChange={props.onChange}
                />
                <Button
                  variant=''
                  className='btn  btn-outline-secondary ms-2 opacity-75'
                  style={{ borderRadius: '10px' }}>
                  <FiFilter size={20} />
                </Button>
              </Form>
            </div>
          </div>
          <div className='col-5 col-lg-3 offset-lg-1 d-flex justify-content-end '>
            <Button
              variant=""
              className="">
              <Link to='/MyBag'>
                <FiShoppingCart
                  className='text-secondary opacity-75'
                  size={27}
                />
              </Link>
            </Button>
            {!token ?
              (
                <><Link 
                    to='/login'>
                    <button 
                      className='col-lg-12 btn btn-danger' 
                      style={{ borderRadius: '20px' }}>
                      Login
                    </button>
                  </Link>
                  <Link   
                    to='/sighupSeller'>
                    <button 
                      className='col-lg-12 btn btn-white border-secondary ' 
                      style={{ borderRadius: '20px' }}>
                      SingIn
                      </button>
                  </Link></>
              ) : (
                <><>
                  {!toko ?
                    (<><Button variant="" >
                      <BiBell 
                        size={27} 
                        className='text-secondary opacity-75' 
                      />
                    </Button>
                      <Link 
                        to='/profile' 
                        className='my-2 me-3'>
                        <img src={data.photo ? data.photo : 'data not found'} 
                          alt='profile' 
                          style={{ 
                            borderRadius: '50%', 
                            width: '25px', 
                            height: '25px' 
                        }} 
                        /></Link>
                    </>)
                    :
                    (<><Link 
                          to='/profile' 
                          className='my-2 me-2'>
                          <img src={data.photo ? data.photo : 'data not found'} 
                            alt='profile' 
                            style={{ 
                              borderRadius: '50%', 
                              width: '25px', 
                              height: '25px' 
                            }} 
                          /></Link>
                      <Link 
                        to='/product'>
                        <Button 
                          variant="" 
                          className="mr-lg-2 btn-white border mt-1 py-1 mx-lg-2">
                          Product
                        </Button>
                      </Link>
                    </>
                    )}
                </>
                  <Link to='/login'>
                    <Button 
                      className='btn btn-danger py-1 mt-1' 
                      variant="" 
                      onClick={() => logout()}>
                      logout
                    </Button>
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