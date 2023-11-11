import routes from '@/const/routes';
import { getStudentById, updateStudent } from '@/store/actions/students.action';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

function EditingStudent() {
 
    const dispatch = useDispatch();
    const router = useRouter();
    const [name, setname] = useState("");
    const [desc, setdesc] = useState("");
    const [image, setimage] = useState("");
    const [classe, setclasse]=useState("");
    const selectedStudent = useSelector((state) => state.students.selectedStudent);
   
   
    
    useEffect(() => {
        if (router?.query?.id) {
          dispatch(getStudentById(selectedStudent?.id));
        }
      }, [router, dispatch]);

  useEffect(() => {
    if (selectedStudent) {
      setname(selectedStudent.name);
      setdesc(selectedStudent.desc);
      setimage(selectedStudent.image);
      setclasse(selectedStudent.class);
    }
  }, [selectedStudent]);
  


  const handleSubmit = () => {
   const StudentId=selectedStudent.id;
    const updatedStudent = {
      ...selectedStudent,
      name,
      desc,
      image,
      classe,
     
    };

    dispatch(updateStudent(StudentId, updatedStudent));
    window.alert('Done');
   
    router.push(routes.students.get);
  
   
  };

    return (
    <Container>
         <div className="m-5">
            <h1>Edite Student Information</h1>
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
        <Form.Label>About Student</Form.Label>
        <Form.Control
          value={desc}
          onChange={(e) => setdesc(e.target.value)}
          type="text"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Image URL of Student</Form.Label>
        <Form.Control
        value={image}
          onChange={(e) => setimage(e.target.value)}
          type="text"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Classe Of Student</Form.Label>
        <Form.Control
          value={classe}
          onChange={(e) => setclasse(e.target.value)}
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
          Edite Student 
        </Button>
      </div>
    </div>
    </Container>
  )
}

export default EditingStudent