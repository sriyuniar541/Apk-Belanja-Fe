import React from "react";
import NavbarLogin from './../componen/navbar'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import GambarBaju from './../image/bjk.png'
import shape from './../image/Shape.png'
import Elips from './../image/Ellipse 12.png'



export default function MyBag() {
    return (
        <div>
        <NavbarLogin/>
            <div className="container"> 
                <h2>My Bag</h2>
                <div className="row">
                    <div className="col-lg-8">
                            <Card style={{ height :'' }} className='mb-2 shadow p-3 bg-white rounded'>
                            <Card.Body>
                                <div className="row">
                                    <div className="col-lg-1 col-1">
                                        <input type="checkbox" checked="checked"/>
                                    </div>
                                    <div className="col-lg-9 col-8">
                                        <h6>Select all items (2 items selected)</h6>
                                    </div>
                                    <div className="col-lg-2 col-3">
                                        <a  className='text-danger'href="#">Delete</a>
                                    </div>
                                </div>
                            </Card.Body>
                            </Card>

                            <Card style={{ height :'' }} className='mb-2 shadow p-3 bg-white rounded'>
                            <Card.Body>
                                <div className="row">
                                    <div className="col-lg-1 col-1 p-lg-2 ">
                                        <input type="checkbox" checked="checked"/>
                                    </div>
                                    <div className="col-lg-3 col-4 p-lg-2 ">
                                        <img src={GambarBaju} style={{ height:'69px',borderRadius:'8px'}}/>
                                    </div>
                                    <div className="col-lg-3 col-4 p-lg-2 ">
                                        <h6>Men's formal suit - Black</h6>
                                        <p className="text-secondary">Zalora Cloth</p>
                                    </div>
                                    <div className="col-lg-2 col-3 p-lg-3  d-flex">
                                         <button className="border-white rounded-circle"style={{ width:'36px',height:'36px'}}><h4>-</h4></button>
                                        <h5 className='p-2'>1</h5>
                                        <button className="border-white rounded-circle"style={{ width:'36px',height:'36px'}}><h4>+</h4></button>
                                    </div>
                                    <div className="col-lg-3 col-6  p-lg-4 "><p className="text-right">$ 500.000</p></div>
                                </div>
                            </Card.Body>
                            </Card>

                            <Card style={{ height :'' }} className='mb-2 shadow p-3 bg-white rounded'>
                            <Card.Body>
                                <div className="row">
                                    <div className="col-lg-1 col-1 p-lg-2 ">
                                        <input type="checkbox" checked="checked"/>
                                    </div>
                                    <div className="col-lg-3 col-4 p-lg-2 ">
                                        <img src={GambarBaju} style={{ height:'69px',borderRadius:'8px'}}/>
                                    </div>
                                    <div className="col-lg-3 col-4 p-lg-2 ">
                                        <h6>Men's formal suit - Black</h6>
                                        <p className="text-secondary">Zalora Cloth</p>
                                    </div>
                                    <div className="col-lg-2 col-3 p-lg-3  d-flex">
                                         <button className="border-white rounded-circle"style={{ width:'36px',height:'36px'}}><h4>-</h4></button>
                                        <h5 className='p-2'>1</h5>
                                        <button className="border-white rounded-circle"style={{ width:'36px',height:'36px'}}><h4>+</h4></button>
                                    </div>
                                    <div className="col-lg-3 col-6  p-lg-4 "><p className="text-right">$ 500.000</p></div>
                                </div>
                            </Card.Body>
                            </Card>

                    </div>
                    <div className="col-lg-4">
                    <Card style={{ height :'' }} className='mb-2 shadow p-3 bg-white rounded'>
                            <Card.Body>
                                <div class='row d-flex'>
                                    <div className="col-lg-8 col-8">
                                        <h6>Shopping summary</h6>
                                        <p>Total Price</p>
                                    </div>
                                    <div className="col-lg-4 col-3 mt-4">
                                        <h6>$ 200.000</h6>
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