import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import NavbarSebelumLogin from "../../componen/navbar/navbar2";
import { useNavigate } from "react-router-dom";
import { RiDeleteBinLine } from "react-icons/ri";
import axios from 'axios'
import './myBag.css'

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
            <div className="container cont-myBag">
                <h2>My Bag</h2>
                <div className="product_All">
                    <div className=" col-lg-8 col-12 product_list">
                        {filterBag?.length >= 1 ? filterBag.map((p) => {
                            return (
                                <Card className='card'
                                    key={p.id}
                                >
                                    <Card.Body >
                                        <div className="car_item">
                                            <div className="image_product">
                                                <img 
                                                    src={p.products_photo}  
                                                    alt='product' 
                                                />
                                            </div>
                                            <div className="title_product">
                                                <h6>{p.products_name}</h6>
                                                <p className="text-secondary">
                                                    Sri-Olshop
                                                </p>
                                            </div>
                                            <div className="range_price">
                                                <button 
                                                    className="kurang" 
                                                    onClick={() => handleKurang(p.id)}>
                                                    -
                                                </button>
                                                <h5 >{p.count}</h5>
                                                <button 
                                                    className="tambah" 
                                                    onClick={() => handleTambah(p.id)}>
                                                   +
                                                </button>
                                            </div>
                                            <div className="price_item">
                                                <p>
                                                    Rp. {p.products_price}
                                                </p>
                                                <button  
                                                    onClick={(e) => deleteAdd(e, p.id)} 
                                                    >
                                                    <RiDeleteBinLine size={20} />
                                                </button>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            )
                        }) : 'My Bag Empty'}
                    </div>
                    <div className="col-lg-4 col-12">
                        <Card className="card_summary">
                            <Card.Body>
                                <div>
                                    <div>
                                        <h6>Shopping summary</h6>
                                        <hr />
                                    </div>
                                    <div className="total_price">
                                        <p>Total Price</p>
                                        <h6>Rp. {totalOrder}</h6>
                                    </div>
                                </div>
                                <div className="button_buy">
                                    <Button 
                                        className='bg-danger' 
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