import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


function ButtonCustomSig() {
  return (
    <div className='d-flex justify-content-center'>
        <Link 
          to='/sighupCustommer'>
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
          to='/sighupSeller'>
          <Button 
            variant="danger" 
            style={{ width:'123px',height:'48px'}}>
            Seller
          </Button>
        </Link>
    </div>
  );
}

export default ButtonCustomSig;
