import { createContext, useState, useEffect } from "react";
import apiUrl from "../src/config/api";
import axios from "axios";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await axios.get(`${apiUrl}/api/products`);
        const data = response.data;
        setProducts(data);
      } catch (error) {
        console.error("Error:", error);
      }
    }

    fetchProducts();
  }, []);

  const addToCart = (id) => {
    const findExistingProduct = cart.find((product) => product.id === id);
    const findIncomingProduct = products.find((product) => product.id === id);

    if (findExistingProduct) {
      const updatedProductQuantity = cart.map((product) =>
        product.id === id
          ? { ...product, quantity: product.quantity + 1 }
          : product
      );
      setCart(updatedProductQuantity);
    } else {
      setCart((prev) => [...prev, { ...findIncomingProduct, quantity: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    const filteredProducts = cart.filter((product) => product.id !== id);
    setCart(filteredProducts);
  };

  const handleRemoveOne = (productId) => {
    const updatedCart = [...cart];

    const productIndex = updatedCart.findIndex(
      (product) => product.id === productId
    );

    if (productIndex !== -1) {
      if (updatedCart[productIndex].quantity > 1) {
        updatedCart[productIndex].quantity -= 1;
      } else {
        updatedCart.splice(productIndex, 1);
      }

      setCart(updatedCart);
    }
  };

  return (
    <CartContext.Provider
      value={{ products, cart, setCart, addToCart, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
