import InstructorNavbar from "../components/instructorNavbar";
import { useState, useEffect } from "react";
import nodemailer from "nodemailer";
import {
  MDBCard,
  MDBCardHeader,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
  MDBInput,
} from "mdb-react-ui-kit";

const ResetPassword = () => {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  //const id = "63715373d953904400b6a4d5";
  //const [password, setPassword] = useState(" ");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email);

    /*const Password = {
      password,
    };*/

    const Email = {
      email,
    };

    //element.innerHTML = data.total;

    const response = await fetch("/api/users/reset", {
      method: "PATCH",
      //body: JSON.stringify(Password),
      body: JSON.stringify(Email),
      headers: {
        "Content-Type": "application/json",
      },
    });
    //const response = await fetch("/api/instructor/reset/?id=" + id);
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      //setPassword("");
      setEmail("");
      setError(null);
      console.log("Password Updated", json);
    }
  };

  return (
    <>
      <form>
        <InstructorNavbar />

        <img
          width="50%"
          height="60%"
          style={{ marginLeft: "100px", transform: "translate(80%, 30%)" }}
          src="/students.jpg"
        ></img>

        <MDBCard
          style={{
            width: "400px",
            height: "200px",
            transform: "translate(50%, -70%)",
          }}
        >
          <MDBCardHeader>Reset Password</MDBCardHeader>
          <MDBCardBody>
            <MDBInput
              label="Email"
              type="text"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />{" "}
            <button
              type="button"
              class="btn btn-outline-success"
              href="#"
              color="danger"
              onClick={handleSubmit}
              style={{ transform: "translate(120%,100%)" }}
            >
              Send Mail
            </button>
          </MDBCardBody>
        </MDBCard>

        {error && <div className="error">{error}</div>}
      </form>
    </>
  );
};

export default ResetPassword;
