import React, { useEffect, useState } from "react";

const Cart = () => {
  const [cart, setCart] = useState([]);

  // LocalStorage-dan korzinkani o'qish
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  // Mahsulotni o'chirish funksiyasi
  const handleDelete = (index) => {
    // O'chirish uchun yangi ro'yxat yaratish
    const updatedCart = [...cart];
    updatedCart.splice(index, 1); // Ko‘rsatilgan indeksdagi elementni o‘chirish

    // Yangilangan korzinkani saqlash
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart)); // LocalStorage-ni yangilash
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">Your Cart</h2>
      {cart.length > 0 ? (
        <ul className="mt-4">
          {cart.map((item, index) => (
            <li
              key={index}
              className="flex justify-between items-center mb-2 border-b pb-2"
            >
              <div>
                <span className="font-semibold">{item.name}</span>
                <span className="ml-4 text-gray-600">${item.price}</span>
              </div>
              <button
                className="text-red-500 hover:text-red-700"
                onClick={() => handleDelete(index)} 
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;
