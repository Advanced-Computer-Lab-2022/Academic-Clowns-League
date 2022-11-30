import InstructorNavbar from "../components/instructorNavbar";
import { useState } from "react";

const ChangePassword = () => {
  const params = new URLSearchParams(window.location.search);
  //const id = params.get("id");
  const id = "63715373d953904400b6a4d5";
  const [password, setPassword] = useState(" ");
  const [error, setError] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();

    const Password = {
      password,
    };

    const response = await fetch("/api/instructor/?id=" + id, {
      method: "PATCH",
      body: JSON.stringify(Password),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      setPassword("");
      setError(null);
      console.log("Password Updated", json);
    }
  };

  return (
    <div>
      <InstructorNavbar />

      <form className="update" onSubmit={handleSubmit}>
        <h3>Change password</h3>

        <li>
          <label>Password:</label>
          <input
            type="text"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </li>

        <button>Change Password</button>

        {error && <div className="error">{error}</div>}
      </form>
    </div>
  );
};

export default ChangePassword;
