import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import NavbarSebelumLogin from "../componen/navbar2";
import axios from 'axios' //untuk interaksi dengan database
import NavbarBaru from "../componen/navbarBaru";
import { useNavigate } from "react-router-dom";


export default function MyBag() {
    const navigate = useNavigate()
    const token = localStorage.getItem('token')
    const [addBag, setAddBag] = useState([])
    console.log(addBag)
    const [checValue, setCheckValue] = useState([])
    const [jumlah, setJumlah] = useState(1)
    const user = useSelector((state) => state.user.user)

    //menangkap user dari login
    useEffect(() => {
        console.log(user)
        console.log(user.id)
        console.log(token)
    }, [user])

    // add product
    const addBagAll = () => {
        axios.get(`http://localhost:4000/addProduct`, {
            headers: { Authorization: `Bearer ${token}` }
        })
            .then((res) => {
                console.log("get data success")
                console.log(res.data.data)
                res.data && setAddBag(res.data.data)
            })
            .catch((err) => {
                console.log("get data fail")
                console.log(err)
            })
    }
    //delete product
    const deleteAdd = (e,id) => {
        console.log(id)
        axios.delete(`http://localhost:4000/addProduct/${id}`, {
            headers: { Authorization: `Bearer ${token}` }
        })
            .then((res) => {
                console.log("delete data success")
                alert('delete success')
                addBagAll()

            })
            .catch((err) => {
                console.log("delete data fail")
                alert('delete fail')
                console.log(err)
            })
    }
    //get product
    useEffect(() => {
        addBagAll()
    }, [])

    //delete All product
    const deleteAll = () => {
        axios.delete(`http://localhost:4000/addProduct`, {
            headers: { Authorization: `Bearer ${token}` }
        })
            .then((res) => {
                console.log("delete data success")
                alert('delete success')
                addBagAll()

            })
            .catch((err) => {
                console.log("delete data fail")
                alert('delete fail')
                console.log(err)
            })
    }

    useEffect(() => {
        addBagAll()
    }, [])

    //post product to checkout
    const count = 1
    const handleCheck = (e, id, categorys_id) => {
        console.log(id, 'ini id dari cheklish')
        const { value, checked } = e.target
        if (checked ) {
            e.preventDefault()
            const formData = new FormData()
            formData.append('products_id', id)
            formData.append('categorys_id', categorys_id)
            formData.append('user_id', user.id)
            formData.append('count', count)
            console.log(formData)
            axios.post('http://localhost:4000/checkout/', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: `Bearer ${token}`
                },
            })
                .then((res) => {
                    console.log(res, "post data success")
                    alert('berhasil order')
                })
                .catch((err) => {
                    console.log(err.message, 'post data fail')
                    alert('gagal order')
                })

        } else {
            alert('please checklish')
        }
    }
    console.log(checValue)

    // order
    const handleBuy = (e) => {
        const { value, checked } = e.target
        // if (checked) {
            axios.put(`http://localhost:4000/checkout/${user.id}`, {},
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        Authorization: `Bearer ${token}`
                    },
                })
                .then((res) => {
                    console.log(res, "post data success")
                    alert('berhasil order silahkan melanjutkan pembayaran')
                    navigate('/checkout')
                })
                .catch((err) => {
                    console.log(err.message, 'post data fail')
                    alert('gagal order')
                })

        // } else {
        //     alert('please checklish')
        // }

    }

    let sum = addBag.map(i => (i.products_price)).reduce((e,c)=> {return parseInt(e+c,0)},[]) 
    let totalOrder = sum 
    console.log(sum)
    console.log(totalOrder)

    //count
    const handleTambah = (e, id) => {
    }
    const handleKurang = (e, id) => {
        setJumlah(pre => pre - 1)
    }




    return (
        <div>
            <NavbarBaru />
            <NavbarSebelumLogin />
            <div className="container">
                <h2 className='py-4'>My Bag</h2>
                <div className="row">
                    <div className="col-lg-8">
                        <Card style={{ height: '' }} className='mb-2 shadow p-3 bg-white rounded'>
                            <Card.Body>

                                <div className="row">
                                    <div className="col-lg-1 col-1">
                                        <input type="checkbox" />
                                    </div>
                                    <div className="col-lg-9 col-8">
                                        <h6>Select all items (2 items selected)</h6>
                                    </div>
                                    <div className="col-lg-2 col-3">
                                        <button className='btn btn-white text-danger' onClick={deleteAll}>Delete</button>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                        {addBag?.length >= 1 ? addBag.map((p) => {
                            return (
                                <Card style={{ height: '' }} className='mb-2 shadow p-3 bg-white rounded' key={p.id}>
                                    <Card.Body >
                                        <div className="row ">
                                            <div className="col-lg-1 col-1 p-lg-2 ">
                                                <input type="checkbox" name='check'
                                                    onChange={((e) => handleCheck(e, p.products_id, p.categorys_id))} />
                                            </div>
                                            <div className="col-lg-3 col-4 p-lg-2 ">
                                                <img src={p.products_photo} style={{ height: '69px', borderRadius: '8px' }} alt='' />
                                            </div>
                                            <div className="col-lg-3 col-4 p-lg-2 ">
                                                <h6>{p.products_name}</h6>
                                                <p className="text-secondary">Zalora Cloth</p>
                                            </div>
                                            <div className="col-lg-2 col-3 p-lg-3  d-flex">
                                                <button className="border-white rounded-circle" style={{ width: '36px', height: '36px' }} onClick={() => handleKurang(p.id)}><h4>-</h4></button>
                                                <h5 className='p-2'>{p.count}</h5>
                                                <button className="border-white rounded-circle" style={{ width: '36px', height: '36px' }} onClick={() => handleTambah(p.id)}><h4>+</h4></button>
                                            </div>
                                            <div className="col-lg-3 col-6  p-lg-4 d-flex "><p className="text-right">$ {p.products_price}</p>
                                                <button className='btn btn-white text-danger' onClick={(e) => deleteAdd(e,p.id)}>X</button>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            )
                        }) : 'data not found'}
                    </div>
                    <div className="col-lg-4">
                        <Card style={{ height: '' }} className='mb-2 shadow p-3 bg-white rounded'>
                            <Card.Body>
                                <div className='row d-flex'>
                                    <div className="col-lg-8 col-8">
                                        <h6>Shopping summary</h6>
                                        <p>Total Price</p>
                                    </div>
                                    <div className="col-lg-4 col-3 mt-4">
                                        <h6>$. {totalOrder}</h6>
                                    </div>
                                </div>
                                <div className="">
                                    <Button className='bg-danger col-12' variant="white" style={{ height: '36px', borderRadius: '25px' }} onClick={handleBuy}>Buy</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}