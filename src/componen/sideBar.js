import { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import ubah from './../image/ub.png'
import l2 from './../image/g4.png'
import l3 from './../image/g6.png'
import s from './../image/krg.png'
import s1 from './../image/tk.png'
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import './component.css'


export default function SideBar() {
    const navigate = useNavigate
    const logout = () => {
        localStorage.clear()
        window.location.reload(false)
        navigate('/login')
    }
    const [data, setData] = useState({
        email: '',
        fullname: '',
        adress: '',
        gender: '',
        phonenumber: ''
    })
    const user = useSelector((state) => state.user.user)
    useEffect(() => {
        console.log(user)
    }, [user])
    const [photo, setPhoto] = useState(null)
    const token = localStorage.getItem('token')
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

    const updateProfile = (e, id) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('email', data.email)
        formData.append('fullname', data.fullname)
        formData.append('photo', photo)
        formData.append('adress', data.adress)
        formData.append('gender', data.gender)
        formData.append('phonenumber', data.phonenumber)
        console.log(formData)
        axios.put(process.env.REACT_APP_URL_BE + `/users/${user.id}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: `Bearer ${token}`
            },
        })
            .then((res) => {
                console.log(res, "post data success")
                alert('berhasil update')
                get()
            })
            .catch((err) => {
                console.log(err.message, 'post data fail')
                alert('gagal update')
            })
    }

    const handlePhoto = (e) => {
        setPhoto(e.target.files[0])
        console.log(e.target.files[0])
    }

    useEffect(() => {
        get()
    }, [])


    let filterRole = localStorage.getItem('role')
    const toko = filterRole === 'toko'
    console.log(toko)


    return (
        <div className="container sidebar_item nonActive">
            <div className="row ">
                <div className="col-lg-4 col-5 mt-lg-5 sidebar_menu" 
                >
                    <div className="container px-lg-5 py-lg-5 py-2">
                        <div className="row ">
                            <div className="col-lg-4 edit_profile">
                                <div className="d-flex mb-2">
                                    <img alt=''
                                        src={data.photo ? data.photo : 'data not found'}
                                        style={{
                                            borderRadius: '50%',
                                            maxWidth: '60px',
                                            maxHeight: '60px'
                                        }}
                                    />
                                    <div className=" mt-2">
                                        <p style={{ marginLeft: '10%' }}>
                                            {data.fullname ? data.fullname : 'data not found'}
                                        </p>
                                        <Button
                                            variant=""
                                            onClick={updateProfile}
                                            style={{ 
                                                marginTop: '-20%', 
                                                marginLeft: '-1%' 
                                            }}>
                                            <img
                                                alt='' src={ubah}
                                                className='opacity-50'
                                            />
                                        </Button>
                                    </div>
                                </div>
                                <input
                                    type='file'
                                    onChange={handlePhoto}
                                    onKeyPress={(e) => e.key === 'Enter' && updateProfile()}
                                />
                            </div>
                            <div className="list_item_sidebar">
                                <div className="mt-3  sidebar_item_list">
                                    {!toko ?
                                        (
                                            <>
                                                <Link to='/History'>
                                                    <Button variant="">
                                                    <div className="d-flex">
                                                        <img 
                                                            alt='history' 
                                                            src={s1} 
                                                            style={{ 
                                                                width: '35px', 
                                                                height: '35px' 
                                                            }} 
                                                        />
                                                        <p className="ms-2">History</p>
                                                    </div>
                                                    </Button>
                                                </Link>
                                                <Link to='/MyBag'>
                                                    <Button variant="">
                                                    <div className="d-flex">
                                                        <img 
                                                            alt='cart' 
                                                            src={s} 
                                                            style={{ 
                                                                width: '35px', 
                                                                height: '35px' 
                                                            }} 
                                                        />
                                                        <p className="ms-2">Cart</p>
                                                    </div>
                                                    </Button>
                                                </Link>
                                            </>)
                                        : (
                                            <>
                                                <Link to='/product'>
                                                    <Button 
                                                        variant="">
                                                        <img alt='' src={l2}/>
                                                    </Button>
                                                </Link>
                                                <Link to='/Order'>
                                                    <Button variant="">
                                                        <img alt='' src={l3} />
                                                    </Button>
                                                </Link>
                                            </>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}