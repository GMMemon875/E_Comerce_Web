// components/StoreCard.js
import React from "react";

const StoreCard = ({ product }) => {
  return (
    <div className="flex gap-32 flex-wrap">
      {product.map((item, index) => (
        <div key={index}>
          <img src={item.URL} alt={item.name} />
          <h2>{item.name}</h2>
          <p>{item.description}</p>
          <p>{item.category}</p>
          <p>{item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default StoreCard;
