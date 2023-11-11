import routes from '@/const/routes';
import { getStudentById, getStudents } from '@/store/actions/students.action';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Header from '../Header/Header';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import {FaArrowCircleDown} from 'react-icons/fa'
import {IoAddCircleSharp} from 'react-icons/io5'
import 'bootstrap/dist/css/bootstrap.min.css';
import './StudentsStyle.css'
function AllStudents() {
 
    const dispatch = useDispatch();
    const students = useSelector((state) => state.students.data);
    

    const [showButton, setShowButton] = useState(false);
    const [showAll, setShowAll] = useState(false);
  const isLoading = useSelector((state) => state.students.loading);
    const visibleStudents = showAll ? students : (students ? students.slice(0, 6) : []);
    const handleClick = () => {
        setShowAll(true);
      };
      useEffect(() => {
        const handleScroll = () => {
          const scrollPosition = window.scrollY;
          if (scrollPosition > 600) {
            setShowButton(true);
          } else {
            setShowButton(false);
          }
        }; window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    useEffect(() => {
        dispatch(getStudents());
      }, []);
      const name = "Our Students";

      const router = useRouter();
      const handleButtonClick = (studentId) => {
        dispatch(getStudentById(studentId));
        router.push(routes.students.getById(studentId));
      };


    return (
        <div className='containerStudents'>
 
 {isLoading ? (
        <Loader />
      ) : (
        <>
        
        
          <Header />
          <div className="coursesPage">
            <div className="headerCourses">
         <h1> {name}</h1> 
                          </div>

      
            <Row xs={1} md={2} className="">
      {visibleStudents.map((e) => (
        <Col key={e.id}>
          <Card
           className='cardCourses'>
            <div className="aspect-ratio-wrapper">
              <Card.Img variant="top" src={e.image} className="aspect-ratio-img" />
            </div>
            <Card.Body>
              <Card.Title>{e.name}</Card.Title>
              <Card.Text>{e.desc}</Card.Text>
              <Button variant="primary" onClick={() => handleButtonClick(e.id)}>
                View More
              </Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
   



    {!showAll && showButton && (
        <div className="">
          <button className="more" onClick={handleClick}>
            <FaArrowCircleDown className="icon" size={48} />
          </button>
        </div>
      )}
       { showButton && (
        <div className="ADDING">
          <button className="add" onClick={()=>router.push(routes.students.add)} >
            <IoAddCircleSharp className="icon" size={48} />
          </button>
        </div>
      )}
          </div>
        </>
      )}
   

    </div>
  )
}

export default AllStudents