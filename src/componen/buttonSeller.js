import Button from 'react-bootstrap/Button';


function ButtonSeller() {
  return (
    <div className='d-flex justify-content-center'>
        <Button href='http://localhost:3000/LoginCus' variant="danger" style={{ width:'123px',height:'48px'}}>Custommer</Button>{' '}
        <Button href='http://localhost:3000/login' variant="white" style={{ width:'123px',height:'48px',borderColor:'#9B9B9B'}}>Seller</Button>{' '}
    </div>
  );
}

export default ButtonSeller;

//untuk pemanggilan
//import ButtonSeller from './buttonSeller';