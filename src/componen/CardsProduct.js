import Card from 'react-bootstrap/Card';
import Star from '../../src/image/Star.png' 
import "@fontsource/metropolis";




const CardsProduct = (props) => {
  return (
    <Card className='shadow-sm p-3 mb-3 bg-body rounded' 
      style={{
        width:'192px', 
        fontFamily:'Metropolis', 
        height:'320px'
      }}>
      <Card.Img  
        src={props.photo} 
        alt='gambar' 
        style={{
          width:'160px', 
          height:'150px'
        }}
      />
      <Card.Body className='text-center'>
        <h6><b>{props.name}</b> </h6>
        <h6 className='text-danger'>
          Rp. {props.price}
        </h6>
        <p 
          className='text-secondary opacity-75' 
          style={{fontSize:'15px'}}>
          {props.toko}
        </p>
        <div className='star d-flex justify-content-center'>
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
