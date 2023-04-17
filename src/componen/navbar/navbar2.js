import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import logoTas from './../../image/tas.png'
import { Link, useNavigate } from 'react-router-dom';
import { FiShoppingCart, FiFilter } from "react-icons/fi";
import { BiBell } from "react-icons/bi";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import profile from '../../image/profile.png'
import axios from 'axios';
import './navbar.css'


function NavbarSebelumLogin(props) {
  const [menu, setMenu] = useState('menu-nav noActive')
  const [show, setShow] = useState('close_menu d-none')
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

  const activeMenu = () => {
    setMenu('menu-nav active')
    setShow('close_menu')
  }

  const closeMenu = () => {
    setMenu('menu-nav noActive')
    setShow('close_menu d-none')

  }


  return (
    <div className='container-fluid cont_nav '>
      <div className='container'>
        <div className='cont-navbar'>
          <div className='brand'>
            <Link to='/Home' className='link'>
              <div className='brand-logo'>
                <img
                  src={logoTas}
                  alt='brand-logo'
                />
                <h4 >
                  Blanja
                </h4>
              </div>
            </Link>
          </div>
          <div className='search'>
            <input
              type="search"
              placeholder="Search"
              aria-label="Search"
              name={props.name}
              value={props.value}
              onChange={props.onChange}
            />
            <Button variant=''>
              <FiFilter size={20} className='icon_filter' />
            </Button>
            <button className='hamburger_menu' onClick={activeMenu}><AiOutlineMenu size={35} /></button>
            <button className={show} onClick={closeMenu}><AiOutlineClose size={25} /></button>
          </div>
          <div className={menu}>
            <Button variant="">
              <Link to='/MyBag'>
                <FiShoppingCart
                  className="icon_bag"
                  size={27}
                />
              </Link>
            </Button>
            {!token ?
              (
                <>
                  <Link
                    to='/login'>
                    <button
                      className='btn btn-danger'
                    >
                      Login
                    </button>
                  </Link>
                  <Link
                    to='/sighupSeller'>
                    <button
                      className='btn btn-danger'
                    >
                      SingIn
                    </button>
                  </Link></>
              ) : (
                <><>
                  {!toko ?
                    (<>
                      <Button variant="" >
                        <BiBell
                          size={27}
                        />
                      </Button>
                      <Link
                        to='/profile'
                        className='my-2 me-3'>
                        <img src={data.photo ? data.photo : profile}
                          alt='profile'
                          className='profile_nav'
                        /></Link>
                    </>)
                    :
                    (<>
                      <Link
                        to='/profile'
                        className='my-2 me-2'>
                        <img src={data.photo ? data.photo : profile}
                          alt='profile'

                          className='profile_nav'
                        /></Link>
                      <Link className='link_product'
                        to='/product'
                      >
                        <Button variant="" className=' button_product'>
                          Product
                        </Button>
                      </Link>
                    </>
                    )}
                </>
                  <Link to='/login' className='link'>
                    <Button
                      className='btn btn-danger logout_nav'
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