import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Alert from "../../componen/Alert";
import NavbarSebelumLogin from '../../componen/navbar2';
import SideBar from "../../componen/sideBar";
import { Link } from 'react-router-dom';
import { RiDeleteBinLine } from "react-icons/ri";
import { TbEdit } from "react-icons/tb";


export default function Product() {
  let urlGet = process.env.REACT_APP_URL_GET
  let token = localStorage.getItem('token')
  const [data, setData] = useState([])
  const [photo, setPhoto] = useState(null)
  const [message, setMessage] = useState({
    title: "",
    text: "",
    type: "success"
  })
  const [messageShow, setMessageShow] = useState(true)
  const [inputData, setInputData] = useState({
    name: "",
    stock: "",
    price: "",
    categorys_id: 1,
    search: ""
  })
  const [sortBy, setSortBy] = useState("name")
  const [sort, setSort] = useState("asc")
  const [selected, setSelected] = useState(null)
  const [onedit, setOnedit] = useState(false)
  const [temp, setTemp] = useState(null)
  const [page, setPage] = useState(1)

  const deleteData = (id) => {
    axios.delete(`${urlGet}/${id}`)
      .then((res) => {
        console.log("delete data success")
        console.log(res)
        setMessageShow(true)
        setMessage({ 
          title: "success", 
          text: "delete data success", 
          type: "success" 
        })
        messageTime()
        getData()
      })
      .catch((err) => {
        alert('delete fail', err)
        console.log("delete data fail")
        console.log(err)
        setMessageShow(true)
        setMessage({ 
          title: "fail", 
          text: "delete data fail", 
          type: "danger" 
        })
        messageTime()
      })
  }


  useEffect(() => {
    selected ? setOnedit(true) : setOnedit(false)
    !selected && setInputData({
      ...inputData,
      name: "",
      stock: "",
      price: "",
    })
    !selected && setPhoto(null)
  }, [selected])

  const messageTime = () => {
    setTimeout(() => setMessageShow(false), 3000)
  }
  useEffect(() => {
    console.log("checked", sortBy)
    getData()
  }, [sortBy, sort, inputData.search])
  useEffect(() => {
    getData()
  }, [page])



  console.log(urlGet)
  let users = process.env.REACT_APP_URL_BE + `/product/user?sortby=${sortBy}&sort=${sort}&search=${inputData.search}&limit=3&page=${page}`
  const getData = () => {
    let token = localStorage.getItem('token')
    console.log('my token')

    axios.get(users, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    })
      .then((res) => {
        console.log("get data success")
        console.log(res.data.data)
        res.data && setData(res.data.data)
        !selected && setMessageShow(true)
        !selected && setMessage({ 
          title: "success", 
          text: "get data success", 
          type: "success" 
        })
        !selected && messageTime()
        setSelected(null)
      })
      .catch((err) => {
        console.log("get data fail")
        console.log(err)
        setData([])
        setMessageShow(true)
        setMessage({ 
          title: "fail", 
          text: "get data fail", 
          type: "danger" 
        })
        //messageTime()
      })
  }

  const handleChange = (e) => {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value
    })
    console.log(data)
  }

  const next = () => {
    setPage(page + 1)
  }

  const back = () => {
    if (page === 0) {
      setPage(page = 1)
    }
    else {
      setPage(page - 1)
    }
  }

  const updateData = (id) => {
    axios.put(process.env.REACT_APP_URL_BE + `/product/active/${id}`, {}, {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then((res) => {
        alert(" status active")
        console.log(" status delivery")
        getData()

      })
      .catch((err) => {
        alert("change fail, please login lagi gaiss")
        console.log("change fail, please login lagi gaiss")
        console.log(err)
      })
  }

  const notActive = (id) => {
    axios.put(process.env.REACT_APP_URL_BE + `/product/notActive/${id}`, {}, {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then((res) => {
        alert(" status not active")
        getData()

      })
      .catch((err) => {
        alert("change fail, please login lagi gaiss")
        console.log("change fail, please login lagi gaiss")
        console.log(err)
      })
  }

  return (
    <div>
      <NavbarSebelumLogin />
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-lg-4'>
            <SideBar />
          </div>

          <div className='col-lg-8 p-5' 
            style={{ background: '#F5F5F5' }}
          >
            <div className='mx-5 bg-white pt-2 pb-4 px-5'>
              {/* filter */}
              <div className="container mt-2 p-2 rounded " >
                <div className='d-flex justify-content-between'>
                  <h5 className='py-4'>My Products</h5>
                  <div className='py-4'>
                    <Link to='/Editcategory'>
                      <button 
                        className='btn btn-warning text-white mx-2 '>
                        Category
                      </button>
                    </Link>
                    <Link to='/SellingProduct'>
                      <button className='btn btn-warning text-white'>
                        Add Products
                      </button>
                    </Link>
                  </div>
                </div>

                <div className="container d-flex flex-row">
                  <div className="">
                    <div 
                      className={`btn ${sortBy == "name" ? "btn-primary" : "btn-secondary"} `} 
                      onClick={() => setSortBy("name")}>
                      name
                    </div>
                    <div 
                      className={`btn ${sortBy == "stock" ? "btn-primary" : "btn-secondary"} ms-1`} 
                      onClick={() => setSortBy("stock")}>
                      stock
                    </div>
                    <div 
                      className={`btn ${sortBy == "price" ? "btn-primary" : "btn-secondary"} ms-1`} 
                      onClick={() => setSortBy("price")}>
                      price
                    </div>
                  </div>
                  <div 
                    className="ms-1 border-start border-dark">
                    <div className={`btn ${sort == "asc" ? "btn-primary" : "btn-secondary"} ms-1`} 
                      onClick={() => setSort("asc")}>
                      asc
                    </div>
                    <div 
                      className={`btn ${sort == "desc" ? "btn-primary" : "btn-secondary"} ms-1`} 
                      onClick={() => setSort("desc")}>
                      desc
                    </div>
                  </div>
                  <div className="search ms-2">
                    <input 
                      type="text" 
                      className="form-control" 
                      value={inputData.search} 
                      name="search" 
                      onChange={handleChange} 
                      placeholder="search" 
                    />
                  </div>
                </div>
              </div>
              {/* get data */}
              <table className='table container mt-5'>
                <thead >
                  <tr>
                    <th>Name</th>
                    <th>Stock</th>
                    <th>Price</th>
                    <th>Category</th>
                    <th className='text-center'>Action</th>
                  </tr>
                </thead>
                <tbody className=''>
                  {data.map((item, index) => (
                    <tr key={index + 1} className={`${item.id}`}>
                      <td >
                        {item.name}
                      </td>
                      <td>
                        {item.stock}
                      </td>
                      <td>
                        {item.price}
                      </td>
                      <td>
                        {item.categorys}
                      </td>
                      <td className='justify-content-end'>
                        <Link to={`/EditProduct/${item.id}`}>
                          <TbEdit 
                            className='text-secondary' 
                            size={25}
                          />
                        </Link>
                        { }
                        <button 
                          className='btn btn-white text-white py-1' 
                          onClick={() => deleteData(item.id)}> 
                          <RiDeleteBinLine 
                            size={25}
                            className='text-secondary'
                          />
                        </button>
                        <button 
                          className='btn btn-primary text-white col-lg-4 py-1' 
                          onClick={() => updateData(item.id)}>
                          Active
                        </button>
                        <button 
                          className='btn btn-danger text-white py-1' 
                          onClick={() => notActive(item.id)}>
                          Not active
                        </button>
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
                  <button 
                    className='btn btn-danger mx-auto col-12' 
                    onClick={() => deleteData()}>
                    delete {temp?.name ?? ''}
                  </button>
                </div>
              }

              {/* pagination */}
              <div className='d-flex text-end mt-5'>
                <button 
                  className='btn btn-white border-secondary' 
                  onClick={next}>
                  Next
                </button>
                <button 
                  className='btn btn-white '>
                  {page}
                </button>
                <button 
                  className='btn btn-white border-secondary' 
                  onClick={back}>
                  Back
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* alert */}
      {messageShow &&
        <Alert title={message.title} text={message.text} type={message.type} />
      }
    </div>
  )
}















