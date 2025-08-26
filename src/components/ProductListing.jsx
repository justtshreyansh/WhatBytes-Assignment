import React, { useContext } from "react";
import { Row, Col, Card, Typography } from "antd";
import { Box } from "lucide-react";
import ProductCard from "./ProductCard";
import { Context } from "../context/Context";

const { Text, Title } = Typography;

const ProductListing = () => {
  const { products, filters, searchTerm } = useContext(Context);

  const filteredProducts = products.filter((product) => {
    const categoryMatch =
      !filters.categories?.length ||
      filters.categories.includes("All") ||
      filters.categories.includes(product.category);

    const priceMatch = product.price <= (filters.maxPrice || 1000);

    const searchMatch = product.title
      ? product.title.toLowerCase().includes(searchTerm.toLowerCase())
      : false;

    return categoryMatch && priceMatch && searchMatch;
  });

  if (!filteredProducts.length) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "60vh",
        }}
      >
        <Card
          style={{
            textAlign: "center",
            padding: "40px",
            borderRadius: "12px",
            boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
          }}
        >
          <Box size={48} color="#1e40af" />
          <Title level={3} style={{ marginTop: "20px" }}>
            No Products Found
          </Title>
          <Text type="secondary">
            Sorry, there are no products matching your selected filters.
          </Text>
        </Card>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Product Listing</h2>
      <Row gutter={[16, 16]}>
        {filteredProducts.map((product) => (
          <Col key={product.id} xs={24} sm={12} lg={8}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ProductListing;
