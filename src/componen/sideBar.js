import React from "react";
import Button from 'react-bootstrap/Button';
import pr2 from './../image/gbr1.png' //untuk import gambar
import l1 from  './../image/ktk.png'
import l2 from  './../image/lks.png'
import l3 from  './../image/ppn.png'
import ubah from './../image/ub.png'

export default function SideBar() {
    return (

     <div className="container-fluid">
        
            <div className="row">
                <div className="col-lg-4 col-5 mt-5" style={{height:'100vh'}}>
                    <div className="container "style={{height:'100vh',marginLeft:'65%'}}>
                    <div className="row ">
                    <div className="col-lg-4  ">
                        <div className="d-flex ">
                            <img src={pr2} style={{borderRadius:'50%',maxWidth:'90px',maxHeight:'61px'}}/>
                            <div className=" mt-2">
                            <p style={{marginLeft:'10%'}}>Johanes Mikael</p>
                            <Button href='#' variant="" className=""><img src={ubah} style={{marginTop:'-50%',marginLeft:'-1%'}}/></Button>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className="mt-3">
                            <div className="d-flex">
                                <Button href='#' variant=""><img src={l1} /></Button>
                                <p style={{marginTop:'3%'}} className='col-12'>My Account</p>
                            </div>
                            <div className="d-flex">
                                <Button href='#' variant=""><img src={l2} style={{}}/></Button>
                                <p style={{marginTop:'3%'}} className='col-12'>Shipping Address</p>
                            </div>
                                <div className="d-flex">
                                <Button href='#' variant=""><img src={l3} style={{}}/></Button>
                                <p style={{marginTop:'3%'}} className='col-12'>My Order</p>
                            </div>
                        </div>
                    </div>
                </div>
                    </div>
                </div>

            </div>
     </div>
        

     )
    
}