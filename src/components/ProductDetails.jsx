
import React from "react";
import { Card, Button, Typography, Rate } from "antd";
import { ShoppingCart } from "lucide-react";
import "./ProductCard.css";

const { Title, Text, Paragraph } = Typography;

const ProductDetails = ({ product }) => {
  return (
    <Card className="product-details-card">
      <img
        alt={product.title}
        src={product.image}
        className="product-details-image"
      />
      <div className="product-details-content">
        <Title level={3}>{product.title}</Title>
        <Paragraph>{product.description}</Paragraph>
        <Text strong style={{ fontSize: 18 }}>${product.price}</Text>
        <Rate
          disabled
          allowHalf
          defaultValue={product.rating}
          style={{ marginLeft: 10 }}
        />
        <Button
          type="primary"
          icon={<ShoppingCart size={16} />}
          className="add-to-cart-button"
        >
          Add to Cart
        </Button>
      </div>
    </Card>
  );
};

export default ProductDetails;
