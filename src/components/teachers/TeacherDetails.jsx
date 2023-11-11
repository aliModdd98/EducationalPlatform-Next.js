import {  getTeacherById ,deleteTeacher } from '@/store/actions/teachers.action';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react'
import { Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import {AiFillDelete}from 'react-icons/ai'
import './TeachersStyle.css'
import {MdTipsAndUpdates} from 'react-icons/md'
import routes from '@/const/routes';
function TeacherDetails() {
    const router = useRouter();
  const dispatch = useDispatch();

  const selectedTeacher = useSelector((state) => state.teachers.selectedTeacher);
   console.log(selectedTeacher)
  useEffect(() => {
    console.log(router?.query?.id)
    if (router?.query?.id) {
     
      dispatch(getTeacherById(selectedTeacher?.id));
    }
  }, [router]);

  const handleDelete = () => {
    console.log(selectedTeacher?.id);
    dispatch(deleteTeacher(selectedTeacher?.id));
    alert('Teacher deleted successfully!');
    router.push(routes.teachers.get)  };
 
  return (

    <>    
<Card>
<Card.Img variant="top" src={selectedTeacher?.img} className='imageCard'/>
<Card.Body>
<Card.Title><h1>{selectedTeacher?.name}</h1></Card.Title>
  <Card.Text>
  {selectedTeacher?.desc}
  </Card.Text>
  <Card.Text><div className='infoTeacher'>{selectedTeacher?.classes} <span>{selectedTeacher?.subject}</span></div>  
 
      </Card.Text>
</Card.Body>
</Card>

{ (
        <div className="ADDING">
          <button className="add" onClick={ ()=>router.push(routes?.teachers.edit(selectedTeacher?.id))} >
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
</>
  )
}

export default TeacherDetails