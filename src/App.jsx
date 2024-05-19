import React, { useState } from "react";
import StoreCard from "./componants/StoreCard";
import Header from "./componants/Header";
import Cart from "./componants/Cart";

const App = () => {
  const [product, setProduct] = useState([
    {
      URL: "https://currenwatches.com.pk/cdn/shop/products/S7d2e9b2df5eb48be959dad1f4655b5e5S_1445x.jpg?v=1713332874",
      name: "Watch",
      description: "barnd watch ",
      category: "Watch",
      price: "999",
    },
    {
      URL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN5cUyn2oJfkFE9zPwVxka_QP82-GK2_pXlCtNUwaukg&s",
      name: "Shoes",
      description: "barnd",
      category: "Shoes",
      price: "999",
    },
    {
      URL: "https://cdn.thewirecutter.com/wp-content/media/2023/09/running-shoes-2048px-5946.jpg?auto=webp&quality=75&width=1024",
      name: "Product 3",
      description: "Description 3",
      category: "Shoes",
      price: "999",
    },
    {
      URL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5-8xvwo7Krpy9T-Fsa_tfTUD4PbhRR5MdSl8wsOQvRg&s",
      name: "Product 4",
      description: "Description 4",
      category: "Shoes",
      price: "999",
    },
    {
      URL: "https://almasjewellers.com.pk/wp-content/uploads/2022/11/Gold-Bracelet-Design-009.jpg",
      name: "Product 5",
      description: "Description 5",
      category: "Shoes",
      price: "999",
    },
    {
      URL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo5je0qQMVZ1VgXk2z1IO0r00C46A3gFCVpjnGJBrxyQ&s",
      name: "Product 6",
      description: "Description 6",
      category: "Shoes",
      price: "999",
    },
    {
      URL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1HBT7vwQFY4j6JriUEmylmjSY7JifcBLQApuM2pwv-g&s",
      name: "Product 7",
      description: "Description 7",
      category: "Shoes",
      price: "999",
    },
    {
      URL: "https://www.shutterstock.com/image-photo/new-apple-macbook-pro-leptop-260nw-1879162108.jpg",
      name: "Product 8",
      description: "Description 8",
      category: "Shoes",
      price: "999",
    },
  ]);

  const [cart, setcart] = useState([]);

  const AddtoCart = (data) => {
    // console.log(...data );
    setcart([...cart, { ...data, quauntity: "1" }]);
    // console.log(cart);
  };
  const [showCart, setshowcart] = useState(false);

  const showhandle = (value) => {
    setshowcart(value);
  };

  return (
    <div>
      <Header count={cart.length} showhandle={showhandle} />
      {showCart ? (
        <Cart cart={cart} />
      ) : (
        <StoreCard product={product} AddtoCart={AddtoCart} />
      )}
    </div>
  );
};

export default App;
