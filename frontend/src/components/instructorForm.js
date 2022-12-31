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
  const [instructormessage, setInstructormessage] = useState("");
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
    if (
      username != "" &&
      password != "" &&
      country != "" &&
      email != "" &&
      miniBio != "" &&
      name != ""
    ) {
      const response = await fetch("/api/instructor/", {
        method: "POST",
        body: JSON.stringify(instructor),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const json = await response.json();

      if (response.status == 400) {
        setError(json.error);
        setInstructormessage("invalid username");
      }
      if (response.status == 200) {
        setUsername("");
        setPassword("");
        setCountry("");
        setEmail("");
        setMiniBio("");
        setName("");
        setError(null);
        console.log("new Instructor added", json);
      }
    } else {
      if (username == "") setInstructormessage("Please enter a username");
      if (password == "") setInstructormessage("Please enter a password");
      if (country == "") setInstructormessage("Please enter a country");
      if (email == "") setInstructormessage("Please enter an email");
      if (miniBio == "") setInstructormessage("Please enter a Biography");
      if (name == "") setInstructormessage("Please enter a name");
      if (
        username == "" &&
        password == "" &&
        country == "" &&
        email == "" &&
        miniBio == "" &&
        name == ""
      )
        setInstructormessage("Please fill in all required fields");
      if (country == "" || email == "" || miniBio == "" || name == "")
        setInstructormessage("Please fill in all required fields");
    }
  };
  return (
    <form className="create" onSubmit={handleSubmit}>
      <MDBCard
        style={{
          top: "40px",
          width: "500px",
          height: "-300px",
          right: 160
          // transform: "translate(90%, 1%)",
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
            type="password"
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
          <p style={{ color: "red", transform: "translate(28%, 95%)" }}>
        {" "}
        {instructormessage}
      </p>
          <MDBBtn
            style={{ align: "center", top: "-25px" }}
            className="button4"
            onClick={handleSubmit}
            color="danger"
          >
            Add Instructor
          </MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </form>
  );
};

export default InstructorForm;
