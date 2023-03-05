import React, { useState, useEffect } from 'react'
import Form from 'react-bootstrap/Form';
import SideBarProduct from "../componen/sideBar";
import Card from 'react-bootstrap/Card';
import "@fontsource/metropolis";
import NavbarSebelumLogin from '../componen/navbar2';
import axios from 'axios'
import { RiDeleteBinLine } from "react-icons/ri";
import ModalCategory from '../componen/modalCategory';


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
        <div className='Container-fluid' 
            style={{ background: '#F5F5F5' }}
        >
            <NavbarSebelumLogin />
            <div className=''>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className=' col-4 bg-white p-2'>
                            <SideBarProduct />
                        </div>
                        <div className='col-lg-7 px-5 mt-5'>
                            <div className='p-2'>
                                <Card className=' p-5 mb-3'>
                                    <Card.Header className='bg-white mx-5'>
                                        <h4>Category</h4>
                                    </Card.Header>
                                    <Card.Body className='col-lg-9 offset-lg-1 justify-content-center'>
                                        <div className='d-flex mb-4 col-12'>
                                            <Form.Control 
                                                name='categorys' 
                                                value={postcategory.categorys} 
                                                onChange={handleChange}
                                                placeholder='Input Category' 
                                            />
                                            <button 
                                                className='btn btn-warning text-white ms-2' 
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
                                                    className='btn btn-white text-white ms-2' 
                                                    onClick={(e) => deleteCategory(e, p.id)}>
                                                    <RiDeleteBinLine className='text-secondary'/>
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