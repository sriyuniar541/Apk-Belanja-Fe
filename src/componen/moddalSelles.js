import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';



function ModalProps(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Detail Order
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title><i>Detail Order - {props.idBarang}</i></Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
                <Form.Label>Name -Category-  -qty-  -Price- -Total</Form.Label>
                
                <div className='border p-3'>
                      {props.name} {props.category} {props.qty} {props.price} {props.total}
                </div>
                <div className='border p-3 mt-3'>
                      {props.total}
                </div>
                <div className='border p-3 mt-3'>
                      {props.status}
                </div>
                <div className='border p-3 mt-3'>
                      {props.order} -Surabaya
                </div>
              </Form.Group>
            </Form>
          </Modal.Body>
        </Modal>
      </>
    );
}

export default ModalProps;