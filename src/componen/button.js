import Button from 'react-bootstrap/Button';


function ButtonCustom() {
  return (
    <div className='d-flex justify-content-center'>
        <Button href='http://localhost:3000/LoginCus' variant="white" style={{ width:'123px',height:'48px',borderColor:'#9B9B9B'}}>Custommer</Button>{' '}
        <Button href='http://localhost:3000/login' variant="danger" style={{ width:'123px',height:'48px'}}>Seller</Button>{' '}
    </div>
  );
}

export default ButtonCustom;

//untuk pemanggilan
//import ButtonCustom from './button';