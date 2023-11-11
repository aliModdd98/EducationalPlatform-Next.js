import routes from '@/const/routes';
import { deleteCourse, getCourseById } from '@/store/actions/courses.action';
import {MdTipsAndUpdates} from 'react-icons/md'
import {AiFillDelete} from 'react-icons/ai'
import { useRouter } from 'next/router';
import React, { useEffect } from 'react'
import { Button, Card, Col, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

function CourseDetails() {
  const router = useRouter();
  const dispatch = useDispatch();

  const selectedcourse = useSelector((state) => state.courses.selectedCourse);
   console.log(selectedcourse)
  useEffect(() => {
    console.log(router?.query?.id)
    if (router?.query?.id) {
      dispatch(getCourseById(selectedcourse.id));
    }
  }, [router]);

  const handleDelete = () => {
    console.log(selectedcourse?.id);
    dispatch(deleteCourse(selectedcourse?.id)); 
    window.alert('Student has been deleted ');
 
    router.push(routes.courses.get);
  
   
  
  };
    return (
      <Container>
      <Card>
 <Card.Img variant="top" src={selectedcourse?.img} className='imageCard'/>
 <Card.Body>
 <Card.Title><h1>{selectedcourse?.name}</h1></Card.Title>
  
   <Card.Text>{selectedcourse?.rating}  
  
       </Card.Text>
 </Card.Body>
 </Card>
 
 { (
         <div className="ADDING">
           <button className="add" onClick={ ()=>router.push(routes?.courses.edit(selectedcourse?.id))} >
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

export default CourseDetails