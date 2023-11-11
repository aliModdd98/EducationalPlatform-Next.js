import routes from '@/const/routes';
import { AddStudent } from '@/store/actions/students.action';
import { useRouter } from 'next/router';
import React, { useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

function AddingStudent() {
    const dispatch = useDispatch();
    const student = useSelector((state) => state.addStudent); 
    const students = useSelector((state) => state.students.data);
    
const router =useRouter();
    const [name, setName] = useState('');
    const [image, setimage] = useState('');
     const [desc, setDesc] = useState('');
    const [classes, setClasses] = useState('');
   
   
    const handleSubmit = (event) => {
        console.log("handleSubmit called");
  event.preventDefault();
    
      const id = students.length + 1; 
      const objectData = {
        id,
        name,
        image,
        desc,
        classes,
      };
  
      dispatch(AddStudent(objectData));
     
      setName('');
      setimage('');
      setDesc('');
      setClasses('');
      window.alert('A new Student has been added !');
   
      router.push(routes.students.get);
    
     
    };
  

  
    return (
    <Container>
<div className="m-5">
    <h1>Add New Student Information</h1>
    <hr />
<Form.Group className="mb-3" controlId="formBasicEmail" onSubmit={handleSubmit}>
<Form.Label>Name</Form.Label>
<Form.Control
  value={name}
  onChange={(e) => setName(e.target.value)}
  type="text"
  placeholder="Enter your name"
/>
</Form.Group>
<Form.Group className="mb-3" controlId="formBasicEmail">
<Form.Label>About Student</Form.Label>
<Form.Control
  value={desc}
  onChange={(e) => setDesc(e.target.value)}
  type="text"
  placeholder="Enter Profile about Teacher"
/>
</Form.Group>
<Form.Group className="mb-3" controlId="formBasicEmail">
<Form.Label>Image URL of Student</Form.Label>
<Form.Control
value={image}
  onChange={(e) => setimage(e.target.value)}
  type="text"
  placeholder="Enter Image Url"
/>
</Form.Group>
<Form.Group className="mb-3" controlId="formBasicEmail">
<Form.Label>Classes Of Student</Form.Label>
<Form.Control
  value={classes}
  onChange={(e) => setClasses(e.target.value)}
  type="text"
  placeholder="Enter Classes "
/>
</Form.Group>


<div className="d-grid">
<Button
  variant="primary"
  type="submit"
  onClick={(e) => {
    e.preventDefault();
    handleSubmit(e);
  }}
>
  Add a Student
</Button>
</div>
</div>
    </Container>
  )
}

export default AddingStudent