// client/src/pages/Cart.js
import React from 'react';
import { useCart } from '../context/CartContext';
import { Container, Typography, Button } from '@mui/material';

const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>Shopping Cart</Typography>
      {cartItems.length === 0 ? (
        <Typography>Your cart is empty.</Typography>
      ) : (
        <>
          {cartItems.map(item => (
            <div key={item.id} style={{ marginBottom: '1rem' }}>
              <Typography>{item.name} x {item.quantity}</Typography>
              <Button variant="outlined" color="error" onClick={() => removeFromCart(item.id)}>Remove</Button>
            </div>
          ))}
          <Button variant="contained" color="secondary" onClick={clearCart}>Clear Cart</Button>
        </>
      )}
    </Container>
  );
};

export default Cart;

