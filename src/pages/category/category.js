import React, { useState, useEffect } from "react";
import NavbarSebelumLogin from "../../componen/navbar/navbar2";
import CardsProduct from "../../componen/CardsProduct";
import { Link, useParams } from 'react-router-dom';
import axios from 'axios'
import './category.css'


const Category = () => {
    const [product, setProduct] = useState([])
    const { id } = useParams()
    const { categoryP } = useParams()

    let users = process.env.REACT_APP_URL_BE + `/product`
    useEffect(() => {
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

    const filterCategory = product.filter((p) => p.categorys === `${categoryP}`)

    return (
        <div>
            <NavbarSebelumLogin />
            <div className="container cont-detail">
                <h3>{(categoryP).toUpperCase()}</h3>
            </div>
            <div className='container'>
                <div className='row item_category'>
                    {filterCategory.map((products) =>
                        <div className="col-lg-2 col-6 mx-lg-2"
                            key={products.id}
                        >
                            <Link className="link_category_product"
                                to={`/DetailProduct/${products.id}`}
                            >
                                <CardsProduct
                                    key={id}
                                    photo={products.photo}
                                    name={products.name}
                                    price={products.price}
                                    toko='Sri-Olshop'
                                />
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Category;























