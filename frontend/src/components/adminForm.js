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

const AdminForm = () => {
  const [popup, setPop] = useState(false);
  const [message, setMessage] = useState(true);
  const handleClickOpen = () => {
    // setPop(!popup);
    setMessage(false);
  };

  /*const closePopup = () => {
    setPop(false);
  };*/
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  //const [email, setEmail] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const admin = { username, password };

    const response = await fetch("/api/admin/", {
      method: "POST",
      body: JSON.stringify(admin),
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
      //setEmail("");
      setError(null);
      console.log("New Admin is Added", json);
    }
  };

  return (
    <form className="create" onSubmit={handleSubmit}>
      <MDBCard
        style={{
          top: "70px",
          width: "500px",
          height: "-200px",
          transform: "translate(90%, 20%)",
        }}
      >
        <MDBCardHeader>Add Admin</MDBCardHeader>
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
          <button
            style={{ allign: "center", top: "-15px" }}
            className="button4"
            onClick={handleClickOpen}
          >
            Add Admin
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
          New Admin is added successfully
        </message>
      </p>

      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default AdminForm;
