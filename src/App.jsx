import React, { useState } from "react";
import StoreCard from "./componants/StoreCard";

const App = () => {
  const [product, setProduct] = useState([
    {
      URL: "",
      name: "Product 1",
      description: "Description 1",
      category: "Shoes",
      price: "999",
    },
    {
      URL: "",
      name: "Product 2",
      description: "Description 2",
      category: "Shoes",
      price: "999",
    },
    {
      URL: "",
      name: "Product 3",
      description: "Description 3",
      category: "Shoes",
      price: "999",
    },
    {
      URL: "",
      name: "Product 4",
      description: "Description 4",
      category: "Shoes",
      price: "999",
    },
    {
      URL: "",
      name: "Product 5",
      description: "Description 5",
      category: "Shoes",
      price: "999",
    },
    {
      URL: "",
      name: "Product 6",
      description: "Description 6",
      category: "Shoes",
      price: "999",
    },
    {
      URL: "",
      name: "Product 7",
      description: "Description 7",
      category: "Shoes",
      price: "999",
    },
    {
      URL: "",
      name: "Product 8",
      description: "Description 8",
      category: "Shoes",
      price: "999",
    },
  ]);

  return (
    <div>
      {/* <StoreCard product={product} /> */}
      <StoreCard product={product} />
    </div>
  );
};

export default App;
