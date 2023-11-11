
import {Button} from 'react-bootstrap';
import {Card} from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  getCourseById, getCourses } from '@/store/actions/courses.action';
import { motion } from "framer-motion";
import { FaArrowCircleDown } from 'react-icons/fa';
import { AiFillStar } from 'react-icons/ai';
import Loader from '@/components/loader.jsx';
import Header from '@/components/Header/Header';
import { Col, Row } from 'react-bootstrap';
import "./CoursesStyle.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRouter } from 'next/router';
import {IoAddCircleSharp} from 'react-icons/io5'
import routes from '@/const/routes';
import './CoursesStyle.css'
function Courses() {
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.courses.data);
  const isLoading = useSelector((state) => state.courses.loading);
  useEffect(() => {
    dispatch(getCourses());
  }, []);
  const [showButton, setShowButton] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const visibleCourses = showAll ? courses : courses.slice(0, 6);
 
  const handleClick = () => {
    setShowAll(true);
  };

  const name = "Our Courses";
  useEffect(() => {
    dispatch(getCourses());
  }, []);
 

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 600) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const router = useRouter();

  const handleButtonClick = (courseId) => {
    dispatch(getCourseById(courseId));
    router.push(routes.courses.getById(courseId));
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
        
        
          <Header />
          <div className="coursesPage">
            <div className="headerCourses">
              <motion.h1 className="name">
                {name.split("").map((letter, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2, delay: index * 0.4 }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </motion.h1>
              <p>Find here a collection of outstanding educational courses that you can benefit from.</p>
            </div>

          
            <Row xs={1} md={3} className="g-4">
      {visibleCourses.map((e) => (
        <Col key={e.id}>
          <Card className='cardCourses'>
            <div className="aspect-ratio-wrapper">
              <Card.Img variant="top" src={e.img} className="aspect-ratio-img" />
            </div>
            <Card.Body>
              <Card.Title>{e.name}</Card.Title>
              <Card.Text>{e.rating}</Card.Text>
              <Button variant="primary" onClick={() => {
                   handleButtonClick(e.id)
                }}>
                View More
              </Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>



    {!showAll && showButton && (
        <div className="buttonContainer">
          <button className="more" onClick={handleClick}>
            <FaArrowCircleDown className="icon" size={48} />
          </button>
        </div>
      )}
   { showButton && (
        <div className="ADDING">
          <button className="add" onClick={()=>router.push(routes.courses.add)} >
            <IoAddCircleSharp className="icon" size={48} />
          </button>
        </div>
      )}
          </div>
        </>
      )}
    </>
  );
}

export default Courses;