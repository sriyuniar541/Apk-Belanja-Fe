import React, { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import NavbarSebelumLogin from "../componen/navbar2";
import axios from 'axios' //untuk interaksi dengan database



export default function MyBag() {
    const [addBag, setAddBag] = useState([])
    console.log(addBag)
    const [checValue,setCheckValue] = useState([])
    const [jumlah,setJumlah] = useState(1)

    let add = `http://localhost:4000/addProduct`
    const addBagAll = () => {
        // untuk get data
        axios.get(add)
            .then((res) => {
                console.log("get data success")
                console.log(res.data.data)
                res.data && setAddBag(res.data.data)
            })
            .catch((err) => {
                console.log("get data fail")
                console.log(err)
            })
    }
    const deleteAdd = () => {
        axios.delete(`http://localhost:4000/addProduct/5`)
        .then((res) => {
            console.log("get data success")
            alert('delete success')
            addBagAll()

        })
        .catch((err) => {
            console.log("get data fail")
            alert('delete fail')
            console.log(err)
        })
    }

    useEffect(() => {
        addBagAll()
    }, [])

    const user_id='b2b1a7f1-51d2-4945-8c69-00ea3567e0ad'
    const handleCheck = (e,id,categorys_id) => {
        console.log(id,'ini id dari cheklish')
       const {value, checked} = e.target
       if(checked) {
        console.log('tambah product', addBag)
        console.log(e.target.files)
        e.preventDefault()
        const formData = new FormData()
        formData.append('products_id',id)
        formData.append('categorys_id',categorys_id)
        formData.append('user_id',user_id)
        console.log(formData)
        axios.post('http://localhost:4000/checkout/', formData , {
            headers: {
               'Content-Type' : 'multipart/form-data',
              
           },
   }) 
   .then((res) => {
       console.log(res,"post data success")
       alert('berhasil order')
   })
   .catch((err) => {
       console.log(err.message, 'post data fail')
       alert('gagal order')
   })
            
       }else {
           
       }    
    }
    console.log(checValue)
    

    const handleBuy = (e,id) => {
        axios.post(`http://localhost:4000/checkout/${id}`,{
            headers: {
               'Content-Type' : 'multipart/form-data',
              
           },
   }) 
   .then((res) => {
       console.log(res,"post data success")
       alert('berhasil order silahkan melanjutkan pembayaran')
   })
   .catch((err) => {
       console.log(err.message, 'post data fail')
       alert('gagal order')
   })
    }
//     let a = [1,2,3]
// //    let sum =  parseInt(checValue).reduce((a,b)=> a+b, 0)
//    let sum =  parseInt(checValue)
//    console.log(sum)
    const handleTambah = (e,id,count) => {
        // setJumlah(jumlah => 
        //     jumlah.map( (item) => 
        //         id === item.products_id
        //         ? {...item, count : item.count -1} : item 
        //     )
        // )
    }
    const handleKurang = (e,id) => {
        setJumlah( pre => pre - 1)
    }

    return (
        <div>
            <NavbarSebelumLogin />
            <div className="container">
                <h2 className='py-4'>My Bag</h2>
                <div className="row">
                    <div className="col-lg-8">
                        <Card style={{ height: '' }} className='mb-2 shadow p-3 bg-white rounded'>
                            <Card.Body>
                                
                                <div className="row">
                                    <div className="col-lg-1 col-1">
                                        <input type="checkbox"  />
                                    </div>
                                    <div className="col-lg-9 col-8">
                                        <h6>Select all items (2 items selected)</h6>
                                    </div>
                                    <div className="col-lg-2 col-3">
                                        <button className='btn btn-white text-danger'  onClick={deleteAdd}>Delete</button>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                        {addBag?.length >= 1 ? addBag.map((p) => {
                            return (
                                <Card style={{ height: '' }} className='mb-2 shadow p-3 bg-white rounded' key={p.id}>
                                    <Card.Body >
                                        <div className="row ">
                                            <div className="col-lg-1 col-1 p-lg-2 ">
                                                <input type="checkbox" 
                                                 onChange={((e)=> handleCheck(e,p.products_id,p.categorys_id))} />
                                            </div>
                                             <div className="col-lg-3 col-4 p-lg-2 ">
                                                <img src={p.products_photo
} style={{ height: '69px', borderRadius: '8px' }} alt='' />
                                            </div>
                                            <div className="col-lg-3 col-4 p-lg-2 ">
                                                <h6>{p.products_name}</h6>
                                                <p className="text-secondary">Zalora Cloth</p>
                                            </div>
                                            <div className="col-lg-2 col-3 p-lg-3  d-flex">
                                                <button className="border-white rounded-circle" style={{ width: '36px', height: '36px' }} onClick={()=> handleKurang(p.id)}><h4>-</h4></button>
                                                <h5 className='p-2'>{p.count}</h5>
                                                <button className="border-white rounded-circle" style={{ width: '36px', height: '36px' }} onClick={()=>handleTambah(p.id)}><h4>+</h4></button>
                                            </div>
                                            <div className="col-lg-3 col-6  p-lg-4 "><p className="text-right">$ {p.products_price}</p></div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            )
                        }) : 'data not found'}
                    </div>
                    <div className="col-lg-4">
                        <Card style={{ height: '' }} className='mb-2 shadow p-3 bg-white rounded'>
                            <Card.Body>
                                <div className='row d-flex'>
                                    <div className="col-lg-8 col-8">
                                        <h6>Shopping summary</h6>
                                        <p>Total Price</p>
                                    </div>
                                    <div className="col-lg-4 col-3 mt-4">
                                        <h6>$ 200.000</h6>
                                    </div>
                                </div>
                                <div className="">
                                    <Button className='bg-danger col-12' variant="white" style={{ height: '36px', borderRadius: '25px' }} onClick={handleBuy}>Buy</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}