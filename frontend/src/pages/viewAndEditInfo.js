import InstructorNavbar from "../components/instructorNavbar";
import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { MdOutlineModeEdit } from "react-icons/md";
import Stack from '@mui/material/Stack';
import Rating from '@mui/material/Rating';
import React from "react";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBTypography
} from "mdb-react-ui-kit";

import { BsFillPencilFill } from "react-icons/bs";
import Button from 'react-bootstrap/Button';



const ViewAndEditInfo = () => {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  const [instructor, setInstructor] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [bioEdit, setBioEdit] = useState(true);
  const [showBio, setShowBio] = useState(false);
  const [miniBio, setBio] = useState(" ");


  const [emailTemp, setEmailTemp] = useState("");
  const [bioTemp, setBioTemp] = useState("");
  const [editEmailIconColor, setEditEmailIconColor] = useState('');
  const [editBioIconColor, setEditBioIconColor] = useState('');
  const [editingEmail, setEditingEmail] = useState(false);
  const [editingBio, setEditingBio] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [bioError, setBioError] = useState("");

  const navigate = useNavigate();





  useEffect(() => {
    const fetchInstructor = async () => {
      const response = await fetch("/api/instructor/onlyone");

      const json = await response.json();
      console.log(json);
      if (response.ok) {
        setInstructor(json);
        setEmailTemp(json.email);
        setBioTemp(json.miniBio);
        setLoading(false);
      }
    };
    fetchInstructor();
  }, []);

  const handleSaveEmail = async (e) => {
    if (emailTemp == '') {
      setEmailError('Your email cannot be blank.');
    }
    else {
      e.preventDefault();
      setEmailError('');
      setEditingEmail(false);

      console.log(emailTemp);
      const editEmail = {
        email: emailTemp,
      };

      const response = await fetch("/api/instructor/", {
        method: "PATCH",
        body: JSON.stringify(editEmail),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const json = await response.json();

      if (!response.ok) {
        console.log(json.error);
      }
      if (response.ok) {
        setInstructor(json);
        console.log("Email is updated", json);
      }
    }
  };



  const handleSaveBio = async (e) => {
    if (bioTemp == '') {
      setBioError('Your bio cannot be blank.');
    }
    else {
      e.preventDefault();
      setBioError('');
      setEditingBio(false);

      const biography = {
        miniBio: bioTemp,
      };

      const response = await fetch("/api/instructor/?id=" + id, {
        method: "PATCH",
        body: JSON.stringify(biography),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const json = await response.json();
      if (!response.ok) {
        console.log(json.error);
      }
      if (response.ok) {
        setInstructor(json);
        console.log("Bio is updated", json);
      }
    }
  };





  if (isLoading) {
    return <div className="App">Loading...</div>;
  }



  return (
    <div>

      <InstructorNavbar />
      <section  > {/*className="vh-100" */} {/* style={{ backgroundColor: '#f4f5f7' }} */}
        <MDBContainer className="py-5 h-100">
          <MDBRow className="justify-content-center align-items-center h-100">
            <MDBCol > { /*lg="6" className="mb-4 mb-lg-0"*/}
              <MDBCard className="mb-3" style={{ borderRadius: '.5rem', paddingBottom: '30px' }}>
                <MDBRow className="g-0">

                  <MDBCol md="3" className="gradient-custom text-center text-white" style={{ borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem' }}>
                    <MDBCardImage src="profile.png"
                      alt="Avatar" className="my-5" style={{ width: '150px' }} fluid />

                    <MDBTypography tag="h5" style={{ color: "black" }}>
                      {instructor && instructor.name}
                    </MDBTypography>
                  </MDBCol>


                  <MDBCol md="9">
                    <MDBCardBody className="p-4">
                      <MDBTypography tag="h6">My Info</MDBTypography>
                      <hr className="mt-0 mb-4" />
                      <MDBRow className="pt-1">

                        <MDBCol size="4" className="mb-3">
                          <MDBTypography tag="h6">Username</MDBTypography>
                          <MDBCardText className="text-muted">{instructor && instructor.username} </MDBCardText>
                        </MDBCol>

                        <MDBCol size="4" className="mb-3">
                          <MDBTypography tag="h6">Email</MDBTypography>
                          <MDBCardText className="text-muted">
                            <div style={{ display: editingEmail ? "none" : "inline-block", }} > {instructor && instructor.email} </div>
                            <line> </line>
                            <BsFillPencilFill style={{ display: editingEmail ? "none" : "inline-block", color: editEmailIconColor }} onMouseEnter={() => setEditEmailIconColor('red')} onMouseLeave={() => setEditEmailIconColor('')} onClick={() => setEditingEmail(true)} />
                            <input style={{ display: editingEmail ? "inline-block" : "none" }} type="text" defaultValue={instructor && instructor.email} onChange={(e) => setEmailTemp(e.target.value)} placeholder="Edit your Email" />
                            <Button variant="danger" style={{ display: editingEmail ? "inline-block" : "none" }} onClick={handleSaveEmail} size="sm"> Save </Button>
                            <div style={{ display: editingEmail ? "inline-block" : "none", color: 'red' }} > {emailError} </div>
                          </MDBCardText>
                        </MDBCol>

                        <MDBCol size="4" className="mb-3">
                          <MDBTypography tag="h6">Mini Bio</MDBTypography>
                          <MDBCardText className="text-muted">
                            <div style={{ display: editingBio ? "none" : "inline-block", }} > {instructor && instructor.miniBio} </div>
                            <line> </line>
                            <BsFillPencilFill style={{ display: editingBio ? "none" : "inline-block", color: editBioIconColor }} onMouseEnter={() => setEditBioIconColor('red')} onMouseLeave={() => setEditBioIconColor('')} onClick={() => setEditingBio(true)} />
                            <input style={{ display: editingBio ? "inline-block" : "none" }} type="text" defaultValue={instructor && instructor.miniBio} onChange={(e) => setBioTemp(e.target.value)} placeholder="Edit your Bio" />
                            <Button variant="danger" style={{ display: editingBio ? "inline-block" : "none" }} onClick={handleSaveBio} size="sm"> Save </Button>
                            <div style={{ display: editingBio ? "inline-block" : "none", color: 'red' }} > {bioError} </div>
                          </MDBCardText>
                        </MDBCol>
                      



                      


                        <Stack direction="row" justifyContent="flex-start" alignItems="center" spacing={1} >
                          <MDBTypography tag="h6" style={{ margin: '2px'}}>Rating: {instructor && instructor.rating}
                            
                          </MDBTypography>
                          <Rating name="myrating" defaultValue={instructor && instructor.rating} precision={0.5} readOnly />

                        </Stack>

                        </MDBRow>
                        <br/>

                        <MDBTypography tag="h6">Reviews</MDBTypography>
                      <hr className="mt-0 mb-4" />
                        <MDBRow className="pt-1">


                      



                        
                        {instructor && instructor.reviews && instructor.reviews.map((review) => (

                            <MDBCol size="10" className="mb-3">
                              <div style={{ display: 'flex', flexDirection: 'row' }}>
                                <MDBTypography tag="h6" style={{ margin: '2px' }}> "{review.content}"</MDBTypography>
                                <MDBCardText className="text-muted" style={{ marginLeft: '5px' }} > <em> - {review.traineeName} </em></MDBCardText>
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

export default ViewAndEditInfo;
