import MyCoursesITraineeNav from "../components/myCoursesITraineeNav";


import { useEffect, useState } from "react";

import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';




    

const ITraineeProfile = () => {

 
    const [iTrainee, setITrainee] = useState(null);
    const [courses, setCourses] = useState(null);


    useEffect(() => {
        Promise.all([
          fetch("/api/itrainee/getITraineeInfo"),
          fetch("/api/itrainee/registeredcourses"),
        ]).then(([resITrainee, resCourses])=>
        Promise.all([resITrainee.json(),resCourses.json()])
        ).then(([dataITrainee, dataCourses]) =>
        {
            setITrainee(dataITrainee);
            setCourses(dataCourses);
        });
      }, []);

    
  return (
    <div>
      <MyCoursesITraineeNav/>


    
      
      

    <section  > {/*className="vh-100" */} {/* style={{ backgroundColor: '#f4f5f7' }} */}
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol > { /*lg="6" className="mb-4 mb-lg-0"*/ }
            <MDBCard className="mb-3" style={{ borderRadius: '.5rem' }}>
              <MDBRow className="g-0">
                <MDBCol md="3" className="gradient-custom text-center text-white"
                  style={{ borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem' }}>
                  <MDBCardImage src="profile.png"
                    alt="Avatar" className="my-5" style={{ width: '150px' }} fluid />

                </MDBCol>
                <MDBCol md="9">
                  <MDBCardBody className="p-4">
                    <MDBTypography tag="h6">My Info</MDBTypography>
                    <hr className="mt-0 mb-4" />
                    <MDBRow className="pt-1">
                      <MDBCol size="4" className="mb-3">
                        <MDBTypography tag="h6">Name</MDBTypography>
                        <MDBCardText className="text-muted">{iTrainee && iTrainee.name}</MDBCardText>
                      </MDBCol>
                      <MDBCol size="4" className="mb-3">
                        <MDBTypography tag="h6">Username</MDBTypography>
                        <MDBCardText className="text-muted">@{iTrainee && iTrainee.username}</MDBCardText>
                      </MDBCol>
                      <MDBCol size="4" className="mb-3">
                        <MDBTypography tag="h6">Email</MDBTypography>
                        <MDBCardText className="text-muted">{iTrainee && iTrainee.email}</MDBCardText>
                      </MDBCol>
                    </MDBRow>

                    <MDBTypography tag="h6">Courses</MDBTypography>
                    <hr className="mt-0 mb-4" />
                    <MDBRow className="pt-1">


                    {courses &&
          courses.map((course) => (
            <MDBCol size="10" className="mb-3">
                <div style={{display:'flex',flexDirection:'row'}}>
                <MDBTypography tag="h6" style={{margin:'2px'}}> - {course.title}</MDBTypography>
                <MDBCardText className="text-muted" style={{marginLeft:'5px'}} > <em> taught by {course.instructorData.name} </em></MDBCardText>
                </div>
          </MDBCol>
          ))}


                      

                    </MDBRow>
                  </MDBCardBody>
                </MDBCol>
              </MDBRow>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>










    </div>
  );
};

export default ITraineeProfile;
