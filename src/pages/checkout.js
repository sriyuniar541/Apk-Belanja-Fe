import React, { useEffect, useState } from "react";
import NavbarSebelumLogin from "../componen/navbar2";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios' //untuk interaksi dengan database



export default function CheckOut() {
    const [checkout, setCheckout] = useState([])
    let add = `http://localhost:4000/checkout/`
    const getDataCheckout = () => {
        // untuk get data
        axios.get(add)
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


    return (
        <div>
            <NavbarSebelumLogin />
            <div className="container">
                <h2>Checkout</h2>
                <p>Shipping Adress</p>
                <div className="row">
                    <div className="col-lg-8">
                        <Card style={{ height: '' }} className='mb-2 shadow p-3 bg-white rounded'>
                            <Card.Body>
                                <h6>Andreas Jane</h6>
                                <p>Perumahan Sapphire Mediterania, Wiradadi, Kec. Sokaraja, Kabupaten Banyumas, Jawa Tengah, 53181 [Tokopedia Note: blok c 16] Sokaraja, Kab. Banyumas, 53181</p>
                                <Button className='m-3' variant="white" style={{ width: '210px', height: '36px', borderRadius: '24px', borderColor: '#9B9B9B' }}>Login</Button>{' '}
                            </Card.Body>
                        </Card>
                        {checkout?.length >= 1 ? checkout.map((p) => {
                            return (
                                <Card style={{ height: '' }} className='mb-2 shadow p-3 bg-white rounded' key={p.id}>
                                    <Card.Body>
                                        <div className="row">
                                            <div className="col-lg-2 col-4 p-2">
                                                <img src={p.products_photo} style={{ height: '69px', borderRadius: '8px' }} alt='' />
                                            </div>
                                            <div className="col-lg-4 col-4 p-3">
                                                <h6>{p.products_name
                                                }</h6>
                                                <p className="text-secondary">Zalora Cloth</p>
                                            </div>
                                            <div className="col-lg-3 col-4 p-3 d-flex">
                                                <button className="border-white rounded-circle" style={{ width: '36px', height: '36px' }}><h4>-</h4></button>
                                                <h5 className='p-2'>1</h5>
                                                <button className="border-white rounded-circle" style={{ width: '36px', height: '36px' }}><h4>+</h4></button>
                                            </div>
                                            <div className="col-lg-3 col-4 p-4"><p className="text-right">$. {p.products_price}</p></div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            )
                        }) : 'data not found'}
                    </div>
                    <div className="col-lg-4">
                        <Card style={{ height: '' }} className='mb-2 shadow p-3 bg-white rounded'>
                            <Card.Body>
                                <div class='row'>
                                    <div className="col-lg-8 col-8">
                                        <h6>Shopping summary</h6>
                                    </div>
                                    <div className="d-flex justify-content-between text-secondary">
                                        <p>Order</p>
                                        <p>$ 200.000</p>
                                    </div>
                                    <div className="d-flex justify-content-between text-secondary">
                                        <p>Delivery</p>
                                        <p>$ 80.000</p>
                                    </div>
                                    <hr />
                                    <div className="d-flex justify-content-between ">
                                        <h6>Shooping summary</h6>
                                        <h6 className='text-danger'>$ 280.000</h6>
                                    </div>
                                </div>
                                <div>
                                    <Button className='bg-danger col-12 text-white mt-2' variant="white" style={{ height: '36px', borderRadius: '25px' }}>Select Payment</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}