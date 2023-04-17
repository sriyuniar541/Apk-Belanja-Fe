import React, { useState, useEffect } from "react";
import NavbarSebelumLogin from "../../componen/navbar/navbar2";
import CardsProduct from "../../componen/CardsProduct";
import { Link, useParams } from 'react-router-dom';
import Carousel from "../../componen/carousel";
import Carousel2 from "../../componen/carousel2";
import './home.css'
import axios from 'axios'

const Home = () => {
    const [product, setProduct] = useState([])
    const { id } = useParams()
    const [search, setSearch] = useState('')
    const [page, setPage] = useState(1)

    let users = process.env.REACT_APP_URL_BE + `/product/?search=${search}&limit=10&page=${page}`
    const next = () => {
        setPage(page + 1)
    }

    const back = () => {
        if (page <= 1) {
            return setPage(page = 1)
        }
        else {
            setPage(page - 1)
        }
    }

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
    }, [search, page])

    const filterActive = product.filter((p) => (p.active === 1))


    return (
        <div>
            <NavbarSebelumLogin
                name='search'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <div className="container cont-home">
                <Carousel2 />
                <h4>Category</h4>
                <p>Where are you currently looking for</p>
                <div className="carousel ">
                    <Carousel />
                </div>
                <h4 className="">New</h4>
                <p>You’ve never seen it before!</p>
            </div>
            <div className='container'>
                <div className='card_product'>
                    {filterActive.map((products) =>
                        <div className="col-lg-2 col-6 mx-lg-2" key={products.id}>
                            <Link to={`/DetailProduct/${products.id}`} className="link">
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
            <div className="container ">
                <h4>Popular</h4>
                <div className='col-12'>
                    <p>Find clothes that are trending recently
                    </p>
                </div>
                <div className='card_product'>
                    {filterActive.map((products) =>
                        <div className="col-lg-2 col-6 mx-lg-2" key={products.id}>
                            <Link className="link"
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
                {/* pagination */}
                <div className='pagination'>
                    <button
                        className=''
                        onClick={next}>
                        Next
                    </button>
                    <button>
                        {page}
                    </button>
                    <button
                        onClick={back}>
                        Back
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Home;























