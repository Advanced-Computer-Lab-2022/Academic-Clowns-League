//import InstructorNavbar from "../components/instructorNavbar";
import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import {
  MDBCard,
  MDBCardHeader,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
  MDBInput,
} from "mdb-react-ui-kit";
import Button from "react-bootstrap/Button";

import React from "react";

const ForgotPassword = () => {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  //const id = "63715373d953904400b6a4d5";

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(true);
  const navigate = useNavigate();

  //const [showResults, setShowResults] = React.useState(false);

  //const navigateToLogin = navigate("/login");

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("IM HERE");

    /*const Password = {
      password,
    };

    const NewPassword = {
      newPassword,
    };*/
    if (
      newPassword != "" &&
      confirmPassword != "" &&
      newPassword == confirmPassword
    ) {
      const response = await fetch("/api/users/updatePassword?id=" + id, {
        method: "PATCH",
        body: JSON.stringify({
          newPassword,
          confirmPassword,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const json = await response.json();
      if (!response.ok) {
        setError(json.error);
      }
      if (response.ok) {
        setNewPassword("");
        setConfirmPassword("");
        setError(null);
        setMessage("");
        window.location.href = "/login";
        console.log("Password Updated", json);
      }
    } else if (newPassword == "" || confirmPassword == "") {
      setMessage("please type in all required fields");
    } else if (newPassword != confirmPassword) {
      setMessage("confirmation password doesn't match the new password");
    }
  };

  return (
    <div>
      <img
        width="50%"
        height="60%"
        style={{ marginLeft: "100px", transform: "translate(80%, 10%)" }}
        src="/changepass.jpg"
      ></img>

      <MDBCard
        style={{
          width: "400px",
          height: "430px",
          transform: "translate(40%, -90%)",
        }}
      >
        <MDBCardHeader>Reset Password</MDBCardHeader>
        <MDBCardBody>
          <MDBCardText>New Password</MDBCardText>
          <MDBInput
            label="New Password"
            type="password"
            onChange={(e) => setNewPassword(e.target.value)}
            value={newPassword}
          />{" "}
          <br></br>
          <MDBCardText>Confirm new password</MDBCardText>
          <MDBInput
            label="confirm Password"
            type="password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
          />{" "}
          <Button
            //type="button"
            class="btn btn-outline-success"
            href="#"
            variant="danger"
            onClick={handleSubmit}
            style={{ transform: "translate(65%,90%)" }}
          >
            Reset Password
          </Button>
        </MDBCardBody>
      </MDBCard>
      <p
        style={{
          color: "red",
          transform: "translate(45%, -1500%)",
          width: "500px",
        }}
      >
        {" "}
        {message}
      </p>

      {error && <div className="error">{error}</div>}
    </div>
  );
};

export default ForgotPassword;
