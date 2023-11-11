import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { AddTeacher } from '@/store/actions/teachers.action';
import { useRouter } from 'next/router';
import routes from '@/const/routes';
function AddingTeacher() {
 
    const dispatch = useDispatch();
    const teacher = useSelector((state) => state.addTeacher); 
    const teachers = useSelector((state) => state.teachers.data);
    

    const [name, setName] = useState('');
    const [img, setImg] = useState('');
    const [subject, setSubject] = useState('');
    const [desc, setDesc] = useState('');
    const [classes, setClasses] = useState('');
   
   const router=useRouter()
    const handleSubmit = (event) => {
        console.log("handleSubmit called");
  event.preventDefault();
    
      const id = teachers.length + 1; 
      const objectData = {
        id,
        name,
        img,
        subject,
        desc,
        classes,
      };
  
      dispatch(AddTeacher(objectData));
      alert('Teacher deleted successfully!');
      router.push(routes.teachers.get)
      setName('');
      setImg('');
      setSubject('');
      setDesc('');
      setClasses('');
    };
  


    return (
    <div className="m-5">
    <h1>Add New Teacher Information</h1>
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
<Form.Label>About Teacher</Form.Label>
<Form.Control
  value={desc}
  onChange={(e) => setDesc(e.target.value)}
  type="text"
  placeholder="Enter Profile about Teacher"
/>
</Form.Group>
<Form.Group className="mb-3" controlId="formBasicEmail">
<Form.Label>Image URL of Teacher</Form.Label>
<Form.Control
value={img}
  onChange={(e) => setImg(e.target.value)}
  type="text"
  placeholder="Enter Image Url"
/>
</Form.Group>
<Form.Group className="mb-3" controlId="formBasicEmail">
<Form.Label>Classes Of Teacher</Form.Label>
<Form.Control
  value={classes}
  onChange={(e) => setClasses(e.target.value)}
  type="text"
  placeholder="Enter Classes "
/>
</Form.Group>
<Form.Group className="mb-3" controlId="formBasicEmail">
<Form.Label>Subject </Form.Label>
<Form.Control
  value={subject}
  onChange={(e) => setSubject(e.target.value)}
  type="text"
  placeholder="Enter Subject"
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
  Add a Teacher
</Button>
</div>
</div>
  )
}

export default AddingTeacher