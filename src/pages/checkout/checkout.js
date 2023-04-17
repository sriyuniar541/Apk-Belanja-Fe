import React, { useEffect, useState } from "react";
import NavbarSebelumLogin from "../../componen/navbar/navbar2";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios'
import { Link } from "react-router-dom";
import './checkout.css'


export default function CheckOut() {
    const token = localStorage.getItem('token')
    const myBag = JSON.parse(localStorage.getItem('addBag'))
    const user = JSON.parse(localStorage.getItem('user'))
    const [totalOrder,setTotalOrder] = useState(localStorage.getItem('totalOrder'))
    const [checkout, setCheckout] = useState([])

    useEffect(()=>{
        console.log(user)
        console.log(user.id)
        console.log(totalOrder) 
        console.log(myBag)
    },[user])
    
    const getDataCheckout = () => {
        axios.get(process.env.REACT_APP_URL_BE +`/checkout/`,{
            headers: {Authorization : `Bearer ${token}`}
        })
            .then((res) => {
                console.log("get data success")
                console.log(res.data.data)
                res.data && setCheckout(res.data.data)
            })
            .catch((err) => {
                console.log("get data fail")
                console.log(err)
            })
    }

    useEffect(() => {
        getDataCheckout()
    }, [])


    const filterCheckout = checkout.filter((e) => e.statuspayment === 0)
    console.log(filterCheckout,'ini data filter')

    const payment = () => {
        axios.put(process.env.REACT_APP_URL_BE +`/checkout/payment/${user.id}`,{},{
            headers: {Authorization : `Bearer ${token}`}
        })
            .then((res) => {
                alert(" Terima kasih telah order")
                console.log(" Terima kasih telah order")
                 setCheckout([])
                 setTotalOrder(0)
            })
            .catch((err) => {
                alert("payment fail, please login lagi gaiss")
                console.log("payment fail, please login lagi gaiss")
                console.log(err)
            }) 
    }

   //total bayar
    let sum = filterCheckout.map(i => (i.products_price)).reduce((e,c)=> {return parseInt(e+c,0)},[]) 
    let total = parseInt(totalOrder) + 80000
    console.log(sum)
    console.log(totalOrder)
   

    return (
        <div>
            <NavbarSebelumLogin />
            <div className="container cont_checkout">
                <h2>Checkout</h2>
                <p>Shipping Adress</p>
                <div className="row">
                    <div className="col-lg-8">
                        <Card>
                            <Card.Body className="card_checkout">
                                <h6>{user.fullname}</h6>
                                <p>  
                                    {user?user.adress :'Adres Jln, Durian no.2 kecamatan Sirimau, Kota Ambon'}
                                </p>
                                <Button 
                                    className='button_history' 
                                    variant="white" 
                                > 
                                    <Link 
                                        to='/History'
                                        className='text-secondary link'>
                                        Go to detail history 
                                    </Link></Button>{' '}
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-lg-4">
                        <Card>
                            <Card.Body className="card_summary">
                                <div className='row'>
                                    <div className="col-8">
                                        <h6>Shopping summary</h6>
                                    </div>
                                    <div className="order_list">
                                        <p>Order</p>
                                        <p>Rp. {totalOrder}</p>
                                    </div>
                                    <div className="delivery_list">
                                        <p>Delivery</p>
                                        <p>Rp. 80000</p>
                                    </div>
                                    <hr />
                                    <div className="shooping_summary">
                                        <h6>Shooping summary</h6>
                                        <h6 className='text-danger'>Rp. {total}</h6>
                                    </div>
                                </div>
                                <div>
                                    <Button 
                                        className='bg-danger col-12 ' 
                                        variant="white"
                                        onClick={payment}>
                                        Select Payment
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