import React, { useState, useEffect } from 'react'
import axios from 'axios'
import NavbarSebelumLogin from '../../componen/navbar/navbar2'
import SideBar from '../../componen/sideBar'
import { useSelector } from 'react-redux';
import ModalProps from '../../componen/moddalSelles';
import './order.css'


export default function Order() {
    const user = useSelector((state) => state.user.user)
    const token = localStorage.getItem('token')
    const [checkout, setCheckout] = useState([])

    useEffect(() => {
        console.log(user)
        console.log(user.id)
    }, [user])

    const getDataCheckout = () => {
        axios.get(process.env.REACT_APP_URL_BE + `/addProduct/order/?search=${user.id}`, {
            headers: { Authorization: `Bearer ${token}` }
        })
            .then((res) => {
                console.log("get data success")
                console.log(res.data.data)
                res.data && setCheckout(res.data.data)
            })
            .catch((err) => {
                console.log("get data fail")
                console.log(err)
            })
    }

    const changeStatus = (id) => {
        axios.put(process.env.REACT_APP_URL_BE + `/addProduct/updateDelevery/${id}`, {}, {
            headers: { Authorization: `Bearer ${token}` }
        })
            .then((res) => {
                alert(" status delivery")
                console.log(" status delivery")
                getDataCheckout()

            })
            .catch((err) => {
                alert("change fail, please login lagi gaiss")
                console.log("change fail, please login lagi gaiss")
                console.log(err)
            })
    }

    useEffect(() => {
        getDataCheckout()
    }, [])

    const filterChek = checkout.filter((p) => p.status === 1)
    console.log(filterChek, 'ini filter check')


    return (
        <div>
            <NavbarSebelumLogin />
            <div className='container-fluid cont_order' >
                <div className='row'>
                    <div className='col-lg-3 sidebar_order'>
                        <SideBar />
                    </div>
                    <div className='col-lg-7 card_order '>
                        <div >
                            <table className='table container table_order'>
                                <thead >
                                    <tr className='text-center'>
                                        <th>Order</th>
                                        <th>Status</th>
                                        <th>price total</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filterChek ? filterChek.map((p) => (
                                        <tr >
                                            <>
                                                <td>
                                                    {p.id ? p.id : '-'}
                                                </td>
                                                {p.statusorder ? p.statusorder : 'Packaging'}
                                                <td>
                                                    Rp. {p.products_price ? p.products_price : 'Rp.0'}
                                                </td>
                                                <td >
                                                    <ModalProps
                                                        idBarang={p.id}
                                                        name={p.products_name}
                                                        category={p.categorys}
                                                        qty={p.count}
                                                        price={p.products_price}
                                                        total={0}
                                                        status={p.statusorder ? p.statusorder : 'Packaging'}
                                                        order={p.user_name}
                                                    />
                                                    <button
                                                        className='btn btn-warning col-lg-9 offset-lg-1'
                                                        onClick={() => changeStatus(p.id)}>
                                                        Change Status
                                                    </button>
                                                </td></>
                                        </tr>
                                    )) : 'data empty'}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}















