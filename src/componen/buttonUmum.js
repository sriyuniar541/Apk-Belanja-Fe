import Button from 'react-bootstrap/Button';


function ButtonUmum() {
  return (
    <div className=''>
        <Button href='http://localhost:3000/login' variant="danger" style={{ width:'401px',height:'48px',borderRadius:'25px'}}>Login</Button>{' '}
    </div>
  );
}

export default ButtonUmum;

//untuk pemanggilan
//import ButtonUmum from './ButtonUmum';