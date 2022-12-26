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
  //const [country, setCountry] = useState("");
  //const [credNumber, setCredNum] = useState("");
  //const [credCCV, setCredCCV] = useState("");
  //const [credExpDate, setCredExpDate] = useState("");
  //const [courses, setCourses] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const cTrainee = {
      //firstname,
      //lastname,
      username,
      password,
      email,
      //country,
      //credNumber,
      //credCCVv,
      //credExpDate,
      //courses,
    };

    const response = await fetch("/api/ctrainee/", {
      method: "POST",
      body: JSON.stringify(cTrainee),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      //setFirstname("");
      //setLastname("");
      setUsername("");
      setPassword("");
      setEmail("");
      //setCountry("");
      //setCrednum("");
      //setCredccv("");
      //setCredexpdate("");
      //setCourses("");
      setError(null);
      console.log("new corporate trainee is added", json);
    }
  };
  return (
    <form className="create" onSubmit={handleSubmit}>
      <MDBCard
        style={{
          top: "40px",
          width: "500px",
          height: "-200px",
          transform: "translate(90%, 20%)",
        }}
      >
        <MDBCardHeader>Add Corporate Trainee</MDBCardHeader>
        <MDBCardBody>
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
            type="text"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />{" "}
          <MDBCardTitle>Email:</MDBCardTitle>
          <MDBInput
            label="email"
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />{" "}
          <button
            style={{ allign: "center", top: "-15px" }}
            className="button4"
            onClick={handleClickOpen}
          >
            Add corporate Trainee
          </button>
        </MDBCardBody>
      </MDBCard>

      <p style={{ align: "center", transform: "translate(115%, 570%)" }}>
        <message
          style={{
            display: message ? "none" : "inline-block",
            top: "70px",
          }}
        >
          New Corporate Trainee is added successfully
        </message>
      </p>

      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default CTraineeForm;
