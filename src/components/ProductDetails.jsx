import React, { useContext, useState, useEffect } from "react";
import { Card, Button, Typography, Rate, InputNumber } from "antd";
import { ShoppingCart, Trash2 } from "lucide-react";
import { Context } from "../context/Context";
import { useNavigate, useParams } from "react-router-dom";
import "./ProductDetails.css";

const { Title, Text, Paragraph } = Typography;

const ProductDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // get product id from URL
  const { products, cart, setCart } = useContext(Context);

  // Find product by ID
  const product = products.find((p) => p.id.toString() === id);

  const [quantity, setQuantity] = useState(1);

  // Sync quantity if product exists in cart
  useEffect(() => {
    if (product) {
      const cartItem = cart.find((item) => item.id === product.id);
      setQuantity(cartItem?.quantity || 1);
    }
  }, [product, cart]);

  if (!product) return <div>Product not found</div>;

  const isInCart = cart.some((item) => item.id === product.id);

  const addToCart = () => {
    if (!isInCart) setCart((prev) => [...prev, { ...product, quantity }]);
  };

  const removeFromCart = () => {
    setCart((prev) => prev.filter((item) => item.id !== product.id));
  };

  const handleQuantityChange = (value) => {
    setQuantity(value);
    setCart((prev) =>
      prev.map((item) =>
        item.id === product.id ? { ...item, quantity: value } : item
      )
    );
  };

  return (
    <Card className="product-details-card">
      <div className="product-details-container">
        <div className="product-image-section">
          <Button
            className="back-button-top"
            onClick={() => navigate("/")}
            style={{
              marginBottom: "10px",
              backgroundColor: "#1e40af",
              color: "#fff",
              border: "none",
            }}
          >
            ← Continue Shopping
          </Button>
          <img
            src={product.image}
            alt={product.title}
            className="product-image"
          />
        </div>

        <div className="product-info-section">
          <Title level={3}>{product.title}</Title>
          <Paragraph>{product.description}</Paragraph>
          <Text strong style={{ fontSize: 20 }}>${product.price}</Text>
          <Rate
            disabled
            allowHalf
            defaultValue={product.rating}
            style={{ marginLeft: 10 }}
          />

          <div className="quantity-section" style={{ marginTop: "10px" }}>
            <Text strong>Quantity: </Text>
            <InputNumber min={1} value={quantity} onChange={handleQuantityChange} />
          </div>

          {isInCart ? (
            <Button
              type="default"
              danger
              icon={<Trash2 size={16} />}
              className="cart-button"
              style={{ marginTop: "10px" }}
              onClick={removeFromCart}
            >
              Remove from Cart
            </Button>
          ) : (
            <Button
              type="primary"
              icon={<ShoppingCart size={16} />}
              className="cart-button"
              style={{ marginTop: "10px" }}
              onClick={addToCart}
            >
              Add to Cart
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
};

export default ProductDetails;
