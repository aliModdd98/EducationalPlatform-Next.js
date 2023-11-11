import routes from '@/const/routes';
import { getCourseById, updateCourse } from '@/store/actions/courses.action';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
function EditingCourse() {
 
    const dispatch = useDispatch();
    const router = useRouter();
    const [name, setname] = useState("");
    const [rating, setRating] = useState("");
    const [img, setimg] = useState("");
   
    const selectedCourse = useSelector((state) => state.courses.selectedCourse);
   
   
    
    useEffect(() => {
        if (router?.query?.id) {
          dispatch(getCourseById(router.query.id));
        }
      }, [router, dispatch]);

  useEffect(() => {
    if (selectedCourse) {
      setname(selectedCourse.name);
      setRating(selectedCourse.rating);
      setimg(selectedCourse.img);
        }
  }, [selectedCourse]);
  


  const handleSubmit = () => {
   const courseId=selectedCourse.id;
    const updatedCourse = {
      ...selectedCourse,
      name,
      rating,
      img,
     
    };

    dispatch(updateCourse(courseId, updatedCourse));
    window.alert('Course Has been Updated ...');
   
    router.push(routes.courses.get);
  
   
  };
    return (
        <div className="m-5">
 <h1>Edite Course Information</h1>
        <hr />
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Name of Course</Form.Label>
    <Form.Control
      value={name}
      onChange={(e) => setname(e.target.value)}
      type="text"
      
    />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Rating Course</Form.Label>
    <Form.Control
      value={rating}
      onChange={(e) => setRating(e.target.value)}
      type="text"
    />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Image URL of Course</Form.Label>
    <Form.Control
    value={img}
      onChange={(e) => setimg(e.target.value)}
      type="text"
    />
  </Form.Group>
  
  <div className="d-grid">
    <Button
      variant="primary"
      type="submit"
      onClick={(e) => {()=>
        e.preventDefault();
        handleSubmit();
      }}
    >
      Edite Course 
    </Button>
  </div>
</div>
  )
}

export default EditingCourse