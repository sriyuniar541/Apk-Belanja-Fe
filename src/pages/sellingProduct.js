import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import SideBarProduct from "../componen/sideBarProduct";
import Card from 'react-bootstrap/Card';
import "@fontsource/metropolis";
import NavbarSebelumLogin from '../componen/navbar2';
import axios from 'axios' //untuk interaksi dengan database



export default function SellingProduct() {

    let urlGet = process.env.REACT_APP_URL_GET
    const [photo, setPhoto] = useState(null)
    const [inputData, setInputData] = useState({
        name: "",
        stock: "",
        price: "",
        categorys_id: 1,
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
        // console.log(data)
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
                    "Content-Type": "multipart/form-data",
                },
            }).then((res) => {
                console.log("input data success")
                console.log(res)
                alert('input data success')
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
                                        <Form.Control type="text" value={inputData.price} name='price' onChange={handleChange} />

                                        <p>Stock</p>
                                        <Form.Control type="text" placeholder="buah" value={inputData.stock} name='stock' onChange={handleChange} />

                                        <div className='mt-4'>
                                            <p>Stock</p>
                                            <input className="form-check-input mr-4" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                            <span class="ms-lg-2">Baru</span>
                                            <input className="form-check-input mr-lg-4 col-12 ms-4" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                            <span class="ms-lg-2">Bekas</span>
                                        </div>
                                    </Card.Body>
                                </Card>
                                <Card className='bg-white mb-3'>
                                    <Card.Header className='bg-white'><h4>Photo of goods</h4></Card.Header>
                                    <Card.Body>
                                        <Form.Control type="file" placeholder="buah" name='photo' onChange={handlePhoto} />
                                        {/* <div  style={{border:'1px dashed grey'}}>
                        <div className='col-12 d-flex p-3'>
                            <div style={{width :'190px',height:'190px',backgroundColor:'#D4D4D4',marginRight:'3%'}}>
                                <img src ='' style={{maxWidth :'190px',maxHeight:'190px'}}/>
                            </div>

                            <div style={{width :'120px',height:'120px',backgroundColor:'#D4D4D4',marginRight:'3%',marginTop:'7%'}}>
                                <img src ='' style={{maxWidth :'120px',maxHeight:'120px'}}/>
                            </div>

                            <div style={{width :'120px',height:'120px',backgroundColor:'#D4D4D4',marginRight:'3%',marginTop:'7%'}}>
                                <img src ='' style={{maxWidth :'120px',maxHeight:'120px'}}/>
                            </div>

                            <div style={{width :'120px',height:'120px',backgroundColor:'#D4D4D4',marginRight:'3%',marginTop:'7%'}}>
                                <img src ='' style={{maxWidth :'120px',maxHeight:'120px'}}/>
                            </div>

                            <div style={{width :'120px',height:'120px',backgroundColor:'#D4D4D4',marginRight:'3%',marginTop:'7%'}}>
                                <img src ='' style={{maxWidth :'120px',maxHeight:'120px'}}/>
                            </div>
                        </div>
                            <hr/>
                            <Button className ='bg-white border-secondary mb-5'style={{borderRadius:'20px',color:'black',textAlign:'center'}}>Upload Foto</Button>{' '}
                        </div> */}
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