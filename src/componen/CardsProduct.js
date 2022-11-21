import Card from 'react-bootstrap/Card';
import Star from '../../src/image/Star.png' 
import "@fontsource/metropolis";




const CardsProduct = (props) => {
  return (
    <Card className='shadow-sm p-3 mb-5 bg-body rounded' style={{width:'238px',fontFamily:'Metropolis'}}>
      <Card.Img variant="top" src={props.photo} alt='gambar'/>
      <Card.Body>
        <Card.Title><b>{props.name}</b> </Card.Title>
        <h6 className='text-danger'>$. {props.price}</h6>
        <p className='text-secondary'>{props.toko}</p>
        <div className='star d-flex'>
            <img src={Star} alt='bintang'/>
            <img src={Star} alt='bintang'/>
            <img src={Star} alt='bintang'/>
            <img src={Star} alt='bintang'/>
            <img src={Star} alt='bintang'/>
        </div>
      </Card.Body>
    </Card>
  );
}

export default CardsProduct
