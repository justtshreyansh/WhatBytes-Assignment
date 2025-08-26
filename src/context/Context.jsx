import { createContext, useState, useEffect } from "react";
import data from "../data/data.json";

export const Context = createContext(null);

export default function ContextProvider({ children }) {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [products, setProducts] = useState(() => {
    const savedProducts = localStorage.getItem("products");
    return savedProducts ? JSON.parse(savedProducts) : data;
  });

  // Filters state with defaults
  const [filters, setFilters] = useState({
    categories: [],
    maxPrice: 1000
  });

  // Save cart and products to localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  return (
    <Context.Provider value={{ cart, setCart, products, setProducts, filters, setFilters }}>
      {children}
    </Context.Provider>
  );
}
