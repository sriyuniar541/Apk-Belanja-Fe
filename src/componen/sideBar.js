import { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import pr2 from './../image/gbr1.png' //untuk import gambar
import ubah from './../image/ub.png'
import g1 from './../image/g1.png'
import g2 from './../image/g2.png'
import g3 from './../image/g3.png'
import l2 from './../image/g4.png'
import l3 from './../image/g6.png'
import s from './../image/krg.png'
import s1 from './../image/tk.png'
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";



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
        axios.put(`http://localhost:4000/users/${user.id}`, formData, {
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
    const toko = filterRole ==='toko'
    console.log(toko)


    return (
        <div className="container ">
            <div className="row ">
                <div className="col-lg-4 col-5 mt-lg-5 " style={{ height: '100vh' }}>
                    <div className="container px-lg-5 py-lg-5 py-2">
                        <div className="row ">
                            <div className="col-lg-4  ">
                                <div className="d-flex ">
                                    <img alt='' src={data.photo ? data.photo : 'data not found'} style={{ borderRadius: '50%', maxWidth: '90px', maxHeight: '61px' }} />
                                    <div className=" mt-2">
                                        <p style={{ marginLeft: '10%' }}>{data.fullname ? data.fullname : 'data not found'}</p>
                                        <Button href='#' variant="" className="" onClick={updateProfile}>
                                            <img alt='' src={ubah} style={{ marginTop: '-50%', marginLeft: '-1%' }} />
                                            </Button>
                                        <input type='file' placeholder="ubah profile" onChange={handlePhoto} />
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <div className="mt-3  ">
                                    { !toko ?
                                        (
                                        <>
                                        <Link to='/History'><Button variant="">
                                            <div className="d-flex">
                                               <img alt='' src={s1} />
                                                <p className="ms-2">History</p> 
                                            </div>
                                            
                                            </Button></Link>
                                        <Link to='/MyBag'><Button href='#' variant="">
                                        <div className="d-flex">
                                               <img alt='' src={s} />
                                                <p className="ms-2">Cart</p> 
                                            </div>
                                        </Button></Link>
                                        {/* <Button className='btn btn-warning col-lg-12 mt-2 text-white' variant="" onClick={() => logout()}>logout</Button> */}
                                        </>)
                                        : (
                                           <>
                                           <Link to='/product'>
                                                <Button variant=""><img alt='' src={l2} style={{}} />
                                                </Button>
                                            </Link>
                                            <Link to='/Order'><Button variant=""><img alt='' src={l3} /></Button>
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