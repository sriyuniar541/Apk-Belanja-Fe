import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import SideBarProduct from "../componen/sideBar";
import Card from 'react-bootstrap/Card';
import "@fontsource/metropolis";
import NavbarSebelumLogin from '../componen/navbar2';
import axios from 'axios' //untuk interaksi dengan database
import { useNavigate } from 'react-router-dom';



export default function SellingProduct() {
    let token = localStorage.getItem('token')
    const navigate = useNavigate()
    let urlGet = process.env.REACT_APP_URL_GET
    const [photo, setPhoto] = useState(null)
    const [inputData, setInputData] = useState({
        name: "",
        stock: "",
        price: "",
        categorys_id: "",
        search: ""
    })

    const handlePhoto = (e) => {
        setPhoto(e.target.files[0])
        console.log(e.target.files[0])
    }

    const handleChange = (e) => {
        setInputData({
            ...inputData,
            [e.target.name]: e.target.value
        })
    }

    

    const postForm = (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append("name", inputData.name)
        formData.append("stock", inputData.stock)
        formData.append("price", inputData.price)
        formData.append("categorys_id", inputData.categorys_id)
        formData.append("photo", photo)
        console.log(formData)
        axios.
            post(`${urlGet}`, formData, {
                headers: {
                    Authorization : `Bearer ${token}`,
                    "Content-Type": "multipart/form-data",
                },
            }).then((res) => {
                console.log("input data success")
                console.log(res)
                alert('input data success')
                navigate('/product')
            }).catch((err) => {
                console.log("input data fail")
                console.log(err)
                alert('input data fail')
            })
    }

    return (
        <div className='Container-fluid' style={{ background: '#F5F5F5' }}>
            <NavbarSebelumLogin />
            <div className=''>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className=' col-4 bg-white p-2'>
                            <SideBarProduct />
                        </div>
                        <div className='col-lg-7 px-5 mt-5'>
                            <div className='p-2'>
                                <Card className='bg-white mb-3'>
                                    <Card.Header className='bg-white'><h4>Inventory</h4></Card.Header>
                                    <Card.Body className='col-lg-6'>
                                        <p>Name of Good</p>
                                        <Form.Control type="text" value={inputData.name} name='name' onChange={handleChange} />
                                    </Card.Body>
                                </Card>
                                <Card className='bg-white mb-3'>
                                    <Card.Header className='bg-white'><h4>Item details</h4></Card.Header>
                                    <Card.Body className='col-lg-6'>
                                        <p>Unit price</p>
                                        <Form.Control type="text" value={inputData.price} name='price' onChange={handleChange} className='mb-3'/>
                                        <div className='d-flex'>
                                        <Form.Control type="text" placeholder="stock" value={inputData.stock} name='stock' onChange={handleChange} />
                                        <Form.Control type="text" placeholder="category" value={inputData.categorys_id} name='categorys_id' onChange={handleChange} />
                                        </div>
                                    </Card.Body>
                                </Card>
                                <Card className='bg-white mb-3'>
                                    <Card.Header className='bg-white'><h4>Photo of goods</h4></Card.Header>
                                    <Card.Body>
                                        <Form.Control type="file" placeholder="buah" name='photo' onChange={handlePhoto} />
                                    </Card.Body>
                                </Card>
                                <Card className='bg-white mb-3'>
                                    <Card.Header className='bg-white'><h4>Description</h4></Card.Header>
                                    <Card.Body>
                                        <textarea class="form-control rounded-0" id="exampleFormControlTextarea1" rows="10"></textarea>

                                    </Card.Body>
                                </Card>
                                <button className='btn btn-danger col-3' style={{ borderRadius: '20px' }} onClick={postForm}>Jual</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}