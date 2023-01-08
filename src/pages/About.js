import React, { useEffect, useState } from 'react'
import axios  from 'axios'



const About = () => {
const [product,setProduct] = useState([])

//const url = `http://localhost:4000/product`

const getProduct = () => {
  axios.get(`http://localhost:4000/product`)
  .then((res)=>{
    setProduct(res.data)
    console.log(res.data)
}).catch ((e)=>{
    console.log(e)
})
  
}

useEffect(()=>{
    getProduct()
},[])




  return (
    <div>
      <p>hallo</p>
      
        
        {/* {product.map((p)=>{
                  return (
                    <div className='row'>
                    <p>{p.name}</p>
                </div>
                  )
                })} */}
        
      
    </div>
  )
}

export default About



























// //import React, { useState } from 'react'
// // import { Link, unstable_HistoryRouter } from 'react-router-dom'


// //https://jsonplaceholder.typicode.com/todos

// import React, { useEffect, useState } from 'react'
// import CardsProduct from '../componen/CardsProduct'
// import axios from 'axios'


// // "userId": 1,
// // "id": 1,
// // "title": "delectus aut autem",
// const About = () => {

//   const [loading,setLoading] = ('')
//   const [post, setPost] = useState([])
//   const getPost = () => {
//     // setLoading(true);
//     axios
//     .get('https://jsonplaceholder.typicode.com/todos')
//     .then((res)=>{
//       setPost(res.data)
//       setLoading(false)
//     }).catch((e)=>{
//       setLoading(false)
//       console.log(e)  
//     })
//   }

//   useEffect(()=>{
//     getPost()
//   },[])

//   return (
    
//     <div className='container post-list'>
//       {loading&&<div>Loading...</div>}
//       {post.map((p)=>{
//         return (
//           <div className='row'>
//           <div className='col-lg-2 col-6 p-3'>
//             <CardsProduct price='5000' name='baju baru'/>
//           </div>
//       </div>
//         )
//       })}
//     </div>
//   )
// }

// export default About



























// // //belajar reactJs
// // const Todulis = (props) => {
// //  const [input,setInput] = useState(['makan','minum'])
// //  const [tambah,setTambah] = useState('')
// //   const histore = unstable_HistoryRouter 
// //   return (
// //   <div>
// //     <p>title</p>
// //     <input type='text' value={tambah} onChange={(p)=>{
// //       setTambah(p.target.value)
      
// //     }}/>
// //     <button onClick={()=>{  
// //       if(tambah.length > 0) {
// //         setInput((p)=> {
// //           const data = [...p];
// //           data.push(tambah);
// //           return data
// //         }); setTambah('')
// //         }}
// //       }>create</button>
       
// //   <br/>
// //   {input.map((p,i)=>{
// //     return (
// //       <div key={i}>
// //         <p>{p}</p>
// //         {/*  <Link to={`/Todulis:${i}`}><button>hallo</button></Link> */}
// //         <button onClick={()=>{
// //           setInput((p)=>{
// //               const data =[...p]
// //               data.splice(i,1)
// //               return data
// //           })
// //         }}>delete</button>
// //         <button onClick={()=>{
// //           setTambah(p);
// //         }}>edite</button>
// //       </div>
// //     )
// //   })}

  
   

// //   </div>



// //   )
// // }
 
// // export default Todulis



