import Form from 'react-bootstrap/Form';
import React,{useState,useEffect,Component} from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button';





export default class insertProduct extends Component {
  render() {
    return (
      <div>
         <Form>
            <Form.Control type="name" placeholder="name" />
            <Form.Control type="stock" placeholder="stock" />
            <Form.Control type="price" placeholder=" price" />
            <Form.Control type="category" placeholder="category" />
            <Button variant="primary" type="submit">Submit</Button>
        </Form>
        
      </div>
    )
  }
}



   
 





