import React from "react";
import "./App.css";
import InputProduct from "./components/InputProduct";
import ListProduct from "./components/ListProduct";

function App() {
  return (
    <>
      <div className="container">
        <InputProduct></InputProduct>
        <ListProduct></ListProduct>
      </div>
    </>
  );
}

export default App;
