import React, { useState, useEffect } from 'react'
import Form from 'react-bootstrap/Form';
import SideBarProduct from "../../componen/sideBar";
import Card from 'react-bootstrap/Card';
import "@fontsource/metropolis";
import NavbarSebelumLogin from '../../componen/navbar/navbar2';
import axios from 'axios' 
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './sellingProduct.css'


export default function EditProduct() {
    const navigate = useNavigate()
    const token = localStorage.getItem('token')
    let {id} = useParams()
    let urlGet = process.env.REACT_APP_URL_GET
    const [photo, setPhoto] = useState(null)
    const [get,setget] = useState([])
    const [updateData, setUpdateData] = useState({
        name: '',
        stock: '',
        price: '',
        categorys_id: '',
        search: ""
    })

    const handlePhoto = (e) => {
        setPhoto(e.target.files[0])
        console.log(e.target.files[0])
    }

    const handleChange = (e) => {
        setUpdateData({
            ...updateData,
            [e.target.name]: e.target.value
        })
    }

    const addBagAll = () => {
        axios.get(process.env.REACT_APP_URL_BE +`/product/${id}`, {
            headers: { Authorization: `Bearer ${token}` }
        })
            .then((res) => {
                console.log("get data success")
                console.log(res.data.data[0])
                res.data && setUpdateData(res.data.data[0])
            })
            .catch((err) => {
                console.log("get data fail")
                console.log(err)
            })
    }

    useEffect(() => {
        addBagAll()
        console.log(get.id,'ini dari update')
    }, [])

    const postForm = (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append("name", updateData.name)
        formData.append("stock", updateData.stock)
        formData.append("price", updateData.price)
        formData.append("categorys_id", updateData.categorys_id)
        formData.append("photo", photo)
        console.log(formData)
        axios.
            put(`${urlGet}/${id}`, formData, {
                headers: {
                    Authorization : `Bearer ${token}`,
                    "Content-Type": "multipart/form-data",
                },
            }).then((res) => {
                console.log("edit data success")
                console.log(res)
                alert('edit data success')
                navigate('/product')
                addBagAll()
            }).catch((err) => {
                console.log("edit data fail")
                console.log(err)
                alert('edit data fail')
            })
    }

   
    return (
        <div className='Container-fluid'>
            <NavbarSebelumLogin />
            <div className='cont_selling'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className=' col-lg-3 sidebar_selling'>
                            <SideBarProduct />
                        </div>
                        <div className='col-lg-7 card_selling'>
                            <div>
                                <Card>
                                    <Card.Header className='card'>
                                        <h4>Inventory</h4>
                                    </Card.Header>
                                    <Card.Body className='col-lg-6'>
                                        <p>Name of Good</p>
                                        <Form.Control 
                                            placeholder={get.name} 
                                            type="text" 
                                            value={updateData.name} 
                                            name='name' 
                                            onChange={handleChange} 
                                        />
                                    </Card.Body>
                                </Card>
                                <Card className='card_item'>
                                    <Card.Header className='card'>
                                        <h4>Item details</h4>
                                    </Card.Header>
                                    <Card.Body className='col-lg-6'>
                                        <p>Unit price</p>
                                        <Form.Control 
                                            type="number" 
                                            placeholder={get.price} 
                                            value={updateData.price} 
                                            name='price' 
                                            onChange={handleChange} 
                                            className='mb-3'
                                        />
                                        <div className='d-flex'>
                                            <Form.Control 
                                                type="text" 
                                                value={updateData.stock} 
                                                placeholder={get.stock} 
                                                name='stock' 
                                                onChange={handleChange} 
                                            />
                                            <Form.Control 
                                                type="text" 
                                                placeholder={get.categorys_id} 
                                                value={updateData.categorys_id} 
                                                name='categorys_id' 
                                                onChange={handleChange} 
                                            />
                                        </div>
                                    </Card.Body>
                                </Card>
                                <Card className='card_item'>
                                    <Card.Header className='card'>
                                        <h4>Photo of goods</h4>
                                    </Card.Header>
                                    <Card.Body>
                                        <Form.Control 
                                            type="file" 
                                            placeholder="buah" 
                                            name='photo' 
                                            onChange={handlePhoto} 
                                        />
                                    </Card.Body>
                                </Card>
                                <Card className='card_item'>
                                    <Card.Header className='card'>
                                        <h4>Description</h4>
                                    </Card.Header>
                                    <Card.Body>
                                        <textarea 
                                            class="form-control rounded-0" 
                                            id="exampleFormControlTextarea1" 
                                            rows="10">
                                        </textarea>
                                    </Card.Body>
                                </Card>
                                <button 
                                    className='btn btn-danger col-3' 
                                    style={{ borderRadius: '20px' }} 
                                    onClick={postForm}>
                                    Edit
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

