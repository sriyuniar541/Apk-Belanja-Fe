import React, { useState, useEffect } from "react";
import NavbarSebelumLogin from "../componen/navbar2";
import CardsProduct from "../componen/CardsProduct";
import axios from 'axios' //untuk interaksi dengan database
import { Link, useParams } from 'react-router-dom'; //menghubungkan anatar halaman
import "@fontsource/metropolis";




const Category = () => {
    const [product, setProduct] = useState([])
    // const [t_shirt, setT_shirt] = useState([])
    const { id } = useParams() //untuk berpindah sesuai params (id)
    const { categoryP } = useParams()

    let users = 'http://localhost:4000/product'
    useEffect(() => {
        // untuk get data
        axios.get(users)
            .then((res) => {
                console.log("get data success")
                console.log(res.data.data)
                res.data && setProduct(res.data.data)
            })
            .catch((err) => {
                console.log("get data fail")
                console.log(err)
            })
    }, [])

    console.log(product)
    const filterCategory = product.filter((p) => p.categorys === `${categoryP}`)
    console.log(filterCategory, categoryP)

    return (
        <div>
            <NavbarSebelumLogin />
            <div className="container mt-5">
                <div className="col-12 d-flex">
                    <Link to='/'>Home</Link>
                    <p>></p>
                    <a href="#">Category </a>
                    <p>></p>
                    <a href="#">{categoryP}</a>
                </div>
                <h2 className="mt-4">{(categoryP).toUpperCase()}</h2>
            </div>
            <div className='container'>
                <div className='row  d-flex justify-content-between'>
                    {filterCategory.map((products) =>
                        <div className="col-lg-2 col-6 mx-lg-2" key={products.id}>
                            <Link to={`/DetailProduct/${products.id}`} style={{ textDecoration: 'none', color: 'black' }}>
                                <CardsProduct key={id} photo={products.photo} name={products.name} price={products.price} toko='Sri-Olshop' />
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Category;























