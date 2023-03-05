import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import NavbarSebelumLogin from "../componen/navbar2";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import { RiDeleteBinLine } from "react-icons/ri";


export default function MyBag() {
    const navigate = useNavigate()
    const token = localStorage.getItem('token')
    const [addBag, setAddBag] = useState([])
    console.log(addBag)
    let [totalOrder, setTotalOrder] = useState(0)
    let filterPayment = addBag.filter((p) => p.status === 0)
    console.log(filterPayment, 'ini data diatas')

    let sum = filterPayment.map(i => (i.products_price * i.count)).reduce((e, c) => { return parseInt(e + c, 0) }, [])
    console.log(sum, 'ini data sum')

    totalOrder = sum
    console.log(sum)
    const user = useSelector((state) => state.user.user)

    useEffect(() => {
        console.log(user)
        console.log(user.id)
        console.log(token)
    }, [user])

    // add product
    const addBagAll = () => {
        axios.get(process.env.REACT_APP_URL_BE + `/addProduct`, {
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
    const deleteAdd = (e, id) => {
        console.log(id)
        axios.delete(process.env.REACT_APP_URL_BE + `/addProduct/${id}`, {
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


    const handleBuy = (e) => {
        axios.put(process.env.REACT_APP_URL_BE + `/addProduct/updateStatus`, {},
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
                localStorage.setItem('addBag', JSON.stringify(addBag))
                localStorage.setItem('totalOrder', totalOrder)
                setTotalOrder(0)
                // deleteAll()
            })
            .catch((err) => {
                console.log(err.message, 'post data fail')
                alert('gagal order, please login lagi ')
            })
    }

    //total count
    const handleTambah = (id) => {
        setAddBag(addBag =>
            addBag.map((item) =>
                id === item.id ? { ...item, count: item.count + (item.count < 10 ? 1 : 0) } : item
            )
        )

    }

    const handleKurang = (id) => {
        setAddBag(addBag =>
            addBag.map((item) =>
                id === item.id ? { ...item, count: item.count - (item.count > 1 ? 1 : 0) } : item
            )
        )
    }

    const filterBag = addBag.filter((p) => p.status === 0)
    console.log(filterBag, 'ini filter bag')


    return (
        <div>
            <NavbarSebelumLogin />
            <div className="container">
                <h2 className='py-4'>My Bag</h2>
                <div className="row">
                    <div className="col-lg-8">
                        {filterBag?.length >= 1 ? filterBag.map((p) => {
                            return (
                                <Card className='mb-2 shadow p-3 bg-white rounded' 
                                    key={p.id}
                                >
                                    <Card.Body >
                                        <div className="row ">
                                            <div className="col-lg-3 col-4 p-lg-2 ">
                                                <img 
                                                    src={p.products_photo} 
                                                    style={{ 
                                                        height: '69px', 
                                                        borderRadius: '8px' }} 
                                                    alt='product' 
                                                />
                                            </div>
                                            <div className="col-lg-3 col-4 p-lg-2 ">
                                                <h6>{p.products_name}</h6>
                                                <p className="text-secondary">
                                                    Sri-Olshop
                                                </p>
                                            </div>
                                            <div className="col-lg-2 col-3 p-lg-3  d-flex">
                                                <button 
                                                    className="border-white rounded-circle" 
                                                    style={{ 
                                                        width: '36px', 
                                                        height: '36px' 
                                                    }} 
                                                    onClick={() => handleKurang(p.id)}>
                                                    <h4>-</h4>
                                                </button>
                                                <h5 className='p-2'>{p.count}</h5>
                                                <button 
                                                    className="border-white rounded-circle" 
                                                    style={{ 
                                                        width: '36px', 
                                                        height: '36px' 
                                                    }} 
                                                    onClick={() => handleTambah(p.id)}>
                                                    <h4>+</h4>
                                                </button>
                                            </div>
                                            <div className="col-lg-3 col-6  p-lg-4 d-flex">
                                                <p className="text-right">
                                                    Rp. {p.products_price}
                                                </p>
                                                <button 
                                                    className='border-white btn btn-white ms-4 text-danger' 
                                                    onClick={(e) => deleteAdd(e, p.id)} 
                                                    style={{ 
                                                        padding: '0px', 
                                                        marginTop: '-20px' 
                                                    }}>
                                                    <RiDeleteBinLine size={20} />
                                                </button>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            )
                        }) : 'My Bag Empty'}
                    </div>
                    <div className="col-lg-4">
                        <Card className='mb-2 shadow p-3 bg-white rounded'>
                            <Card.Body>
                                <div>
                                    <div className="p-1">
                                        <h6>Shopping summary</h6>
                                        <hr />
                                    </div>
                                    <div className="d-flex justify-content-between mt-3">
                                        <p>Total Price</p>
                                        <h6>Rp. {totalOrder}</h6>
                                    </div>
                                </div>
                                <div>
                                    <Button 
                                        className='bg-danger col-12 text-white' 
                                        variant="white" 
                                        style={{ 
                                            height: '36px', 
                                            borderRadius: '25px' 
                                        }} 
                                        onClick={handleBuy}>
                                        Buy
                                    </Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}