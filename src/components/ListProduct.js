import React, { useState, useEffect } from "react";
import EditProduct from "./EditProduct";

const ListProduct = () => {
  const [products, setProducts] = useState([]);

  const deleteProduct = async (id) => {
    try {
      await fetch(`http://localhost:3000/products/${id}`, {
        method: "DELETE",
      });

      setProducts(products.filter((product) => product._id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  const getProduct = async () => {
    try {
      const response = await fetch("http://localhost:3000/products");
      const jsonData = await response.json();
      const productsArray = jsonData.Products;
      setProducts(productsArray);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <>
      <table className="table mt-5 text-center">
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id}>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>
                <EditProduct product={product} />
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteProduct(product._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ListProduct;
