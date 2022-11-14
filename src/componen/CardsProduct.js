import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import BajuFormal from '../../src/image/bjk.png' 
import Star from '../../src/image/Star.png' 
import React,{useState,useEffect} from 'react'
import axios from 'axios'






function CardsProduct(props) {
  return (
    <Card style={{ width: '208px' }}>
      <Card.Img variant="top" src={BajuFormal} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <h6 className='text-danger'>{props.price}</h6>
        <p className='text-secondary'>{props.toko}</p>
        <div className='star d-flex'>
            <img src={Star}/>
            <img src={Star}/>
            <img src={Star}/>
            <img src={Star}/>
            <img src={Star}/>
        </div>
      </Card.Body>
    </Card>
  );
}



export default CardsProduct












// import Card from 'react-bootstrap/Card';
// // import BajuFormal from '../../src/image/bjk.png' 
// import Star from '../../src/image/Star.png' 
// import React,{useState,useEffect} from 'react'
// import axios from 'axios'
// import fragment from 'fragment'





// export default function Product(props) {
//   const [data,setData] = useState([])
 
//   let users = 'http://localhost:4000/product'
//   useEffect(()=>{
    
//    // untuk get data
//       axios.get(users)
//       .then((res)=>{
//           console.log("get data success")
//           console.log(res.data.data)
//           res.data && setData(res.data.data)
//       })
//       .catch((err)=>{
//           console.log("get data fail")
//           console.log(err)
//       })
//   },[])
  
//   return (
//     <div>
//         {data.map((item,index)=>(
//                   <Card style={{ width: '208px' }}>
//                   <Card.Img variant="top" src={item.photo}/>
//                   <Card.Body>
//                     <Card.Title>{item.name}</Card.Title>
//                     <h6 className='text-danger'>{item.price}</h6>
//                     <p className='text-secondary'>Zalora Cloth</p>
//                     <div className='star d-flex'>
//                         <img src={Star}/>
//                         <img src={Star}/>
//                         <img src={Star}/>
//                         <img src={Star}/>
//                         <img src={Star}/>
//                     </div>
//                   </Card.Body>
//                 </Card>
//           ))}
//     </div>
//   )
// } 





