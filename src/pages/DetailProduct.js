import React from "react";
import NavbarSebelumLogin from "../componen/navbar2";
import Star from '../../src/image/Star.png' 
import Photo from '../image/cth.png' 
import Button from 'react-bootstrap/Button';
import CardsProduct from "../componen/CardsProduct";



export default function DetailProduct() {
    return (
        <div>
            <NavbarSebelumLogin/>
            <div className="container">
                <div className="row">
                    <div className="col-12 d-flex">
                        <a href="http://localhost:3000/Home">Home </a>
                        <p>></p>
                        <a href="#">Category </a>
                        <p>></p>
                        <a href="#">T-Shirt </a>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <img src={Photo}/>
                    </div>
                    <div className="col-lg-6 offset-lg-1 ">
                        <h6>Baju Pria</h6>
                        <p>Zalora Shirt</p>
                        <div className='star d-flex'>
                            <img src={Star}/>
                            <img src={Star}/>
                            <img src={Star}/>
                            <img src={Star}/>
                            <img src={Star}/>
                        </div>
                        <p className='text-secondary'>Price</p>
                        <h6>$ 200.000</h6>
                        <p>Color</p>
                        <button className=" border-white bg-black rounded-circle mr-3" style={{width:'36px',height:'36px'}}></button>
                        <button className="border-white bg-danger rounded-circle mr-3"style={{width:'36px',height:'36px'}}></button>
                        <button className="border-white bg-primary rounded-circle mr-3"style={{width:'36px',height:'36px'}}></button>
                        <button className="border-white bg-success rounded-circle mr-3"style={{width:'36px',height:'36px'}}></button>
                        <div>
                        <div className="d-flex ">
                            <div>
                                <p>Size</p>
                                <div class='d-flex'>
                                    <button className=" border-white rounded-circle " style={{width:'36px',height:'36px',background:'#D4D4D4'}}>-</button>
                                    <p>1</p>
                                    <button className=" border-white rounded-circle mr-3" style={{width:'36px',height:'36px',background:'#D4D4D4'}}>+</button>
                                </div>
                            </div>
                            <div className="">
                            <p>Jumlah</p>
                            <div class='d-flex'>
                                <button className=" border-white rounded-circle " style={{width:'36px',height:'36px',background:'#D4D4D4'}}>-</button>
                                <p>1</p>
                                <button className=" border-white rounded-circle mr-3" style={{width:'36px',height:'36px',background:'#D4D4D4'}}>+</button>
                            </div>
                        </div>
                        </div>

                    </div>
                    <div className="row mt-5">
                        <div className="col-lg-4 col-6 mr-2">
                            <Button className ='border-secondary bg-white' variant="white" style={{ width:'160px',height:'48px',borderRadius:'24px',borderColor:'#9B9B9B'}}>Chat</Button>{' '}
                        </div>
                        <div className="col-lg-4 col-6">
                            <Button className ='border-secondary bg-white' variant="white" style={{ width:'160px',height:'48px',borderRadius:'24px',borderColor:'#9B9B9B'}}>Add Bag</Button>{' '}
                        </div>
                        <div className="col-lg-4">
                            <Button className ='bg-danger text-white' variant="white" style={{width:'343px',height:'48px',borderRadius:'24px',borderColor:'#9B9B9B'}}>Buy</Button>{' '}
                        </div>
                    </div>
                    </div>
                </div>
            </div> 
            <div className='container mt-5'>
                <div className="col-12">
                    <h5>Informasi Product</h5>
                    <h6>Condition</h6>
                    <h6 className='text-danger'>New</h6>
                    <h6>Description</h6>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec non magna rutrum, pellentesque augue eu, sagittis velit. Phasellus quis laoreet dolor. Fusce nec pharetra quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent sed enim vel turpis blandit imperdiet ac ac felis. Etiam tincidunt tristique placerat. Pellentesque a consequat mauris, vel suscipit ipsum. 
                        Donec ac mauris vitae diam commodo vehicula. Donec quam elit, sollicitudin eu nisl at, ornare suscipit magna.

                        Donec non magna rutrum, pellentesque augue eu, sagittis velit. Phasellus quis laoreet dolor. Fusce nec pharetra quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent sed enim vel turpis blandit imperdiet ac ac felis.

                        In ultricies rutrum tempus. Mauris vel molestie orci.</p>
                </div>
                <h6>Product Review</h6>
                <div>
                    <h2> 5.0</h2>
                    <div className='star d-flex'>
                            <img src={Star}/>
                            <img src={Star}/>
                            <img src={Star}/>
                            <img src={Star}/>
                            <img src={Star}/>
                        </div>
                </div>
                <h5 className='mt-5'>You can also like this</h5>
                <div className="daftarProduct ">
                    <div className="row d-flex justify-content-center g-5">
                        <div className="col-lg-2 col-6 mr-2">
                            <CardsProduct name='Mens formal suit - Black & White' price='$ 400.000' toko='Zalora Cloth'/>
                        </div>
                        <div className="col-lg-2 col-6">
                            <CardsProduct name='Mens formal suit - Black & White' price='$ 400.000' toko='Zalora Cloth'/>
                        </div>
                        <div className="col-lg-2 col-6">
                            <CardsProduct name='Mens formal suit - Black & White' price='$ 400.000' toko='Zalora Cloth'/>
                        </div>
                        <div className="col-lg-2 col-6">
                            <CardsProduct name='Mens formal suit - Black & White' price='$ 400.000' toko='Zalora Cloth'/>
                        </div>
                        <div className="col-lg-2 col-6">
                            <CardsProduct name='Mens formal suit - Black & White' price='$ 400.000' toko='Zalora Cloth'/>
                        </div>
                        <div className="col-lg-2 col-6">
                            <CardsProduct name='Mens formal suit - Black & White' price='$ 400.000' toko='Zalora Cloth'/>
                        </div>
                        <div className="col-lg-2 col-6">
                            <CardsProduct name='Mens formal suit - Black & White' price='$ 400.000' toko='Zalora Cloth'/>
                        </div>
                        <div className="col-lg-2 col-6">
                            <CardsProduct name='Mens formal suit - Black & White' price='$ 400.000' toko='Zalora Cloth'/>
                        </div>
                        <div className="col-lg-2 col-6">
                            <CardsProduct name='Mens formal suit - Black & White' price='$ 400.000' toko='Zalora Cloth'/>
                        </div>
                        <div className="col-lg-2 col-6">
                            <CardsProduct name='Mens formal suit - Black & White' price='$ 400.000' toko='Zalora Cloth'/>
                        </div>
                        <div className="col-lg-2 col-6">
                            <CardsProduct name='Mens formal suit - Black & White' price='$ 400.000' toko='Zalora Cloth'/>
                        </div>
                        <div className="col-lg-2 col-6">
                            <CardsProduct name='Mens formal suit - Black & White' price='$ 400.000' toko='Zalora Cloth'/>
                        </div>

                    </div>
                </div>
            </div> 
        </div>
    )
}