import { useState } from "react";

const CTraineeForm = () => {
  const [popup, setPop] = useState(false);
  const handleClickOpen = () => {
    setPop(!popup);
  };

  const closePopup = () => {
    setPop(false);
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
      <h3>Add Corporate Trainee</h3>
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
      <button onClick={handleClickOpen}>Add new cTrainee</button>
      <div>
        {popup ? (
          <div className="main">
            <div className="popup">
              <div className="popup-header">
                <h1 onClick={closePopup}>X</h1>
              </div>
              <div>
                <p className="message">A new Corporate Trainee is added</p>
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

export default CTraineeForm;
