import React from "react";

const Header = (props) => {
  return (
    <div className="bg-black">
      <div className="flex justify-between p-10 relative mr-32 ml-32 text-white">
        <div
          onClick={() => {
            props.showhandle(false);
          }}
          className="flex"
        >
          GM Store
        </div>
        <div className="">
          <i
            onClick={() => {
              props.showhandle(true);
            }}
            className="fa-solid fa-cart-shopping"
          ></i>
          <sup>{props.count}</sup>
        </div>
      </div>
    </div>
  );
};

export default Header;
