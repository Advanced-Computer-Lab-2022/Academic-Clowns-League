import { useState } from "react";
import {
  MDBCard,
  MDBCardHeader,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
  MDBInput,
} from "mdb-react-ui-kit";

const InstructorForm = () => {
  const [popup, setPop] = useState(false);
  const [message, setMessage] = useState(true);
  const handleClickOpen = () => {
    //setPop(!popup);
    setMessage(false);
  };

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [country, setCountry] = useState("");
  const [email, setEmail] = useState("");
  const [miniBio, setMiniBio] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const instructor = {
      username,
      password,
      country,
      email,
      miniBio,
      name,
    };

    const response = await fetch("/api/instructor/", {
      method: "POST",
      body: JSON.stringify(instructor),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      setUsername("");
      setPassword("");
      setCountry("");
      setEmail("");
      setMiniBio("");
      setName("");
      setError(null);
      console.log("new Instructor added", json);
    }
  };
  return (
    <form className="create" onSubmit={handleSubmit}>
      <MDBCard
        style={{
          top: "40px",
          width: "500px",
          height: "-200px",
          transform: "translate(90%, 1%)",
        }}
      >
        <MDBCardHeader>Add Instructor</MDBCardHeader>
        <MDBCardBody>
          <MDBCardTitle>Username:</MDBCardTitle>
          <MDBInput
            label="Username"
            type="text"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />{" "}
          <MDBCardTitle>Name:</MDBCardTitle>
          <MDBInput
            label="Name"
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />{" "}
          <MDBCardTitle>Password:</MDBCardTitle>
          <MDBInput
            label="Password"
            type="text"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />{" "}
          <MDBCardTitle>Country:</MDBCardTitle>
          <MDBInput
            label="Country"
            type="text"
            onChange={(e) => setCountry(e.target.value)}
            value={country}
          />{" "}
          <MDBCardTitle>Email:</MDBCardTitle>
          <MDBInput
            label="Email"
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />{" "}
          <MDBCardTitle>Biography:</MDBCardTitle>
          <MDBInput
            label="Bio"
            type="text"
            onChange={(e) => setMiniBio(e.target.value)}
            value={miniBio}
          />{" "}
          <button
            style={{ allign: "center", top: "-15px" }}
            className="button4"
            onClick={handleClickOpen}
          >
            Add Instructor
          </button>
        </MDBCardBody>
      </MDBCard>

      <p style={{ align: "center", transform: "translate(115%, 230%)" }}>
        <message
          style={{
            display: message ? "none" : "inline-block",
            top: "70px",
          }}
        >
          New Instructor is added successfully
        </message>
      </p>

      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default InstructorForm;
