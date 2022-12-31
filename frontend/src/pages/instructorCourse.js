import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import InstructorNavbar from "../components/instructorNavbar";
import YouTube from 'react-youtube';

import ReportProblem from "../components/reportProblem";

import Ratio from "react-bootstrap/Ratio";
import Row from "react-bootstrap/Row";
import Button from 'react-bootstrap/Button';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';

import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';

import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';



import {
  MDBBtn, MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,

} from 'mdb-react-ui-kit';


import {
  MDBCardTitle,
  MDBCardSubTitle
} from 'mdb-react-ui-kit';



import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane
} from 'mdb-react-ui-kit';




import { BsFillTrashFill, BsFillExclamationCircleFill, BsCheckAll, BsFillFileEarmarkCheckFill, BsDownload, BsPencilSquare, BsFillPencilFill, BsFillPlayCircleFill, BsPencil, BsNewspaper, BsFillPersonCheckFill, BsStar, BsChatLeftDots, BsCheck2Circle } from "react-icons/bs";

import Badge from 'react-bootstrap/Badge';

function getColor(option, answer) {
  if (option == answer)
    return 'green';
  else
    return 'black';
}

function getWeight(option, answer) {
  if (option == answer)
    return 'bold';
  else
    return 'normal';
}

function getId(url) {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);

  return match && match[2].length === 11 ? match[2] : null;
}


const InstructorCourse = () => {

  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  const [course, setCourse] = useState(null);
  const [videoURL, setVideoURL] = useState('');

  const navigate = useNavigate();

  const [basicActive, setBasicActive] = useState('tab1');

  const handleBasicClick = (value) => {
    if (value === basicActive) {
      return;
    }
    setBasicActive(value);
  };

  useEffect(() => {
    Promise.all([
      fetch("/api/courses/openMyCourse/?id=" + id)
    ]).then(([resCourse]) =>
      Promise.all([resCourse.json()])
    ).then(([dataCourse]) => {
      setCourse(dataCourse);
    });
  }, []);


  const opts = {
    height: '100%',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };



  return (
    <div className="">
      <InstructorNavbar />
      {course && (
        <div>
          <MDBRow className='g-0'>

            {/* Video and tabs */}
            <MDBCol md='9'>
              <div style={{ width: '100%', height: "auto", position: "center" }} >
                <Ratio autoplay aspectRatio={"21x9"} opts={opts}>
                  <YouTube videoId={getId(videoURL)} opts={opts} />
                </Ratio>
              </div>

              <MDBTabs className='mb-3'>
                <MDBTabsItem>
                  <MDBTabsLink onClick={() => handleBasicClick('tab1')} active={basicActive === 'tab1'}>
                    <BsNewspaper /> &nbsp; Overview
                  </MDBTabsLink>
                </MDBTabsItem>
                <MDBTabsItem>
                  <MDBTabsLink onClick={() => handleBasicClick('tab2')} active={basicActive === 'tab2'}>
                    <BsCheck2Circle /> &nbsp; Exercises
                  </MDBTabsLink>
                </MDBTabsItem>
                <MDBTabsItem>
                  <MDBTabsLink onClick={() => handleBasicClick('tab3')} active={basicActive === 'tab3'}>
                    <BsStar /> &nbsp; Ratings and Reviews
                  </MDBTabsLink>
                </MDBTabsItem>

                <MDBTabsItem>
                  <MDBTabsLink onClick={() => handleBasicClick('tab4')} active={basicActive === 'tab4'}>
                    <BsChatLeftDots /> &nbsp; Report a Problem
                  </MDBTabsLink>
                </MDBTabsItem>
              </MDBTabs>

              <MDBTabsContent style={{ paddingBottom: '30px' }}>
                {/* Overview */}
                <MDBTabsPane style={{ paddingLeft: '10px' }} show={basicActive === 'tab1'}>
                  <MDBCardTitle class="fs-1"> {course.title} </MDBCardTitle>
                  <MDBCardText>
                    < p style={{ display: 'flex', flexDirection: 'row' }}>
                      <p> <strong> Course Rating: {"  "}   </strong><em> {course.overallRating}</em> </p>
                      <Rating name="courserating" defaultValue={course.overallRating} precision={0.5} readOnly />
                    </p>

                    < p style={{ display: 'flex', flexDirection: 'row' }}>
                      <strong> Number of enrolled trainees: </strong> &nbsp; <Badge pill bg="success"> {course.numOfEnrolledTrainees} </Badge>
                    </p>
                    <em> <strong> Subject: </strong></em> {course.subject}
                    <br />
                    <em> <strong> Summary: </strong></em> {course.summary}
                    <br />
                    <em> <strong> Total hours: </strong></em> {course.hours}
                    <br />
                    <br />

                  </MDBCardText>

                </MDBTabsPane>

                {/* Exercises */}
                <MDBTabsPane show={basicActive === 'tab2'}>
                  <ListGroup as="ol" numbered>
                    {course && course.exercises && course.exercises.map((exercise, index) => (
                      <ListGroup.Item as="li" style={{ fontSize: '22px' }}> <strong>{exercise.question}</strong>
                        <div >

                          <div style={{ padding: '5px', color: getColor(exercise.options[0], exercise.answer), fontWeight: getWeight(exercise.options[0], exercise.answer) }}
                          > - {exercise.options[0]}</div>


                          <div style={{ padding: '5px', color: getColor(exercise.options[1], exercise.answer), fontWeight: getWeight(exercise.options[1], exercise.answer) }}
                          > - {exercise.options[1]}</div>


                          <div style={{ padding: '5px', color: getColor(exercise.options[2], exercise.answer), fontWeight: getWeight(exercise.options[2], exercise.answer) }}
                          > - {exercise.options[2]}</div>


                          <div style={{ padding: '5px', color: getColor(exercise.options[3], exercise.answer), fontWeight: getWeight(exercise.options[3], exercise.answer) }}
                          > - {exercise.options[3]}</div>


                        </div>
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                </MDBTabsPane>


                {/* Ratings and reviews*/}
                <MDBTabsPane show={basicActive === 'tab3'}>
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
                            <MDBTypography tag="h6" style={{ margin: '2px', fontSize: 30 }}> Overall Course Rating: {course && course.overallRating}
                              <Rating name="courserating" style={{ paddingTop: '10px' }} defaultValue={course && course.overallRating} precision={0.5} readOnly /> </MDBTypography>
                            <br />
                            <br />
                            <MDBTypography tag="h6" style={{ fontSize: 25 }}>Individual Ratings</MDBTypography>
                            <hr className="mt-0 mb-4" />
                            <div style={{ display: "flex", flexWrap: "wrap" }}>
                              {course &&
                                course.ratings.map((rating) => (
                                  <Card style={{ fontSize: '20px', width: '32%', height: '150px', margin: '1px' }}>
                                    <Card.Body>
                                      <Stack direction="column" justifyContent="center" alignItems="center" >
                                        <MDBCardText style={{ marginLeft: '5px', fontSize: 30 }} > <em>  {rating.rating}</em></MDBCardText>
                                        <Rating name="courserating" style={{ paddingTop: '10px' }} defaultValue={rating.rating} precision={0.5} readOnly />
                                      </Stack>
                                    </Card.Body>
                                  </Card>
                                ))}
                            </div>
                          </Tab.Pane>

                          <Tab.Pane eventKey="second">






                            {course &&
                              course.reviews.map((review) => (


                                <Card style={{ fontSize: '20px', width: '99%', margin: '1px' }}>
                                  <Card.Body>
                                    <Stack direction="row" justifyContent="center" alignItems="center" >

                                      <MDBTypography tag="h6" style={{ margin: '2px', fontSize: 30 }}> "{review.content}"</MDBTypography>
                                      <MDBCardText className="text-muted" style={{ marginLeft: '5px', fontSize: 30 }} > <em>  - {review.traineeName} </em></MDBCardText>
                                    </Stack>
                                  </Card.Body>
                                </Card>



                              ))}

                          </Tab.Pane>
                        </Tab.Content>
                      </Col>
                    </Row>
                  </Tab.Container>
                </MDBTabsPane>



                {/* Report a problem*/}
                <MDBTabsPane show={basicActive === 'tab4'}>
                  <p style={{ padding: '20px' }}>
                    <ReportProblem key={id} cid={id} />
                  </p>


                </MDBTabsPane>
              </MDBTabsContent>
            </MDBCol>




            {/* Subtitles column */}
            <MDBCol md='3'>

              {/* Subtitles */}
              <ListGroup as="ol" numbered>
                {course.subtitles &&
                  course.subtitles.map((subtitle) => (
                    <ListGroup.Item action as="li" className="d-flex justify-content-between align-items-start"
                      onClick={() => { setVideoURL(subtitle.videoLink); }}>


                      <div className="ms-2 me-auto">
                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                          <div className="fw-bold"> <BsFillPlayCircleFill /> {subtitle.title}</div>
                          <MDBCardText className="text-muted" style={{ fontSize: '12px', padding: '3px' }}><em>{subtitle.totalHours} hrs</em></MDBCardText>
                        </div>
                        {subtitle.shortDescription}
                      </div>


                    </ListGroup.Item>
                  ))}
              </ListGroup>


            </MDBCol>
          </MDBRow>
          <Row>






          </Row>
        </div>
      )}
    </div>
  );
};

export default InstructorCourse;