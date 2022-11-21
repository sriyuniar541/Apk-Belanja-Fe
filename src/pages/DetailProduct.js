import NavbarSebelumLogin from "../componen/navbar2";
import Star from '../../src/image/Star.png' 
import Photo from '../image/cth.png' 
import Button from 'react-bootstrap/Button';
import CardsProduct from "../componen/CardsProduct";
import { Link, useParams} from 'react-router-dom'; //menghubungkan anatar halaman
import React, { useState,useEffect } from "react";
import axios from 'axios' //untuk interaksi dengan database






const DetailProduct = (props) => {
    
    const [product,setProduct] = useState([])
    const {id} =useParams() //untuk berpindah sesuai params (id)
  
    let users = `http://localhost:4000/product/${id}`
    useEffect(()=>{
        

        // untuk get data
        axios.get(users)
        .then((res)=>{
            console.log("get data success")
            console.log(res.data.data)
            res.data && setProduct(res.data.data)
        })
        .catch((err)=>{
            console.log("get data fail")
            console.log(err)
        })
    },[])




    return (
        <div>
            <NavbarSebelumLogin/>
            <div className="container">
                <div className="row">
                    <div className="col-12 d-flex">
                        <Link to ='/'>Home</Link>
                        <p>></p>
                        <a href="#">Category </a>
                        <p>></p>
                        <a href="#">T-Shirt </a>
                        <p style={{marginRight:'20px',color:'grey'}}><i>Detail product - {id}</i></p>
                        <hr/>
                    </div>
                </div>
            </div>
            
            {/* get detail product by id */}
            {product.map((products)=>
                <div className="container ">
                <div className="row">
                    <div className="col-lg-4">
                        <img src={products.photo}/>
                    </div>
                    <div className="col-lg-6 offset-lg-1 ">
                        <h6>{products.name}</h6>
                        <p>Zalora Shirt</p>
                        <div className='star d-flex'>
                            <img src={Star}/>
                            <img src={Star}/>
                            <img src={Star}/>
                            <img src={Star}/>
                            <img src={Star}/>
                        </div>
                        <p className='text-secondary'>Price</p>
                        <h6>$ {products.price}</h6>
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
            )}
            
            <div className='container mt-5'>
                <div className="col-12">
                    <h5>Informasi Product</h5>
                    <h6>Condition</h6>
                    <h6 className='text-danger'>New</h6>
                    <h6>Description</h6>
                    <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Donec non magna rutrum, pellentesque augue eu, sagittis velit. Phasellus quis laoreet dolor. Fusce nec pharetra quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent sed enim vel turpis blandit imperdiet ac ac felis. Etiam tincidunt tristique placerat. Pellentesque a consequat mauris, vel suscipit ipsum. Donec ac mauris vitae diam commodo vehicula. Donec quam elit, sollicitudin eu nisl at, ornare suscipit magna.Donec non magna rutrum, pellentesque augue eu, sagittis velit. Phasellus quis laoreet dolor. Fusce nec pharetra quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent sed enim vel turpis blandit imperdiet ac ac felis.In ultricies rutrum tempus. Mauris vel molestie orci.</p>
                </div>
                <h6>Product Review</h6>
                <div>
                    <h2> 5.0</h2>
                    <div className='star d-flex mb-5'>
                            <img src={Star}/>
                            <img src={Star}/>
                            <img src={Star}/>
                            <img src={Star}/>
                            <img src={Star}/>
                        </div>
                </div>
                {/* <h5 className='mt-5'>You can also like this</h5>
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
                </div> */}
            </div> 
        </div>
    )
}

export default DetailProduct