//import statements
import { Carousel } from "bootstrap";
import { useEffect, useState } from "react";
import InstructorNavbar from "../components/instructorNavbar";

import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';

import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';




const CourseRatingsAndReviews = () => {
  const params = new URLSearchParams(window.location.search);
  const courseId = params.get("id");

  const [course, setCourse] = useState(null);

  useEffect(() => {
    const fetchCourse = async () => {
      const response = await fetch("/api/courses/openMyCourse/?id=" + courseId);
      const json = await response.json();
      if (response.ok) {
        setCourse(json);
        console.log(json);
        console.log(course);
      }
    };
    fetchCourse();
  }, []);

  {
    return (










      <div className="">
        <InstructorNavbar />
        <h1 style={{ fontSize: 60, margin: 10 }}> {course && course.title}</h1>


        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="first">Ratings</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Reviews</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="first">


                  <MDBTypography tag="h6" style={{ margin: '2px', fontSize: 30 }}> Overall Course Rating: {course && course.overallRating}</MDBTypography>

                  {course &&
                    course.ratings.map((rating) => (

                      <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <MDBTypography tag="h6" style={{ margin: '7px', fontSize: 20 }}>A trainee gave your course the following rating: </MDBTypography>
                        <MDBCardText style={{ marginLeft: '5px', fontSize: 30 }} > <em>  {rating.rating}</em></MDBCardText>
                      </div>

                    ))}


                </Tab.Pane>
                <Tab.Pane eventKey="second">






                  {course &&
                    course.reviews.map((review) => (

                      <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <MDBTypography tag="h6" style={{ margin: '2px', fontSize: 30 }}> "{review.content}"</MDBTypography>
                        <MDBCardText className="text-muted" style={{ marginLeft: '5px', fontSize: 30 }} > <em>  - {review.traineeName} </em></MDBCardText>
                      </div>



                    ))}

                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>

















        {/* 
        



        <p> course, ID: {courseId}</p>

        <h2> ratings </h2>

        {course &&
          course.ratings.map((rating) => (

              <h2>rating: {rating.rating}</h2>

          ))}

        <h2> reviews </h2>

        {course &&
          course.reviews.map((review) => (
            <div key={course._id} class="myDiv">
              <h2>"{review.content}" - {review.traineeName}</h2>
            </div>
          ))}

        */}
      </div>
    );
  }
};

export default CourseRatingsAndReviews;
