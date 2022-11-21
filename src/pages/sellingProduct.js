import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import styles from '../componen/Componen.module.css';
import logoTas from './../image/tas.png' //untuk import gambar
import segitiga from './../image/Vector (3).png' //untuk import gambar
import email from './../image/mail (3) 1.png' //untuk import gambar
import lonceng from './../image/bell (1) 1.png' //untuk import gambar
import pr from './../image/gbr.png' //untuk import gambar
import SideBarProduct from "../componen/sideBarProduct";
import Card from 'react-bootstrap/Card';
import "@fontsource/metropolis";



export default function SellingProduct() {
    return (
        // navbar
    <div className='Container-fluid' style={{background:'#F5F5F5'}}>
            <div className='Container-fluid shadow p-3 bg-white rounded'>
            <div className='Container'>
                <div className={styles.navbar}>
                <div className='ContainerNav col-12'>
                    <div className='row d-flex justify-content-between'>
                        <div className='col-lg-2 col-6 offset-4  d-flex offset-lg-1'>
                            <img alt="" src={logoTas} width="40" height="40" className="d-inline-block align-top"/>{' '}
                                <h2 className="text-danger mx-2">Blanja</h2>
                        </div>
                        <div className='col-lg-3  col-6 ms-auto'>
                            <Button variant=""className="mr-lg-2"><img src={lonceng}/></Button>
                            <Button variant=""className="mr-lg-2"><img src={email}/></Button>
                            <Button href='http://localhost:3000/profile' variant=""><img src={pr} style={{borderRadius:'50%'}}/></Button>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        {/* akhir navbar */}

        <div className=''>
            <div className='container-fluid'>
                <div className='row'>
                <div className=' col-4 bg-white p-2'>
                    <SideBarProduct/>
                </div>
                <div className='col-lg-7 px-5 mt-5'>
                    <div className='p-2'>
                    <Card className='bg-white mb-3'>
                    <Card.Header className='bg-white'><h4>Inventory</h4></Card.Header>
                    <Card.Body className='col-lg-6'>
                        <p>Name of Good</p>
                    <Form.Control type="email" placeholder="name@example.com" />
                    </Card.Body>
                    </Card>


                    <Card className='bg-white mb-3'>
                    <Card.Header className='bg-white'><h4>Item details</h4></Card.Header>
                    <Card.Body className='col-lg-6'>
                    <p>Unit price</p>
                    <Form.Control type="unit"/>

                    <p>Stock</p>
                    <Form.Control type="stock" placeholder="buah"/>

                    <div className='mt-4'>
                        <p>Stock</p>
                        <input className="form-check-input mr-4" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
                        <span class="ms-lg-2">Baru</span> 
                        <input className="form-check-input mr-lg-4 col-12 ms-4" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
                        <span class="ms-lg-2">Bekas</span> 
                    </div>
                    </Card.Body>
                    </Card>

                    
                    <Card className='bg-white mb-3'>
                    <Card.Header className='bg-white'><h4>Photo of goods</h4></Card.Header>
                    <Card.Body>
                        <div  style={{border:'1px dashed grey'}}>
                        <div className='col-12 d-flex p-3'>
                            <div style={{width :'190px',height:'190px',backgroundColor:'#D4D4D4',marginRight:'3%'}}>
                                <img src ='' style={{maxWidth :'190px',maxHeight:'190px'}}/>
                            </div>

                            <div style={{width :'120px',height:'120px',backgroundColor:'#D4D4D4',marginRight:'3%',marginTop:'7%'}}>
                                <img src ='' style={{maxWidth :'120px',maxHeight:'120px'}}/>
                            </div>

                            <div style={{width :'120px',height:'120px',backgroundColor:'#D4D4D4',marginRight:'3%',marginTop:'7%'}}>
                                <img src ='' style={{maxWidth :'120px',maxHeight:'120px'}}/>
                            </div>

                            <div style={{width :'120px',height:'120px',backgroundColor:'#D4D4D4',marginRight:'3%',marginTop:'7%'}}>
                                <img src ='' style={{maxWidth :'120px',maxHeight:'120px'}}/>
                            </div>

                            <div style={{width :'120px',height:'120px',backgroundColor:'#D4D4D4',marginRight:'3%',marginTop:'7%'}}>
                                <img src ='' style={{maxWidth :'120px',maxHeight:'120px'}}/>
                            </div>
                        </div>
                            <hr/>
                            <Button className ='bg-white border-secondary mb-5'style={{borderRadius:'20px',color:'black',marginRight:'50%'}}>Upload Foto</Button>{' '}
                        </div>
                    </Card.Body>
                    </Card>

                    <Card className='bg-white mb-3'>
                    <Card.Header className='bg-white'><h4>Description</h4></Card.Header>
                    <Card.Body>
                    <textarea class="form-control rounded-0" id="exampleFormControlTextarea1" rows="10"></textarea>

                    </Card.Body>
                    </Card>
                       
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
    )
}