import React, { useState } from "react";

const products = [
  {
    id: 1,
    name: "product1",
    price: 50,
  },
  {
    id: 2,
    name: "product2",
    price: 50,
  },
  {
    id: 3,
    name: "product",
    price: 50,
  },
];

export default function UncontrolAddToCard() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart((cart) => [...cart, product]);
  };
  return (
    <div className="px-4 py-28 max-w-[1333px] mx-auto ">
      <h2 className="text-4xl font-bold m-4">Add to card Project</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 ">
        {products.map((product, index) => (
          <div
            key={index}
            className="p-4 border rounded shadow-sm hover:shadow-lg   transition"
          >
            <h2 className="text-lg font-semibold">{product.name}</h2>
            <p className="text-gray-700">{product.price}</p>
            <button
              onClick={() => handleAddToCart(product)}
              className="bg-green-500 px-2 py-2 rounded text-white mt-2"
            >
              Add to card
            </button>
          </div>
        ))}
      </div>

      {/* display card */}
      <h2 className="text-lg font-bold mt-6">Card</h2>
      {cart.length == 0 ? (
        <p className="text-gray-600">Your card is empty.</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              {item.name} - ${item.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
