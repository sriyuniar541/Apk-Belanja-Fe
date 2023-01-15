import React, { useState, useEffect } from "react";
import NavbarSebelumLogin from "./../componen/navbar2";
import CardsProduct from "./../componen/CardsProduct";
import axios from 'axios' //untuk interaksi dengan database
import { Link, useParams } from 'react-router-dom'; //menghubungkan anatar halaman
import "@fontsource/metropolis";
import Carousel from "../componen/carousel";
import Carousel2 from "../componen/carousel2";



const Home = () => {
    const [product, setProduct] = useState([])
    const { id } = useParams() //untuk berpindah sesuai params (id)
    const [search, setSearch] = useState('')
    const [page, setPage] = useState(1)


    let users = `http://localhost:4000/product/?search=${search}&limit=10&page=${page}`
    const next = () => {
        setPage(page + 1)
      }
    
      const back = () => {
        if (page === 0) {
          setPage(page = 1)
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
    console.log(filterActive, 'ini data active')

    console.log(product)
    return (
        <div>
            <NavbarSebelumLogin
                name='search' value={search} onChange={(e) => setSearch(e.target.value)}
            />
            <div className="container">
                <Carousel2 />
                <h4>Category</h4>
                <p className="mb-4">Where are you currently looking for</p>
                <div className="row d-flex justify-content-between ">
                    <Carousel />
                </div>
                <h4 className="mt-4">New</h4>
                <p>You’ve never seen it before!</p>
            </div>
            <div className='container'>
                <div className='row  d-flex justify-content-between'>
                    {filterActive.map((products) =>
                        <div className="col-lg-2 col-6 mx-lg-2" key={products.id}>
                            <Link to={`/DetailProduct/${products.id}`} style={{ textDecoration: 'none', color: 'black' }}>
                                <CardsProduct key={id} photo={products.photo} name={products.name} price={products.price} toko='Sri-Olshop' />
                            </Link>
                        </div>
                    )}
                </div>
            </div>


            <div className="container ">
                <h4 className="mt-5">Popular</h4>
                <div className='col-12'><p>Find clothes that are trending recently</p></div>
                <div className='row  d-flex justify-content-between'>
                    {filterActive.map((products) =>
                        <div className="col-lg-2 col-6 mx-lg-2" key={products.id}>
                            <Link to={`/DetailProduct/${products.id}`} style={{ textDecoration: 'none', color: 'black' }}>
                                <CardsProduct key={id} photo={products.photo} name={products.name} price={products.price} toko='Sri-Olshop' />
                            </Link>
                        </div>
                    )}
                </div>
                {/* pagination */}
                <div className='d-flex justify-content-center m-5'>
                    <button className='btn btn-white border-secondary' onClick={next}>Next</button>
                    <button className='btn btn-white '>{page}</button>
                    <button className='btn btn-white border-secondary' onClick={back}>Back</button>
                </div>
            </div>
        </div>
    )
}

export default Home;























