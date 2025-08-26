import React from "react";
import { Row, Col } from "antd";
import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    title: "Wireless Headphones",
    price: 99.99,
    image: "https://via.placeholder.com/300",
  },
  {
    id: 2,
    title: "Smart Watch",
    price: 149.99,
    image: "https://via.placeholder.com/300",
  },
  {
    id: 3,
    title: "Laptop Stand",
    price: 29.99,
    image: "https://via.placeholder.com/300",
  },
  {
    id: 4,
    title: "Bluetooth Speaker",
    price: 79.99,
    image: "https://via.placeholder.com/300",
  },
  {
    id: 5,
    title: "Gaming Mouse",
    price: 49.99,
    image: "https://via.placeholder.com/300",
  },
  {
    id: 6,
    title: "Keyboard",
    price: 59.99,
    image: "://via.phttpslaceholder.com/300",
  },
];

const ProductListing = () => {
  const handleCardClick = (product) => {
    alert(`Navigate to product details for: ${product.title}`);
  };

  return (
    <div style={{ padding: "20px" }}>
      <Row gutter={[16, 16]}>
        {products.map((product) => (
          <Col
            key={product.id}
            xs={24} 
            sm={12}
            lg={8} 
          >
            <ProductCard product={product} onClick={() => handleCardClick(product)} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ProductListing;
