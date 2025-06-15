// client/src/pages/Cart.js
// client/src/context/CartContext.js
import React, { createContext, useContext, useReducer, useEffect } from 'react';

const CartContext = createContext();

const initialState = JSON.parse(localStorage.getItem('cart')) || [];

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const existing = state.find((item) => item.id === action.payload.id);
      if (existing) {
        return state.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...state, { ...action.payload, quantity: 1 }];
    }
    case 'REMOVE_FROM_CART':
      return state.filter((item) => item.id !== action.payload);
    case 'UPDATE_QUANTITY':
      return state.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: action.payload.quantity }
          : item
      );
    case 'CLEAR_CART':
      return [];
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}

// client/src/pages/Cart.js
import React from 'react';
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  IconButton,
  TextField,
  Button,
  Paper,
  Box
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cart, dispatch } = useCart();
  const navigate = useNavigate();

  const handleRemove = (id) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: id });
  };

  const handleQtyChange = (id, quantity) => {
    const qty = Math.max(1, parseInt(quantity));
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity: qty } });
  };

  const handlePlaceOrder = () => {
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    const newOrder = {
      id: Date.now(),
      items: cart,
      total: cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
      date: new Date().toLocaleString(),
    };
    localStorage.setItem('orders', JSON.stringify([...orders, newOrder]));
    dispatch({ type: 'CLEAR_CART' });
    navigate('/order-summary');
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <Container sx={{ mt: 4, bgcolor: 'white', p: 3, borderRadius: 2, boxShadow: 2 }}>
      <Box display="flex" alignItems="center" mb={2}>
        <ShoppingCartIcon sx={{ color: 'red', mr: 1 }} />
        <Typography variant="h4" color="orange">Your Cart</Typography>
      </Box>

      {cart.length === 0 ? (
        <Typography sx={{ mt: 2 }} color="text.secondary">Your cart is empty.</Typography>
      ) : (
        <>
          <List>
            {cart.map((item) => (
              <Paper elevation={2} sx={{ mb: 2, p: 2 }} key={item.id}>
                <ListItem
                  secondaryAction={
                    <>
                      <TextField
                        type="number"
                        size="small"
                        value={item.quantity}
                        onChange={(e) => handleQtyChange(item.id, e.target.value)}
                        sx={{ width: 60, mr: 2 }}
                      />
                      <IconButton onClick={() => handleRemove(item.id)} sx={{ color: 'red' }}>
                        <DeleteIcon />
                      </IconButton>
                    </>
                  }
                >
                  <ListItemText
                    primary={<Typography fontWeight="bold" color="goldenrod">{item.name}</Typography>}
                    secondary={`R${item.price.toFixed(2)} x ${item.quantity}`}
                  />
                </ListItem>
              </Paper>
            ))}
          </List>

          <Typography variant="h6" sx={{ mt: 2 }} color="orange">Total: <b>R{total.toFixed(2)}</b></Typography>

          <Button
            variant="contained"
            sx={{ mt: 3, backgroundColor: 'red', '&:hover': { backgroundColor: 'darkred' } }}
            onClick={handlePlaceOrder}
          >
            Place Order
          </Button>
        </>
      )}
    </Container>
  );
};
