import React, { useState } from "react";

const EditProduct = ({ product }) => {
  const [name, setName] = useState(product.name);
  const [price, setPrice] = useState(product.price);

  const updateProduct = async (e) => {
    e.preventDefault();
    try {
      const body = { name, price };
      await fetch(`http://localhost:3000/products/${product._id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <>
      <button
        type="button"
        className="btn btn-warning"
        data-bs-toggle="modal"
        data-bs-target={`#id${product._id}`}
      >
        Edit
      </button>

      <div className="modal" id={`id${product._id}`}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Edit Product</h4>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>

            <div className="modal-body">
              <input
                type="text"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="text"
                className="form-control mt-3"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-success"
                data-bs-dismiss="modal"
                onClick={(e) => updateProduct(e)}
              >
                Confirm
              </button>
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProduct;
