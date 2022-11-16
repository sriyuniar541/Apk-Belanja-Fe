import React,{useState,useEffect} from 'react'
import axios from 'axios' //untuk interaksi dengan database
// import styles from'./Product.module.css'
import Alert from "../../componen/Alert";



export default function Product() {
  const [data,setData] = useState([])
  const [photo,setPhoto] = useState(null)
  const [message,setMessage]  = useState({
    title: "",
    text: "",
    type: "success"
  })
  const [messageShow,setMessageShow]  = useState(true)
  const [inputData, setInputData] = useState({
    name: "",
    stock: "",
    price: "",
    categorys_id: 1,
    search: ""
  })
  const [sortBy,setSortBy] = useState("name")
  const [sort,setSort] = useState("asc")
  const [selected,setSelected] = useState(null)
  const [onedit,setOnedit] = useState(false)
  const [temp,setTemp] = useState(null)

  const deleteData = () => {
    axios.delete(`http://localhost:4000/product/${selected}`)
    .then((res)=>{
        console.log("delete data success")
        console.log(res)
        setMessageShow(true)
        setMessage({title:"success",text:"delete data success",type:"success"})
        messageTime()
        getData()
      })
      .catch((err)=>{
        console.log("delete data fail")
        console.log(err)
        setMessageShow(true)
      setMessage({title:"fail",text:"delete data fail",type:"danger"})
      messageTime()
    })
  }

  const editForm = (item) =>{
    console.log(item)
    setTemp(item)
    setInputData({
      ...inputData,
      name: item.name,
      stock: item.stock,
      price: item.price,
      })  }

  useEffect(()=>{
    selected ? setOnedit(true) : setOnedit(false)
    !selected  && setInputData({
      ...inputData,
      name: "",
      stock: "",
      price: "",
      })
      !selected && setPhoto(null)
  },[selected])

  const messageTime = () =>{
    setTimeout(()=>setMessageShow(false),3000)
  }
  useEffect(()=>{
    console.log("checked", sortBy)
    getData()
  },[sortBy,sort,inputData.search])
  useEffect(()=>{
    getData()
  },[])

  let users = `http://localhost:4000/product?sortby=${sortBy}&sort=${sort}&search=${inputData.search}`
  const getData = ()=> {
    axios.get(users)
    .then((res)=>{
        console.log("get data success")
        console.log(res.data.data)
        res.data && setData(res.data.data)
        !selected && setMessageShow(true)
        !selected && setMessage({title:"success",text:"get data success",type:"success"})
        !selected && messageTime()
        setSelected(null)
      })
      .catch((err)=>{
        console.log("get data fail")
        console.log(err)
         setData([])
        setMessageShow(true)
      setMessage({title:"fail",text:"get data fail",type:"danger"})
      messageTime()
    })
  }

  const postForm = (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append("name",inputData.name)
    formData.append("stock",inputData.stock)
    formData.append("price",inputData.price)
    formData.append("categorys_id",inputData.categorys_id)
    formData.append("photo",photo)
    console.log(formData)
    if(!selected){
      axios.
      post('http://localhost:4000/product',formData,{
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }).then((res)=>{
        console.log("input data success")
      console.log(res)
      setMessageShow(true)
      setMessage({title:"success",text:"post data success",type:"success"})
      messageTime()
      getData()
    }).catch((err)=>{
      console.log("input data fail")
      setMessageShow(true)
      setMessage({title:"fail",text:"post data fail",type:"danger"})
      messageTime()
      console.log(err)
    })
  } else {
    axios.
    put(`http://localhost:4000/product/${selected}`,formData,{
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }).then((res)=>{
      console.log("input data success")
      console.log(res)
      setMessageShow(true)
      setMessage({title:"success",text:"update data success",type:"success"})
      messageTime()
      getData()
  }).catch((err)=>{
    console.log("input data fail")
    setMessageShow(true)
      setMessage({title:"fail",text:"post data fail",type:"danger"})
      messageTime()
    console.log(err)
  })

  }
}
  const handlePhoto = (e) => {
    setPhoto(e.target.files[0])
    console.log(e.target.files[0])
  }

  const handleChange = (e) =>{
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value
    })
    console.log(data)
  }

  return (
    <div>



      {/* post data */}
      <form onSubmit={postForm} className="container mt-3 p-2 border border-3 ">
        <div className="d-flex flex-row">
        <input className="form-control"  type="text" value={inputData.name} name="name" onChange={handleChange} placeholder="nama"/>
        <input  className="form-control" type="number" value={inputData.stock} name="stock" onChange={handleChange} placeholder="stock"/>
        </div>
        <div className="d-flex flex-row">
        <input  className="form-control" type="number" value={inputData.price} name="price" onChange={handleChange} placeholder="price"/>
        <input className="form-control"  type="file" name="photo" onChange={handlePhoto} placeholder="photo" required/>
        </div>
          {
            onedit ? 
              <button className='btn btn-primary' type="submit">
                update
              </button>            
            :
              <button className='btn btn-primary' type="submit">
                post
              </button>

          }
      </form>

      {/* filter */}
      <div className="container bg-info mt-2 p-2 rounded">
        Filter
      <div className="container d-flex flex-row">
        <div className="">
          <div className={`btn ${sortBy=="name"? "btn-primary":"btn-secondary"} ms-1`} onClick={()=>setSortBy("name")}>name</div>
          <div className={`btn ${sortBy=="stock"? "btn-primary":"btn-secondary"} ms-1`} onClick={()=>setSortBy("stock")}>stock</div>
          <div className={`btn ${sortBy=="price"? "btn-primary":"btn-secondary"} ms-1`} onClick={()=>setSortBy("price")}>price</div>
        </div>
        <div className="ms-1 border-start border-dark">
          <div className={`btn ${sort=="asc"? "btn-primary":"btn-secondary"} ms-1`} onClick={()=>setSort("asc")}>asc</div>
          <div className={`btn ${sort=="desc"? "btn-primary":"btn-secondary"} ms-1`} onClick={()=>setSort("desc")}>desc</div>
        </div>
        <div className="search ms-2">
        <input type="text" className="form-control" value={inputData.search} name="search" onChange={handleChange} placeholder="search"/>
        </div>
      </div>
      </div>


      {/* get data */}
      <table className='table container'>
        <thead>
          <tr>
            <th>number</th>
            <th>nama</th>
            <th>stock</th>
            <th>harga</th>
            <th>photo</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item,index)=>(
            <tr key={index+1} className={`${item.id == selected ? "bg-info" : "bg-white"}`} onClick={item.id == selected ? ()=>setSelected(null) : ()=>
            (setSelected(item.id),editForm(item))
            }>
            <td>
              {index+1}
            </td>
            <td>
              {item.name}
            </td>
            <td>
              {item.stock}
            </td>
            <td>
              {item.price}
            </td>
            <td>
              <img src={item.photo} style={{width:'100px',height:'100px'}}/>
            </td>
          </tr>
          ))
          }
        </tbody>
      </table>

        {/* delete data */}
        {
          selected &&
          <div className="container">
            <button className='btn btn-danger mx-auto col-12' onClick={()=>deleteData()}>
              delete {temp?.name ?? ''}
          </button>
          </div>
        }

      {/* alert */}
      {messageShow && 
    <Alert title={message.title} text={message.text}  type={message.type} />
    }


    </div>
  )
}


















// import React,{useState,useEffect} from 'react'
// import axios from 'axios'
// import styles from'./Product.module.css'

// export default function Product() {
//   const [data,setData] = useState([])
  // const [photo,setPhoto] = useState(null)
  // const [inputData, setInputData] = useState({
  //   name: "",
  //   stock: "",
  //   price: "",
  //   category_id: "1"
  // })

  // let users = 'http://localhost:4000/product'
  // useEffect(()=>{
    

    //untuk get data
  //     axios.get(users)
  //     .then((res)=>{
  //         console.log("get data success")
  //         console.log(res.data.data)
  //         res.data && setData(res.data.data)
  //     })
  //     .catch((err)=>{
  //         console.log("get data fail")
  //         console.log(err)
  //     })
  // },[])
  // const postForm = (e) => {
  //   e.preventDefault()
  //   const formData = new FormData()
  //   formData.append("name",inputData.name)
  //   formData.append("stock",inputData.stock)
  //   formData.append("price",inputData.price)
  //   formData.append("category_id",inputData.category_id)
  //   formData.append("photo",photo)
  //   console.log(formData)
  //   axios.
  //   post('http://localhost:4000/product',formData,{
  //     headers: {
  //       "Content-Type": "multipart/form-data",
  //     },
  //   }).then((res)=>{
  //     console.log("input data success")
  //     console.log(res)
  //   }).catch((err)=>{
  //     console.log("input data fail")
  //     console.log(err)
  //   })
  // }
  // const handlePhoto = (e) => {
  //   setPhoto(e.target.files[0])
  //   console.log(e.target.files[0])
  // }

  // const handleChange = (e) =>{
  //   setInputData({
  //     ...inputData,
  //     [e.target.name]: e.target.value
  //   })
  //   console.log(data)
  // }

  // return (
  //   <div>
      // eslint-disable-next-line no-lone-blocks
      {/* post data
      <form onSubmit={postForm} className="container mt-3 p-2 border">
        <input type="text" value={inputData.name} name="name" onChange={handleChange} placeholder="nama"/>
        <input type="number" value={inputData.stock} name="stock" onChange={handleChange} placeholder="stock"/>
        <input type="number" value={inputData.price} name="price" onChange={handleChange} placeholder="price"/>
        <input type="file" name="photo" onChange={handlePhoto} placeholder="photo"/>

        <button className='btn btn-primary' type="submit">
          input
        </button>
      </form>  */}


      {/* get data */}
       // eslint-disable-next-line no-lone-blocks
       {/* <table className='table'>
         <thead>
           <tr>
             <th>id</th>
             <th>nama</th>
             <th>stock</th>
             <th>harga</th>
             <th>categorys_id</th>
             <th>photo</th>
           </tr>
         </thead>
         <tbody>
           {data.map((item,index)=>(
           <tr key={index+1}>
                <td>{index+1}</td>
                <td>{item.name}</td>
                <td>{item.stock}</td>
                <td>{item.price}</td>
                <td>{item.categorys_id}</td>
                <td><img src={item.photo} style={{width:'100px',height:'100px'}}/></td>
            </tr>
          ))
          }
        </tbody>
      </table>
    </div>
  )
} */}




