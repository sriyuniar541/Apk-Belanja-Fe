import React, { useState, useEffect } from 'react'
import Form from 'react-bootstrap/Form';
import SideBarProduct from "../../componen/sideBar";
import Card from 'react-bootstrap/Card';
import "@fontsource/metropolis";
import NavbarSebelumLogin from '../../componen/navbar/navbar2';
import axios from 'axios'
import { RiDeleteBinLine } from "react-icons/ri";
import ModalCategory from '../../componen/modalCategory';
import './category_product.css'


export default function Editcategory() {
    const token = localStorage.getItem('token')
    const [categorys, setCategorys] = useState([])
    const [postcategory, setPostCategory] = useState({
        categorys: ''
    })

    const handleChange = (e) => {
        setPostCategory({
            ...postcategory,
            [e.target.name]: e.target.value
        })
    }

    // insert data
    const postForm = (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append("categorys", postcategory.categorys)
        console.log(formData)
        axios.
            post(process.env.REACT_APP_URL_BE + `/categorys`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "multipart/form-data",
                },
            }).then((res) => {
                console.log("insert data success")
                console.log(res)
                alert('insert data success')
                setPostCategory('')
                addBagAll()
            }).catch((err) => {
                console.log("inseert data fail")
                console.log(err)
                alert('insert data fail')
            })
    }

    // delete data
    const deleteCategory = (e, id) => {
        axios.
            delete(process.env.REACT_APP_URL_BE + `/categorys/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "multipart/form-data",
                },
            }).then((res) => {
                console.log("delete data success")
                console.log(res)
                alert('delete data success')
                return addBagAll()

            }).catch((err) => {
                console.log("delete data fail")
                console.log(err)
                alert('delete data fail')
            })
    }

    // get data
    const addBagAll = () => {
        axios.get(process.env.REACT_APP_URL_BE + `/categorys`, {
            headers: { Authorization: `Bearer ${token}` }
        })
            .then((res) => {
                console.log("get data success")
                console.log(res.data.data)
                res.data && setCategorys(res.data.data)
            })
            .catch((err) => {
                console.log("get data fail")
                console.log(err)
            })
    }

    useEffect(() => {
        addBagAll()
        console.log(categorys, 'ini dari category')
    }, [])

    return (
        <div className='Container-fluid cont_editcategory'>
            <NavbarSebelumLogin />
            <div className='body_category'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-lg-3 cont_sideBar'>
                            <SideBarProduct />
                        </div>
                        <div className='col-lg-8'>
                            <div>
                                <Card className='card_category'>
                                    <Card.Header className='bg-white'>
                                        <h4>Category</h4>
                                    </Card.Header>
                                    <Card.Body className='col-lg-9 offset-lg-1'>
                                        <div className='col-12 item_category'>
                                            <Form.Control 
                                                name='categorys'
                                                value={postcategory.categorys}
                                                onChange={handleChange}
                                                placeholder='Input Category'
                                            />
                                            <button
                                                className='btn btn-warning'
                                                onClick={postForm}>
                                                Add
                                            </button>
                                        </div>
                                        {categorys ? categorys.map((p) => (
                                            <div className='d-flex justify-content-between'>
                                                <Form.Control name='categorys'
                                                    value={p.categorys}
                                                />
                                                <button
                                                    className='btn btn-white'
                                                    onClick={(e) => deleteCategory(e, p.id)}>
                                                    <RiDeleteBinLine className='text-secondary' />
                                                </button>
                                                <ModalCategory id={p.id}
                                                    placeholder={postcategory.categorys}
                                                    addBagAll={addBagAll}
                                                />
                                            </div>
                                        )) : 'data not found'}
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}