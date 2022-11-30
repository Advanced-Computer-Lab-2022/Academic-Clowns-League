import InstructorNavbar from "../components/instructorNavbar";
import { useState } from "react";

const EditEmail = () => {
  const params = new URLSearchParams(window.location.search);
  //const id = params.get("id");
  const id = "63715373d953904400b6a4d5";
  const [email, setEmail] = useState(" ");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const editEmail = {
      email,
    };

    const response = await fetch("/api/instructor/?id=" + id, {
      method: "PATCH",
      body: JSON.stringify(editEmail),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      setEmail("");
      setError(null);
      console.log("Email is updated", json);
    }
  };

  return (
    <div>
      <InstructorNavbar />

      <form className="edit" onSubmit={handleSubmit}>
        <h3>Update Email</h3>

        <li>
          <label>Email:</label>
          <input
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </li>

        <button>Edit Email</button>

        {error && <div className="error">{error}</div>}
      </form>
    </div>
  );
};

export default EditEmail;
