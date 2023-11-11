import { getTeacherById, getTeachers } from '@/store/actions/teachers.action';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../loader';
import Header from '../Header/Header';
import { motion } from "framer-motion";
// import { Button, Card, Col, Row } from 'react-bootstrap';
import {FaArrowCircleDown} from 'react-icons/fa'
import {IoAddCircleSharp} from 'react-icons/io5'
import './TeachersStyle.css'
import { Button, Card, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRouter } from 'next/router';
import routes from '@/const/routes';
function AllTeachers({ teacherId }) {
    const dispatch = useDispatch();
    const teachers = useSelector((state) => state.teachers.data);
    

    const [showButton, setShowButton] = useState(false);
    const [showAll, setShowAll] = useState(false);
    // const visibleTeachers = showAll ? teachers : teachers.slice(0, 6);
    const isLoading = useSelector((state) => state.teachers.loading);
    const visibleTeachers = showAll ? teachers : (teachers ? teachers.slice(0, 6) : []);
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
        dispatch(getTeachers());
      }, []);
      const name = "Our Teachers";

      const router = useRouter();
      const handleButtonClick = (teacherId) => {
        dispatch(getTeacherById(teacherId));
        router.push(routes.teachers.getById(teacherId));
      };



      return (
    <div>
 {isLoading ? (
        <Loader />
      ) : (
        <>
        
        
          <Header />
          <div className="coursesPage">
            <div className="headerCourses">
         <h1> {name}</h1> 
                          </div>

          
            <Row xs={1} md={3} className="g-4">
      {visibleTeachers.map((e) => (
        <Col key={e.id}>
          <Card
           className='cardCourses'>
            <div className="aspect-ratio-wrapper">
              <Card.Img variant="top" src={e.img} className="aspect-ratio-img" />
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
          <button className="add" onClick={()=>router.push(routes.teachers.add)} >
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

export default AllTeachers