import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


function ButtonCusSig() {
  return (
    <div className='d-flex justify-content-center'>
        <Link 
          to='/sighupCustommer'>
          <Button 
            variant="danger" 
            style={{ width:'123px',height:'48px'}}>
            Custommer
          </Button> 
        </Link>
        <Link 
          to='/sighupSeller'> 
          <Button 
            variant="white" 
            style={{ 
              width:'123px',
              height:'48px',
              borderColor:'#9B9B9B'
            }}>
            Seller
          </Button>
        </Link>
    </div>
  );
}

export default ButtonCusSig;
