import HomeInstNav from "../components/homeInstNav";
import { useState } from "react";

const InstructorViewAndEditBio = () => {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  //const id = "63715373d953904400b6a4d5";
  const [miniBio, setBio] = useState(" ");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const biography = {
      miniBio,
    };

    const response = await fetch("/api/instructor/?id=" + id, {
      method: "PATCH",
      body: JSON.stringify(biography),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      setBio("");
      setError(null);
      console.log("Bio Updated", json);
    }
  };

  return (
    <div>
      <HomeInstNav />

      <form className="update" onSubmit={handleSubmit}>
        <h3>Update Biography</h3>

        <li>
          <label>Bio:</label>
          <input
            type="text"
            onChange={(e) => setBio(e.target.value)}
            value={miniBio}
          />
        </li>

        <button>Update Biography</button>

        {error && <div className="error">{error}</div>}
      </form>
    </div>
  );
};

export default InstructorViewAndEditBio;
