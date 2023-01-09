import NavbarSebelumLogin from "../componen/navbar2";
import { useSelector } from 'react-redux'; 
import Star from '../../src/image/Star.png'
import Button from 'react-bootstrap/Button';
import { Link, useParams } from 'react-router-dom'; //menghubungkan anatar halaman
import React, { useState, useEffect } from "react";
import axios from 'axios' //untuk interaksi dengan database






const DetailProduct = (props) => {
    const token = localStorage.getItem('token')
    const [product, setProduct] = useState([])
    const { id } = useParams() //untuk berpindah sesuai params (id)
    const user = useSelector((state) => state.user.user)

    useEffect(()=>{
    console.log(user)
    console.log(user.id)
    },[user])

    let users = `http://localhost:4000/product/${id}`
    useEffect(() => {
        // untuk get data
        axios.get(users)
            .then((res) => {
                console.log("get data success")
                console.log(res.data.data[0])
                res.data && setProduct(res.data.data[0])
                console.log(product)
            })
            .catch((err) => {
                console.log("get data fail")
                console.log(err)
            })
    }, [])

    
     
    const count = 1
    const AddBag = (e) => {
        console.log('tambah product', product)
        console.log(e.target.files)
        e.preventDefault()
        const formData = new FormData()
        formData.append('products_id',product.id)
        formData.append('categorys_id',product.categorys_id)
        formData.append('user_id',user.id)
        formData.append('count',count)
        console.log(formData)
        axios.post('http://localhost:4000/addProduct', formData , {
            headers: {
               'Content-Type' : 'multipart/form-data',
               Authorization : `Bearer ${token}`
              
           },
   }) 
   .then((res) => {
       console.log(res,"post data success")
       alert('berhasil masuk keranjang')
   })
   .catch((err) => {
       console.log(err.message, 'post data fail')
       alert('gagal masuk keranjang')
   })
        
    }
        
    

    return (
        <div>
            <NavbarSebelumLogin />
            <div className="container py-3">
                <div className="row">
                    <div className="col-12 d-flex">
                        <Link to='/'>Home</Link>
                        <p>></p>
                        <a href="#">Category </a>
                        <p>></p>
                        <a href="#">T-Shirt </a>

                        <hr />
                    </div>
                </div>
            </div>

            {/* get detail product by id */}
            {/* {product.map((product) => */}
                <div className="container " key={product.id}>
                    <div className="row">
                        <div className=" col-lg-4 ">
                            <img src={product.photo} className='col-lg-12' alt='' style={{ height: '400px' }} />
                            <div className="mt-2 d-flex justify-content-between ">
                                <img src={product.photo} className='col-2 ' alt='' />
                                <img src={product.photo} className='col-2 ' alt='' />
                                <img src={product.photo} className='col-2' alt='' />
                                <img src={product.photo} className='col-2' alt='' />
                                <img src={product.photo} className='col-2' alt='' />
                            </div>

                        </div>
                        <div className="col-lg-6 mx-lg-5 ">
                            <h4>{product.name}</h4>
                            <p className="text-secondary">Zalora Shirt</p>
                            <div className='star d-flex'>
                                <img src={Star} />
                                <img src={Star} />
                                <img src={Star} />
                                <img src={Star} />
                                <img src={Star} />
                            </div>
                            <p style={{ lineHeight: '5px' }} className='text-secondary mt-4'>Price</p>
                            <h4 className="mb-5">$<b>{product.price}</b></h4>
                            <div className="mb-3 mt-3">
                                <p style={{ lineHeight: '5px' }}>Color</p>
                                <button className=" border-white bg-black rounded-circle mr-3" style={{ width: '36px', height: '36px' }}></button>
                                <button className="border-white bg-danger rounded-circle mr-3" style={{ width: '36px', height: '36px' }}></button>
                                <button className="border-white bg-primary rounded-circle mr-3" style={{ width: '36px', height: '36px' }}></button>
                                <button className="border-white bg-success rounded-circle mr-3" style={{ width: '36px', height: '36px' }}></button>
                            </div>

                            <div>
                                <div className="d-flex ">
                                    <div>
                                        <p>Size</p>
                                        <div className='d-flex'>
                                            <button className=" border-white rounded-circle " style={{ width: '36px', height: '36px', background: '#D4D4D4' }}>-</button>
                                            <p>1</p>
                                            <button className=" border-white rounded-circle mr-3" style={{ width: '36px', height: '36px', background: '#D4D4D4' }}>+</button>
                                        </div>
                                    </div>
                                    <div className="">
                                        <p>Jumlah</p>
                                        <div className='d-flex'>
                                            <button className=" border-white rounded-circle " style={{ width: '36px', height: '36px', background: '#D4D4D4' }}>-</button>
                                            <p>1</p>
                                            <button className=" border-white rounded-circle mr-3" style={{ width: '36px', height: '36px', background: '#D4D4D4' }}>+</button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="row mt-5">
                                <Button className='col-lg-3 col-4 border-secondary bg-white ' variant="white" style={{ height: '48px', borderRadius: '24px', borderColor: '#9B9B9B' }}>Chat</Button>
                                <Button className='border-secondary bg-white col-lg-3 col-4 px-2' variant="white" style={{ height: '48px', borderRadius: '24px', borderColor: '#9B9B9B' }} onClick={AddBag}>Add Bag</Button>
                                <Button className='bg-danger text-white col-lg-6 col-4' style={{ height: '48px', borderRadius: '24px', borderColor: 'white' }}>Buy Now</Button>
                            </div>
                        </div>
                    </div>
                </div>
            {/* )} */}

            <div className='container mt-5'>
                <div className="col-12">
                    <h4 className="mb-4">Informasi Product</h4>
                    <h6>Condition</h6>
                    <h6 className='text-danger mb-4'>New</h6>
                    <h6 className="">Description</h6>
                    <p style={{ textAlign: 'justify' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Donec non magna rutrum, pellentesque augue eu, sagittis velit. Phasellus quis laoreet dolor. Fusce nec pharetra quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent sed enim vel turpis blandit imperdiet ac ac felis. Etiam tincidunt tristique placerat. Pellentesque a consequat mauris, vel suscipit ipsum. Donec ac mauris vitae diam commodo vehicula. Donec quam elit, sollicitudin eu nisl at, ornare suscipit magna.Donec non magna rutrum, pellentesque augue eu, sagittis velit. Phasellus quis laoreet dolor. Fusce nec pharetra quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent sed enim vel turpis blandit imperdiet ac ac felis.In ultricies rutrum tempus. Mauris vel molestie orci.</p>
                </div>
                <h6>Product Review</h6>
                <div>
                    <h2> 5.0</h2>
                    <div className='star d-flex mb-5'>
                        <img src={Star} />
                        <img src={Star} />
                        <img src={Star} />
                        <img src={Star} />
                        <img src={Star} />
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