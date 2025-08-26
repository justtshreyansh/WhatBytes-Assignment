import { createContext, useState, useEffect } from "react";
import data from "../data/data.json";

export const Context = createContext(null);

export default function ContextProvider({ children }) {
  const [products, setProducts] = useState(() => {
    const saved = localStorage.getItem("products");
    return saved ? JSON.parse(saved) : data;
  });
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });
  const [filters, setFilters] = useState({
    categories: [],
    maxPrice: 1000
  });
  const [searchQuery, setSearchQuery] = useState("");

  // Persist products and cart to localStorage
  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <Context.Provider
      value={{
        products,
        setProducts,
        cart,
        setCart,
        filters,
        setFilters,
        searchQuery,
        setSearchQuery
      }}
    >
      {children}
    </Context.Provider>
  );
}
