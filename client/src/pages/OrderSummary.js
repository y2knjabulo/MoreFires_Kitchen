// client/src/pages/OrderSummary.js
// client/src/pages/OrderSummary.js
import React from 'react';
import { Container, Typography, List, ListItem, ListItemText } from '@mui/material';

const OrderSummary = () => {
  const orders = JSON.parse(localStorage.getItem('orders')) || [];
  const lastOrder = orders[orders.length - 1];

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4">Order Summary</Typography>
      {lastOrder ? (
        <>
          <Typography variant="subtitle1">Order ID: {lastOrder.id}</Typography>
          <Typography variant="subtitle2">Date: {lastOrder.date}</Typography>
          <List>
            {lastOrder.items.map((item) => (
              <ListItem key={item.id}>
                <ListItemText
                  primary={item.name}
                  secondary={`R${item.price.toFixed(2)} x ${item.quantity}`}
                />
              </ListItem>
            ))}
          </List>
          <Typography variant="h6">Total: R{lastOrder.total.toFixed(2)}</Typography>
        </>
      ) : (
        <Typography>No recent orders found.</Typography>
      )}
    </Container>
  );
};

export default OrderSummary;
