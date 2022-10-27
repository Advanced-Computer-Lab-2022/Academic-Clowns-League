import { useState } from "react";
import { json } from "react-router-dom";

const AdminForm = () => {
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

      <label>Admin Useername:</label>
      <input
        type="text"
        onChange={(e) => setUsername(e.target.value)}
        value={username}
      />

      <label>Password:</label>
      <input
        type="text"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <button>Add new Admin</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default AdminForm;
