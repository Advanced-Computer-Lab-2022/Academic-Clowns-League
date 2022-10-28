import { useState } from "react";
import { json } from "react-router-dom";

const AdminForm = () => {
  const [popup, setPop] = useState(false);
  const handleClickOpen = () => {
    setPop(!popup);
  };

  const closePopup = () => {
    setPop(false);
  };
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const admin = { username, password };

    const response = await fetch("/api/admin", {
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
      setError(null);
      console.log("New Admin is Added", json);
    }
  };

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Add a new Admin</h3>
      <li>
        <label>Admin Username:</label>
        <input
          type="text"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />{" "}
      </li>

      <li>
        {" "}
        <label>Password:</label>
        <input
          type="text"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />{" "}
      </li>
      <button onClick={handleClickOpen}>Add new Admin</button>
      <div>
        {popup ? (
          <div className="main">
            <div className="popup">
              <div className="popup-header">
                <h1></h1>
                <h1 onClick={closePopup}>X</h1>
              </div>
              <div>
                <p className="message">A new Admin is added</p>
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

export default AdminForm;
