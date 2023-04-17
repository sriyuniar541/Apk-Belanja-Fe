import NavbarSebelumLogin from "../../componen/navbar/navbar2";
import { useSelector } from 'react-redux';
import Star from '../../image/Star.png'
import Button from 'react-bootstrap/Button';
import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import axios from 'axios'
import './detailProduct.css'


const DetailProduct = (props) => {
    const token = localStorage.getItem('token')
    const [product, setProduct] = useState([])
    const { id } = useParams()
    const user = useSelector((state) => state.user.user)

    useEffect(() => {
        console.log(user)
        console.log(user.id)
    }, [user])

    let users = process.env.REACT_APP_URL_BE + `/product/${id}`
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
        e.preventDefault()
        const formData = new FormData()
        formData.append('products_id', product.id)
        formData.append('categorys_id', product.categorys_id)
        formData.append('user_id', user.id)
        formData.append('count', count)
        axios.post(process.env.REACT_APP_URL_BE + `/addProduct`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: `Bearer ${token}`

            },
        })
            .then((res) => {
                console.log(res, "post data success")
                alert('berhasil masuk keranjang')
            })
            .catch((err) => {
                console.log(err.message, 'post data fail')
                alert('fail please login again')
            })
    }


    return (
        <div>
            <NavbarSebelumLogin />
            <div className="container cont_detail" key={product.id}>
                <div className="row">
                    <div className=" col-lg-4 ">
                        <img
                            src={product.photo}
                            className='col-lg-12 img_1'
                            alt='product'
                        />
                        <div className="mt-2 d-flex justify-content-between ">
                            <img
                                src={product.photo}
                                className='col-2 '
                                alt='product'
                            />
                            <img
                                src={product.photo}
                                className='col-2 '
                                alt='product'
                            />
                            <img
                                src={product.photo}
                                className='col-2'
                                alt='product'
                            />
                            <img
                                src={product.photo}
                                className='col-2'
                                alt='product'
                            />
                            <img
                                src={product.photo}
                                className='col-2'
                                alt='product'
                            />
                        </div>
                    </div>
                    <div className="col-lg-7 offset-lg-1">
                        <h2>{product.name}</h2>
                        <p className="text-secondary">Sri-Olshop</p>
                        <div className='star d-flex'>
                            <img src={Star} />
                            <img src={Star} />
                            <img src={Star} />
                            <img src={Star} />
                            <img src={Star} />
                        </div>
                        <div className="detail_price">
                            <p className='text-secondary'>
                                Price
                            </p>
                            <h4>
                                Rp. <b>{product.price}</b>
                            </h4>
                        </div>
                        <div className="color_detail">
                            <p>
                                Color
                            </p>
                            <button 
                                className=" border-white bg-black ">
                            </button>
                            <button 
                                className="border-white bg-danger ">
                            </button>
                            <button
                                className="border-white bg-primary">
                            </button>
                            <button className="border-white bg-success">
                            </button>
                        </div>
                        <div>
                            <div className="size_detail_All ">
                                <div className="size_detail">
                                    <p>Size</p>
                                    <div className='d-flex'>
                                        <button>
                                            -
                                        </button>
                                        <p className="count_detail">1</p>
                                        <button>
                                            +
                                        </button>
                                    </div>
                                </div>
                                <div className="count_detail_All">
                                    <p>Jumlah</p>
                                    <div className='d-flex '>
                                        <button>
                                            -
                                        </button>
                                        <p className="count_detail">1</p>
                                        <button>
                                            +
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=" row button_detail">
                            <Button
                                className='col-lg-2 col-4 border-secondary'
                                variant="white"
                            >
                                Chat
                            </Button>
                            <Button
                                className='border-secondary col-lg-2 col-4'
                                variant="white"
                                onClick={AddBag}>
                                Add Bag
                            </Button>
                            <Button
                                className='bg-danger col-lg-7 col-4'
                            >
                                Buy Now
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container cont_detail_info'>
                <div className="infromasi_detail">
                    <h2 >
                        Informasi Product
                    </h2>
                    <h6>Condition</h6>
                    <h6 className='text-danger'>New</h6>
                    <h6 className="descrip">Description</h6>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.Donec non magna rutrum, pellentesque augue eu, sagittis velit. Phasellus quis laoreet dolor. Fusce nec pharetra quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent sed enim vel turpis blandit imperdiet ac ac felis. Etiam tincidunt tristique placerat. Pellentesque a consequat mauris, vel suscipit ipsum. Donec ac mauris vitae diam commodo vehicula. Donec quam elit, sollicitudin eu nisl at, ornare suscipit magna.Donec non magna rutrum, pellentesque augue eu, sagittis velit. Phasellus quis laoreet dolor. Fusce nec pharetra quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent sed enim vel turpis blandit imperdiet ac ac felis.In ultricies rutrum tempus. Mauris vel molestie orci.</p>
                </div>
                <h2>Product Review</h2>
                <div className="product_riview">
                    <h2> 5.0</h2>
                    <div className='star d-flex'>
                        <img src={Star} />
                        <img src={Star} />
                        <img src={Star} />
                        <img src={Star} />
                        <img src={Star} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailProduct