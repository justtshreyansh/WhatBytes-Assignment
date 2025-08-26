// Navbar.jsx
import React, { useContext } from "react";
import { Input, Badge, Avatar } from "antd";
import { ShoppingCart, Store } from "lucide-react";
import "./Header.css";
import { Context } from "../context/Context";

const Navbar = () => {
  const { cart, searchQuery, setSearchQuery } = useContext(Context);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-logo">
        <Store />
      </div>

      {/* Search Bar */}
      <div className="navbar-search">
        <Input.Search
          placeholder="Search products..."
          enterButton
          size="large"
          value={searchQuery} // controlled input
          onChange={(e) => setSearchQuery(e.target.value)}
          onSearch={(value) => setSearchQuery(value)}
        />
      </div>

      {/* Cart & Profile */}
      <div className="navbar-actions">
        <Badge count={cart.length} offset={[0, 0]}>
          <ShoppingCart size={28} color="#fff" />
        </Badge>
        <Avatar
          src="https://randomuser.me/api/portraits/men/75.jpg"
          size="large"
          style={{ marginLeft: "15px" }}
        />
      </div>
    </nav>
  );
};

export default Navbar;
