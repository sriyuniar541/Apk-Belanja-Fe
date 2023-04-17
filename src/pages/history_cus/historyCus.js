import React, { useState, useEffect } from 'react'
import axios from 'axios'
import NavbarSebelumLogin from '../../componen/navbar/navbar2'
import SideBar from '../../componen/sideBar'
import { useSelector } from 'react-redux';
import Example from '../../componen/modal';
import './history.css'


export default function Order() {
    const user = useSelector((state) => state.user.user)
    const token = localStorage.getItem('token')
    const [checkout, setCheckout] = useState([])
    useEffect(() => {
        console.log(user)
        console.log(user.id)
    }, [user])

    const getDataCheckout = () => {
        axios.get(process.env.REACT_APP_URL_BE + `/addProduct/`, {
            headers: { Authorization: `Bearer ${token}` }
        })
            .then((res) => {
                console.log("get data success")
                console.log(res.data.data, 'ini data history')
                res.data && setCheckout(res.data.data)
            })
            .catch((err) => {
                console.log("get data fail")
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
            <div className='container-fluid cont_history'>
                <div className='row '>
                    <div className='col-lg-3 sidebar_historys'>
                        <SideBar />
                    </div>
                    <div className='col-lg-7 card_history'>
                        <div className=' table_history'>
                            {/* get data */}
                            <table className='table container'>
                                <thead >
                                    <tr>
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
                                                <td>
                                                    <Example
                                                        idBarang={p.id}
                                                        name={p.products_name}
                                                        category={p.categorys}
                                                        qty={p.count}
                                                        price={p.products_price}
                                                        total={0}
                                                        status={p.statusorder ? p.statusorder : 'Packaging'}
                                                        order={p.user_name}
                                                    />
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















