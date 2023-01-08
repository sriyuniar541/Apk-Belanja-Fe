import axios from "axios"; //untuk menampilkan API di website 
import { useEffect, useState } from "react";
import styles from './Profile.module.css'; //mengimpor css kita dan menajdikan componin yg bisa dipakai lagi
import DatePicker from "react-datepicker"; //untuk mengimpor tgl dari npm
import profile from '../../image/cth.png'
import "react-datepicker/dist/react-datepicker.css"; //untuk mengimpor tgl
import SideBar from "../../componen/sideBar";
import NavbarSebelumLogin from "../../componen/navbar2";





export default function Profile() {
    const [data, setData] = useState(null)
    const [startDate, setStartDate] = useState(new Date());
    let users = 'https://jsonplaceholder.typicode.com/users/1'
    useEffect(() => {
        axios.get(users)
            .then((res) => {
                console.log('get data sukses')
                console.log(res)
                res.data && setData(res.data)
            }).catch((err) => {
                console.log('get data gagal')
                console.log(err)
            })
    }, [])
    return (
        <div className="bg-light w-100 h-100">
            <NavbarSebelumLogin />
            <div className="row">
                <div className='col-lg-3 col-4 bg-white'>
                    <SideBar />
                </div>
                <div className='col-lg-8 col-8 p-lg-5'>
                    <div className="container bg-white p-lg-5">
                        <h1>My Profil</h1>
                        <h5 className="text-secondary ">Manage your profile information</h5>
                        <div className={styles.line}></div>
                        <div className="container col-lg-12  row">
                            <div className="col col-8 row">
                                {/* awal list item */}
                                <div className="col-lg-12  row mb-3">
                                    <div className="col col-3 centered-value">
                                        Name
                                    </div>
                                    <div className=" col col-lg-9">
                                        <input type="text" className="from-control" value={data ? data.name : 'data not found'} />
                                    </div>
                                </div>

                                <div className="col-12 row mb-3">
                                    <div className="col col-lg-3 centered-value">
                                        Email
                                    </div>
                                    <div className=" col col-lg-9">
                                        <input type="text" className="from-control" value={data ? data.email : 'data not found'} />
                                    </div>
                                </div>
                                {/* form phone number */}
                                <div className="col-12 row mb-3">
                                    <div className="col col-lg-3 centered-value">
                                        Phone-Number
                                    </div>
                                    <div className=" col col-9">
                                        <input type="text" className="from-control" value={data ? data.phone : 'data not found'} />
                                    </div>
                                </div>
                                {/* radio button */}
                                < div className="col-12 row mb-3">
                                    <div className="col col-lg-3 col-12 centered-value">
                                        Gender
                                    </div>
                                    <div className=" col col-lg-9">
                                        <div>
                                            <input className="form-check-input mr-4" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                            <span class="ms-lg-2">Laki-laki</span>

                                            <input className="form-check-input mr-lg-4 col-12 ms-4" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                            <span class="ms-lg-2">Perempuan</span>
                                        </div>
                                    </div>
                                </div>
                                {/* tanggal */}
                                < div className="col-12 mb-3 row">
                                    <div className="col col-3 centered-value">
                                        Birtday
                                    </div>
                                    <div className=" col col-9">
                                        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                                    </div>
                                </div>
                                <button className="btn btn-danger text-white col-lg-5 offset-lg-3 mt-3 mb-4" style={{borderRadius: '18px'}}>Save</button>
                            </div>
                            <div className="col-lg-4 col-6 text-center " ms-auto>
                                <img src={profile} alt='' style={{ width: '200px', height: 'auto', borderRadius: '50%' }} className='img-fluid mb-3'/>
                                <button className="btn btn-white text-secondary border-secondary col-12" style={{borderRadius: '18px'}}>Select Image</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <ol>
                <li>{data? data.name:'data not found'}</li>
                <li>{data? data.email:'data not found'}</li>
                <li>{data? data.username:'data not found'}</li>
            </ol> */}

        </div>
    )
}



