import { useState } from "react";
import { json } from "react-router-dom";

const CTraineeForm = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [crednumber, setCrednum] = useState("");
  const [credccv, setCredccv] = useState("");
  const [credexpdate, setCredexpdate] = useState("");
  const [courses, setCourses] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const cTrainee = {
      firstname,
      lastname,
      username,
      password,
      email,
      country,
      crednumber,
      credccv,
      credexpdate,
      courses,
    };

    const response = await fetch("/api/ctrainee", {
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
      setFirstname("");
      setLastname("");
      setUsername("");
      setPassword("");
      setEmail("");
      setCountry("");
      setCrednum("");
      setCredccv("");
      setCredexpdate("");
      setCourses("");
      setError(null);
      console.log("new corporate trainee is added", json);
    }
  };
  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Add Corporate Trainee</h3>

      <li>
        <label>Firstname:</label>
        <input
          type="text"
          onChange={(e) => setFirstname(e.target.value)}
          value={firstname}
        />
      </li>

      <li>
        <label>Lastname:</label>
        <input
          type="text"
          onChange={(e) => setLastname(e.target.value)}
          value={lastname}
        />
      </li>

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
        <label>Email:</label>
        <input
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
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
        <label>CredNumber:</label>
        <input
          type="text"
          onChange={(e) => setCrednum(e.target.value)}
          value={crednumber}
        />
      </li>

      <li>
        <label>CredCCV:</label>
        <input
          type="text"
          onChange={(e) => setCredccv(e.target.value)}
          value={credccv}
        />
      </li>

      <li>
        <label>credexpdate:</label>
        <input
          type="text"
          onChange={(e) => setCredexpdate(e.target.value)}
          value={credexpdate}
        />
      </li>

      <li>
        <label>Courses:</label>
        <input
          type="text"
          onChange={(e) => setCourses(e.target.value)}
          value={courses}
        />
      </li>

      <button>Add Corporate Trainee</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default CTraineeForm;
