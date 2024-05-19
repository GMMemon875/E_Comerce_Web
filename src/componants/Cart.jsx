import React from "react";

const Cart = ({ cart }) => {
  return (
    <div className="flex gap-14 p-7">
      {cart.map((cartitem, cartindex) => {
        return (
          <div className="" key={cartindex}>
            <img
              className="w-32"
              src={cartitem.URL}
              alt="image not found"
            ></img>
            <h1>{cartitem.name}</h1>
            <h1>{cartitem.description}</h1>
            <h1>{cartitem.categor}</h1>
            <button className="bg-black w-6 text-white">-</button>
            <h1>{cartitem.quauntity}</h1>
            <button className="bg-black w-6 text-white">+</button>
            <h2> RS:{cartitem.price}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
