import React, { useState,useEffect } from "react";
import NavbarSebelumLogin from "./../componen/navbar2";
import CardsProduct from "./../componen/CardsProduct";
import NavbarBaru from '../componen/navbarBaru'
import axios from 'axios' //untuk interaksi dengan database
import { Link, useParams} from 'react-router-dom'; //menghubungkan anatar halaman
import "@fontsource/metropolis";




const Home = () => { 
    const [product,setProduct] = useState([])
    const {id} =useParams() //untuk berpindah sesuai params (id)
  

  let users = 'http://localhost:4000/product'
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

  

    console.log(product)
    return (
        <div>
            <NavbarBaru/>
            <NavbarSebelumLogin/> 
            <div className="container">
                {/* carausel */}
                {/* <CarouselCategory/> */}
                <h4>New</h4>
                <p>You’ve never seen it before!</p>
                </div>
                    <div className='container'>
                        <div className='row d-flex'>
                            <div className="col-lg-3 col-6">
                                {product.map((products) => 
                                <Link to ={`/DetailProduct/${products.id}`} style={{textDecoration:'none',color:'black'}}>
                                    <CardsProduct key={id} photo={products.photo} name={products.name} price={products.price} toko='Sri-Olshop'/>
                                </Link>
                                )}
                            </div>
                        </div>
                    </div>

                
                <div className="container ">
                    <h4 className="mt-5">Popular</h4>
                    <div className='col-12'><p>Find clothes that are trending recently</p></div>
                    <div className=" row d-flex ">
                        <div className='col-lg-2 col-6 '>
                            {product.map((products) => 
                                <Link to ={`/DetailProduct/${products.id}`} style={{textDecoration:'none',color:'black'}}>
                                    <CardsProduct key={id} photo={products.photo} name={products.name} price={products.price} toko='Zalora Cloth'/>
                                </Link>
                                )}
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Home;























