import React from "react";

const Card = ({ id, img, name, description, price, onAddToCart }) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white">
      <img
        src={img}
        alt={name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-800">{name}</h2>
        <p className="text-gray-600 mt-2">{description}</p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-lg font-semibold text-blue-600">${price}</span>
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            onClick={onAddToCart} 
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
