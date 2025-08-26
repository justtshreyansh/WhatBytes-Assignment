import React, { useContext } from "react";
import { Card, Button, InputNumber, Typography } from "antd";
import { ShoppingCart, Trash2 } from "lucide-react";
import { Context } from "../context/Context";
import "./Cart.css";

const { Title, Text } = Typography;

const Cart = () => {
  const { cart, setCart } = useContext(Context);

  // Update quantity for a product
  const handleQuantityChange = (productId, value) => {
    const updatedCart = cart.map(item => {
      if (item.id === productId) return { ...item, quantity: value };
      return item;
    });
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Remove item from cart
  const handleRemove = (productId) => {
    const updatedCart = cart.filter(item => item.id !== productId);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Calculate total
  const totalPrice = cart.reduce((acc, item) => acc + item.price * (item.quantity || 1), 0);

  return (
    <div className="cart-container">
      <Title level={3}>Your Cart</Title>
      {cart.length === 0 ? (
        <Text>Your cart is empty.</Text>
      ) : (
        <div className="cart-items">
          {cart.map(item => (
            <Card key={item.id} className="cart-item-card">
              <div className="cart-item-content">
                <img src={item.image} alt={item.title} className="cart-item-image" />
                <div className="cart-item-info">
                  <Title level={5}>{item.title}</Title>
                  <Text strong>${item.price}</Text>
                  <InputNumber
                    min={1}
                    value={item.quantity || 1}
                    onChange={(value) => handleQuantityChange(item.id, value)}
                    className="cart-quantity-input"
                  />
                  <Button
                    type="primary"
                    danger
                    icon={<Trash2 size={16} />}
                    onClick={() => handleRemove(item.id)}
                    className="remove-button"
                  >
                    Remove
                  </Button>
                </div>
              </div>
            </Card>
          ))}
          <div className="cart-total">
            <Title level={4}>Total: ${totalPrice.toFixed(2)}</Title>
            <Button type="primary" size="large">
              Proceed to Checkout
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
