import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


function ButtonCustom() {
  return (
    <div className='d-flex justify-content-center'>
        <Link to='/login'>
          <Button 
              variant="white" 
              style={{ 
                width:'123px',
                height:'48px',
                borderColor:'#9B9B9B'
              }}>
              Custommer
            </Button>
          </Link>
        <Link 
          to='/login'>
          <Button 
            variant="danger" 
            style={{ width:'123px',height:'48px'}}>
            Seller
          </Button>
        </Link>
    </div>
  );
}

export default ButtonCustom;
