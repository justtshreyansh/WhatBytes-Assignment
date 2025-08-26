import React, { useContext } from "react";
import { Input, Badge, Avatar } from "antd";
import { ShoppingCart, Store } from "lucide-react";
import "./Header.css";
import { Context } from "../context/Context";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const { cart, searchTerm, setSearchTerm } = useContext(Context);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Store />
      </div>

      <div className="navbar-search">
        <Input.Search
          placeholder="Search products..."
          enterButton
          size="large"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onSearch={(value) => setSearchTerm(value)}
        />
      </div>

      <div className="navbar-actions">
        <Badge onClick={() => navigate("cart")} count={cart.length} offset={[0, 0]}>
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
