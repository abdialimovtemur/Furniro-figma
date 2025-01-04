import React, { useEffect, useState } from "react";
import { useAxios } from "../../hooks/useAxios";
import Card from "../card";
import { notification } from "antd";

const OurProducts = () => {
  const { getData } = useAxios();
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    getData("products").then((res) => setProducts(res));
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  const handleAddToCart = (item) => {
    const updatedCart = [...cart, { ...item, quantity: 1 }];
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    notification.success({
        message: "Product Added to Cart",
        description: "The product has been successfully added to your cart.",
        placement: "topRight", // Bildirishnoma pozitsiyasi
      });
  };

  return (
    <div className="flex flex-col pt-20">
      <div className="flex text-center justify-center">
        <h1 className="font-extrabold text-3xl">Our Products</h1>
      </div>
      <div className="grid grid-cols-4 gap-6">
        {products?.map((item) => (
          <Card
            key={item.id}
            id={item.id}
            img={item.image}
            name={item.name}
            description={item.description}
            price={item.price}
            onAddToCart={() => handleAddToCart(item)}
          />
        ))}
      </div>
    </div>
  );
};

export default OurProducts;
