import routes from '@/const/routes';
import { getById } from '@/store/actions/courses.action';
import {  updateTeacher } from '@/store/actions/teachers.action';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
function EditingTeacher() {
 
 
    const dispatch = useDispatch();
    const router = useRouter();
    const [name, setname] = useState("");
    const [desc, setdesc] = useState("");
    const [img, setimg] = useState("");
    const [classes, setclasses] = useState("");
    const [subject, setsubject] = useState("");
   
    const selectedTeacher = useSelector((state) => state.teachers.selectedTeacher);
   
   
    
    useEffect(() => {
        if (router?.query?.id) {
          dispatch(getById(router.query.id));
        }
      }, [router, dispatch]);

  useEffect(() => {
    if (selectedTeacher) {
      setname(selectedTeacher.name);
      setdesc(selectedTeacher.desc);
      setimg(selectedTeacher.img);
      setclasses(selectedTeacher.classes);
      setsubject(selectedTeacher.subject);
    }
  }, [selectedTeacher]);
  


  const handleSubmit = () => {
   const teacherId=selectedTeacher.id;
    const updatedTeacher = {
      ...selectedTeacher,
      name,
      desc,
      img,
      classes,
      subject,
    };

    dispatch(updateTeacher(teacherId, updatedTeacher));
    window.alert('Done ...');
   
    router.push(routes.teachers.get);
  
   
  };

  // if (!selectedTeacher) {
  //   return <div>Loading...</div>;
  // }
    return (
        <div className="m-5">
            <h1>Edite Teacher Information</h1>
            <hr />
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control
          value={name}
          onChange={(e) => setname(e.target.value)}
          type="text"
          
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>About Teacher</Form.Label>
        <Form.Control
          value={desc}
          onChange={(e) => setdesc(e.target.value)}
          type="text"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Image URL of Teacher</Form.Label>
        <Form.Control
        value={img}
          onChange={(e) => setimg(e.target.value)}
          type="text"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Classes Of Teacher</Form.Label>
        <Form.Control
          value={classes}
          onChange={(e) => setclasses(e.target.value)}
          type="text"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Subject </Form.Label>
        <Form.Control
          value={subject}
          onChange={(e) => setsubject(e.target.value)}
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
          Submit
        </Button>
      </div>
    </div>
  )
}

export default EditingTeacher