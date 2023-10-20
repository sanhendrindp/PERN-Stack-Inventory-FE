import React, { useState } from "react";

const InputProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { name, price };
      const response = await fetch("http://localhost:3000/products", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(body),
      });

      console.log(response);
      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <>
      <h1 className="text-center mt-5">Product List</h1>
      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
        <input
          type="text"
          className="form-control me-2"
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          className="form-control me-2"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <button className="btn btn-success">Create</button>
      </form>
    </>
  );
};

export default InputProduct;
