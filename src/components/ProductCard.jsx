import React, { useContext } from "react";
import { Card, Button, Typography } from "antd";
import { ShoppingCart, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./ProductCard.css";
import { Context } from "../context/Context";

const { Title, Text } = Typography;

const ProductCard = ({ product }) => {
  const { cart, setCart, setSelectedProduct } = useContext(Context);
  const navigate = useNavigate();

  const isInCart = cart.some((item) => item.id === product.id);

  const addToCart = () => {
    if (!isInCart) setCart((prev) => [...prev, product]);
  };

  const removeFromCart = () => {
    setCart((prev) => prev.filter((item) => item.id !== product.id));
  };

  const handleCardClick = () => {
    setSelectedProduct(product); 
    navigate(`/product/${product.id}`);
  };

  return (
    <Card
      hoverable
      cover={<img alt={product.title} src={product.image} />}
      className="product-card"
      onClick={handleCardClick}
    >
      <Title level={5}>{product.title}</Title>
      <Text strong>${product.price}</Text>

      {isInCart ? (
        <Button
          type="default"
          danger
          icon={<Trash2 size={16} />}
          className="add-to-cart-button"
          onClick={(e) => {
            e.stopPropagation();
            removeFromCart();
          }}
        >
          Remove from Cart
        </Button>
      ) : (
        <Button
          type="primary"
          icon={<ShoppingCart size={16} />}
          className="add-to-cart-button"
          onClick={(e) => {
            e.stopPropagation();
            addToCart();
          }}
        >
          Add to Cart
        </Button>
      )}
    </Card>
  );
};

export default ProductCard;
