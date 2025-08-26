
import React from "react";
import { Card, Button, Typography } from "antd";
import { ShoppingCart } from "lucide-react";
import "./ProductCard.css";

const { Title, Text } = Typography;

const ProductCard = ({ product, onClick }) => {
  return (
    <Card
      hoverable
      cover={<img alt={product.title} src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXxlbnwwfHwwfHx8MA%3D%3D" />}
      className="product-card"
      onClick={onClick}
    >
      <Title level={5}>{product.title}</Title>
      <Text strong>${product.price}</Text>
      <Button
        type="primary"
        icon={<ShoppingCart size={16} />}
        className="add-to-cart-button"
      >
        Add to Cart
      </Button>
    </Card>
  );
};

export default ProductCard;
