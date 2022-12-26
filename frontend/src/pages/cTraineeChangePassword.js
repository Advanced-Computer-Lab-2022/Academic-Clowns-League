import InstructorNavbar from "../components/instructorNavbar";
import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

const CTraineeChangePassword = () => {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  //const id = "63715373d953904400b6a4d5";
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
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

    const response = await fetch("/api/ctrainee/cTraineeUpdatePassword", {
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
    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      setPassword("");
      setNewPassword("");
      setConfirmPassword("");
      setError(null);
      window.location.href = "/login";
      console.log("Password Updated", json);
    }
  };

  return (
    <div>
      <InstructorNavbar />

      <form
        className="changePassword"
        style={{ left: "50%", top: "30%", transform: "translate(-50%, -50%)" }}
        onSubmit={handleSubmit}
      >
        <h3
          style={{
            fontSize: 20,
            margin: 20,
            left: "50%",
            top: "30%",
            transform: "translate(-5%, -50%)",
            alignContent: "center",
          }}
        >
          Change password{" "}
        </h3>

        <div className="mb-3">
          <p>
            <label>Password:</label>
            <line> </line>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </p>
        </div>

        <div className="mb-3">
          <p>
            <label>New Password:</label>
            <line> </line>
            <input
              type="password"
              onChange={(e) => setNewPassword(e.target.value)}
              value={newPassword}
            />
          </p>
        </div>

        <div className="mb-3">
          <p>
            <label>Confirm Password:</label>
            <line> </line>
            <input
              type="password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              value={confirmPassword}
            />
          </p>
        </div>

        <button className="button4">Change Password</button>

        {error && <div className="error">{error}</div>}
      </form>
    </div>
  );
};

export default CTraineeChangePassword;
