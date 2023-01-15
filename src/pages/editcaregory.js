import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import SideBarProduct from "../componen/sideBar";
import Card from 'react-bootstrap/Card';
import "@fontsource/metropolis";
import NavbarSebelumLogin from '../componen/navbar2';
import axios from 'axios' //untuk interaksi dengan database
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


export default function Editcategory() {
    const navigate = useNavigate()
    const token = localStorage.getItem('token')
    let { id } = useParams()
    let urlGet = process.env.REACT_APP_URL_GET
    
    const [categorys, setCategorys] = useState([])
    const [postcategory,setPostCategory] = useState({
        categorys:''
    })



    const handleChange = (e) => {
        setPostCategory({
            ...postcategory,
            [e.target.name]: e.target.value
        })
    }

    


    const editCategory = (item) =>{
        console.log(item)
        setPostCategory({
            ...postcategory,
          categorys: item.categorys,
          })  
    }

   
    const postForm = (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append("categorys", postcategory.categorys)
        console.log(formData)
        axios.
            post(`http://localhost:4000/categorys`, formData, {
                headers: {
                    Authorization : `Bearer ${token}`,
                    "Content-Type": "multipart/form-data",
                }, 
            }).then((res) => {
                console.log("insert data success")
                console.log(res)
                alert('insert data success')
                setPostCategory('')
                addBagAll()
                

                // navigate('/product')
            }).catch((err) => {
                console.log("inseert data fail")
                console.log(err)
                alert('insert data fail')
            })
    }

    const editForm = (e,id,item) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append("categorys", postcategory.categorys)
        console.log(formData)
        axios.
            put(`http://localhost:4000/categorys/${id}`, formData, {
                headers: {
                    Authorization : `Bearer ${token}`,
                    "Content-Type": "multipart/form-data",
                },
            }).then((res) => {
                console.log("update data success")
                console.log(res)
                alert('update data success')
                addBagAll()
                

                // navigate('/product')
            }).catch((err) => {
                console.log("inseert data fail")
                console.log(err)
                alert('insert data fail')
            })
    }

    const deleteCategory = (e,id) => {
        axios.
            delete(`http://localhost:4000/categorys/${id}`,{
                headers: {
                    Authorization : `Bearer ${token}`,
                    "Content-Type": "multipart/form-data",
                },
            }).then((res) => {
                console.log("delete data success")
                console.log(res)
                alert('delete data success')
                addBagAll()
              
            }).catch((err) => {
                console.log("delete data fail")
                console.log(err)
                alert('delete data fail')
            })
    }

    const addBagAll = () => {
        axios.get(`http://localhost:4000/categorys`, {
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
                                    <Card.Header className='bg-white'>
                                         <h4>Category</h4>
                                        <div className='d-flex justify-content-between'>
                                        <Form.Control name='categorys' value={postcategory.categorys} onChange={handleChange}/>
                                             <button className='btn btn-warning text-white ms-2' onClick={postForm}>Add</button>
                                        </div>
                                       
                                    </Card.Header>
                                    <Card.Body className='col-lg-6'>
                                        {categorys?categorys.map((p)=>(
                                        <div className='d-flex justify-content-between'>
                                            <Form.Control name='categorys' value={p.categorys}/>
                                            <button className='btn btn-warning text-white ms-2' onClick={(e)=>editForm(e,p.id)}>Edit</button>
                                            <button className='btn btn-danger text-white ms-2' onClick={(e)=> deleteCategory(e,p.id)}>Delete</button>
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