import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


function ButtonSeller() {
  return (
    <div className='d-flex justify-content-center'>
        <Link to='/LoginCus'><Button variant="danger" style={{ width:'123px',height:'48px'}}>Custommer</Button> </Link>
        <Link to='/loginSeller'> <Button variant="white" style={{ width:'123px',height:'48px',borderColor:'#9B9B9B'}}>Seller</Button></Link>
    </div>
  );
}

export default ButtonSeller;

//untuk pemanggilan
//import ButtonSeller from './buttonSeller';