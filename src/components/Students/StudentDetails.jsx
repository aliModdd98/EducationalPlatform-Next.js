import routes from '@/const/routes';
import { deleteStudent, getStudentById } from '@/store/actions/students.action';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react'
import { Card, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import {MdTipsAndUpdates} from 'react-icons/md'
import {AiFillDelete} from 'react-icons/ai'
function StudentDetails() {
    const router = useRouter();
    const dispatch = useDispatch();
  
    const selectedStudent = useSelector((state) => state.students.selectedStudent);
     console.log(selectedStudent)
    useEffect(() => {
      console.log(router?.query?.id)
      if (router?.query?.id) {
        dispatch(getStudentById(selectedStudent.id));
      }
    }, [router]);
  
    const handleDelete = () => {
      console.log(selectedStudent?.id);
      dispatch(deleteStudent(selectedStudent?.id)); 
      window.alert('Student has been deleted ');
   
      router.push(routes.students.get);
    
     
    
    };
   
 
    return (
    <Container>
     <Card>
<Card.Img variant="top" src={selectedStudent?.image} className='imageCard'/>
<Card.Body>
<Card.Title><h1>{selectedStudent?.name}</h1></Card.Title>
  <Card.Text>
  {selectedStudent?.desc}
  </Card.Text>
  <Card.Text>{selectedStudent?.class}  
 
      </Card.Text>
</Card.Body>
</Card>

{ (
        <div className="ADDING">
          <button className="add" onClick={ ()=>router.push(routes?.students.edit(selectedStudent?.id))} >
            <MdTipsAndUpdates className="icon" size={48} />
          </button>
        </div>
      )}

{ (
        <div className="deleting">
          <button className="delete" onClick={ ()=>(
              handleDelete()
          )} >
            <AiFillDelete className="icon" size={48}
           />
          </button>
        </div>
      )}   
    </Container>
  )
}

export default StudentDetails