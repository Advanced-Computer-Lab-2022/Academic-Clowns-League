import { useState } from "react";

const InstructorForm = () => {
  const [popup, setPop] = useState(false);
  const handleClickOpen = () => {
    setPop(!popup);
  };

  const closePopup = () => {
    setPop(false);
  };

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [country, setCountry] = useState("");
  const [email, setEmail] = useState("");
  const [miniBio, setMiniBio] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const instructor = {
      username,
      password,
      country,
      email,
      miniBio,
      name,
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
      setName("");
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
        <label>Name:</label>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
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
      <button onClick={handleClickOpen}>Add new Instructor</button>
      <div>
        {popup ? (
          <div className="main">
            <div className="popup">
              <div className="popup-header">
                <h1 onClick={closePopup}>X</h1>
              </div>
              <div>
                <p className="message">A new Instructor is added</p>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default InstructorForm;
