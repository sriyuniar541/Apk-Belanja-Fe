import React from "react";
import NavbarLogin from './../componen/navbar'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import GambarBaju from './../image/bjk.png'
import shape from './../image/Shape.png'
import Elips from './../image/Ellipse 12.png'


export default function CheckOut() {
    return (
        <div>
        <NavbarLogin/>
            <div className="container"> 
                <h2>Checkout</h2>
                <p>Shipping Adress</p>
                <div className="row">
                    <div className="col-lg-8">
                            <Card style={{ height :'' }} className='mb-2 shadow p-3 bg-white rounded'>
                            <Card.Body>
                                <h6>Andreas Jane</h6>
                                <p>Perumahan Sapphire Mediterania, Wiradadi, Kec. Sokaraja, Kabupaten Banyumas, Jawa Tengah, 53181 [Tokopedia Note: blok c 16] Sokaraja, Kab. Banyumas, 53181</p>
                                <Button className ='m-3' variant="white" style={{ width:'210px',height:'36px',borderRadius:'24px',borderColor:'#9B9B9B'}}>Login</Button>{' '}
                            </Card.Body>
                            </Card>

                            <Card style={{ height :'' }} className='mb-2 shadow p-3 bg-white rounded'>
                            <Card.Body>
                                <div className="row">
                                    <div className="col-lg-2 col-4 p-2">
                                        <img src={GambarBaju} style={{ height:'69px',borderRadius:'8px'}}/>
                                    </div>
                                    <div className="col-lg-4 col-4 p-3">
                                        <h6>Men's formal suit - Black</h6>
                                        <p className="text-secondary">Zalora Cloth</p>
                                    </div>
                                    <div className="col-lg-3 col-4 p-3 d-flex">
                                         <button className="border-white rounded-circle"style={{ width:'36px',height:'36px'}}><h4>-</h4></button>
                                        <h5 className='p-2'>1</h5>
                                        <button className="border-white rounded-circle"style={{ width:'36px',height:'36px'}}><h4>+</h4></button>
                                    </div>
                                    <div className="col-lg-3 col-4 p-4"><p className="text-right">$ 500.000</p></div>
                                </div>
                            </Card.Body>
                            </Card>

                            <Card style={{ height :'' }} className='mb-2 shadow p-3 bg-white rounded'>
                            <Card.Body>
                                <div className="row">
                                    <div className="col-lg-2 col-4 p-2">
                                        <img src={GambarBaju} style={{ height:'69px',borderRadius:'8px'}}/>
                                    </div>
                                    <div className="col-lg-4 col-4 p-3">
                                        <h6>Men's formal suit - Black</h6>
                                        <p className="text-secondary">Zalora Cloth</p>
                                    </div>
                                    <div className="col-lg-3 col-4 p-3 d-flex">
                                         <button className="border-white rounded-circle"style={{ width:'36px',height:'36px'}}><h4>-</h4></button>
                                        <h5 className='p-2'>1</h5>
                                        <button className="border-white rounded-circle"style={{ width:'36px',height:'36px'}}><h4>+</h4></button>
                                    </div>
                                    <div className="col-lg-3 col-4 p-4"><p className="text-right">$ 500.000</p></div>
                                </div>
                            </Card.Body>
                            </Card>

                    </div>
                    <div className="col-lg-4">
                    <Card style={{ height :'' }} className='mb-2 shadow p-3 bg-white rounded'>
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
                                    <hr/>
                                    <div className="d-flex justify-content-between text-danger">
                                        <h6>Shooping summary</h6>
                                        <p>$ 280.000</p>
                                    </div>
                                </div>
                                <div>
                                   <Button className ='bg-danger' variant="white" style={{ width:'322px',height:'36px',borderRadius:'25px'}}>Buy</Button>{' '} 
                                </div>
                            </Card.Body>
                    </Card>
                    </div>
                </div>
            </div>


        </div>
    )
}