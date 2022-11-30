import { useState } from "react";

const AddPromotionForm = () => {
  const [discount, setDiscount] = useState("");
  const [discountValidUntil, setDiscountValidUntil] = useState("");
  const [error, setError] = useState(null);
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  //const id = "63598f85fb000a4726c4e5d8";
  const handleSubmit = async (e) => {
    e.preventDefault();

    const promotion = {
      discount,
      discountValidUntil,
    };

    const response = await fetch("/api/courses/?id=" + id, {
      method: "PATCH",
      body: JSON.stringify(promotion),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      setDiscount("");
      setDiscountValidUntil("");

      setError(null);
      console.log("new Discount added", json);
    }
  };

  return (
    <form className="update" onSubmit={handleSubmit}>
      <h3>Add Discount</h3>

      <li>
        <label>Discount:</label>
        <input
          type="text"
          onChange={(e) => setDiscount(e.target.value)}
          value={discount}
        />
      </li>

      <li>
        <label>Valid Until:</label>
        <input
          type="text"
          onChange={(e) => setDiscountValidUntil(e.target.value)}
          value={discountValidUntil}
        />
      </li>

      <button>Add Discount</button>

      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default AddPromotionForm;
