import React from "react";
import Button from 'react-bootstrap/Button';
import pr2 from './../image/gbr1.png' //untuk import gambar
import l1 from  './../image/rm.png'
import l2 from  './../image/tk.png'
import l3 from  './../image/krg.png'
import ubah from './../image/ub.png'
import NavDropdown from 'react-bootstrap/NavDropdown';


export default function SideBar() {
    return (

     <div className="container-fluid ">
        
            <div className="row">
                <div className="col-lg-4 col-5 " style={{height:'100vh'}}>
                    <div className="container "style={{height:'100vh',marginLeft:'65%'}}>
                    <div className="row ">
                    <div className="col-lg-3 ">
                        <div className="d-flex mt-5">
                            <img src={pr2} style={{borderRadius:'50%',maxWidth:'90px',maxHeight:'61px'}}/>
                            <div className=" mt-2">
                            <p style={{marginLeft:'10%'}}>Johanes Mikael</p>
                            <Button href='#' variant="" className=""><img src={ubah} style={{marginTop:'-50%',marginLeft:'-1%'}}/></Button>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 mt-3">
                            <div className="d-flex">
                                <Button href='#' variant=""><img src={l1} /></Button>
                                <p style={{marginTop:'3%'}}>Store</p>
                            </div>
                        <div className="d-flex">
                                <Button href='#' variant=""><img src={l2} style={{}}/></Button>
                                <NavDropdown title="Product" id="collasible-nav-dropdown" style={{marginTop:'3%'}}>
                                <NavDropdown.Item href="#action/3.1">My Product</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Selling Product
                                </NavDropdown.Item>
                                </NavDropdown>
                               
                        </div>
                       
                                <div className="d-flex">
                                <Button href='#' variant=""><img src={l3} style={{}}/></Button>
                                <p style={{marginTop:'3%'}}>Order</p>
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