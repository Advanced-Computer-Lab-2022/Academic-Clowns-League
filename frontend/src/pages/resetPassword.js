import InstructorNavbar from "../components/instructorNavbar";
import { useState, useEffect } from "react";
import nodemailer from "nodemailer";

const ResetPassword = () => {
  const params = new URLSearchParams(window.location.search);
  //const id = params.get("id");
  const id = "63715373d953904400b6a4d5";
  //const [password, setPassword] = useState(" ");
  const [email, setEmail] = useState(" ");
  const [error, setError] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();

    /*const Password = {
      password,
    };*/

    const Email = {
      email,
    };

    //element.innerHTML = data.total;

    const response = await fetch("/api/instructor/reset/?id=" + id, {
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
    <div>
      <InstructorNavbar />

      <form className="reset">
        <h3>Email to send reset Link</h3>

        <li>
          <label>Email:</label>
          <input
            type="text"
            /*onChange={(e) => setPassword(e.target.value)}
            value={password}*/
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </li>

        <button onClick={handleSubmit}>Reset</button>

        {error && <div className="error">{error}</div>}
      </form>
    </div>
  );
};

export default ResetPassword;
