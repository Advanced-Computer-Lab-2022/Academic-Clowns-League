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
  const [message, setMessage] = useState(false);
  const handleClickOpen = () => {
    // setPop(!popup);
    // setMessage(false);
  };

  /*const closePopup = () => {
    setPop(false);
  };*/
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  //const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const [adminmessage, setAdminmessage] = useState(false);
  const [usernamemessage, setUsernamemessage] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    //setMessage(true);
    const admin = { username, password };
    if (password != "") {
      const response = await fetch("/api/admin/", {
        method: "POST",
        body: JSON.stringify(admin),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const json = await response.json();

      if (response.status == 400) {
        setError(json.error);
        setAdminmessage("invalid username");
      }
      if (response.status == 200) {
        setUsername("");
        setPassword("");
        setMessage(true);
        //setEmail("");
        setAdminmessage("New Admin is added successfully");
        setError(null);
        console.log("New Admin is Added", json);
      }
    } else {
      setAdminmessage("Please enter a password");
    }

    if (username == "") {
      setAdminmessage("Please enter a username");
    }

    if (username == "" && password == "") {
      setAdminmessage("Please enter username and password");
    }
  };

  return (
    <form className="create" onSubmit={handleSubmit}>
      <MDBCard
        style={{
          top: "70px",
          width: "500px",
          height: "-200px",
          right: 160
          // transform: "translate(90%, 20%)",
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
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />{" "}
          <p style={{ color: "red", transform: "translate(32%, 40%)" }}>
          {" "}
          {adminmessage}
        </p>
          <MDBBtn
            style={{ allign: "center", top: "-33px" }}
            className="button4"
            onClick={handleSubmit}
            color="danger"
          >
            Add Admin
          </MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </form>
  );
};

export default AdminForm;
