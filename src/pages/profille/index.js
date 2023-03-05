import axios from "axios";
import { useEffect, useState } from "react";
// import styles from './Profile.module.css';
// import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import SideBar from "../../componen/sideBar";
import NavbarSebelumLogin from "../../componen/navbar2";
import { useSelector } from 'react-redux';


export default function Profile() {
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
    // const [startDate, setStartDate] = useState(new Date());
    let users = process.env.REACT_APP_URL_BE + `/users/get/${user.id ? user.id : 'profile not found please login'}`
    const get = () => {
        axios.get(users)
            .then((res) => {
                console.log('get data sukses')
                console.log(res.data.data[0])
                res.data && setData(res.data.data[0])
                localStorage.setItem('user', JSON.stringify(res.data.data[0]))
            }).catch((err) => {
                console.log('get data gagal')
                console.log(err)
                alert(err)
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
                alert('Berhasil Update')
                get()
            })
            .catch((err) => {
                console.log(err, 'post data fail')
                alert('Update profile fail, please insert your photo ')
            })
    }

    const handlePhoto = (e) => {
        setPhoto(e.target.files[0])
        console.log(e.target.files[0])
    }

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
        console.log(data)
    }

    useEffect(() => {
        get()
    }, [])


    return (
        <div className="bg-light w-100 h-100">
            <NavbarSebelumLogin />
            <div className="row">
                <div className='col-lg-3 col-4 bg-white'>
                    <SideBar />
                </div>
                <div className='col-lg-8 col-8 p-lg-5'>
                    <div className="container bg-white p-lg-5">
                        <h2 >My Profil</h2>
                        <h5 className="text-black opacity-50">
                            Manage your profile information
                        </h5>
                        <hr />
                        <div className="container col-lg-12  row">
                            <div className="col col-8 row">
                                <div className="col-lg-12  row mb-3">
                                    <div className="col col-3 centered-value">
                                        Name
                                    </div>
                                    <div className=" col col-lg-9">
                                        <input
                                            type="text"
                                            name='fullname'
                                            className="from-control"
                                            value={data ? data.fullname : 'data not found,please login lagi'}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <div className="col-12 row mb-3">
                                    <div className="col col-lg-3 centered-value">
                                        Email
                                    </div>
                                    <div className=" col col-lg-9">
                                        <input
                                            type="text"
                                            className="from-control"
                                            value={data ? data.email : 'data not found,please login lagi'}
                                            name='email' 
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                {/* form phone number */}
                                <div className="col-12 row mb-3">
                                    <div className="col col-lg-3 centered-value">
                                        Phone-Number
                                    </div>
                                    <div className=" col col-9">
                                        <input
                                            type="text"
                                            className="from-control"
                                            value={data ? data.phonenumber : 'data not found,please login lagi'}
                                            name='phonenumber' 
                                            onChange={handleChange} 
                                        />
                                    </div>
                                </div>
                                {/* Adress */}
                                < div className="col-12 mb-3 row">
                                    <div className="col col-lg-3 centered-value">
                                        Address
                                    </div>
                                    <div className=" col col-9">
                                        <input
                                            type="text"
                                            className="from-control" 
                                            value={data ? data.adress : 'data not found,please login lagi'} 
                                            name='adress' onChange={handleChange} 
                                        />
                                    </div>
                                </div>
                                <button 
                                    className=" btn btn-danger text-white col-lg-5 offset-lg-3 mt-3 mb-4" 
                                    style={{ borderRadius: '20px' }} 
                                    onClick={updateProfile}>
                                    Save
                                </button>
                            </div>
                            <div className="col-lg-4 col-6 text-center " ms-auto>
                                <img src={data ? data.photo : 'photo not found'} 
                                    alt='profile' 
                                    style={{ 
                                        width: '200px', 
                                        height: '200px', 
                                        borderRadius: '50%' 
                                    }} 
                                    className='image-fluid mb-3' 
                                    name='photo' 
                                />
                                <input 
                                    type='file' 
                                    placeholder="Select Image" 
                                    onChange={handlePhoto} 
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}



