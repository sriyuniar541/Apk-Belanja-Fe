import Form from 'react-bootstrap/Form';


function FormK (props) {
  return (
    <div className='d-flex justify-content-center'>
        <Form className=''>
            <Form.Control style={{ width:'400px',height:'48px',borderRadius:'4px',marginBottom:'10px'}} type={props.type} placeholder={props.placeholder} />
        </Form>
    </div>
  );
}

export default FormK;

//untuk pemanggilan
//import FormK from './form';










