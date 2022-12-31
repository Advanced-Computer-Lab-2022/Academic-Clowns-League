import HomeInstNav from "../components/homeInstNav";
import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';

import {
  MDBCard,
  MDBCardHeader,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
  MDBInput,
} from "mdb-react-ui-kit";

import React from "react";

const ChangePassword = () => {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  //const id = "63715373d953904400b6a4d5";
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const [message, setMessage] = useState("");
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
      password != "" &&
      newPassword != "" &&
      confirmPassword != "" &&
      newPassword == confirmPassword
    ) {
      const response = await fetch("/api/instructor/updatePassword", {
        method: "PATCH",
        body: JSON.stringify({
          password: password,
          newPassword: newPassword,
          confirmPassword: confirmPassword,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const json = await response.json();
      if (response.status == 400) {
        setError(json.error);
        setMessage("Current password is incorrect");
      }
      if (response.status == 200) {
        setPassword("");
        setNewPassword("");
        setConfirmPassword("");
        setError(null);
        setMessage("");

        window.location.href = "/login";
        console.log("Password Updated", json);
      }
    } else if (password == "" || newPassword == "" || confirmPassword == "") {
      setMessage("Please type in all required fields");
    } else if (newPassword != confirmPassword) {
      setMessage("Confirmation password doesn't match the new password");
    }
  };

  return (
    <div>
      <HomeInstNav />

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
        <MDBCardHeader>Change Password</MDBCardHeader>
        <MDBCardBody>
          <MDBCardText>Current Password</MDBCardText>
          <MDBInput
            label="Current Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />{" "}
          <br></br>
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
            label="Confirm Password"
            type="password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
          />{" "}
          <p
        style={{
          color: "red",
          transform: "translate(16%, 45%)",
          width: "500px",
        }}
      >
        {" "}
        {message}
      </p>
          <Button
            type="button"
            class="btn btn-outline-success"
            href="#"
            variant="danger"
            onClick={handleSubmit}
            style={{ transform: "translate(55%,5%)" }}
          >
            Change Password
          </Button>
        </MDBCardBody>
      </MDBCard>
    </div>
  );
};

export default ChangePassword;
