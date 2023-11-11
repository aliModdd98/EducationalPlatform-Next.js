import { AddCourse } from '@/store/actions/courses.action';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRouter } from 'next/router';
import routes from '@/const/routes';
const AddingCourse = () => {
    
  const dispatch = useDispatch();
    const courses = useSelector((state) => state.courses.data);
    const router = useRouter();
    const [name, setName] = useState('');
    const [img, setImg] = useState('');
    const [rating, setrating] = useState('');
   
   
    const handleSubmit = (event) => {
        console.log("handleSubmit called");
  event.preventDefault();
    
      const id = courses.length + 1; 
      const objectData = {
        id,
        name,
        img,
        rating,

      };
  
      dispatch(AddCourse(objectData));
     
      setName('');
      setImg('');
      setrating('');


      window.alert('A new Course has beed Added ');
   
    router.push(routes.courses.get);
    };
  
   
  return (
    <div className="m-5">
    <h1>Add New Course </h1>
    <hr />
<Form.Group className="mb-3" controlId="formBasicEmail" onSubmit={handleSubmit}>
<Form.Label>Name of Course</Form.Label>
<Form.Control
  value={name}
  onChange={(e) => setName(e.target.value)}
  type="text"
  placeholder="Enter your Cousre Name"
/>
</Form.Group>
<Form.Group className="mb-3" controlId="formBasicEmail">
<Form.Label>Rating Course</Form.Label>
<Form.Control
  value={rating}
  onChange={(e) => setrating(e.target.value)}
  type="text"
  placeholder="Enter Rating "
/>
</Form.Group>
<Form.Group className="mb-3" controlId="formBasicEmail">
<Form.Label>Image URL of Course </Form.Label>
<Form.Control
value={img}
  onChange={(e) => setImg(e.target.value)}
  type="text"
  placeholder="Enter Image Url"
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
  Add a Course 
</Button>
</div>
</div>
  );
};

export default AddingCourse;
