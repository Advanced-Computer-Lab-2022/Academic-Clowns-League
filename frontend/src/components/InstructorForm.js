import { useState } from "react";
import { json } from "react-router-dom";

const InstructorForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [country, setCountry] = useState("");
  const [email, setEmail] = useState("");
  const [miniBio, setMiniBio] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const instructor = {
      username,
      password,
      country,
      email,
      miniBio,
    };

    const response = await fetch("/api/instructor", {
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
      setError(null);
      console.log("new Instructor added", json);
    }
  };
  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Add Instructor</h3>

      <li>
        <label>Username:</label>
        <input
          type="text"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
      </li>

      <li>
        <label>Password:</label>
        <input
          type="text"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </li>

      <li>
        <label>Country:</label>
        <input
          type="text"
          onChange={(e) => setCountry(e.target.value)}
          value={country}
        />
      </li>

      <li>
        <label>Email:</label>
        <input
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </li>

      <li>
        <label>MiniBio:</label>
        <input
          type="text"
          onChange={(e) => setMiniBio(e.target.value)}
          value={miniBio}
        />
      </li>
      <button>Add instructor</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default InstructorForm;
