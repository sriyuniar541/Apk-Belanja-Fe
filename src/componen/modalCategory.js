import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { TbEdit } from "react-icons/tb";
import axios from 'axios'


function ModalCategory(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const messageTime = () => {
    setTimeout(() => handleClose(false), 1000)
  }
  const token = localStorage.getItem('token')
  const [categorys, setCategorys] = useState('')

  //edit
  const editForm = (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append("categorys", categorys)
    console.log(formData)
    axios.
      put(process.env.REACT_APP_URL_BE + `/categorys/${props.id}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      }).then((res) => {
        console.log("update data success")
        console.log(res)
        alert('update data success')
        props.addBagAll()
        messageTime()
      }).catch((err) => {
        console.log("insert data fail")
        console.log(err)
        alert('fail, please login again')
      })
  }


  return (
    <>
      <Button variant="white" onClick={handleShow}>
        <TbEdit className='text-secondary' />
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title><i>Edit Category</i></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='d-flex mb-4 col-12'>
            <Form.Control 
                placeholder={props.placeholder} 
                value={categorys} 
                onChange={(e) => setCategorys(e.target.value)} 
            />
            <button 
              className='btn btn-warning text-white ms-2' 
              onClick={editForm}>
              Edit 
            </button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalCategory;