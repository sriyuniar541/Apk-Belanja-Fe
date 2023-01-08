import {useEffect, useState} from "react";
import { useSelector } from 'react-redux'; 
import Button from 'react-bootstrap/Button';
import pr2 from './../image/gbr1.png' //untuk import gambar
import ubah from './../image/ub.png'
import g1 from './../image/g1.png'
import g2 from './../image/g2.png'
import g3 from './../image/g3.png'

export default function SideBar() {
    const token = localStorage.getItem('token') //mendapat item token dari localStorage
    const user = useSelector((state) => state.user.user)

    useEffect(()=>{
    console.log(user)
    },[user])

    return (
        

     <div className="container ">
            <div className="row ">
                <div className="col-lg-4 col-5 mt-lg-5 " style={{height:'100vh'}}>
                    <div className="container px-lg-5 py-lg-5 py-2">
                    <div className="row ">
                    <div className="col-lg-4  ">
                        <div className="d-flex ">
                            <img alt='' src={pr2} style={{borderRadius:'50%',maxWidth:'90px',maxHeight:'61px'}}/>
                            <div className=" mt-2">
                            <p style={{marginLeft:'10%'}}>Nama</p>
                            <Button href='#' variant="" className=""><img alt='' src={ubah} style={{marginTop:'-50%',marginLeft:'-1%'}}/></Button>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className="mt-3  ">
                            <div className="d-flex">
                                <Button  variant=""><img alt='' src={g1} /></Button>
                            </div>
                            <div className="d-flex">
                                <Button href='#' variant=""><img alt='' src={g2}/></Button>
                            </div>
                                <div className="d-flex">
                                <Button href='#' variant=""><img alt='' src={g3}/></Button>
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