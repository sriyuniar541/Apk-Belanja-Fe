import React from "react";
import Button from 'react-bootstrap/Button';
import pr2 from './../image/gbr1.png' //untuk import gambar
import l1 from './../image/g5.png'
import l2 from './../image/g4.png'
import l3 from './../image/g6.png'
import ubah from './../image/ub.png'
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom'; //menghubungkan anatar halaman



export default function SideBar() {
    return (

        <div className="container-fluid ">

            <div className="row ">
                <div className="col-lg-4 col-5 ">
                    <div className="container " style={{ height: '100vh', marginLeft: '65%' }}>
                        <div className="row ">
                            <div className="col-lg-3 ">
                                <div className="d-flex mt-5">
                                    <img alt='' src={pr2} style={{ borderRadius: '50%', maxWidth: '90px', maxHeight: '61px' }} />
                                    <div className=" mt-2">
                                        <p style={{ marginLeft: '10%' }}>Johanes Mikael</p>
                                        <Button href='#' variant="" className=""><img alt='' src={ubah} style={{ marginTop: '-50%', marginLeft: '-1%' }} /></Button>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 mt-3">
                                    <div className="d-flex">
                                    </div>
                                   
                                        <Link to='/product'>
                                        <Button variant=""><img alt='' src={l2} style={{}} />
                                        </Button>
                                        </Link>
                                        <Link to='/Order'>
                                        <Button variant=""><img alt='' src={l3} /></Button>
                                        </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>


    )

}