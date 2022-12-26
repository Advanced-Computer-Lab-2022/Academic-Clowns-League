import InstructorNavbar from "../components/instructorNavbar";
import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { MdOutlineModeEdit } from "react-icons/md";
import React from "react";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBTypography,
  MDBIcon,
} from "mdb-react-ui-kit";

const ViewAndEditInfo = () => {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  const [instructor, setInstructor] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [edit, setEdit] = useState(true);
  const [showEmail, setShowEmail] = useState(false);
  const [bioEdit, setBioEdit] = useState(true);
  const [showBio, setShowBio] = useState(false);
  const [email, setEmail] = useState("");
  const [miniBio, setBio] = useState(" ");

  const navigate = useNavigate();

  const handleEdit = async (e) => {
    setEdit(false);
    setShowEmail(true);
  };

  const handleBioEdit = async (e) => {
    setBioEdit(false);
    setShowBio(true);
  };

  useEffect(() => {
    const fetchInstructor = async () => {
      const response = await fetch("/api/instructor/onlyone");

      const json = await response.json();
      console.log(json);
      if (response.ok) {
        setInstructor(json);
        setLoading(false);
        setError("");
      }
    };
    fetchInstructor();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const editEmail = {
      email,
    };

    const response = await fetch("/api/instructor/", {
      method: "PATCH",
      body: JSON.stringify(editEmail),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(id);
    //console.log(req.user.id);
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      setEmail("");
      setError(null);
      console.log("Email is updated", json);
    }
  };

  const handleBio = async (e) => {
    e.preventDefault();

    const biography = {
      miniBio,
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
      setError(json.error);
    }
    if (response.ok) {
      setBio("");
      setError(null);
      console.log("Bio Updated", json);
    }
  };

  if (isLoading) {
    return <div className="App">Loading...</div>;
  }

  return (
    <section className="vh-100" style={{ backgroundColor: "#f4f5f7" }}>
      <InstructorNavbar />
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol lg="6" className="mb-4 mb-lg-0">
            <MDBCard className="mb-3" style={{ borderRadius: ".5rem" }}>
              <MDBRow className="g-0">
                <MDBCol
                  md="4"
                  className="gradient-custom text-center text-white"
                  style={{
                    borderTopLeftRadius: ".5rem",
                    borderBottomLeftRadius: ".5rem",
                  }}
                >
                  <MDBCardImage
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                    alt="Avatar"
                    className="my-5"
                    style={{ width: "80px" }}
                    fluid
                  />
                  <MDBTypography tag="h5" style={{ color: "black" }}>
                    {instructor.name}
                  </MDBTypography>

                  <MDBIcon far icon="edit mb-5" />
                </MDBCol>
                <MDBCol md="8">
                  <MDBCardBody className="p-4">
                    <MDBTypography tag="h6">Information</MDBTypography>
                    <hr className="mt-0 mb-4" />
                    <MDBRow className="pt-1">
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Email</MDBTypography>
                        <MDBCardText className="text-muted">
                          <div
                            style={{
                              display: showEmail ? "none" : "inline-block",
                            }}
                          >
                            {instructor.email}
                          </div>
                          <line> </line>
                          <button onClick={handleEdit}>
                            <MdOutlineModeEdit />{" "}
                          </button>

                          <input
                            style={{
                              display: edit ? "none" : "inline-block",
                            }}
                            type="text"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            name="Edit Email"
                            placeholder="Edit Email"
                          />

                          <button
                            type="submit"
                            style={{
                              display: edit ? "none" : "inline-block",
                            }}
                            onClick={handleSubmit}
                          >
                            Submit
                          </button>
                        </MDBCardText>
                      </MDBCol>
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">UserName:</MDBTypography>
                        <MDBCardText className="text-muted">
                          {instructor.username}
                        </MDBCardText>
                      </MDBCol>
                    </MDBRow>

                    <hr className="mt-0 mb-4" />
                    <MDBRow className="pt-1">
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Country:</MDBTypography>
                        <MDBCardText className="text-muted">
                          {instructor.country}
                        </MDBCardText>
                      </MDBCol>
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">MiniBio:</MDBTypography>
                        <MDBCardText className="text-muted">
                          {instructor.miniBio}
                          <line> </line>
                          <button>
                            <MdOutlineModeEdit onClick={handleBioEdit} />
                          </button>
                          <input
                            style={{
                              display: bioEdit ? "none" : "inline-block",
                            }}
                            type="text"
                            onChange={(e) => setBio(e.target.value)}
                            value={miniBio}
                            name="Edit Biography"
                            placeholder="Edit Biography"
                          />

                          <button
                            type="submit"
                            style={{
                              display: bioEdit ? "none" : "inline-block",
                            }}
                            onClick={handleBio}
                          >
                            Submit
                          </button>
                        </MDBCardText>
                      </MDBCol>
                    </MDBRow>

                    <div className="d-flex justify-content-start">
                      <a href="#!">
                        <MDBIcon fab icon="facebook me-3" size="lg" />
                      </a>
                      <a href="#!">
                        <MDBIcon fab icon="twitter me-3" size="lg" />
                      </a>
                      <a href="#!">
                        <MDBIcon fab icon="instagram me-3" size="lg" />
                      </a>
                    </div>
                  </MDBCardBody>
                </MDBCol>
              </MDBRow>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
};

export default ViewAndEditInfo;
