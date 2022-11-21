
//import SellingProduct from "../pages/sellingProduct";
//import SideBar from "../componen/sideBar";
//import SideBarProduct from "../componen/sideBarProduct";
import React,{useState,useEffect} from 'react'
import axios from 'axios' //untuk interaksi dengan database
// import styles from'./Product.module.css'
import Alert from "./../componen/Alert";
import NavbarBaru from './../componen/navbarBaru'


export default function About() {
             
  let urlGet = process.env.REACT_APP_URL_GET

  const [data,setData] = useState([])
  const [message,setMessage]  = useState({
    title: "",
    text: "",
    type: "success"
  })
  const [messageShow,setMessageShow]  = useState(true)

  
  const [selected,setSelected] = useState(null)
  const [inputData, setInputData] = useState({
    name: "",
    stock: "",
    price: "",
    categorys_id: 1,
    search: ""
  })





  const messageTime = () =>{
    setTimeout(()=>setMessageShow(false),3000)
  }
  useEffect(()=>{
    console.log("checked")
    getData()
  },[inputData.search])
  useEffect(()=>{
    getData()
  },[])

   
 
  console.log(urlGet)
  let users = `${urlGet}search=${inputData.search}`
  const getData = ()=> {
    let token = localStorage.getItem('token')
    console.log('my token')

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
      
      //messageTime()
    })
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

    <NavbarBaru/>
    


      {/* filter */}
      <div className="container bg-info mt-2 p-2 rounded">
        Filter
      <div className="container d-flex flex-row">
        
        
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
            (setSelected(item.id))
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
              <img src={item.photo} style={{width:'100px',height:'100px'}} alt=''/>
            </td>
          </tr> 
          ))
          }
        </tbody>
      </table>


      {/* alert */}
      {messageShow && 
    <Alert title={message.title} text={message.text}  type={message.type} />
    }


    </div>
  )
}

