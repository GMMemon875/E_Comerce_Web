// components/StoreCard.js
import React from "react";

const StoreCard = ({ product }) => {
  return (
    <div className="flex gap-32 flex-wrap mt-9 p-5 justify-center ">
      {product.map((item, index) => (
        <div className="shadow-lg shadow-indigo-500/40  w-60" key={index}>
          <div className="flex w-56 p-4 h-56">
            <img src={item.URL} alt={item.name} />
          </div>
          <h2 className="mt-4">{item.name}</h2>
          <p>{item.description}</p>
          <p>{item.category}</p>
          <p>{item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default StoreCard;
