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

const CTraineeForm = () => {
  const [popup, setPop] = useState(false);
  const [message, setMessage] = useState(true);
  const handleClickOpen = () => {
    setMessage(false);
  };

  //const [firstname, setFirstname] = useState("");
  //const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [traineemessage, setTraineemessage] = useState("");
  const [corporate, setCorporate] = useState("");

  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const cTrainee = {
      firstname,
      lastname,
      username,
      password,
      email,
      corporate,
    };
    if (
      firstname != "" &&
      lastname != "" &&
      username != "" &&
      password != "" &&
      email != "" &&
      corporate != ""
    ) {
      const response = await fetch("/api/ctrainee/", {
        method: "POST",
        body: JSON.stringify(cTrainee),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const json = await response.json();

      if (response.status == 400) {
        setError(json.error);
        setTraineemessage("invalid username");
      }
      if (response.status == 200) {
        //setFirstname("");
        //setLastname("");
        setUsername("");
        setPassword("");
        setEmail("");
        setFirstname("");
        setLastname("");
        setCorporate("");
        setError(null);
        console.log("new corporate trainee is added", json);
      }
    } else {
      if (username == "") setTraineemessage("Please enter a valid username");
      if (password == "") setTraineemessage("Please type in a password");
      if (email == "") setTraineemessage("Please type in an email");
      if (firstname == "") setTraineemessage("Please type in a firstname");
      if (lastname == "") setTraineemessage("Please type in a lastname");
      if (corporate == "") setTraineemessage("Please type in a lastname");
      if (
        username == "" &&
        password == "" &&
        email == "" &&
        firstname == "" &&
        lastname == "" &&
        corporate == ""
      )
        setTraineemessage("Please fill in all the required fields");
      if (firstname == "" || lastname == "" || email == "" || corporate == "")
        setTraineemessage("Please fill in all the required fields");
    }
  };
  return (
    <form className="create" onSubmit={handleSubmit}>
      <MDBCard
        style={{
          top: "40px",
          width: "500px",
          height: "-200px",
          right: 160
          //  transform: "translate(90%, 20%)",
        }}
      >
        <MDBCardHeader>Add Corporate Trainee</MDBCardHeader>
        <MDBCardBody>
          <MDBCardTitle>Firstname:</MDBCardTitle>
          <MDBInput
            label="firstname"
            type="text"
            onChange={(e) => setFirstname(e.target.value)}
            value={firstname}
          />{" "}
          <MDBCardTitle>Lastname:</MDBCardTitle>
          <MDBInput
            label="lastname"
            type="text"
            onChange={(e) => setLastname(e.target.value)}
            value={lastname}
          />{" "}
          <MDBCardTitle>Email:</MDBCardTitle>
          <MDBInput
            label="email"
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />{" "}
          <MDBCardTitle>Username:</MDBCardTitle>
          <MDBInput
            label="Username"
            type="text"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />{" "}
          <MDBCardTitle>Password:</MDBCardTitle>
          <MDBInput
            label="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />{" "}
          <MDBCardTitle>Corporate:</MDBCardTitle>
          <MDBInput
            label="Corporate"
            type="text"
            onChange={(e) => setCorporate(e.target.value)}
            value={corporate}
          />{" "}
          <MDBBtn
            style={{ allign: "center", top: "-15px" }}
            className="button4"
            onClick={handleSubmit}
            color="danger"
          >
            Add corporate Trainee
          </MDBBtn>
        </MDBCardBody>
      </MDBCard>
      <p style={{ color: "red", transform: "translate(33%, 160%)" }}>
        {" "}
        {traineemessage}
      </p>

      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default CTraineeForm;
